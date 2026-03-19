import { NextResponse } from "next/server";
import fs from "node:fs/promises";
import path from "node:path";
import * as XLSX from "xlsx";

const dataDir = path.join(process.cwd(), "data");
const sourceCandidates = ["materials.xlsx", "materials.csv"];

const getCell = (row, candidates) => {
  for (const key of candidates) {
    if (row[key] !== undefined && row[key] !== null && String(row[key]).trim() !== "") {
      return String(row[key]).trim();
    }
  }

  return "";
};

const getLocalizedField = (row, baseName, locale, fallback = "") => {
  if (locale === "vi") {
    return (
      getCell(row, [`${baseName}_vi`, `${baseName}Vi`]) ||
      getCell(row, [baseName]) ||
      fallback
    );
  }

  return (
    getCell(row, [`${baseName}_en`, `${baseName}En`]) ||
    getCell(row, [baseName]) ||
    fallback
  );
};

const tagTranslationsVi = {
  Vietnamese: "Tiếng Việt",
  "Course Materials Compilation": "Tổng hợp tài liệu môn học",
  Guide: "Hướng dẫn",
  "Web Dev": "Phát triển web",
  FE: "Front-end",
  HTML: "HTML",
  CSS: "CSS",
  Handwriting: "Ghi tay",
  DSA: "DSA",
  SQL: "SQL",
  Compilation: "Tổng hợp",
  "IT Subjects": "Môn CNTT",
  "Other Subjects": "Môn khác",
  Supplementary: "Bổ trợ kiến thức",
};

const getLocalizedTags = (row, locale) => {
  const localizedRaw =
    locale === "vi"
      ? getCell(row, ["tags_vi", "tagsVi"])
      : getCell(row, ["tags_en", "tagsEn"]);

  const fallbackRaw = getCell(row, ["tags"]);
  const raw = localizedRaw || fallbackRaw;

  const parsed = String(raw)
    .split("|")
    .map((item) => item.trim())
    .filter(Boolean);

  if (locale !== "vi") {
    return parsed;
  }

  return parsed.map((tag) => tagTranslationsVi[tag] || tag);
};

const pickSourceFile = async () => {
  for (const fileName of sourceCandidates) {
    const filePath = path.join(dataDir, fileName);

    try {
      await fs.access(filePath);
      return { fileName, filePath };
    } catch {
      // Continue until we find the first available source file.
    }
  }

  return null;
};

const normalizeCourse = (row, fallbackId, locale) => {
  const id = Number(row.id) || fallbackId;
  const pages = Number(row.pages) || 0;
  const tags = getLocalizedTags(row, locale);

  return {
    id,
    code: String(row.code || id),
    title: getLocalizedField(row, "title", locale, "Untitled"),
    categoryKey: String(row.category || "Other Subjects"),
    category: getLocalizedField(row, "category", locale, "Other Subjects"),
    format: String(row.format || "PDF"),
    pages,
    tags,
    year: String(row.year || ""),
    driveId: String(row.driveId || ""),
  };
};

export async function GET(request) {
  try {
    const rawLang = request.nextUrl.searchParams.get("lang") || "en";
    const locale = rawLang.toLowerCase().startsWith("vi") ? "vi" : "en";
    const source = await pickSourceFile();

    if (!source) {
      return NextResponse.json({ courses: [] });
    }

    const workbook = source.fileName.endsWith(".csv")
      ? XLSX.read(await fs.readFile(source.filePath, "utf8"), { type: "string" })
      : XLSX.read(await fs.readFile(source.filePath), { type: "buffer" });
    const firstSheetName = workbook.SheetNames[0];

    if (!firstSheetName) {
      return NextResponse.json({ courses: [] });
    }

    const rows = XLSX.utils.sheet_to_json(workbook.Sheets[firstSheetName], {
      raw: false,
      defval: "",
    });

    const courses = rows.map((row, index) => normalizeCourse(row, index + 1, locale));

    return NextResponse.json({ courses, source: source.fileName, locale });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to load materials", details: error.message },
      { status: 500 }
    );
  }
}

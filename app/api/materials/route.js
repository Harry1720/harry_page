import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

const getCell = (doc, candidates) => {
  for (const key of candidates) {
    const value = doc[key];

    if (value !== undefined && value !== null && String(value).trim() !== "") {
      return String(value).trim();
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

const normalizeCourse = (doc, fallbackId, locale) => {
  const id = Number(doc.id) || fallbackId;
  const pages = Number(doc.pages) || 0;
  const tags = getLocalizedTags(doc, locale);

  return {
    id,
    code: String(doc.code || id),
    title: getLocalizedField(doc, "title", locale, "Untitled"),
    categoryKey: String(doc.category || "Other Subjects"),
    category: getLocalizedField(doc, "category", locale, "Other Subjects"),
    format: String(doc.format || "PDF"),
    pages,
    tags,
    year: String(doc.year || ""),
    driveId: String(doc.driveId || ""),
  };
};

export async function GET(request) {
  try {
    const rawLang = request.nextUrl.searchParams.get("lang") || "en";
    const locale = rawLang.toLowerCase().startsWith("vi") ? "vi" : "en";
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB || "harry_page");
    const docs = await db.collection("materials").find({}).sort({ id: 1, _id: 1 }).toArray();

    if (!docs.length) {
      return NextResponse.json({ courses: [] });
    }

    const courses = docs.map((doc, index) => normalizeCourse(doc, index + 1, locale));

    return NextResponse.json({ courses, source: "mongodb", locale });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to load materials", details: error.message },
      { status: 500 }
    );
  }
}

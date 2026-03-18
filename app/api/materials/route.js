import { NextResponse } from "next/server";
import fs from "node:fs/promises";
import path from "node:path";
import * as XLSX from "xlsx";

const dataDir = path.join(process.cwd(), "data");
const sourceCandidates = ["materials.xlsx", "materials.csv"];

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

const normalizeCourse = (row, fallbackId) => {
  const id = Number(row.id) || fallbackId;
  const pages = Number(row.pages) || 0;
  const tags = String(row.tags || "")
    .split("|")
    .map((item) => item.trim())
    .filter(Boolean);

  return {
    id,
    code: String(row.code || id),
    title: String(row.title || "Untitled"),
    category: String(row.category || "Other Subjects"),
    format: String(row.format || "PDF"),
    pages,
    tags,
    year: String(row.year || ""),
    driveId: String(row.driveId || ""),
  };
};

export async function GET() {
  try {
    const source = await pickSourceFile();

    if (!source) {
      return NextResponse.json({ courses: [] });
    }

    const buffer = await fs.readFile(source.filePath);
    const workbook = XLSX.read(buffer, { type: "buffer" });
    const firstSheetName = workbook.SheetNames[0];

    if (!firstSheetName) {
      return NextResponse.json({ courses: [] });
    }

    const rows = XLSX.utils.sheet_to_json(workbook.Sheets[firstSheetName], {
      raw: false,
      defval: "",
    });

    const courses = rows.map((row, index) => normalizeCourse(row, index + 1));

    return NextResponse.json({ courses, source: source.fileName });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to load materials", details: error.message },
      { status: 500 }
    );
  }
}

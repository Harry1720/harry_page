const fs = require("node:fs/promises");
const path = require("node:path");
const XLSX = require("xlsx");
const { MongoClient } = require("mongodb");
const { loadEnvConfig } = require("@next/env");

loadEnvConfig(process.cwd());

const dataDir = path.join(process.cwd(), "data");
const sourceCandidates = ["materials.xlsx", "materials.csv"];

async function pickSourceFile() {
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
}

async function run() {
  const uri = process.env.MONGODB_URI;
  const dbName = process.env.MONGODB_DB || "harry_page";

  if (!uri) {
    throw new Error("Missing MONGODB_URI. Add it to .env.local");
  }

  const source = await pickSourceFile();

  if (!source) {
    throw new Error("No materials.xlsx or materials.csv found in /data");
  }

  const workbook = source.fileName.endsWith(".csv")
    ? XLSX.read(await fs.readFile(source.filePath, "utf8"), { type: "string" })
    : XLSX.read(await fs.readFile(source.filePath), { type: "buffer" });

  const firstSheetName = workbook.SheetNames[0];

  if (!firstSheetName) {
    throw new Error("The materials file has no sheet");
  }

  const rows = XLSX.utils.sheet_to_json(workbook.Sheets[firstSheetName], {
    raw: false,
    defval: "",
  });

  const client = new MongoClient(uri);
  await client.connect();

  try {
    const db = client.db(dbName);
    const collection = db.collection("materials");

    await collection.deleteMany({});

    if (rows.length > 0) {
      await collection.insertMany(rows);
    }

    await collection.createIndex({ id: 1 });

    console.log(`Imported ${rows.length} materials from ${source.fileName} to ${dbName}.materials`);
  } finally {
    await client.close();
  }
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
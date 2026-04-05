import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error("Missing MONGODB_URI. Add it to .env.local");
}

let client;
let clientPromise;

if (process.env.NODE_ENV === "development") {
  if (!globalThis.__mongoClientPromise) {
    client = new MongoClient(uri);
    globalThis.__mongoClientPromise = client.connect();
  }

  clientPromise = globalThis.__mongoClientPromise;
} else {
  client = new MongoClient(uri);
  clientPromise = client.connect();
}

export default clientPromise;
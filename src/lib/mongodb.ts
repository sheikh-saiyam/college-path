import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI as string;

if (!uri) throw new Error("MONGODB_URI is not defined in .env");

const options = {
  tls: true,
  serverSelectionTimeoutMS: 3000,
};

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

// Use global to maintain a cache across hot reloads (dev mode)
declare global {
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

if (process.env.NODE_ENV === "development") {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise!;
} else {
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;

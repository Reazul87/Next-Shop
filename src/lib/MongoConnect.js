const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = process.env.MONGO_URI;
const DB = process.env.DB_NAME;
export const collections = {
  Items: "Items",
  Users: "Users",
};
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export const connect = (collection) => {
  return client.db(DB).collection(collection);
};

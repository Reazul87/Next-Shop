"use server";
import { ObjectId } from "mongodb";
const { collections, connect } = require("@/lib/MongoConnect");

export const getItems = async () => {
  try {
    const result = await connect(collections.Items).find().toArray();
    // return result || [];
    return result.map((item) => ({
      ...item,
      _id: item._id.toString(), // ✅ serialize ObjectId
    }));
  } catch (error) {
    // console.log(error);
  }
};

export const getSingleItem = async (id) => {
  if (!ObjectId.isValid(id)) {
    return null;
  }

  const item = await connect(collections.Items).findOne({
    _id: new ObjectId(id),
  });

  if (!item) return null;

  return {
    ...item,
    _id: item._id.toString(), // ✅ serialize ObjectId
  };
};

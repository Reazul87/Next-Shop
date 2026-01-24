import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";
import { collections, connect } from "@/lib/MongoConnect";

export async function GET(_, { params }) {
  const { id } = await params;

  if (!ObjectId.isValid(id)) {
    return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
  }

  const item = await connect(collections.Items).findOne({
    _id: new ObjectId(id),
  });

  if (!item) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  //   return NextResponse.json({
  //     ...item,
  //     _id: item._id.toString(),
  //   });
  return NextResponse.json({
    success: true,
    item,
    message: "Successfully Fetched",
  });
}

import { NextResponse } from "next/server";
import { collections, connect } from "@/lib/MongoConnect";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";

export async function GET() {
  try {
    const result = await connect(collections.Items).find().toArray();

    //     const items = result.map((item) => ({
    //       ...item,
    //       _id: item._id.toString(), // ✅ serialize ObjectId
    //     }));

    return NextResponse.json({
      success: true,
      items: result,
      message: "Successfully Fetched",
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to Fetch items" },
      { status: 500 },
    );
  }
}

export async function POST(req) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const body = await req.json();

    const newItem = {
      ...body,
      createdAt: new Date(),
    };

    await connect(collections.Items).insertOne(newItem);

    return NextResponse.json({
      success: true,
      message: "Item added successfully",
    });
  } catch (error) {
    // console.log(error);
  }
}
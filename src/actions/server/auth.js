"use server";
import { collections, connect } from "@/lib/MongoConnect";
import bcrypt from "bcryptjs";

export const postUser = async (payload) => {
  const { email, password, name } = payload;

  if (!email || !password || !name) {
    return {
      success: false,
      message: "Missing required fields",
    };
  }

  try {
    const isExist = await connect(collections.Users).findOne({ email });

    if (isExist) {
      const { _id, password: userPassword, ...safeUser } = isExist;
      return {
        success: false,
        data: safeUser,
        message: "Email is already registered",
      };
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = {
      providerId: "credentials",
      name,
      email,
      password: hashedPassword,
      role: "user",
    };

    const { acknowledged, insertedId } = await connect(
      collections.Users,
    ).insertOne(newUser);

    if (acknowledged) {
      return {
        success: true,
        data: { insertedId: insertedId.toString() },
        message: "User registered successfully",
      };
    } else {
      return {
        success: false,
        message: "Failed to insert user",
      };
    }
  } catch (err) {
    console.error("postUser error:", err);
    return {
      success: false,
      message: "Server error, please try again",
    };
  }
};

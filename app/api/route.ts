import { dbConfig } from "@/utils/dbConfig";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    await dbConfig();
    return NextResponse.json({
      message: "Welcome to JSGame API",
      status: 200,
    });
  } catch (error: any) {
    return NextResponse.json({
      message: "Error Occured",
      status: 400,
      error: error.message,
    });
  }
};

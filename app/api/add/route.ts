import { dbConfig } from "@/utils/dbConfig";
import myQModel from "@/utils/model/q&aModel";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    await dbConfig();
    const {
      instruction,
      answer,
      output,
      example,
      question,
      url,
      tag,
      usecase,
    } = await req.json();
    const getD = await myQModel.create({
      instruction,
      answer,
      output,
      example,
      question,
      url,
      tag,
      usecase,
    });
    return NextResponse.json({
      message: "Created Successfully",
      status: 200,
      data: getD,
    });
  } catch (error: any) {
    return NextResponse.json({
      message: "Error Occured",
      status: 400,
      error: error.message,
    });
  }
};

import data from "@/data/target-muscles.json";
import { NextResponse } from "next/server";

export async function GET(req: Request, res: Response) {
  try {
    const response = {
      numberOfTargetMuscles: data.length,
      data,
    };
    return NextResponse.json(response);
  } catch (error) {
    console.log("[TARGETMUSCLES_GET]", error);
    return new NextResponse("Something went wrong", { status: 500 });
  }
}

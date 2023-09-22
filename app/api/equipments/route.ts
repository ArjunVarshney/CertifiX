import data from "@/data/equipments.json";
import { NextResponse } from "next/server";

export async function GET(req: Request, res: Response) {
  try {
    const response = {
      numberOfEquipments: data.length,
      data,
    };
    return NextResponse.json(response);
  } catch (error) {
    console.log("[EQUIPMENTS_GET]", error);
    return new NextResponse("Something went wrong", { status: 500 });
  }
}

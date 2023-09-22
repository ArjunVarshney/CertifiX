import data from "@/data/ex-data.json";
import { ExType } from "@/types";
import { NextResponse } from "next/server";

// @ts-ignore
const exData: ExType[] = data;

export async function GET(
  req: Request,
  { params }: { params: { exerciseId: string } }
) {
  try {
    const { origin } = new URL(req.url);
    if (!params.exerciseId) {
      return new NextResponse("ExerciseId is required", { status: 400 });
    }

    const ex: ExType = exData.filter(
      (e) => parseInt(e.id) === parseInt(params.exerciseId)
    )[0];

    if (!ex) {
      return new NextResponse("Exercise not found", { status: 400 });
    }

    return NextResponse.json({
      ...ex,
      images: [...ex.images.map((image) => origin + image)],
      gifUrl: origin + ex.gifUrl,
    });
  } catch (error) {
    console.log("[EXERCISEID_GET]", error);
    return new NextResponse("Something went wrong", { status: 500 });
  }
}

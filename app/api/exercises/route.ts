import data from "@/data/ex-data.json";
import { ExType } from "@/types";
import { NextResponse } from "next/server";

// @ts-ignore
const exData: ExType[] = data;

export async function GET(req: Request, res: Response) {
  try {
    let searchedData: ExType[] = [...exData];

    const { searchParams, origin } = new URL(req.url);
    const page = parseInt(searchParams.get("page") || "0");
    const limit = parseInt(searchParams.get("limit") || "10");
    const search = searchParams.get("search");
    const equipment = searchParams.get("equipment");
    const bodypart = searchParams.get("bodypart");
    const targetMuscle = searchParams.get("targetmuscle");

    const start = page * limit;
    const end = start + limit;

    if (equipment) {
      const regex = new RegExp(equipment, "i");

      searchedData = searchedData.filter((exercise) =>
        regex.test(exercise.equipment)
      );
    }

    if (bodypart) {
      const regex = new RegExp(bodypart, "i");

      searchedData = searchedData.filter((exercise) =>
        regex.test(exercise.bodyPart)
      );
    }

    if (targetMuscle) {
      const regex = new RegExp(targetMuscle, "i");

      const data1 = searchedData.filter((exercise) =>
        regex.test(exercise.target)
      );

      const data2 = searchedData.filter(
        (exercise) =>
          regex.test(exercise["muscles worked"]) && !regex.test(exercise.target)
      );

      searchedData = [...data1, ...data2];
    }

    if (search) {
      const regex = new RegExp(search.trim(), "i");
      searchedData = searchedData.filter(
        (exercise) =>
          regex.test(exercise.bodyPart) ||
          regex.test(exercise.equipment) ||
          regex.test(exercise.title) ||
          regex.test(exercise.name) ||
          regex.test(exercise.target) ||
          regex.test(exercise.blog) ||
          regex.test(JSON.stringify(exercise.keywords))
      );
    }

    const outputArray: ExType[] = [
      ...searchedData.slice(start, end).map((ex: ExType) => {
        return {
          ...ex,
          images: [...ex.images.map((image) => origin + image)],
          gifUrl: origin + ex.gifUrl,
        };
      }),
    ];

    const response = {
      totalExercises: searchedData.length,
      numberOfPages: Math.ceil(searchedData.length / limit),
      data: outputArray,
    };

    return NextResponse.json(response);
  } catch (error) {
    console.log("[EXERCISES_GET]", error);
    return new NextResponse("Something went wrong", { status: 500 });
  }
}

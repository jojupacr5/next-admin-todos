import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import * as yup from "yup";

// export async function GET(request: Request) {
//   const todos = await prisma.todo.findMany();

//   return NextResponse.json(todos);
// }

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const take = Number(searchParams.get("take") ?? "10");
  const skip = Number(searchParams.get("skip") ?? "0");

  if (isNaN(take)) {
    return NextResponse.json(
      { message: "Take tiene que ser un número" },
      { status: 400 }
    );
  }

  if (isNaN(skip)) {
    return NextResponse.json(
      { message: "Skip tiene que ser un número" },
      { status: 400 }
    );
  }

  const todos = await prisma.todo.findMany({ take, skip });

  return NextResponse.json(todos);
}

const postSchema = yup.object({
  description: yup.string().required(),
  complete: yup.boolean().optional().default(false), //! Todo mostrar algo interesante
});

export async function POST(req: Request) {
  try {
    const { complete, description } = await postSchema.validate(
      await req.json()
    );
    const todo = await prisma.todo.create({ data: { complete, description } });

    return NextResponse.json(todo);
  } catch (error) {
    return NextResponse.json(error, { status: 400 });
  }
}

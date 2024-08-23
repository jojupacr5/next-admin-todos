import { NextResponse } from "next/server";

import prisma from "@/lib/prisma.ts";

export async function GET(request: Request) {
  await prisma.todo.deleteMany();

  await prisma.todo.createMany({
    data: [
      { description: "Piedra del alma", complete: true },
      { description: "Piedra del poder" },
      { description: "Piedra del tiempo" },
      { description: "Piedra del espacio" },
      { description: "Piedra del realidad" },
    ],
  });

  // const todo = await prisma.todo.create({
  //   data: { description: "Piedra del alma", complete: true },
  // });
  // console.log("🚀 ~ GET ~ todo:", todo);

  return NextResponse.json({ message: "Seed Executed" });
}

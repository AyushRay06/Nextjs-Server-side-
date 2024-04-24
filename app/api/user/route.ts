import { NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

export async function GET(req: NextResponse) {
  return NextResponse.json({ name: "Ayush", email: "rayayush@gmail.com" })
}

export async function POST(req: NextResponse, res: NextResponse) {
  const body = await req.json()

  const user = await client.user.create({
    data: {
      username: body.username,
      password: body.password,
    },
  })

  console.log(user.id)

  return NextResponse.json({ msg: "User Created" })
}

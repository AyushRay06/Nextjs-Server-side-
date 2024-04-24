import { NextResponse } from "next/server"

export async function GET(req: NextResponse) {
  return NextResponse.json({ name: "Ayush", email: "rayayush@gmail.com" })
}

export async function POST(req: NextResponse, res: NextResponse) {
  const body = await req.json()
  return NextResponse.json({ username: "username", password: "password" })
}

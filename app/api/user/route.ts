import { NextResponse } from "next/server"

export async function GET(req: NextResponse) {
  return NextResponse.json({ name: "Ayush", email: "rayayush@gmail.com" })
}

export async function POST(rer: NextResponse, res: NextResponse) {
  return NextResponse.json({ msg: "Done" })
}

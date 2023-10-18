import { NextResponse } from "next/server";

// import JSONData from "./heroes.json";

export async function GET() {
  let res = await fetch(`${process.env.API_URL}/api/tripulation`);
  let data = await res.json();

  // if (!data) {
  //   data = JSONData;
  // }

  return NextResponse.json({ data });
}
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.includes("/back")) {
    console.log("this is happe3neing");
    return NextResponse.rewrite(new URL("/", request.url));

  }

}

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { isRouteDisabled } from "@/lib/disabled-routes";

export function middleware(request: NextRequest) {
  if (isRouteDisabled(request.nextUrl.pathname)) {
    return new NextResponse(null, {
      status: 404,
      headers: {
        "X-Robots-Tag": "noindex, nofollow",
      },
    });
  }
}

export const config = {
  matcher: [
    "/buy",
    "/athletes/:path*",
    "/executives/:path*",
    "/case-studies/:path*",
    "/research/:path*",
    "/team/:path*",
    "/careers/:path*",
  ],
};

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { isRouteDisabled } from "@/lib/disabled-routes";

export function middleware(request: NextRequest) {
  if (isRouteDisabled(request.nextUrl.pathname)) {
    const response = NextResponse.rewrite(
      new URL("/_not-found", request.url),
      { status: 404 },
    );
    response.headers.set("X-Robots-Tag", "noindex, nofollow");
    return response;
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
  ],
};

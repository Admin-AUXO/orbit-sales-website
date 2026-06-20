import { notFound } from "next/navigation";
import { isRouteDisabled } from "@/lib/disabled-routes";

// Static-export replacement for middleware.ts: disabled routes are kept out of
// the export by 404-ing at build time. Call at the top of a disabled page.
export function guardDisabledRoute(pathname: string): void {
  if (isRouteDisabled(pathname)) {
    notFound();
  }
}

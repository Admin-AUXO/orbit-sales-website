/**
 * Routes temporarily disabled from publishing. Page source remains in app/ for
 * continued development — flip ENABLED back to true (or clear the list) to
 * restore nav links and route access.
 */
export const DISABLED_ROUTES_ENABLED = true;

export const DISABLED_ROUTE_PREFIXES = [
  "/buy",
  "/athletes",
  "/executives",
  "/case-studies",
  "/research",
  "/team",
  "/careers",
] as const;

export function isRouteDisabled(pathname: string): boolean {
  if (!DISABLED_ROUTES_ENABLED) return false;

  return DISABLED_ROUTE_PREFIXES.some(
    (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`),
  );
}

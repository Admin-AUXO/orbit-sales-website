export const DISABLED_ROUTES_ENABLED = true;

export const DISABLED_ROUTE_PREFIXES = [
  "/buy",
  "/athletes",
  "/executives",
  "/case-studies",
  "/research",
  "/team",
] as const;

export function isRouteDisabled(pathname: string): boolean {
  if (!DISABLED_ROUTES_ENABLED) return false;

  return DISABLED_ROUTE_PREFIXES.some(
    (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`),
  );
}

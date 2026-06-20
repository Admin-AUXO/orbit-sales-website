const DEFAULT_CALENDLY_URL = "https://calendly.com/admin-auxodata/30min";

export const CALENDLY_URL =
  process.env.NEXT_PUBLIC_CALENDLY_URL ?? DEFAULT_CALENDLY_URL;

/** Brand-themed Calendly URL — dark surface, white text, teal accent. */
export function brandedCalendlyUrl(): string {
  const url = new URL(CALENDLY_URL);
  url.searchParams.set("hide_gdpr_banner", "1");
  url.searchParams.set("hide_event_type_details", "1");
  url.searchParams.set("background_color", "0f0f14");
  url.searchParams.set("text_color", "ffffff");
  url.searchParams.set("primary_color", "05c796");
  return url.toString();
}

export const OPEN_CALENDLY_EVENT = "ns:open-calendly";

export function openBookDemo() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event(OPEN_CALENDLY_EVENT));
  }
}

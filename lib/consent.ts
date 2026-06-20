export const CONSENT_STORAGE_KEY = "ns-consent";
export const OPEN_CONSENT_EVENT = "ns:open-cookie-consent";
export const CONSENT_CHANGED_EVENT = "ns:consent-changed";

export type ConsentChoice = "granted" | "denied";

type ConsentSignal =
  | "analytics_storage"
  | "ad_storage"
  | "ad_user_data"
  | "ad_personalization";

type GtagFn = (
  command: "consent",
  action: "default" | "update",
  params: Partial<Record<ConsentSignal | "wait_for_update", unknown>>,
) => void;

function gtag(): GtagFn | null {
  if (typeof window === "undefined") return null;
  return (window as unknown as { gtag?: GtagFn }).gtag ?? null;
}

export const defaultConsentState: Record<ConsentSignal, ConsentChoice> = {
  analytics_storage: "denied",
  ad_storage: "denied",
  ad_user_data: "denied",
  ad_personalization: "denied",
};

export function readStoredConsent(): ConsentChoice | null {
  if (typeof window === "undefined") return null;
  try {
    const value = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    return value === "granted" || value === "denied" ? value : null;
  } catch {
    return null;
  }
}

export function updateConsent(choice: ConsentChoice) {
  if (typeof window !== "undefined") {
    try {
      window.localStorage.setItem(CONSENT_STORAGE_KEY, choice);
    } catch {}
  }

  gtag()?.("consent", "update", {
    analytics_storage: choice,
    ad_storage: choice,
    ad_user_data: choice,
    ad_personalization: choice,
  });

  if (typeof window !== "undefined") {
    window.dispatchEvent(
      new CustomEvent(CONSENT_CHANGED_EVENT, { detail: choice }),
    );
  }
}

import { track } from "@vercel/analytics";

type GtagFn = (
  command: "event",
  name: string,
  params?: Record<string, unknown>,
) => void;

function gtag(): GtagFn | null {
  if (typeof window === "undefined") return null;
  return (window as unknown as { gtag?: GtagFn }).gtag ?? null;
}

export function trackEvent(name: string, params: Record<string, unknown> = {}) {
  gtag()?.("event", name, params);
  track(name, params as Record<string, string | number | boolean>);
}

export function trackCTA(action: "buy" | "demo" | "report", location: string) {
  trackEvent("cta_click", { cta_action: action, cta_location: location });
}

export function trackScheduleDemo() {
  trackEvent("schedule_demo", { method: "calendly" });
}

export function trackCareersApply(jobId: string, jobTitle: string) {
  trackEvent("careers_apply", { job_id: jobId, job_title: jobTitle });
}

export function trackFormError(formId: string, message: string) {
  trackEvent("form_error", { form_id: formId, message });
}

export function trackContactClick(method: "email" | "phone", location: string) {
  trackEvent("contact_click", { method, contact_location: location });
}

export function trackFaqOpen(question: string) {
  trackEvent("faq_open", { question });
}

export function trackReportTourChapter(chapter: string, index: number) {
  trackEvent("report_tour_chapter", { chapter, chapter_index: index });
}

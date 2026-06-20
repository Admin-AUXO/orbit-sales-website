import { type ReactNode } from "react";
import { ContactLinkTracker } from "@/components/analytics/ContactLinkTracker";
import { CalendlyModalLoader } from "@/components/forms/CalendlyModalLoader";
import { Footer } from "./Footer";
import { Header } from "./Header";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main className="flex-1 pt-16 lg:pt-20">{children}</main>
      <Footer />
      <CalendlyModalLoader />
      <ContactLinkTracker />
    </>
  );
}

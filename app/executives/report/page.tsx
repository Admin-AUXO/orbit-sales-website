import { guardDisabledRoute } from "@/lib/route-guard";

export default function LegacyExecutiveReportPage() {
  // /executives/* is a disabled route in the static export.
  guardDisabledRoute("/executives/report");
  return null;
}

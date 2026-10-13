import { SITE } from "@/lib/site";

/**
 * One front door. The single Trust Driven Care form routes every inquiry to the
 * Welcome Team; internal routing (Mental Health, Mind-Body Support, Wellness)
 * happens behind the scenes. The form's own service dropdown is configured in
 * Trust Driven Care, not here.
 */
export default function ContactForms() {
  return (
    <div className="overflow-hidden rounded-[var(--r-md)] bg-white">
      <iframe src={SITE.contactForm} title="Contact the Welcome Team" style={{ width: "100%", height: 1500, border: 0 }} />
    </div>
  );
}

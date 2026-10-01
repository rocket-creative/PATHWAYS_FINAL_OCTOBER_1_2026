"use client";

import { useState } from "react";
import { SITE } from "@/lib/site";

/**
 * The two live Trust Driven Care forms. They keep their dropdowns so inquiries
 * keep routing to the Welcome Team exactly as they do today.
 */
export default function ContactForms() {
  const [tab, setTab] = useState<"therapy" | "wellness">("therapy");
  const src = tab === "therapy" ? SITE.therapyForm : SITE.wellnessForm;
  return (
    <div className="grid gap-4">
      <div role="tablist" aria-label="Choose a form" className="flex flex-wrap gap-2">
        {(
          [
            ["therapy", "Therapy, Medication & Coaching"],
            ["wellness", "Massage, Acupuncture & Wellness"],
          ] as const
        ).map(([key, label]) => (
          <button
            key={key}
            role="tab"
            aria-selected={tab === key}
            type="button"
            onClick={() => setTab(key)}
            className={`rounded-full border px-5 py-2.5 font-bold transition ${tab === key ? "border-brand-deep bg-brand-deep text-white" : "border-[rgb(0_126_252_/_0.3)] bg-white text-brand-ink hover:border-brand"}`}
            style={{ fontFamily: "var(--font-display)" }}
          >
            {label}
          </button>
        ))}
      </div>
      <div className="overflow-hidden rounded-[var(--r-md)] bg-white" role="tabpanel">
        <iframe key={src} src={src} title={tab === "therapy" ? "Wisdom Site Contact Form" : "Wellness Site Contact Form"} style={{ width: "100%", height: tab === "therapy" ? 1500 : 1150, border: 0 }} />
      </div>
    </div>
  );
}

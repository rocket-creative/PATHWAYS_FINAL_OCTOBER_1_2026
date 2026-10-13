import type { PageContent } from "../types";
import { BUCKETS } from "@/lib/site";

const tile = (l: { label: string; href: string }, asset?: string) => ({ title: l.label, href: l.href, asset });

/** Services hub. Copy: client revision deck, Page 4. Three buckets: Mental Health, Mind-Body Support, Wellness. */
const services: PageContent = {
  url: "/services",
  title: "Services — Pathways Within",
  meta: "Pathways Within brings therapy, medication management, coaching, and whole-body wellness into one connected organization. Mental Health, Mind-Body Support, and Wellness on Long Island.",
  source: "client revision deck, Page 4",
  eyebrow: "Services",
  h1: "Choose Your Personalized Path",
  intro: [
    "Pathways Within brings therapy, medication management, coaching, and whole-body wellness into one connected organization.",
    "Choose the service you know you want—or let our Welcome Team help you narrow it down.",
  ],
  heroPhoto: { asset: "th-ap26-across", alt: "A therapy session at Pathways Within" },
  sections: [
    {
      id: "mental-health",
      stop: "seated",
      layout: "wide",
      eyebrow: "Mental Health",
      heading: "Counseling Services",
      blocks: [
        { kind: "p", text: "Our licensed clinicians work with children, teens, adults, couples, and families across a wide range of mental health needs, life experiences, relationships, and transitions. Medication Management is also part of this mental-health pathway for patients who may benefit from psychiatric evaluation or medication support. Explore the options—or let our Welcome Team help you narrow them down.", lead: true },
        { kind: "tiles", items: BUCKETS.mentalHealth.therapy.map((l) => tile(l)).concat(BUCKETS.mentalHealth.medication.map((l) => tile(l, "cw-ap26-med-np"))) },
      ],
    },
    {
      id: "types-of-therapy",
      stop: "labyrinth",
      layout: "wide",
      eyebrow: "Mental Health",
      heading: "Types of Therapy",
      blocks: [
        { kind: "p", text: "Licensed clinical therapy approaches and modalities." },
        { kind: "tiles", items: BUCKETS.mentalHealth.types.map((l) => tile(l)) },
      ],
    },
    {
      id: "mind-body-support",
      stop: "standing",
      layout: "wide",
      eyebrow: "Mind-Body Support",
      heading: "Coaching & Energy Work",
      blocks: [
        { kind: "p", text: "Performance & Wellness Coaching and Energy Work are separate from licensed mental health treatment. They may be used on their own or alongside therapy, medication management, and wellness services." },
        { kind: "tiles", items: BUCKETS.mindBody.links.map((l) => tile(l, l.href.includes("coaching") ? "ha-tia-baumohl" : "cw-ap26-hands")) },
      ],
    },
    {
      id: "wellness",
      stop: "pool",
      layout: "wide",
      eyebrow: "Wellness",
      heading: "Your Wellness",
      blocks: [
        { kind: "p", text: "Physical well-being is part of the bigger picture. Massage, acupuncture, cupping, and energy work can support physical comfort, stress relief, movement, recovery, and overall well-being.", lead: true },
        { kind: "p", text: "You do not need to be a therapy patient to use wellness services. Start with the service you know you want—or ask the Welcome Team for help choosing." },
        { kind: "tiles", items: BUCKETS.wellness.links.map((l) => tile(l, l.href.includes("massage") ? "cw-ap-massage-session" : l.href.includes("acupuncture") ? "cw-ap26-acu-needles" : "cw-ap26-acu-shoulder")) },
      ],
    },
    {
      id: "about-our-team",
      stop: "seated",
      heading: "About Our Team",
      photo: { asset: "ha-ap26-camp-five", alt: "The Pathways Within team together outdoors" },
      blocks: [
        { kind: "p", text: "Pathways Within is a collaborative mental health and wellness organization serving Nassau and Suffolk Counties. Our team includes clinicians, medical providers, coaches, wellness practitioners, and support professionals who work together to help patients find care that feels connected, personal, and useful." },
        { kind: "cta", label: "Meet Our Team", href: "/team" },
      ],
    },
    {
      id: "why",
      stop: "cairn",
      heading: "Why Pathways Within?",
      photo: { asset: "cw-coastal-stone-circles", alt: "Stone circles on the coast", shape: "blob" },
      blocks: [
        {
          kind: "list",
          style: "check",
          items: [
            "**Whole-Person Perspective** — We look beyond the single concern that brought you through the door.",
            "**Multiple Ways to Begin** — Therapy, medication management, coaching, massage, acupuncture, and wellness services all offer different entry points.",
            "**Individualized Support** — Your goals, preferences, comfort level, and needs guide the experience.",
            "**Connected When It Helps** — When appropriate and with your permission, providers may collaborate so care feels more coordinated.",
          ],
        },
        { kind: "p", text: "One organization. More than one pathway forward.", lead: true },
      ],
    },
  ],
  closing: { heading: "Choose the service you know you want—or let our Welcome Team help you narrow it down.", cta: { label: "Contact Us", href: "/contact" } },
};

/** Team directory. Copy: client revision deck, Page 11. All-inclusive, filterable by specialty, location, and provider type. */
const team: PageContent = {
  url: "/team",
  title: "Our Team — Pathways Within",
  meta: "Pathways Within brings together clinicians, medical providers, coaches, wellness practitioners, and support professionals across Nassau and Suffolk Counties.",
  source: "client revision deck, Page 11",
  eyebrow: "Our Team",
  h1: "Meet Our Team",
  intro: [
    "Pathways Within brings together clinicians, medical providers, coaches, wellness practitioners, and support professionals across Nassau and Suffolk Counties.",
    "Different specialties. Different perspectives. One shared goal: helping patients find the support that works best for them.",
    "Use the search below to explore providers—or contact our Welcome Team if you would rather have help finding the right fit.",
  ],
  heroPhoto: { asset: "ha-ap26-camp-pair", alt: "Two members of the Pathways Within team" },
  heroCtas: [
    { label: "Find Your Provider", href: "#find-your-provider" },
    { label: "Contact the Welcome Team", href: "/contact", secondary: true },
  ],
  sections: [
    {
      id: "find-your-provider",
      stop: "labyrinth",
      layout: "wide",
      heading: "Find Your Provider",
      glass: false,
      blocks: [{ kind: "people", group: "search" }],
    },
    {
      id: "therapists",
      stop: "cairn",
      layout: "wide",
      heading: "Therapists",
      blocks: [{ kind: "people", group: "therapists" }],
    },
    {
      id: "medication-specialized-care",
      stop: "pool",
      layout: "wide",
      heading: "Medication & Specialized Care",
      blocks: [
        { kind: "people", group: "medication" },
        { kind: "cta", label: "Learn About Medication Management", href: "/services/medication-management", secondary: true },
      ],
    },
    {
      id: "mind-body-support",
      stop: "standing",
      layout: "wide",
      heading: "Mind-Body Support",
      blocks: [
        { kind: "people", group: "mind-body" },
        { kind: "cta", label: "Performance & Wellness Coaching", href: "/services/performance-wellness-coaching", secondary: true },
      ],
    },
    {
      id: "wellness-providers",
      stop: "seated",
      layout: "wide",
      heading: "Wellness Providers",
      blocks: [{ kind: "people", group: "wellness" }],
    },
    {
      id: "welcome-team",
      stop: "ivy",
      layout: "wide",
      heading: "Welcome Team & Administration",
      blocks: [{ kind: "people", group: "admin" }],
    },
    {
      id: "therapy-dogs",
      stop: "ground",
      layout: "wide",
      heading: "Therapy Dogs",
      blocks: [{ kind: "people", group: "dogs" }],
    },
  ],
  closing: { heading: "Would rather have help finding the right fit?", text: ["Contact our Welcome Team and we will help from there."], cta: { label: "Contact Us", href: "/contact" } },
};

/** Locations. Copy: client revision deck, Page 12. Five cards, each shown once; address and accessibility only. */
const locations: PageContent = {
  url: "/locations",
  title: "Locations — Pathways Within",
  meta: "Pathways Within serves Nassau and Suffolk Counties from five Long Island locations, with virtual appointments available for eligible services.",
  source: "client revision deck, Page 12",
  eyebrow: "Locations",
  h1: "Our Long Island Locations",
  intro: [
    "Pathways Within serves Nassau and Suffolk Counties from five Long Island locations, with virtual appointments available for eligible services. Our Welcome Team can help you find the provider, service, and location that best fit your needs.",
    "Accessibility details are included below so you know what to expect before you arrive.",
  ],
  heroPhoto: { asset: "pr-rvc-lounge", alt: "The lounge at the Rockville Centre office" },
  sections: [
    {
      id: "offices",
      stop: "ground",
      layout: "wide",
      glass: false,
      blocks: [{ kind: "locations" }],
    },
  ],
  closing: { heading: "Accessibility Support", text: ["If stairs are a barrier, contact our Welcome Team. We can help you explore appointments at an accessible location or virtual care when available."], cta: { label: "Contact Us", href: "/contact" } },
};

/** Contact. Copy: client revision deck, Page 14. One front door, one Welcome Team. */
const contact: PageContent = {
  url: "/contact",
  title: "Contact Us — Pathways Within",
  meta: "Not sure where to start? That is okay. Tell us a little about what is going on and our Welcome Team will help you explore the options. Call or text 631-371-3825.",
  source: "client revision deck, Page 14",
  eyebrow: "Contact Us",
  h1: "Let’s Talk",
  subtitle: "Not sure where to start? That is okay.",
  intro: [
    "Tell us a little about what is going on and our Welcome Team will help you explore the options. You do not need to know which service, provider, or location you need before reaching out.",
    "Call or text: 631-371-3825 · Email: Welcome@pathwayswithin.com",
  ],
  heroCtas: [
    { label: "Call or Text", href: "tel:+16313713825" },
    { label: "Email Us", href: "mailto:Welcome@pathwayswithin.com", secondary: true },
  ],
  sections: [
    {
      id: "form",
      stop: "seated",
      layout: "wide",
      heading: "Contact Form",
      blocks: [
        { kind: "p", text: "Mental Health, Mind-Body Support, Wellness, or Not Sure / Help Me Decide—one form reaches the whole team." },
        { kind: "contactForms" },
      ],
    },
    {
      id: "privacy",
      stop: "cairn",
      heading: "Your Privacy Matters From the First Hello.",
      photo: { asset: "ha-welcome-desk", alt: "The welcome desk at Pathways Within", shape: "blob" },
      blocks: [
        { kind: "p", text: "Reaching out to Pathways Within may be your first step toward care, so we want that interaction to feel protected from the start.", lead: true },
        { kind: "p", text: "Our website chat bubble is powered by Trust Driven Care, the patient communication platform our team uses to help manage patient conversations. Our electronic health records are managed through Jane, a HIPAA-compliant healthcare platform." },
        { kind: "p", text: "Whether you contact us through the form, chat, phone, or text, our goal is simple: make it easy to reach us while treating your information with the care and confidentiality it deserves." },
      ],
    },
    {
      id: "our-locations",
      stop: "ground",
      layout: "wide",
      heading: "Our Locations",
      blocks: [{ kind: "locations" }],
    },
  ],
  closing: {
    heading: "Take the Next Step.",
    cta: { label: "Contact Us", href: "#form" },
  },
};

/** How It Works. Copy: client revision deck, Page 5. The one primary home for the full patient journey. */
const howItWorks: PageContent = {
  url: "/how-it-works",
  title: "How It Works — Pathways Within",
  meta: "The Pathways Within Collaborative Approach. You may know exactly what kind of support you want—or simply know that something needs to change. Our role is to help you make sense of the options.",
  source: "client revision deck, Page 5",
  eyebrow: "How It Works",
  h1: "The Pathways Within Collaborative Approach",
  intro: [
    "You may know exactly what kind of support you want—or simply know that something needs to change.",
    "Our role is to help you make sense of the options and connect you with an appropriate starting point.",
  ],
  heroPhoto: { asset: "ha-ap26-desk-talk", alt: "A conversation at the welcome desk" },
  sections: [
    {
      id: "the-360-intake",
      stop: "labyrinth",
      heading: "The 360 Intake",
      photos: [
        { asset: "ha-ap26-desk-smile", alt: "A smile at the front desk" },
        { asset: "pr-intake-clipboard", alt: "Intake clipboard" },
        { asset: "th-ap26-hands", alt: "Hands in conversation" },
      ],
      blocks: [
        { kind: "p", text: "The 360 Intake gives us a fuller picture so we can help identify the right starting point.", lead: true },
        {
          kind: "steps",
          items: [
            { title: "You Contact the Welcome Team", text: "Form, call, or text. You do not need to know which provider or service you need." },
            { title: "A 360 Intake Conversation", text: "We learn more about what is bringing you in, what you want to change, and what kind of support may feel useful." },
            { title: "One Plan, Built Around You", text: "Together, we identify an appropriate starting point across therapy, medication management, coaching, and wellness." },
            { title: "Your First Appointment", text: "We help connect you with an appropriate available provider and schedule your first appointment. The Welcome Team remains a resource if your needs change." },
          ],
        },
        { kind: "cta", label: "Contact Us", href: "/contact" },
      ],
    },
    {
      id: "quiz",
      stop: "seated",
      layout: "wide",
      heading: "Not Sure Where to Begin? Answer Five Questions.",
      glass: false,
      blocks: [{ kind: "quiz" }],
    },
    {
      id: "your-path",
      stop: "standing",
      heading: "Your Path Should Feel Like Yours.",
      photo: { asset: "th-ap26-conversation", alt: "A therapy conversation" },
      blocks: [
        { kind: "p", text: "Start with what feels most relevant now. If your needs change, your care can change with them.", lead: true },
        { kind: "p", text: "Take what you need. Leave what you do not." },
      ],
    },
  ],
  closing: { heading: "Ready to Find a Place to Begin?", text: ["Call or text 631-371-3825."], cta: { label: "Contact Us", href: "/contact" } },
};

export const orgPages: PageContent[] = [services, team, locations, contact, howItWorks];

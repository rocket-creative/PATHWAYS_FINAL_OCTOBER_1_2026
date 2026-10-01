import type { PageContent } from "../types";
import { NAV } from "@/lib/site";

const col = (i: number) => NAV[0].columns![i].links;

/** Services hub. Source: 01 (landing lists), 30 (wellness home), 02. */
const services: PageContent = {
  url: "/services",
  title: "Services — Pathways Within | Wisdom & Wellness Services",
  meta: "Mental Health & Therapy and Holistic, Whole Body Care at Pathways Within on Long Island. Therapy, medication management, coaching, massage, acupuncture, cupping, and energy work.",
  source: "01-www-pathwayswithin-me.txt, 30-pathwayswithinwellness-com-home.txt",
  eyebrow: "Services",
  h1: "Choose Your Personalized Path",
  intro: [
    "At Pathways Within Wellness, we provide personalized care to tend to your mind, body and spirit so that you can be your best self, inside and out.",
    "Our Welcome Team will help determine the best combination of services that supports your goals.",
  ],
  heroPhoto: { asset: "th-ap26-across", alt: "A therapy session at Pathways Within" },
  sections: [
    {
      id: "therapy",
      stop: "seated",
      layout: "wide",
      eyebrow: "Mental Health & Therapy",
      heading: "Wisdom: Counseling Services",
      blocks: [
        { kind: "p", text: "Begin your journey to wellness, where our expert team of therapist’s wisdom guides the way", lead: true },
        { kind: "tiles", items: col(0).map((l) => ({ title: l.label, href: l.href })) },
      ],
    },
    {
      id: "types",
      stop: "labyrinth",
      layout: "wide",
      heading: "Types of Therapy",
      blocks: [{ kind: "tiles", items: col(1).map((l) => ({ title: l.label, href: l.href })) }],
    },
    {
      id: "medication-coaching",
      stop: "standing",
      layout: "wide",
      heading: "Medication Management & Coaching",
      blocks: [
        { kind: "p", text: "Performance & Wellness Coaching is one part of our integrated model of care and may be used on its own or alongside therapy, medication management, acupuncture, and other wellness services." },
        { kind: "tiles", items: col(2).map((l) => ({ title: l.label, href: l.href, asset: l.href.includes("medication") ? "cw-ap26-med-np" : "ha-tia-baumohl" })) },
      ],
    },
    {
      id: "wellness",
      stop: "pool",
      layout: "wide",
      eyebrow: "Holistic, Whole Body Care",
      heading: "Your Wellness",
      blocks: [
        { kind: "p", text: "Let us help you build a beautiful outside that matches your inside.", lead: true },
        { kind: "tiles", items: col(3).map((l) => ({ title: l.label, text: l.note, href: l.href, asset: l.href.includes("massage") ? "cw-ap-massage-session" : l.href.includes("acupuncture") ? "cw-ap26-acu-needles" : l.href.includes("cupping") ? "cw-ap26-acu-shoulder" : l.href.includes("energy") ? "ha-hand-on-water" : undefined })) },
        { kind: "p", text: "Massage: Relaxation Massage, Sports Massage, Pregnancy Massage, Swedish Massage, Hot Stone Massage." },
      ],
    },
    {
      id: "your-wellness",
      stop: "ivy",
      heading: "You deserve to love what you see when you look in the mirror.",
      photo: { asset: "cw-face-to-sun", alt: "A face turned to the sun", shape: "blob" },
      blocks: [
        { kind: "p", text: "Loving yourself is not about the way you look, but it can make a difference to feel like what you see on the outside matches the aspirations you’re reaching for from within. Loving yourself matters above all else- above what you’re told you should be or want or need." },
        { kind: "p", text: "But it doesn’t matter what we think. It’s what you think that matters." },
        { kind: "p", text: "Your body, your confidence, and your image are yours to own. They’re yours to dictate." },
        { kind: "p", text: "If you’re ready to change the skin that you’re in so you can feel your confidence from the top of your head to the depths of your soul, we want to invite you to follow that pathway to wellness within." },
        { kind: "p", text: "At Pathways Within, we embrace the truth that taking care of yourself physically has major impacts on your mental and emotional health." },
        { kind: "p", text: "Being well is an inside job, but often the way we feel about ourselves moves in reverse. From the outside in, we build ideas about who we are and what we should be." },
      ],
    },
    {
      id: "about-our-team",
      stop: "seated",
      heading: "About Our Team",
      photo: { asset: "ha-ap-wellness-lobby", alt: "The wellness lobby" },
      blocks: [
        { kind: "p", text: "Our Mission at Pathways Within is to provide personalized care to tend to your mind, body and spirit so that you can be your best self, inside and out. We create a tranquil and serene atmosphere by combining beauty and wellness through the use of environmentally friendly and organic products and holistic services." },
        { kind: "p", text: "We believe in the interconnectedness of body, spirit, mind, and earth. Pathways Within is for those of us who wish for peace, balance, and clarity, and opt to start within." },
        { kind: "p", text: "The journey begins here!", lead: true },
        { kind: "cta", label: "Meet Our Team", href: "/team", secondary: true },
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
          items: [
            "**Complete 360º Well-Being:** Inner healing + outer rejuvenation in one place",
            "**Expert Practitioners:** Licensed therapists, aestheticians & holistic providers",
            "**Tailored Care:** Personalized treatments designed for your unique needs",
            "**A Holistic Experience:** Mind-body wellness to help you feel whole",
          ],
        },
        { kind: "p", text: "Your journey to healing, confidence, and balance starts here.", lead: true },
      ],
    },
  ],
  closing: { heading: "Discover Your Pathway to Wellness", text: ["We look forward to meeting you and helping you have the experiences you have been craving!"], cta: { label: "Contact Us", href: "/contact" } },
};

/** Team directory. Source: 23 (clinicians), 46 (wellness providers). Rachel lives on /about/rachel. */
const team: PageContent = {
  url: "/team",
  title: "Clinicians — Pathways Within | Wisdom & Wellness Services",
  meta: "Meet Our Team. Pathways Within leadership, clinical team, specialized care providers, wellness providers, admin team, and therapy dogs on Long Island.",
  source: "23-www-pathwayswithin-me-clinicians.txt, 46-pathwayswithinwellness-com-providers.txt",
  eyebrow: "Our Team",
  h1: "Meet Our Team",
  intro: ["Our therapists are trained, licensed, and experienced in different areas of counseling. Each clinician works with special populations based on their expertise and passions."],
  heroPhoto: { asset: "ha-ap26-camp-pair", alt: "Two members of the Pathways Within team" },
  heroCtas: [
    { label: "Search providers by specialty", href: "#search" },
    { label: "Meet Rachel, our founder", href: "/about/rachel", secondary: true },
  ],
  sections: [
    {
      id: "search",
      stop: "labyrinth",
      layout: "wide",
      heading: "Find your provider",
      glass: false,
      blocks: [{ kind: "people", group: "search" }],
    },
    {
      id: "specialized",
      stop: "cairn",
      layout: "wide",
      heading: "Pathways Within Specialized Care Providers",
      blocks: [
        { kind: "people", group: "specialized" },
        { kind: "cta", label: "Learn About Medication Management", href: "/services/medication-management" },
        { kind: "cta", label: "Performance & Wellness Coaching", href: "/services/performance-wellness-coaching", secondary: true },
      ],
    },
    {
      id: "wellness-providers",
      stop: "pool",
      layout: "wide",
      heading: "Meet Our Providers",
      blocks: [{ kind: "people", group: "wellness" }],
    },
    {
      id: "admin",
      stop: "ivy",
      layout: "wide",
      heading: "Pathways Within Admin Team",
      blocks: [{ kind: "people", group: "admin" }],
    },
    {
      id: "therapy-dogs",
      stop: "ground",
      layout: "wide",
      heading: "Meet Our Therapy Dogs!",
      blocks: [{ kind: "people", group: "dogs" }],
    },
  ],
  closing: { heading: "We look forward to meeting you and helping you have the experiences you have been craving!", cta: { label: "Contact Us", href: "/contact" } },
};

/** Locations. Source: 25, 44, footer address lines. Status and accessibility lines come from the client brief. */
const locations: PageContent = {
  url: "/locations",
  title: "Locations — Pathways Within | Wisdom & Wellness Services",
  meta: "Our Long Island Locations. Pathways Within offices in Rockville Centre, Garden City, Massapequa, Port Jefferson, and Smithtown, with accessibility details for each.",
  source: "25-www-pathwayswithin-me-locations.txt, 44-pathwayswithinwellness-com-location.txt",
  eyebrow: "Locations",
  h1: "Our Long Island Locations",
  subtitle: "Where are you located?",
  intro: ["We have four locations in the greater Long Island area! You can find us in Nassau or Smithtown for all of your wisdom and wellness needs. To minimize stress before and after your appointments, each location has dedicated parking for your convenience."],
  heroPhoto: { asset: "ha-ap-front-desk-welcome", alt: "The front desk at Pathways Within" },
  sections: [
    {
      id: "offices",
      stop: "ground",
      layout: "wide",
      glass: false,
      blocks: [{ kind: "locations" }],
    },
    {
      id: "office-names",
      stop: "labyrinth",
      layout: "wide",
      heading: "Our Locations:",
      blocks: [
        {
          kind: "list",
          style: "bullet",
          items: [
            "Port Jefferson Therapy Office — 1227 Main Street, Suite 101, Port Jefferson, NY 11777",
            "Garden City Therapy Office — 647 Franklin Ave, Lower Level, Garden City, NY 11530",
            "Smithtown Therapy Office — 496 Smithtown Bypass, Suite 203, Smithtown, NY 11787",
            "Rockville Centre Therapy Office — 53 N Park Ave, Suite 302, Rockville Centre NY 11570",
            "Massapequa Therapy Office — 4160 Merrick Road, Suite 7, Massapequa, NY 11758",
          ],
        },
        { kind: "p", text: "Services can be offered at any location. Our Welcome Team can help you find the provider, service, and location that best fit your life." },
      ],
      photos: [
        { asset: "pr-ap-smt-therapy-window", alt: "Smithtown therapy room" },
        { asset: "pr-ap-pj-teal-room", alt: "Port Jefferson room" },
        { asset: "pr-ap-gc-waiting-nook", alt: "Garden City waiting nook" },
      ],
    },
  ],
  closing: { heading: "More Questions?", text: ["Visit our Frequently Asked Questions Page"], cta: { label: "Frequently Asked Questions", href: "/faq" } },
};

/** Contact. Source: 24, 45. The two live Trust Driven Care forms, dropdowns intact. */
const contact: PageContent = {
  url: "/contact",
  title: "Contact — Pathways Within | Wisdom & Wellness Services",
  meta: "Let’s Talk. Fill out the form below and someone from our team will be in touch. Or Contact Us Directly. Welcome@pathwayswithin.com, (631) 371-3825.",
  source: "24-www-pathwayswithin-me-contact.txt, 45-pathwayswithinwellness-com-contact.txt",
  eyebrow: "Contact Us",
  h1: "Let’s Talk",
  intro: ["Fill out the form below and someone from our team will be in touch."],
  heroCtas: [
    { label: "(631) 371-3825", href: "tel:+16313713825" },
    { label: "Welcome@pathwayswithin.com", href: "mailto:Welcome@pathwayswithin.com", secondary: true },
  ],
  sections: [
    {
      id: "form",
      stop: "seated",
      layout: "wide",
      heading: "Let’s Talk Wellness",
      blocks: [
        { kind: "p", text: "Or Contact Us Directly: [Welcome@pathwayswithin.com](mailto:Welcome@pathwayswithin.com) · [(631) 371-3825](tel:+16313713825) · [admin@pathwayswithinwellness.com](mailto:admin@pathwayswithinwellness.com) · [631-371-3825](tel:+16313713825)" },
        { kind: "contactForms" },
      ],
    },
    {
      id: "our-locations",
      stop: "ground",
      layout: "wide",
      heading: "Our Locations:",
      blocks: [{ kind: "locations" }],
    },
  ],
  closing: {
    heading: "Healing is holistic.",
    text: ["Take the next step in your journey with rejuvenating treatments designed to restore balance, confidence, and well-being. You deserve to feel your best—inside and out."],
    cta: { label: "Discover your Pathway to Wellness", href: "/services" },
  },
};

/** How it works: the 360 intake and the quiz. Intake steps are from the client brief. */
const howItWorks: PageContent = {
  url: "/how-it-works",
  title: "How It Works — Pathways Within | Wisdom & Wellness Services",
  meta: "The Pathways Within Collaborative Approach. One Welcome Team, one 360 intake, one plan built around you. Take the short quiz to find a place to begin.",
  source: "02-www-pathwayswithin-me-home.txt",
  eyebrow: "How It Works",
  h1: "The Pathways Within Collaborative Approach",
  intro: [
    "We believe some of the most powerful tools we have as therapists are using the complementary tools we like to call Wisdom and Wellness to guide our clients in their healing journey.",
    "This means we offer traditional therapy services like individual and couples therapy, along with holistic whole body services, such as massage and acupuncture through our sister practice, Pathways Within Wellness.",
  ],
  heroPhoto: { asset: "ha-ap26-desk-talk", alt: "A conversation at the welcome desk" },
  sections: [
    {
      id: "questions",
      stop: "cairn",
      heading: "Have you ever experienced an event that completely changed your view of the world?",
      photo: { asset: "cw-sea-rocks-alone", alt: "A person alone by the sea rocks", shape: "blob" },
      blocks: [
        { kind: "p", text: "Do you have negative thoughts or overwhelming emotions that prevent you from living the life you want?", lead: true },
        { kind: "p", text: "Are you holding onto scars from the past? Is your body manifesting physical or spiritual pain?", lead: true },
        { kind: "p", text: "Together we can explore your experiences in order to help you feel safe and secure again, and we can develop new styles of communication that can help you create the relationships you have always wanted. Whatever you may be dealing with, we can help." },
      ],
    },
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
        { kind: "p", text: "Our Welcome Team guides everyone through the same intake process to build an individual plan. Healing from the inside out, 360 degrees around.", lead: true },
        {
          kind: "steps",
          items: [
            { title: "You contact the Welcome Team", text: "Form, call, or text. You do not need to know which service you need." },
            { title: "A 360 intake conversation", text: "A Welcome Team member reaches out and schedules a 360 intake, a conversation about what you are experiencing and what you want to change." },
            { title: "One plan, built around you", text: "The team builds a care plan across therapy, medication management, coaching, and wellness as needed, and matches you with available providers." },
            { title: "Your first appointment", text: "Your first appointment is scheduled. The Welcome Team stays your point of contact." },
          ],
        },
        { kind: "cta", label: "Contact Us", href: "/contact" },
      ],
    },
    {
      id: "quiz",
      stop: "seated",
      layout: "wide",
      heading: "Not sure where to begin? Answer five questions.",
      glass: false,
      blocks: [{ kind: "quiz" }],
    },
    {
      id: "tailored",
      stop: "standing",
      heading: "We are big believers in therapy tailored to your wants and needs.",
      photo: { asset: "th-ap26-conversation", alt: "A therapy conversation" },
      blocks: [
        { kind: "p", text: "The journey within should be as personal and individual as you are.", lead: true },
        { kind: "p", text: "We look forward to meeting you and helping you have the experiences you have been craving!" },
      ],
    },
  ],
  closing: { heading: "Discover Your Pathway to Wellness", cta: { label: "Contact Us", href: "/contact" } },
};

export const orgPages: PageContent[] = [services, team, locations, contact, howItWorks];

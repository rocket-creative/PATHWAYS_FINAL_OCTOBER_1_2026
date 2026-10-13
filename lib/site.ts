export const SITE = {
  name: "Pathways Within",
  legalName: "Pathways Within",
  origin: "https://pathwayswithinwellness.com",
  phone: "(631) 371-3825",
  phoneHref: "tel:+16313713825",
  email: "Welcome@pathwayswithin.com",
  substack: "https://substack.com/@the.wisdom.of.wellness",
  substackHandle: "@the.wisdom.of.wellness",
  careersUrl: "https://wizehire.com/cmp/pathways-within",
  /** One front door: the Trust Driven Care contact form that routes to the Welcome Team. */
  contactForm: "https://link.trustdrivencare.com/widget/form/5KmXtKKPzphbLJSdq4Ym",
  footerTagline: ["A 360º Approach", "to Healing & Transformation"],
} as const;

export interface Location {
  slug: string;
  name: string;
  line1: string;
  line2: string;
  accessible: boolean;
  accessibility: string;
  photos?: string[];
  photo?: string;
}

/** Address and accessibility only. No opening, closure, or transition notes. */
export const LOCATIONS: Location[] = [
  {
    slug: "rockville-centre",
    name: "Rockville Centre",
    line1: "53 N Park Ave, Suite 302",
    line2: "Rockville Centre, NY 11570",
    accessible: true,
    accessibility: "Elevator to the 3rd floor. Wheelchair accessible.",
    photo: "pr-rvc-lounge",
    photos: ["pr-rvc-lounge", "pr-rvc-desk-room", "pr-rvc-group-room", "pr-rvc-green-room"],
  },
  {
    slug: "garden-city",
    name: "Garden City",
    line1: "647 Franklin Ave, Lower Level",
    line2: "Garden City, NY 11530",
    accessible: false,
    accessibility: "Lower level, reached by stairs. Not wheelchair accessible.",
    photo: "ha-ap-waiting-garden-city",
    photos: ["ha-ap-waiting-garden-city", "pr-ap-gc-waiting-nook", "pr-ap-gc-session-chair", "pr-ap-gc-flower-wall"],
  },
  {
    slug: "massapequa",
    name: "Massapequa",
    line1: "4160 Merrick Road, Suite 7",
    line2: "Massapequa, NY 11758",
    accessible: false,
    accessibility: "Reached by stairs. Not wheelchair accessible.",
    photo: "ha-ap-therapy-massapequa",
    photos: ["ha-ap-therapy-massapequa", "pr-ap-mpq-mandala-chair", "pr-ap-mpq-sunflower", "pr-ap-mpq-child-waiting"],
  },
  {
    slug: "port-jefferson",
    name: "Port Jefferson",
    line1: "1227 Main Street, Suite 101",
    line2: "Port Jefferson, NY 11777",
    accessible: true,
    accessibility: "First floor, with a ramp. Wheelchair accessible.",
    photo: "ha-ap-waiting-port-jefferson",
    photos: ["ha-ap-waiting-port-jefferson", "pr-ap-pj-teal-room", "pr-ap-pj-pink-room", "pr-ap-pj-hope-seating"],
  },
  {
    slug: "smithtown",
    name: "Smithtown",
    line1: "496 Smithtown Bypass, Suite 203",
    line2: "Smithtown, NY 11787",
    accessible: true,
    accessibility: "Elevator to the 2nd floor. Wheelchair accessible.",
    photo: "ha-ap-waiting-smithtown",
    photos: ["ha-ap-waiting-smithtown", "pr-ap-smt-therapy-window", "pr-ap-smt-blue-sofa", "pr-ap-smt-labyrinth-sign"],
  },
];

export interface NavLink {
  label: string;
  href: string;
  note?: string;
}
export interface NavColumn {
  title: string;
  links: NavLink[];
  /** Sub-list rendered under the same column (Types of Therapy under Mental Health). */
  sub?: { title: string; links: NavLink[] };
}
export interface NavGroup {
  label: string;
  href: string;
  columns?: NavColumn[];
  links?: NavLink[];
}

const THERAPY: NavLink[] = [
  { label: "Individual Therapy", href: "/services/individual-therapy" },
  { label: "Child Therapy", href: "/services/child-therapy" },
  { label: "Teen Therapy", href: "/services/teen-therapy" },
  { label: "Couples Therapy", href: "/services/couples-therapy" },
  { label: "Family Therapy", href: "/services/family-therapy" },
  { label: "Group Therapy", href: "/services/group-therapy" },
  { label: "Trauma Therapy", href: "/services/trauma-therapy" },
  { label: "Grief Therapy", href: "/services/grief-therapy" },
  { label: "Weight Loss Surgery Support", href: "/services/weight-loss-surgery-support" },
  { label: "Veterans & First Responders", href: "/services/veterans-first-responders" },
];
const TYPES_OF_THERAPY: NavLink[] = [
  { label: "EMDR Therapy", href: "/services/emdr-therapy" },
  { label: "IFS Therapy", href: "/services/ifs-therapy" },
  { label: "Somatic Therapy", href: "/services/somatic-therapy" },
  { label: "Hypnotherapy", href: "/services/hypnotherapy" },
  { label: "Parent-Child Interaction Therapy", href: "/services/parent-child-interaction-therapy" },
  { label: "Ketamine Assisted Therapy", href: "/services/ketamine-assisted-therapy" },
];
const MEDICATION: NavLink[] = [{ label: "Medication Management", href: "/services/medication-management" }];
const MIND_BODY: NavLink[] = [
  { label: "Performance & Wellness Coaching", href: "/services/performance-wellness-coaching" },
  { label: "Energy Work", href: "/services/energy-work" },
];
const WELLNESS: NavLink[] = [
  { label: "Massage", href: "/services/massage" },
  { label: "Acupuncture", href: "/services/acupuncture" },
  { label: "Cupping Therapy", href: "/services/cupping-therapy" },
];

/** Three primary buckets. Mental Health is licensed clinical care (Therapy + Medication Management). Mind-Body Support is Coaching + Energy Work. Wellness is Massage, Acupuncture, Cupping. */
export const BUCKETS = {
  mentalHealth: { title: "Mental Health", href: "/services#mental-health", therapy: THERAPY, types: TYPES_OF_THERAPY, medication: MEDICATION },
  mindBody: { title: "Mind-Body Support", href: "/services#mind-body-support", links: MIND_BODY },
  wellness: { title: "Wellness", href: "/services#wellness", links: WELLNESS },
} as const;

export const NAV: NavGroup[] = [
  {
    label: "Services",
    href: "/services",
    columns: [
      { title: "Mental Health", links: THERAPY.concat(MEDICATION), sub: { title: "Types of Therapy", links: TYPES_OF_THERAPY } },
      { title: "Mind-Body Support", links: MIND_BODY },
      { title: "Wellness", links: WELLNESS },
    ],
  },
  { label: "Our Team", href: "/team" },
  { label: "Locations", href: "/locations" },
  {
    label: "About",
    href: "/about",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Meet Rachel", href: "/about/rachel" },
      { label: "FAQs", href: "/faq" },
      { label: "Resources", href: "/resources" },
      { label: "Careers", href: "/careers" },
    ],
  },
  { label: "How It Works", href: "/how-it-works" },
];

export const FOOTER_COLUMNS: { title: string; links: NavLink[] }[] = [
  {
    title: "Pathways Within",
    links: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/about" },
      { label: "Meet Rachel", href: "/about/rachel" },
      { label: "Our Team", href: "/team" },
      { label: "Locations", href: "/locations" },
      { label: "How It Works", href: "/how-it-works" },
      { label: "Frequently Asked Questions", href: "/faq" },
      { label: "Resources", href: "/resources" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
  { title: "Mental Health", links: THERAPY.concat(TYPES_OF_THERAPY, MEDICATION) },
  { title: "Mind-Body Support & Wellness", links: MIND_BODY.concat(WELLNESS) },
];

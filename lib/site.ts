export const SITE = {
  name: "Pathways Within",
  legalName: "Pathways Within - Wisdom and Wellness Collaborative",
  origin: "https://pathwayswithinwellness.com",
  phone: "(631) 371-3825",
  phoneHref: "tel:+16313713825",
  email: "Welcome@pathwayswithin.com",
  substack: "https://substack.com/@the.wisdom.of.wellness",
  substackHandle: "@the.wisdom.of.wellness",
  careersUrl: "https://wizehire.com/cmp/pathways-within",
  therapyForm: "https://link.trustdrivencare.com/widget/form/5KmXtKKPzphbLJSdq4Ym",
  wellnessForm: "https://link.trustdrivencare.com/widget/form/pZyZ5b0IMxCN6FcJq4pF",
  footerTagline: ["Discover Our 360º Approach", "to Healing & Transformation"],
} as const;

export interface Location {
  slug: string;
  name: string;
  line1: string;
  line2: string;
  accessible: boolean;
  accessibility: string;
  status?: string;
  photo?: string;
}

/** Street lines are verbatim from the live footer. Accessibility and status come from the client brief. */
export const LOCATIONS: Location[] = [
  {
    slug: "rockville-centre",
    name: "Rockville Centre",
    line1: "53 N Park Ave, Suite 302",
    line2: "Rockville Centre, NY 11570",
    accessible: true,
    accessibility: "Elevator to the 3rd floor. Wheelchair accessible.",
    status: "Now the entire 3rd floor, newly built out and opening September 1.",
    photo: "ha-ap-front-desk-welcome",
  },
  {
    slug: "garden-city",
    name: "Garden City",
    line1: "647 Franklin Ave, Lower Level",
    line2: "Garden City, NY 11530",
    accessible: false,
    accessibility: "Lower level, reached by stairs. Not wheelchair accessible.",
    status: "Multi purpose office. The 520 Franklin office is closed as of 8/31.",
    photo: "ha-ap-waiting-garden-city",
  },
  {
    slug: "massapequa",
    name: "Massapequa",
    line1: "4160 Merrick Road, Suite 7",
    line2: "Massapequa, NY 11758",
    accessible: false,
    accessibility: "Reached by stairs. Not wheelchair accessible.",
    status: "Suite 7 (upstairs) is open. Suite 5 (downstairs) is closed as of 9/30.",
    photo: "ha-ap-therapy-massapequa",
  },
  {
    slug: "port-jefferson",
    name: "Port Jefferson",
    line1: "1227 Main Street, Suite 101",
    line2: "Port Jefferson, NY 11777",
    accessible: true,
    accessibility: "First floor, with a ramp. Wheelchair accessible.",
    photo: "ha-ap-waiting-port-jefferson",
  },
  {
    slug: "smithtown",
    name: "Smithtown",
    line1: "496 Smithtown Bypass, Suite 203",
    line2: "Smithtown, NY 11787",
    accessible: true,
    accessibility: "Elevator to the 2nd floor. Wheelchair accessible.",
    photo: "ha-ap-waiting-smithtown",
  },
];

export interface NavLink {
  label: string;
  href: string;
  note?: string;
}
export interface NavGroup {
  label: string;
  href: string;
  columns?: { title: string; links: NavLink[] }[];
  links?: NavLink[];
}

export const NAV: NavGroup[] = [
  {
    label: "Services",
    href: "/services",
    columns: [
      {
        title: "Therapy",
        links: [
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
        ],
      },
      {
        title: "Types of Therapy",
        links: [
          { label: "EMDR Therapy", href: "/services/emdr-therapy" },
          { label: "IFS Therapy", href: "/services/ifs-therapy" },
          { label: "Somatic Therapy", href: "/services/somatic-therapy" },
          { label: "Hypnotherapy", href: "/services/hypnotherapy" },
          { label: "Parent-Child Interaction Therapy", href: "/services/parent-child-interaction-therapy" },
          { label: "Ketamine Assisted Therapy", href: "/services/ketamine-assisted-therapy" },
        ],
      },
      {
        title: "Medication & Coaching",
        links: [
          { label: "Medication Management", href: "/services/medication-management" },
          { label: "Performance & Wellness Coaching", href: "/services/performance-wellness-coaching" },
        ],
      },
      {
        title: "Wellness",
        links: [
          { label: "Massage", href: "/services/massage" },
          { label: "Acupuncture", href: "/services/acupuncture" },
          { label: "Cupping Therapy", href: "/services/cupping-therapy" },
          { label: "Energy Work", href: "/services/energy-work" },
          { label: "Cryotherapy", href: "/services/cryotherapy" },
          { label: "IV Vitamin Therapy", href: "/services/iv-vitamin-therapy", note: "On hold" },
        ],
      },
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
  {
    title: "Therapy",
    links: NAV[0].columns![0].links.concat(NAV[0].columns![1].links),
  },
  {
    title: "Medication, Coaching & Wellness",
    links: NAV[0].columns![2].links.concat(NAV[0].columns![3].links),
  },
];

/**
 * Care router quiz. Questions, answers, and routing carried over from the
 * previous build's approved copy (George's). Every result ends at Contact Us.
 */
export type QuestionId = "q1" | "q2" | "q3" | "q4" | "q5";
export type OptionId = "a" | "b" | "c" | "d";

export interface QuizQuestion {
  id: QuestionId;
  legend: string;
  options: { id: OptionId; label: string }[];
}

export const QUESTIONS: QuizQuestion[] = [
  {
    id: "q1",
    legend: "What brings you here today?",
    options: [
      { id: "a", label: "Something on my mind, my mood, or my relationships." },
      { id: "b", label: "Something in my body: pain, tension, or recovery." },
      { id: "c", label: "I think I may need medication or want to review the medication I take." },
      { id: "d", label: "I am not sure. Something feels off." },
    ],
  },
  {
    id: "q2",
    legend: "Who is this for?",
    options: [
      { id: "a", label: "Me, an adult." },
      { id: "b", label: "My child or teen." },
      { id: "c", label: "Me and my partner or my family." },
      { id: "d", label: "Someone I care about." },
    ],
  },
  {
    id: "q3",
    legend: "Have you done therapy or treatment before?",
    options: [
      { id: "a", label: "Never." },
      { id: "b", label: "Yes, and it helped." },
      { id: "c", label: "Yes, and it did not help enough." },
      { id: "d", label: "I am in care now and want to add something." },
    ],
  },
  {
    id: "q4",
    legend: "How do you want to meet?",
    options: [
      { id: "a", label: "In person on Long Island." },
      { id: "b", label: "By video." },
      { id: "c", label: "Either." },
    ],
  },
  {
    id: "q5",
    legend: "Is any of this urgent?",
    options: [
      { id: "a", label: "No, I want to get started." },
      { id: "b", label: "I am struggling more than usual." },
      { id: "c", label: "I am in crisis right now." },
    ],
  },
];

export type AnswerSet = Partial<Record<QuestionId, OptionId>>;
export interface ResultLink {
  label: string;
  href: string;
}
export interface QuizResult {
  title: string;
  links: ResultLink[];
  followUp: { text: string; href?: string }[] | null;
  crisis: { text: string; href?: string }[] | null;
}

export const CTA: ResultLink = { label: "Contact Us", href: "/contact" };

const CRISIS = [
  { text: "Call or text " },
  { text: "988", href: "tel:988" },
  { text: ", Veterans press 1, or call " },
  { text: "911", href: "tel:911" },
  { text: "." },
];

const L = {
  individual: { label: "Individual Therapy", href: "/services/individual-therapy" },
  child: { label: "Child Therapy", href: "/services/child-therapy" },
  teen: { label: "Teen Therapy", href: "/services/teen-therapy" },
  couples: { label: "Couples Therapy", href: "/services/couples-therapy" },
  family: { label: "Family Therapy", href: "/services/family-therapy" },
  massage: { label: "Massage", href: "/services/massage" },
  acupuncture: { label: "Acupuncture", href: "/services/acupuncture" },
  medication: { label: "Medication Management", href: "/services/medication-management" },
  emdr: { label: "EMDR Therapy", href: "/services/emdr-therapy" },
  coaching: { label: "Performance & Wellness Coaching", href: "/services/performance-wellness-coaching" },
  howItWorks: { label: "How It Works", href: "/how-it-works" },
};

const Q3C = [
  { text: "Ask the Welcome Team about " },
  { text: "EMDR", href: L.emdr.href },
  { text: ", IFS, or a " },
  { text: "medication consult", href: L.medication.href },
];

export function routeAnswers(a: AnswerSet): QuizResult {
  let title = "The 360 intake is built for this";
  const links: ResultLink[] = [];
  switch (a.q1) {
    case "a":
      title = "Therapy";
      links.push(L.individual);
      if (a.q2 === "b") links.push(L.child, L.teen);
      if (a.q2 === "c") links.push(L.couples, L.family);
      break;
    case "b":
      title = "Wellness";
      links.push(L.massage, L.acupuncture);
      break;
    case "c":
      title = "Medication Management";
      links.push(L.medication);
      break;
    default:
      links.push(L.howItWorks);
  }
  if (a.q4 === "b") links.push({ label: "Telehealth is available for eligible services", href: "/faq" });
  return {
    title,
    links,
    followUp: a.q3 === "c" ? Q3C : null,
    crisis: a.q5 === "c" ? CRISIS : null,
  };
}

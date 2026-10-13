import type { PageContent } from "../types";

/** Copy: client revision deck, Page 2 (About Us). Rachel's full story lives on /about/rachel; the full patient journey lives on /how-it-works. */
export const about: PageContent = {
  url: "/about",
  title: "About Us — Pathways Within",
  meta: "Pathways Within is a collaborative mental health and wellness organization built around a simple idea: people are not one-dimensional, and care should not be either.",
  source: "client revision deck, Page 2",
  eyebrow: "About Us",
  h1: "Who We Are (and Why We’re Here)",
  intro: [
    "Pathways Within is a collaborative mental health and wellness organization built around a simple idea: people are not one-dimensional, and care should not be either.",
    "Mental health, physical health, stress, relationships, sleep, pain, work, and everyday life overlap all the time. We created Pathways Within to stop pretending they do not.",
  ],
  heroPhoto: { asset: "pr-ap-desk-saul-greeting", alt: "The Welcome Team greeting a visitor at the Smithtown front desk" },
  heroStop: "wide",
  sections: [
    {
      id: "who-we-are",
      stop: "seated",
      photo: { asset: "ha-ap-front-desk-team", alt: "The Welcome Team at the Smithtown front desk" },
      blocks: [
        { kind: "p", text: "Our team includes clinicians, medical providers, coaches, wellness practitioners, and support professionals who work together to make care feel more connected, more personal, and easier to navigate." },
        { kind: "p", text: "You may come to us knowing exactly what you need—or simply knowing something needs to change." },
        { kind: "p", text: "Take what you need. Leave what you do not.", lead: true },
        { kind: "cta", label: "See how it works", href: "/how-it-works", secondary: true },
      ],
    },
    {
      id: "founder",
      stop: "standing",
      eyebrow: "FOUNDER OF PATHWAYS WITHIN",
      heading: "Meet Rachel: Founder, Therapist & “Patient Zero”",
      photo: { asset: "ha-ap26-rachel-solo", alt: "Rachel Lessard, founder of Pathways Within" },
      blocks: [
        { kind: "p", text: "Hi, I’m Rachel, therapist, founder, lifelong listener, and the original “Patient Zero” behind Pathways Within." },
        { kind: "p", text: "Therapy is not just what I do. It is woven into who I am." },
        { kind: "cta", label: "Read Rachel’s story", href: "/about/rachel" },
      ],
    },
    {
      id: "what-we-believe",
      stop: "labyrinth",
      layout: "wide",
      heading: "What We Believe",
      blocks: [
        {
          kind: "list",
          style: "check",
          items: [
            "**The whole picture** — Mental, physical, and emotional well-being are connected.",
            "**Your path, your pace** — There is no universal formula or perfect timeline.",
            "**Better together** — Care works best when patients, providers, and support teams communicate and collaborate.",
            "**Community matters** — Growth is personal, but that does not mean you have to do it alone.",
          ],
        },
        { kind: "p", text: "The path does not have to be straight to be taking you somewhere.", lead: true },
      ],
    },
    {
      id: "how-pathways-found-its-way",
      stop: "pool",
      heading: "How Pathways Found Its Way",
      photos: [
        { asset: "pr-ap-smt-labyrinth-sign", alt: "The labyrinth sign at the Smithtown office" },
        { asset: "pr-ap-desk-waiting", alt: "The Smithtown waiting area by the front desk" },
        { asset: "ha-ap26-desk-handshake", alt: "A handshake at the welcome desk" },
      ],
      blocks: [
        { kind: "p", text: "What began as a small private therapy practice has grown into a collaborative mental health and wellness organization across Long Island, with one shared goal: making care feel more connected, useful, and human." },
        { kind: "h3", text: "The labyrinth in our logo says a lot about how we see growth." },
        { kind: "p", text: "A labyrinth is not a maze. There are no wrong turns or dead ends. The path may wind, pause, circle inward, or open outward—but it keeps moving." },
        { kind: "p", text: "Start where you are. Move at your pace. Choose the support that makes sense now, knowing your needs may change along the way." },
      ],
    },
    {
      id: "feeling-better",
      stop: "cairn",
      heading: "Where Feeling Better Gets Personal",
      photo: { asset: "ha-ap-massage-room", alt: "A massage room at Pathways Within", shape: "arch" },
      blocks: [
        { kind: "p", text: "Not every part of well-being can be talked through. Sometimes support looks like conversation. Sometimes it means addressing physical tension, pain, stress, movement, recovery, or giving your body space to reset.", lead: true },
        { kind: "p", text: "That is why wellness services are part of the larger Pathways Within model. Massage, acupuncture, energy work, and other active wellness services can be used on their own or alongside mental health care." },
        { kind: "p", text: "There is no requirement to use more than one service. The point is having options—and a team that can help you use them well." },
      ],
    },
    {
      id: "leadership",
      stop: "seated",
      layout: "wide",
      heading: "The People Helping Lead the Way",
      blocks: [
        {
          kind: "person",
          slug: "rachel-lessard",
          eyebrow: "FOUNDER OF PATHWAYS WITHIN",
          name: "Rachel Lessard, LCSW-R",
          paragraphs: [
            "Rachel is a therapist, lifelong listener, and the founder of Pathways Within.",
            "She sets the vision, protects the culture, and keeps asking how Pathways can make care feel more connected, more human, and more useful in real life.",
          ],
          cta: { label: "Meet Rachel", href: "/about/rachel" },
        },
        {
          kind: "person",
          slug: "ksusha-cascio",
          eyebrow: "CHIEF OPERATING OFFICER",
          name: "Ksusha Cascio, LCSW",
          paragraphs: [
            "Ksusha is the person who helps turn big ideas into clear plans, strong systems, and an organization that actually knows where the metaphorical keys are.",
            "With a passion for developing the clinicians in the practice, her thoughtful, judgment-free approach keeps teams connected, operations moving, and growth grounded in the experience of the people doing the work so they can deliver the best level of patient care.",
          ],
        },
        {
          kind: "person",
          slug: "joe-bush",
          eyebrow: "CLINICAL DIRECTOR, NASSAU",
          name: "Joseph “Joe” Bush, LCSW",
          paragraphs: [
            "Joe brings a relational, practical lens to clinical leadership and a strong belief that no one should have to navigate life’s challenges alone.",
            "Drawing from his work with adolescents, adults, families, and relationships, he supports the Nassau clinical team in delivering care that is compassionate, approachable, and rooted in real-world needs.",
          ],
        },
        {
          kind: "person",
          slug: "lee-wasser",
          eyebrow: "CLINICAL DIRECTOR, SUFFOLK",
          name: "Lee Wasser, LMHC-D",
          paragraphs: [
            "Lee brings a broad, adaptable clinical perspective to his leadership of the Suffolk team.",
            "He encourages curiosity, inclusivity, and flexibility, helping clinicians expand their skills while keeping treatment centered on the person in front of them, not a one-size-fits-all playbook.",
          ],
        },
      ],
    },
    {
      id: "better-together",
      stop: "standing",
      heading: "Better Together",
      photo: { asset: "ha-ap26-camp-three", alt: "Three members of the Pathways Within team" },
      blocks: [
        { kind: "p", text: "Pathways Within is led collaboratively. Rachel sets the larger vision. Ksusha builds the systems and structure that help bring it to life. Joe and Lee lead clinical care across Nassau and Suffolk.", lead: true },
        { kind: "p", text: "Together, they help keep the organization connected as it grows. Different strengths. Shared direction. Better together." },
        { kind: "cta", label: "Meet the whole team", href: "/team", secondary: true },
      ],
    },
    {
      id: "secure-connected",
      stop: "ivy",
      heading: "Secure. Connected. Built for Healthcare.",
      photo: { asset: "pr-intake-clipboard", alt: "An intake clipboard at the welcome desk", shape: "circle" },
      blocks: [
        { kind: "p", text: "Protecting your information is part of providing good care.", lead: true },
        { kind: "p", text: "We use Jane for electronic health records and Trust Driven Care for patient communication. Jane is a HIPAA-compliant electronic health record platform with security measures designed to protect patient information." },
        { kind: "p", text: "Trust Driven Care supports patient communication and powers the chat bubble on our website, giving patients a direct way to reach our Welcome Team through healthcare-focused technology." },
        { kind: "p", text: "Together, these platforms help us support organized records, easier communication, and a more connected experience across the Pathways Within team." },
      ],
    },
    {
      id: "wondering",
      stop: "ground",
      layout: "wide",
      heading: "A Few Things You May Be Wondering",
      blocks: [
        {
          kind: "faq",
          items: [
            { q: "What is Pathways Within?", a: ["Pathways Within is a collaborative mental health and wellness organization for the whole person, not just the one concern that brought you through the door."] },
            { q: "Do I need to know exactly what kind of support I need?", a: ["No, and honestly, most people do not. You may know that something feels off, heavy, stuck, or simply ready to change. Our Welcome Team can help you sort through the options and find a place to begin."] },
            { q: "Can my providers communicate with one another?", a: ["Yes, when appropriate and with your permission. Members of your care team may collaborate to create a more connected experience and help everyone work toward the same goals. Your privacy, comfort, and consent remain central to that process."] },
            { q: "Is Pathways Within only for people in crisis?", a: ["Definitely not. People come to us during hard seasons, but also for personal growth, stronger relationships, stress support, physical well-being, performance goals, or simply because life could use a tune-up."] },
            { q: "How do I get started?", a: ["Contact our Welcome Team and tell us a little about what is bringing you in. You do not need a polished explanation or all the answers. We will help you find a starting point that feels manageable, supportive, and right for you."] },
          ],
        },
        { kind: "cta", label: "All frequently asked questions", href: "/faq", secondary: true },
      ],
    },
  ],
  closing: {
    heading: "Take what you need. Leave what you do not.",
    text: ["Contact our Welcome Team and tell us a little about what is bringing you in."],
    cta: { label: "Contact Us", href: "/contact" },
  },
};

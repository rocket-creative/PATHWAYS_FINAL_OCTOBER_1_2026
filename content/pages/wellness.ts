import type { PageContent } from "../types";

/**
 * Wellness (Massage, Acupuncture, Cupping, Cryotherapy),
 * Mind-Body Support (Energy Work), and wellness provider bio pages.
 * Massage copy is the clinical draft. Acupuncture and cupping copy comes
 * from the client revision deck. IV Vitamin Therapy is on hold and is not built.
 */

const massage: PageContent = {
  url: "/services/massage",
  title: "Massage Therapy on Long Island — Pathways Within",
  meta: "At Pathways Within, our New York State Licensed Massage Therapists provide individualized, clinically informed massage therapy based on your symptoms, health history, physical presentation, and treatment goals.",
  source: "massage-clinical.txt",
  eyebrow: "Wellness",
  h1: "Massage Therapy on Long Island",
  subtitle: "Clinical Massage Therapy for Pain, Muscular Tension, Mobility & Recovery",
  intro: [
    "At Pathways Within, our New York State Licensed Massage Therapists provide individualized, clinically informed massage therapy based on your symptoms, health history, physical presentation, and treatment goals.",
    "Whether you are managing chronic muscular tension, recurring discomfort, physical strain, limited mobility, or recovery needs, each session begins with a focused intake to identify treatment priorities, relevant precautions, and appropriate techniques.",
    "Massage therapy is available to all patients, with NYSHIP accepted for eligible medical massage services.",
  ],
  heroCtas: [
    { label: "Contact Our Welcome Team", href: "/contact" },
    { label: "631-371-3825", href: "tel:+16313713825", secondary: true },
  ],
  heroPhoto: { asset: "cw-ap-massage-session", alt: "A massage therapy session at Pathways Within" },
  heroStop: "wide",
  sections: [
    {
      id: "why-therapeutic-massage",
      stop: "cairn",
      heading: "Why Therapeutic Massage?",
      photo: { asset: "ha-ap-massage-room", alt: "A massage treatment room at Pathways Within", shape: "blob" },
      blocks: [
        { kind: "p", text: "Our Massage Therapists combine clinical training with individualized care. Before treatment, they review your symptoms, relevant health history, areas of pain or restriction, and functional goals.", lead: true },
        { kind: "p", text: "Technique, pressure, positioning, and areas of focus are selected according to that assessment rather than a predetermined routine." },
      ],
    },
    {
      id: "may-help-support",
      stop: "pool",
      layout: "wide",
      heading: "Massage Therapy May Help Support",
      blocks: [
        {
          kind: "list",
          style: "check",
          items: [
            "Chronic muscular tension",
            "Neck, shoulder, and back discomfort",
            "Soft-tissue soreness",
            "Repetitive-use tension",
            "Restricted mobility or flexibility",
            "Exercise and athletic recovery",
            "Pregnancy-related muscular discomfort",
            "Physical tension associated with stress",
            "General muscular relaxation",
            "Ongoing mobility and physical maintenance",
          ],
        },
        { kind: "p", text: "Massage therapy may complement medical, rehabilitative, mental health, or integrative care when appropriate. It does not replace medical evaluation or treatment when those services are needed." },
      ],
    },
    {
      id: "what-makes-us-different",
      stop: "labyrinth",
      layout: "wide",
      heading: "What Makes Pathways Within Different?",
      blocks: [
        { kind: "h3", text: "Clinical Care Within a Whole-Person Context" },
        { kind: "p", text: "Musculoskeletal symptoms may be influenced by several factors, including physical activity, posture, injury, repetitive movement, sleep, and stress.", lead: true },
        { kind: "p", text: "Pain and restricted movement can also affect mood, sleep, and everyday functioning. A clinically informed intake helps place the area of discomfort within that broader context." },
        { kind: "p", text: "At Pathways Within, massage is available as a stand-alone service or as part of a multidisciplinary care plan that may also include mental health therapy, acupuncture, medication management, and performance coaching." },
        { kind: "p", text: "Patients are not required to receive multiple services. The collaborative setting simply allows care to be considered in relation to the whole person." },
        { kind: "h3", text: "Licensed Providers" },
        { kind: "p", text: "Massage services are provided by New York State Licensed Massage Therapists." },
        { kind: "h3", text: "Clinical Intake" },
        { kind: "p", text: "Your therapist reviews your symptoms, relevant health history, areas of discomfort or restriction, and treatment goals before care begins." },
        { kind: "h3", text: "Individualized Treatment" },
        { kind: "p", text: "Technique, pressure, positioning, and areas of focus are adjusted according to your presentation, comfort, and clinical needs." },
        { kind: "h3", text: "Coordinated Care Environment" },
        { kind: "p", text: "With your permission and when clinically appropriate, massage therapy may complement care provided by other Pathways Within or outside healthcare professionals." },
        { kind: "h3", text: "Accessible Care" },
        { kind: "p", text: "Massage therapy is available to all patients. Pathways Within also accepts NYSHIP for eligible medical massage services." },
      ],
    },
    {
      id: "nyship",
      stop: "seated",
      heading: "NYSHIP Medical Massage",
      photo: { asset: "pw-massage-hands", alt: "Christine working on a client's back during a massage", shape: "circle" },
      blocks: [
        { kind: "h3", text: "Therapeutic Massage Through Your Benefits" },
        { kind: "p", text: "If you have NYSHIP coverage, medical massage may be available when eligibility and applicable plan requirements are met.", lead: true },
        { kind: "h3", text: "Getting Started" },
        {
          kind: "steps",
          items: [
            { title: "Contact the Welcome Team", text: "Call 631-371-3825 and let us know you are interested in NYSHIP medical massage." },
            { title: "Review Eligibility", text: "Our team will review the information and applicable requirements needed to begin care, including a prescription for care." },
            { title: "Schedule Your Appointment", text: "We will connect you with an available Licensed Massage Therapist." },
            { title: "Begin Individualized Treatment", text: "Your therapist will complete an intake, assess your concerns within the scope of massage therapy, and tailor treatment to your clinical needs and goals." },
          ],
        },
        { kind: "p", text: "Coverage and plan requirements may vary." },
      ],
    },
    {
      id: "what-to-expect",
      stop: "standing",
      heading: "What to Expect",
      photo: { asset: "pw-christine-greeting", alt: "Christine greeting a client in the Smithtown wellness waiting area", shape: "arch" },
      blocks: [
        { kind: "h3", text: "Before Treatment" },
        { kind: "p", text: "Your therapist may ask about:", lead: true },
        {
          kind: "list",
          style: "bullet",
          items: [
            "Areas of pain, tension, or restricted movement",
            "Relevant diagnoses, injuries, or medical history",
            "Medications or recent procedures that may affect care",
            "Physical activity and repetitive movement patterns",
            "Pressure and positioning preferences",
            "Functional and treatment goals",
          ],
        },
        { kind: "h3", text: "During Treatment" },
        { kind: "p", text: "Your therapist may use a combination of techniques based on the intake findings, your treatment goals, and your comfort." },
        { kind: "p", text: "More pressure is not automatically more clinically appropriate or effective. Communication about pressure, positioning, and sensation is encouraged throughout the session." },
        { kind: "h3", text: "After Treatment" },
        { kind: "p", text: "Your therapist may review your response to treatment, the areas addressed, relevant self-care considerations, and whether follow-up care may be appropriate." },
      ],
    },
    {
      id: "offerings",
      stop: "ivy",
      layout: "wide",
      heading: "Massage Services",
      blocks: [
        { kind: "h3", text: "Medical Massage" },
        { kind: "p", text: "Goal-directed treatment focused on identified symptoms, areas of muscular tension, soft-tissue restriction, or functional concern." },
        { kind: "p", text: "May support: chronic tension, neck and back discomfort, repetitive strain, mobility concerns, and ongoing physical maintenance." },
        { kind: "h3", text: "Sports Massage" },
        { kind: "p", text: "Targeted massage for active individuals, adapted to training demands, muscular tension, movement patterns, and recovery goals." },
        { kind: "p", text: "May support: exercise recovery, athletic training, repetitive movement, and recurring muscle tightness." },
        { kind: "h3", text: "Swedish Massage" },
        { kind: "p", text: "A full-body massage using flowing techniques and adjustable pressure to address general muscular tension and promote relaxation." },
        { kind: "p", text: "May support: general tension, physical stress, and muscular relaxation." },
        { kind: "h3", text: "Pregnancy Massage" },
        { kind: "p", text: "Massage adapted for the physiological and positional considerations of pregnancy." },
        { kind: "p", text: "May support: back and hip discomfort, muscular tension, fatigue, and relaxation during pregnancy." },
        { kind: "h3", text: "Hot Stone Massage" },
        { kind: "p", text: "Heated stones may be incorporated when clinically appropriate to provide localized warmth and support muscular relaxation." },
      ],
    },
    {
      id: "faq",
      stop: "ground",
      layout: "wide",
      heading: "Frequently Asked Questions",
      blocks: [
        {
          kind: "faq",
          items: [
            { q: "Is massage therapy only available through NYSHIP?", a: ["No. Massage therapy at Pathways Within is available to all patients. NYSHIP is accepted for eligible medical massage services."] },
            { q: "What is medical massage?", a: ["Medical massage is goal-directed care focused on identified symptoms, areas of muscular tension or restriction, and functional concerns. Treatment is selected according to the patient's presentation rather than a standard relaxation routine."] },
            { q: "Do you accept NYSHIP?", a: ["Yes. Pathways Within accepts NYSHIP for eligible medical massage services. Call 631-371-3825 for next steps."] },
            { q: "Are your therapists licensed?", a: ["Yes. Massage therapy services are provided by New York State Licensed Massage Therapists."] },
            { q: "Does therapeutic massage hurt?", a: ["Treatment may involve sensitive areas, but it should remain within your tolerance. Your therapist can modify pressure, technique, and positioning throughout the session."] },
            { q: "Do I need an injury to receive massage therapy?", a: ["No. Patients may seek care for chronic tension, mobility concerns, repetitive strain, exercise recovery, stress-related muscular tension, relaxation, or ongoing physical maintenance."] },
            { q: "How often should I receive massage?", a: ["Frequency depends on your symptoms, goals, response to treatment, and any applicable insurance requirements."] },
            { q: "Can massage and acupuncture be combined?", a: ["Yes. Depending on your needs, the two services may complement one another."] },
          ],
        },
      ],
    },
  ],
  closing: {
    heading: "Begin With a Clinical Consultation",
    text: [
      "You do not need to determine which massage technique is appropriate before scheduling.",
      "Tell our Welcome Team what you are experiencing, and we will help identify the appropriate next step.",
    ],
    cta: { label: "Contact Us", href: "/contact" },
  },
};

const acupuncture: PageContent = {
  url: "/services/acupuncture",
  title: "Acupuncture on Long Island — Pathways Within",
  meta: "Individualized clinical acupuncture for pain, tension and functional support. Care at Pathways Within begins with a comprehensive intake and individualized assessment.",
  source: "client revision deck, Page 9",
  eyebrow: "Wellness",
  h1: "Acupuncture",
  subtitle: "Individualized Clinical Care for Pain, Tension & Functional Support",
  intro: [
    "At Pathways Within, acupuncture begins with a comprehensive intake and individualized assessment. Your acupuncturist considers your primary concern alongside factors such as symptom history, movement, stress, sleep, lifestyle, and overall health.",
    "The goal is not to apply the same protocol to everyone. It is to understand your individual presentation and build care around it.",
  ],
  heroCtas: [
    { label: "Contact Our Welcome Team", href: "/contact" },
    { label: "631-371-3825", href: "tel:+16313713825", secondary: true },
  ],
  heroPhoto: { asset: "pw-acu-smithtown", alt: "An acupuncture session at Pathways Within" },
  heroStop: "wide",
  sections: [
    {
      id: "why-acupuncture",
      stop: "cairn",
      heading: "Why Acupuncture?",
      photo: { asset: "cw-ap-needle-closeup", alt: "Acupuncture needles being placed", shape: "blob" },
      blocks: [
        { kind: "p", text: "A presenting symptom is an important place to start, but it may not tell the whole story. Your acupuncturist may ask about timing, severity, sleep, digestion, stress, energy, activity, and other patterns that help provide a broader picture. That information helps guide treatment.", lead: true },
      ],
    },
    {
      id: "may-help-support",
      stop: "pool",
      layout: "wide",
      heading: "Acupuncture May Help Support",
      blocks: [
        {
          kind: "list",
          style: "check",
          items: [
            "Musculoskeletal pain",
            "Neck and shoulder tension",
            "Back discomfort",
            "Joint discomfort",
            "Headaches",
            "Muscular tightness",
            "Exercise and recovery support",
            "Stress-related physical tension",
            "Sleep-related concerns",
            "General relaxation",
            "Ongoing integrative care",
          ],
        },
        { kind: "note", text: "Acupuncture is commonly used as complementary care and should not replace appropriate medical evaluation or treatment." },
      ],
    },
    {
      id: "acupuncture-at-pathways",
      stop: "labyrinth",
      heading: "Acupuncture at Pathways Within",
      photo: { asset: "cw-ap26-acu-leo", alt: "Acupuncturist Leonard Ma with a patient", shape: "blob" },
      blocks: [
        { kind: "p", text: "At Pathways Within, acupuncture can stand on its own or work alongside other care when appropriate. Your provider can coordinate with the broader team, with your permission, if another service becomes useful.", lead: true },
      ],
    },
    {
      id: "initial-session",
      stop: "seated",
      layout: "split-reverse",
      heading: "Initial Acupuncture Session",
      photo: { asset: "cw-ap26-acu-shoulder", alt: "Acupuncture needles placed in a patient’s shoulder", shape: "arch" },
      blocks: [
        { kind: "p", text: "Your first visit begins with a comprehensive intake and assessment. We may talk about pain, tension, injuries, surgeries, digestion, sleep, stress, and any patterns you have noticed—such as symptoms that feel worse in the morning or after overuse.", lead: true },
        { kind: "p", text: "Your practitioner may also use gentle palpation to understand where the body is holding stiffness, tenderness, muscular guarding, or restriction. From there, your treatment is designed around your individual presentation." },
        { kind: "p", text: "Your first session may begin with fewer needles so we can observe your response and adjust care with comfort and safety in mind." },
      ],
    },
    {
      id: "follow-up-session",
      stop: "standing",
      heading: "Follow-Up Acupuncture Session",
      photo: { asset: "cw-ap-treatment-room", alt: "A patient resting with needles placed during a follow-up session", shape: "circle" },
      blocks: [
        { kind: "p", text: "Follow-up sessions build on what we learned during your initial visit. Your provider will check in on what has changed, how you responded, and what still needs attention. Treatment is then adjusted accordingly.", lead: true },
      ],
    },
    {
      id: "when-to-consider",
      stop: "ivy",
      layout: "wide",
      heading: "When Should I Consider Acupuncture?",
      blocks: [
        { kind: "h3", text: "Pain & Injury Recovery" },
        { kind: "p", text: "Pain often affects more than one area of the body. When we favor one side, protect an injury, or move differently because of discomfort, the body can begin to compensate. For knee, hip, back, shoulder, or muscular pain, your practitioner may treat the local area as well as related muscles and points." },
        { kind: "note", text: "For fractures, dislocations, or serious acute injuries, please seek urgent medical care first." },
        { kind: "h3", text: "Muscular Tension, Headaches & Stress-Related Physical Tension" },
        { kind: "p", text: "Acupuncture may be considered for muscular tightness, headaches, and physical tension associated with stress, as well as sleep support and recovery." },
        { kind: "h3", text: "Trigger Point Acupuncture" },
        { kind: "p", text: "A more focused technique for tight, overactive, or restricted muscles. A thin needle is placed into a specific area of muscular tension to encourage release. Mild soreness afterward can happen and is usually short-lived." },
        { kind: "h3", text: "Acupuncture with E-Stim" },
        { kind: "p", text: "E-stim may be added when your practitioner feels your body may benefit from additional support. Small clips are attached to selected needles, creating a gentle pulsing sensation. The intensity is always adjusted to your comfort." },
        { kind: "cta", label: "Cupping Therapy", href: "/services/cupping-therapy", secondary: true },
      ],
    },
    {
      id: "what-to-expect",
      stop: "ground",
      layout: "split-reverse",
      heading: "What to Expect During Your Session",
      photo: { asset: "pw-acu-leo-smile", alt: "Leonard Ma with a patient during an acupuncture visit", shape: "circle" },
      blocks: [
        { kind: "p", text: "After your intake and assessment, your practitioner will place thin, sterile needles based on your treatment plan. You may feel warmth, heaviness, tingling, a dull ache, or a gentle sense of release. Once the needles are placed, you will rest quietly for about 30 minutes.", lead: true },
        { kind: "h3", text: "Before Your Appointment" },
        { kind: "p", text: "Please eat before your session to reduce the chance of feeling lightheaded. Wear comfortable clothing, especially if we are working with areas such as the knees, legs, back, shoulders, or hips." },
        { kind: "h3", text: "After Your Appointment" },
        { kind: "p", text: "Mild soreness, tenderness, or occasional bruising can happen. Drink water, move gently, and avoid overexertion when possible." },
      ],
    },
    {
      id: "faq",
      stop: "cairn",
      layout: "wide",
      heading: "Frequently Asked Questions",
      blocks: [
        {
          kind: "faq",
          items: [
            { q: "Does it hurt?", a: ["You may feel a brief pinch or pressure as a needle is placed. The needles are very thin, and most people describe a dull, warm, or heavy sensation rather than pain."] },
            { q: "Is acupuncture safe?", a: ["Needles are single-use, sterile, and discarded immediately after use. Mild soreness, bruising, or temporary lightheadedness can occur. If you have sensitive skin, bruise easily, or take blood thinners, tell your acupuncturist before your session."] },
            { q: "How many sessions will I need?", a: ["It depends on your concern and how your body responds. Your provider will discuss a plan after your initial session and adjust it as treatment progresses."] },
            { q: "What if I am afraid of needles?", a: ["Tell the Welcome Team or your acupuncturist. Sessions can begin with fewer needles, and needle-free options such as acupressure, ear seeds, or cupping may be considered where appropriate."] },
          ],
        },
      ],
    },
  ],
  closing: {
    heading: "Contact Our Welcome Team",
    text: ["Tell us what you are experiencing and we will help you find a starting point."],
    cta: { label: "Contact Us", href: "/contact" },
  },
};

const cupping: PageContent = {
  url: "/services/cupping-therapy",
  title: "Cupping Therapy on Long Island — Pathways Within",
  meta: "Cupping may be incorporated into massage or acupuncture at Pathways Within as one part of an individualized treatment plan.",
  source: "client revision deck, Page 10",
  eyebrow: "Wellness",
  h1: "Cupping Therapy",
  subtitle: "Understanding Cupping Therapy",
  intro: ["Cupping may be incorporated into massage or acupuncture as one part of an individualized treatment plan."],
  heroPhoto: { asset: "cw-ap26-acu-shoulder", alt: "A treatment on the shoulder at Pathways Within" },
  heroStop: "wide",
  sections: [
    {
      id: "how-it-works",
      stop: "cairn",
      heading: "How Does Cupping Therapy Work?",
      photo: { asset: "cw-ap-treatment-room", alt: "A patient resting on the treatment table during a session", shape: "blob" },
      blocks: [
        { kind: "p", text: "Cupping uses specialized cups to create controlled negative pressure over selected areas of the body. At Pathways Within, it may be used within massage or acupuncture care depending on your goals, provider training, and comfort.", lead: true },
      ],
    },
    {
      id: "massage-based",
      stop: "pool",
      layout: "wide",
      heading: "Massage-Based Cupping",
      blocks: [
        { kind: "p", text: "Massage-based cupping focuses primarily on muscles and soft tissue. Your therapist may use cups to support areas of tension, soreness, restricted movement, or recurring tightness. It can be one useful technique within a broader massage session.", lead: true },
        { kind: "cta", label: "Massage", href: "/services/massage", secondary: true },
      ],
    },
    {
      id: "acupuncture-based",
      stop: "labyrinth",
      layout: "wide",
      heading: "Acupuncture-Based Cupping",
      blocks: [
        { kind: "p", text: "Acupuncture-based cupping is used within an East Asian medicine framework. Your acupuncturist may incorporate cups alongside acupuncture or as part of a broader individualized treatment plan.", lead: true },
        { kind: "cta", label: "Acupuncture", href: "/services/acupuncture", secondary: true },
      ],
    },
    {
      id: "which-approach",
      stop: "seated",
      layout: "split-reverse",
      heading: "Which Approach Is Right for You?",
      photo: { asset: "pr-ap-gc-wellness-navy", alt: "The Garden City wellness waiting room with navy armchairs", shape: "arch" },
      blocks: [
        { kind: "p", text: "You do not need to decide before booking. Tell us what you are experiencing, and your provider can help determine whether cupping is appropriate and how it may best fit into your care.", lead: true },
      ],
    },
    {
      id: "what-to-expect",
      stop: "standing",
      layout: "wide",
      heading: "What to Expect During Your Cupping Session",
      blocks: [
        { kind: "h3", text: "Cupping Session Checklist" },
        {
          kind: "list",
          style: "numbered",
          items: [
            "We will review your health history, areas of concern, and any contraindications before beginning.",
            "Your practitioner will explain whether your session includes massage-based cupping or acupuncture-based cupping.",
            "Cups will be placed on specific areas of the body or gently moved across the skin, depending on your treatment plan.",
            "You may feel gentle to moderate pulling, pressure, warmth, or release, but cupping should not feel sharp or overwhelming.",
            "Suction can be adjusted at any time to support your comfort.",
            "Temporary circular bruise-like marks may appear on the skin and typically fade within several days to a week.",
            "You may feel relaxed, lighter, looser, or mildly tender after your session.",
            "We recommend drinking water afterward and giving your body time to rest.",
          ],
        },
      ],
    },
    {
      id: "individualized-care",
      stop: "ivy",
      heading: "Individualized Care Comes First.",
      photo: { asset: "ha-ap-massage-room", alt: "A quiet massage room at Pathways Within", shape: "circle" },
      blocks: [
        { kind: "p", text: "Cupping is one option—not a requirement. If it makes sense for your goals and treatment plan, your provider can explain why and how it may help support your care.", lead: true },
        { kind: "cta", label: "Contact Us", href: "/contact" },
      ],
    },
    {
      id: "faq",
      stop: "ground",
      layout: "wide",
      heading: "Frequently Asked Questions",
      blocks: [
        {
          kind: "faq",
          items: [
            { q: "Does cupping hurt?", a: ["Cupping should not be painful. Most patients describe the sensation as a gentle pulling, pressure, or release. Your practitioner can adjust the suction at any time."] },
            { q: "Are cupping marks bruises?", a: ["Cupping may leave temporary circular marks on the skin that can look like bruises, but they are a normal response to suction. These marks often fade within a few days to a week."] },
            { q: "Is cupping right for everyone?", a: ["Not always. Please let your practitioner know if you bruise easily, take blood thinners, have fragile or irritated skin, are pregnant, are recovering from surgery, or have any medical condition that may affect your treatment."] },
          ],
        },
      ],
    },
  ],
  closing: {
    heading: "Individualized Care Comes First.",
    text: ["Tell us what you are experiencing, and your provider can help determine whether cupping is appropriate."],
    cta: { label: "Contact Us", href: "/contact" },
  },
};

const cryotherapy: PageContent = {
  url: "/services/cryotherapy",
  title: "Cryotherapy — Pathways Within",
  meta: "From burning off latent emotions to residual pain, cryotherapy is a precision tool with a wide breadth of therapeutic benefits.",
  source: "36-pathwayswithinwellness-com-cryotherapy-1.txt",
  eyebrow: "Wellness",
  h1: "Cryotherapy on Long Island",
  subtitle: "From burning off latent emotions to residual pain, cryotherapy is a precision tool with a wide breadth of therapeutic benefits.",
  intro: [
    "The use of cold as a therapeutic tool is a timeless way to experience localized or whole-body healing. Using subzero immersion to freeze out the unwelcome trauma of your past for a brighter future is possible with Cryotherapy.",
  ],
  heroPhoto: { asset: "cw-sea-rocks-alone", alt: "Dark sea rocks along a cold shoreline" },
  heroStop: "wide",
  sections: [
    {
      id: "cold-therapy-101",
      stop: "cairn",
      heading: "Cold Therapy 101",
      photo: { asset: "cw-lake-dusk", alt: "A still lake at dusk", shape: "blob" },
      blocks: [
        { kind: "p", text: "A brief exposure to extreme cold sounds like a dare you take or an accidental experience you don’t want to repeat, but sometimes the most surprising things can create holistic healing at a cellular level.", lead: true },
        { kind: "p", text: "In an enclosed space, you’ll be plunged into temperatures of up to -300°F for a brief period of time to provoke a myriad of benefits to body, mind, and spirit. The cold is created by liquid nitrogen, designed to ultra chill your skin and all the blood running close to it to create a holistic response of regeneration." },
        { kind: "p", text: "With benefits at every level of your being, this ancient therapy has incredible applications for pain of many kinds. From physical to physiological, the cold truly can sink straight into all elements of your being. The benefits of cryotherapy are so much more than skin-deep." },
        { kind: "p", text: "Every facet of your human experience may find some space to heal with cryotherapy, especially if you experience:" },
      ],
    },
    {
      id: "benefits",
      stop: "pool",
      layout: "wide",
      heading: "Benefits of Cryotherapy",
      blocks: [
        {
          kind: "list",
          style: "pills",
          items: [
            "Pain from Injuries",
            "Anxiety",
            "Arthritis",
            "Inflammation",
            "Nerve Pain",
            "Atopic Dermatitis",
            "Migraines",
            "Eczema",
            "Depression",
            "Mood disorders",
          ],
        },
      ],
    },
    {
      id: "talking-bodies",
      stop: "labyrinth",
      layout: "split-reverse",
      heading: "Talking Bodies",
      photo: { asset: "cw-sea-foam-stones", alt: "Sea foam washing over smooth stones", shape: "arch" },
      blocks: [
        { kind: "p", text: "The environments we exist in communicate constantly with our bodies. Both physical and emotional body conversations occur with what’s going on around you to manage the way your muscles and bones move as well as the way your emotions engage with whatever you are experiencing. Using Cryotherapy, we can slow the cellular response while heightening the oxygenation of your blood and tissues. When the temperature drops in such an extreme way, your whole body will respond.", lead: true },
        { kind: "p", text: "This new and unexpected shift of environment can help to stop chronic conditions in their tracks. Because it is highly effective and minimally invasive, cryotherapy can be used to treat comprehensive and chronic conditions or applied in more localized manners for acute difficulties. From ice packs to immersive chambers, cryotherapy can help." },
      ],
    },
    {
      id: "inflammation",
      stop: "seated",
      heading: "Spotlight: Inflammation Management",
      photo: { asset: "cw-water-drop", alt: "A single drop of water sending ripples across a still surface", shape: "circle" },
      blocks: [
        { kind: "p", text: "Inflammation is not just something that happens to our joints or in response to physical injury. Our whole bodies are subject to react with an inflammatory response to the things we experience." },
        { kind: "p", text: "When our fight-or-flight reflex is engaged, it’s similar to an inflammatory response. Your body is flooded with hormones preparing you for action both mentally and physically. It can be helpful if you are in crisis or require immediate action." },
        { kind: "p", text: "But what happens when you’re experiencing those floods of hormones chronically, and the inflammatory response becomes a constant contention?" },
        { kind: "p", text: "Pain - Both emotional and physical pain are the result of those responses." },
        { kind: "p", text: "Cryotherapy is an age-old tool that can help you to manage not just the way your body responds to new pain, but how you flush out the hurt that lingers there as well.", lead: true },
      ],
    },
    {
      id: "faq",
      stop: "standing",
      layout: "wide",
      heading: "Frequently Asked Questions",
      blocks: [
        {
          kind: "faq",
          intro: "You’ve got questions, and we’ve got answers. Some of our most-asked questions are here but if there’s something else on your mind, we love to chat. Feel free to reach out and let us help you apply a laser focus to your wellness dreams.",
          items: [
            { q: "Is is dangerous?", a: ["While there are always risks to exposure therapies of any kind, the danger of extreme cold is well controlled in our therapy chambers. We keep you as safe as possible through careful consideration while making healing the central focus.", "If you have diabetes, you should avoid cryotherapy. For other health conditions, ask your physician before we begin."] },
            { q: "What should i wear?", a: ["We will ensure you feel well-prepared before undertaking your first session.", "Loose-fitting and dry clothing are key to protecting skin from the risk of extreme cold. Socks and gloves will also help to prevent your extremities from experiencing potentially uncomfortable side effects like numbness, redness, or tingling that can occur temporarily after cryotherapy."] },
            { q: "How long do I go to Cryotherapy?", a: ["Individual sessions are brief. For whole-body cryotherapy, you’ll be in the chamber for less than 4 minutes and your whole appointment will be less than a half-hour. Localized therapy varies over time. You may see benefits from one treatment and follow up with visits as often as twice weekly as long as you are seeing results. Some athletes even do daily cryotherapy at home!"] },
            { q: "How can the cold help my mood?", a: ["While the body’s response to physical pain is not directly correlated to emotional pain, creating a shocking change to the physical systems can jar our emotional ones.", "By inducing vasoconstriction and sending the blood flow racing back toward your core, we can create higher levels of oxygenation and a wave of endorphins and enzymes that support your emotional wellbeing and, as a result, your mood."] },
          ],
        },
      ],
    },
  ],
  closing: {
    heading: "True beauty starts from within.",
    text: ["Complement your wellness journey with expert therapy services that nurture your mind and soul."],
    cta: { label: "Discover the power of emotional healing today.", href: "/contact" },
  },
};

const energyWork: PageContent = {
  url: "/services/energy-work",
  title: "Energy Work: IET, ITA & Reiki — Pathways Within",
  meta: "Discover transformative methods designed to balance your mind, body, and spirit. Our Energy Work offerings, Integrative Energy Therapy (IET), Integrated Therapeutic Alignment (ITA), and Reiki, are rooted in gentle, hands-on healing.",
  source: "35-pathwayswithinwellness-com-energy-work.txt, 37-pathwayswithinwellness-com-reiki.txt, 38-pathwayswithinwellness-com-integrative-energy-therapy.txt",
  eyebrow: "Mind-Body Support",
  h1: "Energy Work",
  intro: [
    "Discover transformative methods designed to balance your mind, body, and spirit. Our Energy Work offerings are rooted in gentle, hands-on healing that supports deep relaxation, emotional processing, and holistic well‑being.",
  ],
  heroPhoto: { asset: "cw-sunlit-meditation", alt: "A woman meditating in warm sunlight beside a plant" },
  heroStop: "wide",
  heroCtas: [{ label: "Contact Us", href: "/contact" }],
  sections: [
    {
      id: "iet",
      stop: "cairn",
      heading: "Integrative Energy Therapy (IET)",
      photo: { asset: "cw-self-embrace-yellow", alt: "A smiling woman in yellow wrapping her arms around herself", shape: "blob" },
      blocks: [
        { kind: "p", text: "Ready to release what’s been holding you back? IET gently clears emotional blocks stored in the body and helps you feel lighter, more grounded, and open to positive change. It’s especially supportive for those processing trauma, anxiety, or life transitions.", lead: true },
        { kind: "p", text: "Everything that’s ever happened to you still lives inside you—good, bad, and in between. When you experience something, and it becomes covered up, erased, or denied by will or happenstance, it doesn’t just disappear. IET is a hands-on healing therapy that seeks out trapped energy in your body." },
        { kind: "p", text: "The practice of energy therapy is colloquially referred to as, “removing the issues from the tissues”. Much like yoga or acupuncture, IET is a subtle and targeted approach. From regularly scheduled treatments to intermittent maintenance, the balance of benefit and time commitment is as unique as the life you’ve lived." },
      ],
    },
    {
      id: "practitioner",
      stop: "seated",
      layout: "wide",
      blocks: [
        {
          kind: "person",
          slug: "tia-baumohl",
          eyebrow: "CERTIFIED COACH & ENERGY MEDICINE PRACTITIONER",
          name: "Tia Baumohl",
          paragraphs: ["Tia's work is rooted in helping people navigate change with greater clarity, connection, and confidence."],
          cta: { label: "Work with Tia Baumohl", href: "/team/tia-baumohl" },
        },
      ],
    },
    {
      id: "ita",
      stop: "pool",
      layout: "split-reverse",
      heading: "Integrated Therapeutic Alignment (ITA)",
      photo: { asset: "cw-water-drop", alt: "A single drop of water sending ripples across a still surface", shape: "arch" },
      blocks: [
        { kind: "p", text: "Integrated Therapeutic Alignment is a gentle, energy-based healing modality designed to bring the body, mind, emotions, and energy system back into balance. By working with key energetic connection points, ITA helps identify and release stored emotions, limiting beliefs, and patterns that may be contributing to stress, discomfort, or imbalance. This restorative practice supports deep relaxation, emotional clarity, and a greater sense of harmony from within." },
      ],
    },
    {
      id: "reiki",
      stop: "labyrinth",
      heading: "Reiki (Universal Life Energy)",
      photo: { asset: "cw-face-to-sun", alt: "A woman lifting her face toward the sun", shape: "blob" },
      blocks: [
        { kind: "p", text: "Feel your stress melt away with this soothing, hands-on practice that promotes deep relaxation and emotional clarity. Reiki is ideal for anyone seeking peace, energetic balance, or a spiritual reset—whether as a standalone practice or in combination with talk therapy.", lead: true },
        { kind: "p", text: "Reiki is a technique developed in Japan to reduce stress and improve healing. It’s not religious in nature, which is great for both people of faith and those who are nonreligious because it enhances your inner spirit regardless of your belief system." },
        { kind: "h3", text: "A Typical Reiki Session" },
        { kind: "p", text: "Reiki can be done with or without touching. You would lay fully dressed on a comfortable table and your practitioner would either hover their hands around certain areas or if you’re comfortable, they may lightly touch those areas. People often report feeling heat or tingling where the practitioner is working. Some people even fall asleep because the practice is so peaceful and relaxing." },
      ],
    },
    {
      id: "faq",
      stop: "ground",
      layout: "wide",
      heading: "Frequently Asked Questions",
      blocks: [
        {
          kind: "faq",
          items: [
            { q: "How is IET different from Reiki?", a: ["While the healing practices sound similar in the way that they occur, the distinct difference between them lies in the system they seek to align. IET strives to release stored trauma getting in the way of energy flow, while chakra alignment and aura are central to the healing that takes place in Reiki."] },
            { q: "What does IET feel like?", a: ["Most of our clients find the sensations and overall experience of their session to be deeply relaxing. Over the course of your hour-long energy release, you may find yourself moving through different stages of awareness. You may experience a dreamlike state and afterward, your mood may be more joyful."] },
            {
              q: "Do we talk during IET?",
              a: [
                "While undergoing your IET session, you can choose whether you’d like to just sink into the experience or integrate talk therapy into the moment to work through what you’re feeling.",
                "Either way, we will always create the space to move through what your energy pathways reveal when you are ready in a supportive environment.",
              ],
            },
            { q: "How often should I have Reiki?", a: ["As often as you like! You can start with a few consecutive sessions, or plan on Reiki once a week or once every two weeks."] },
            { q: "Can energy work replace my medical treatment?", a: ["Energy work is meant to work in conjunction with any treatments you are already doing. If you’re taking medication or following other procedures directed by a doctor, you should continue to do so."] },
          ],
        },
      ],
    },
  ],
  closing: {
    heading: "Ready to release what’s been holding you back?",
    cta: { label: "Contact Us", href: "/contact" },
  },
};

const functionalMedicine: PageContent = {
  url: "/services/functional-medicine",
  title: "Functional Medicine with Ascend Functional Health — Pathways Within",
  meta: "Through our collaboration with Ascend Functional Health, Pathways Within patients can access personalized functional medicine services that support a more complete picture of health.",
  source: "Pathways_Within_Functional_Medicine_Website_Copy.docx (client, Nov 9 2026)",
  eyebrow: "Mind-Body Support",
  h1: "Functional Medicine",
  subtitle: "Understanding Your Body. Supporting Your Whole Self.",
  intro: [
    "At Pathways Within, we recognize that physical, mental, and emotional well-being are deeply connected. Through our collaboration with Ascend Functional Health, we're expanding the resources available to our patients, offering access to personalized functional medicine services that support a more complete picture of health.",
  ],
  heroPhoto: { asset: "cw-kitchen-morning", alt: "A calm morning moment at home in the kitchen" },
  heroStop: "wide",
  heroCtas: [{ label: "Contact Us", href: "/contact" }],
  sections: [
    {
      id: "whole-person",
      stop: "cairn",
      heading: "A Whole-Person Approach to Feeling Better",
      photo: { asset: "cw-riverside-walk", alt: "A person walking along a riverside path", shape: "blob" },
      blocks: [
        { kind: "p", text: "How we sleep, eat, move, manage stress, and care for our bodies can all influence how we think, feel, and navigate everyday life.", lead: true },
        { kind: "p", text: "Functional medicine builds on the Pathways Within philosophy of 360° care by looking beyond individual symptoms to explore the many factors that may contribute to overall health. This approach recognizes that every person has a unique health history, lifestyle, and set of wellness goals." },
        { kind: "quote", text: "Because your health isn't one-dimensional. Your care shouldn't be either." },
      ],
    },
    {
      id: "what-is-functional-medicine",
      stop: "pool",
      layout: "split-reverse",
      heading: "What Is Functional Medicine?",
      photo: { asset: "pr-laptop-at-home", alt: "A person joining a virtual health session from home", shape: "arch" },
      blocks: [
        { kind: "p", text: "Functional medicine takes a personalized, whole-body approach to health. Rather than viewing symptoms in isolation, it explores how nutrition, lifestyle, hormones, stress, and other factors may be connected.", lead: true },
        { kind: "p", text: "Through comprehensive assessments, targeted testing when appropriate, and individualized care plans, functional medicine helps patients better understand their bodies and identify potential contributors to ongoing health concerns." },
      ],
    },
    {
      id: "how-it-can-help",
      stop: "labyrinth",
      layout: "wide",
      heading: "How Functional Medicine Can Help",
      blocks: [
        { kind: "p", text: "Functional medicine may offer additional insight and support for individuals experiencing:" },
        {
          kind: "list",
          style: "pills",
          items: [
            "Chronic fatigue and low energy",
            "Digestive and gut health concerns",
            "Hormonal and thyroid imbalances",
            "Brain fog and difficulty concentrating",
            "Inflammation and autoimmune-related concerns",
            "Metabolic health and weight management challenges",
            "Persistent or unexplained symptoms",
          ],
        },
      ],
    },
    {
      id: "personalized-care",
      stop: "seated",
      layout: "wide",
      heading: "Personalized Care, Connected to Your Needs",
      blocks: [
        { kind: "p", text: "Through Ascend Functional Health, patients can access care tailored to their individual concerns and goals.", lead: true },
        {
          kind: "steps",
          items: [
            { title: "Comprehensive Assessment", text: "A detailed review of your medical history, symptoms, lifestyle, and wellness goals helps build a more complete picture of your health." },
            { title: "Targeted Testing", text: "When clinically appropriate, laboratory testing may provide additional insight into nutritional status, hormone levels, metabolic health, and other factors." },
            { title: "Individualized Care Plans", text: "Based on your assessment and clinical findings, recommendations may include nutrition, lifestyle modifications, and other targeted strategies to support overall well-being." },
            { title: "Ongoing Guidance", text: "Follow-up assessments and progress monitoring allow your care plan to evolve as your needs and goals change." },
          ],
        },
      ],
    },
    {
      id: "dr-alessi",
      stop: "standing",
      layout: "wide",
      heading: "Meet Dr. Alfred Alessi, DC, IHP",
      blocks: [
        {
          kind: "person",
          slug: "alfred-alessi",
          noPhoto: true,
          eyebrow: "FOUNDER & CLINICAL DIRECTOR, ASCEND FUNCTIONAL HEALTH",
          name: "Dr. Alfred Alessi",
          credentials: "DC, IHP",
          paragraphs: [
            "Dr. Alfred Alessi is a **Doctor of Chiropractic and Integrative Health Practitioner** with more than 10 years of experience in health and wellness. As the founder and clinical director of Ascend Functional Health, he brings a personalized, whole-body approach to care, focusing on understanding the underlying factors that influence health and well-being.",
            "His background spans **functional medicine, functional nutrition, neurology, and physical health**. Before entering healthcare, Dr. Alessi worked as a personal trainer and strength and conditioning specialist, developing an appreciation for how the body's systems work together.",
            "He earned his Doctor of Chiropractic degree and pursued additional training in Functional Neurology, Myoneural Medicine, and Functional Nutrition.",
            "Through his work at Ascend Functional Health, Dr. Alessi emphasizes comprehensive assessments, individualized care plans, and practical lifestyle strategies designed to support long-term health.",
            "His philosophy aligns with Pathways Within's commitment to understanding the whole person and helping patients make informed decisions about their health.",
          ],
          cta: { label: "Visit Ascend Functional Health", href: "https://ascendfunctionalhealth.com/" },
        },
      ],
    },
  ],
  closing: {
    heading: "Curious whether functional medicine may be right for you?",
    text: ["Through our collaboration with Ascend Functional Health, Pathways Within can help connect you with specialized resources to explore your health concerns and wellness goals."],
    cta: { label: "Contact Us", href: "/contact" },
  },
};

const christineCervo: PageContent = {
  url: "/team/christine-cervo",
  title: "Christine Cervo — Pathways Within",
  meta: "Christine has a gift for noticing what others may miss.",
  source: "47-pathwayswithinwellness-com-christine-cervo.txt, bios-2026-10-26.txt",
  eyebrow: "LICENSED MASSAGE THERAPIST",
  h1: "Christine Cervo",
  intro: ["Christine has a gift for noticing what others may miss. Through years of working closely with people, she has developed an intuitive understanding of the connection between the body, emotions, and overall well-being. Clients often describe feeling deeply heard and cared for because Christine does more than focus on where something hurts. She takes the time to understand the whole person and how different areas of the body work together."],
  heroPhoto: { asset: "ha-ap-massage-room", alt: "A massage room at Pathways Within" },
  heroStop: "wide",
  sections: [
    {
      id: "bio",
      stop: "cairn",
      layout: "wide",
      blocks: [
        {
          kind: "person",
          slug: "christine-cervo",
          eyebrow: "LICENSED MASSAGE THERAPIST",
          name: "Christine Cervo",
          paragraphs: [
            "Christine has a gift for noticing what others may miss. Through years of working closely with people, she has developed an intuitive understanding of the connection between the body, emotions, and overall well-being. Clients often describe feeling deeply heard and cared for because Christine does more than focus on where something hurts. She takes the time to understand the whole person and how different areas of the body work together.",
            "After 16 years as a medical assistant, Christine felt called toward a more holistic approach to helping people feel better. She brings that same compassion and clinical understanding into her massage practice, combining medical knowledge with advanced bodywork techniques. Her work includes medical massage, manual lymph drainage, pregnancy massage, deep tissue, somatic techniques, orthopedic massage, and more. Whether helping someone recover from an injury, manage discomfort, support healing after surgery, or simply reconnect with their body, Christine creates a space where people feel safe, supported, and truly cared for.",
          ],
          cta: { label: "Work with Christine Cervo", href: "/contact" },
        },
        {
          kind: "list",
          style: "bullet",
          items: [
            "Christine brings a unique blend of clinical massage expertise, intuition, and deep listening to every session, helping clients feel understood and cared for.",
            "Specializing in medical massage, manual lymph drainage, pregnancy massage, deep tissue, somatic techniques, orthopedic massage, and cupping.",
            "Her whole-body approach focuses on helping clients recover from pain, injury, swelling, and physical stress while reconnecting with their bodies and feeling their best.",
          ],
        },
      ],
    },
    {
      id: "approach",
      stop: "pool",
      photo: { asset: "cw-ap-massage-session", alt: "A massage session at Pathways Within", shape: "blob" },
      blocks: [
        { kind: "cta", label: "Massage", href: "/services/massage", secondary: true },
      ],
    },
    {
      id: "room",
      stop: "labyrinth",
      layout: "split-reverse",
      photo: { asset: "pr-ap-ns-massage-green", alt: "A green massage treatment room with an In Session sign on the door", shape: "arch" },
      blocks: [
        { kind: "cta", label: "Cupping Therapy", href: "/services/cupping-therapy", secondary: true },
      ],
    },
  ],
  closing: {
    heading: "Work with Christine Cervo",
    cta: { label: "Work with Christine Cervo", href: "/contact" },
  },
};

const leonardMa: PageContent = {
  url: "/team/leonard-ma",
  title: "Leonard Ma — Pathways Within",
  meta: "Leonard believes healing is not just about addressing where something hurts.",
  source: "48-pathwayswithinwellness-com-leonard-ma.txt, bios-2026-10-26.txt",
  eyebrow: "LICENSED ACUPUNCTURIST",
  h1: "Leonard Ma",
  intro: ["Leonard believes healing is not just about addressing where something hurts. It’s about understanding the whole person behind the symptoms. As an acupuncturist, he works with patients experiencing physical challenges such as muscle tension, joint discomfort, inflammation, and pain, while also recognizing the powerful connection between the body, emotions, and overall well-being. His calm, thoughtful approach allows patients to feel seen and supported as they work toward greater balance."],
  heroPhoto: { asset: "cw-ap26-acu-leo", alt: "Acupuncturist Leonard Ma with a teen client" },
  heroStop: "wide",
  sections: [
    {
      id: "bio",
      stop: "cairn",
      layout: "wide",
      blocks: [
        {
          kind: "person",
          slug: "leonard-ma",
          eyebrow: "LICENSED ACUPUNCTURIST",
          name: "Leonard Ma",
          paragraphs: [
            "Leonard believes healing is not just about addressing where something hurts. It’s about understanding the whole person behind the symptoms. As an acupuncturist, he works with patients experiencing physical challenges such as muscle tension, joint discomfort, inflammation, and pain, while also recognizing the powerful connection between the body, emotions, and overall well-being. His calm, thoughtful approach allows patients to feel seen and supported as they work toward greater balance.",
            "His connection to acupuncture began early in life through his own experiences receiving care and witnessing its impact on those around him. During his clinical training, Leonard became especially interested in the way acupuncture could support emotional well-being in addition to physical health. That perspective continues to guide his work today. At Pathways Within, Leonard is passionate about being part of a collaborative approach to wellness, one where healthcare professionals work together to support the complete person. His goal is simple: to help patients feel better, regain balance, and move forward with greater ease.",
          ],
          cta: { label: "Work with Leonard", href: "/contact" },
        },
        {
          kind: "list",
          style: "bullet",
          items: [
            "Leonard combines traditional acupuncture expertise with a deep understanding of the connection between physical, mental, and emotional wellness.",
            "His approach goes beyond symptom relief, helping patients find greater balance through personalized, whole-person care.",
            "With a calm presence and a genuine passion for helping people feel better in their bodies and lives, Leonard creates a space where patients feel understood, supported, and cared for.",
          ],
        },
      ],
    },
    {
      id: "acupuncture",
      stop: "pool",
      photo: { asset: "cw-ap26-acu-needles", alt: "Acupuncture needles being placed", shape: "blob" },
      blocks: [
        { kind: "cta", label: "Acupuncture", href: "/services/acupuncture", secondary: true },
      ],
    },
    {
      id: "session",
      stop: "labyrinth",
      layout: "split-reverse",
      photo: { asset: "pw-acu-leo-smile", alt: "An acupuncture session at Pathways Within", shape: "arch" },
      blocks: [
        { kind: "cta", label: "Cupping Therapy", href: "/services/cupping-therapy", secondary: true },
      ],
    },
  ],
  closing: {
    heading: "Work with Leonard",
    cta: { label: "Work with Leonard", href: "/contact" },
  },
};

const tiaBaumohl: PageContent = {
  url: "/team/tia-baumohl",
  title: "Tia Baumohl — Pathways Within",
  meta: "Tia's work is rooted in helping people navigate change with greater clarity, connection, and confidence.",
  source: "49-pathwayswithinwellness-com-tia-baumohl.txt",
  eyebrow: "CERTIFIED COACH & ENERGY MEDICINE PRACTITIONER",
  h1: "Tia Baumohl",
  intro: ["Tia's work is rooted in helping people navigate change with greater clarity, connection, and confidence."],
  heroPhoto: { asset: "ha-tia-baumohl", alt: "Tia Baumohl, Certified Coach & Energy Medicine Practitioner" },
  heroStop: "wide",
  sections: [
    {
      id: "bio",
      stop: "cairn",
      layout: "wide",
      blocks: [
        {
          kind: "person",
          slug: "tia-baumohl",
          eyebrow: "CERTIFIED COACH & ENERGY MEDICINE PRACTITIONER",
          name: "Tia Baumohl",
          paragraphs: [
            "She began her career supporting mothers and their partners through pregnancy and labor, giving her more than a decade of experience guiding people through some of life's most transformative moments. Over the past five years, she has expanded that work through energy medicine and coaching, supporting individuals and couples as they move through challenging dynamics, strengthen communication, and uncover new possibilities.",
            "Tia is trained in a range of modalities that may help ease anxiety, depression, and nervous system dysregulation. Her approach is warm, strategic, and deeply holistic, helping clients build self-awareness, create meaningful breakthroughs, and move toward lasting personal growth.",
          ],
          cta: { label: "Work with Tia Baumohl", href: "/contact" },
        },
      ],
    },
    {
      id: "coaching",
      stop: "pool",
      photo: { asset: "cw-ap26-hands", alt: "A coaching conversation around a small wooden table", shape: "blob" },
      blocks: [
        { kind: "p", text: "Tia's work is rooted in helping people navigate change with greater clarity, connection, and confidence.", lead: true },
        { kind: "cta", label: "Performance & Wellness Coaching", href: "/services/performance-wellness-coaching" },
      ],
    },
    {
      id: "energy-work",
      stop: "labyrinth",
      layout: "split-reverse",
      photo: { asset: "cw-sunlit-meditation", alt: "A woman meditating in warm sunlight", shape: "arch" },
      blocks: [
        { kind: "p", text: "Her approach is warm, strategic, and deeply holistic, helping clients build self-awareness, create meaningful breakthroughs, and move toward lasting personal growth." },
        { kind: "cta", label: "Energy Work", href: "/services/energy-work", secondary: true },
      ],
    },
  ],
  closing: {
    heading: "Work with Tia Baumohl",
    cta: { label: "Work with Tia Baumohl", href: "/contact" },
  },
};

const danielleIngenito: PageContent = {
  url: "/team/danielle-ingenito",
  title: "Danielle Ingenito — Pathways Within",
  meta: "Danielle understands that what we carry doesn't always stay in our minds.",
  source: "50-pathwayswithinwellness-com-danielle-ingenito.txt, bios-2026-10-26.txt",
  eyebrow: "LICENSED MASSAGE THERAPIST",
  h1: "Danielle Ingenito",
  intro: ["Danielle understands that what we carry doesn't always stay in our minds. Stress can become tension. Overwork can become pain. An injury, headache, or persistent ache can affect far more than one part of the body. Having experienced the impact of high stress herself, Danielle discovered practices that helped her reconnect with a sense of balance—and ultimately found a calling in helping others do the same.For Danielle, there are no shortcuts when it comes to understanding and caring for the body. After completing an intensive two-year clinical massage program and more than 1,100 hours of classroom and clinical training, she built her experience in spas, wellness centers, chiropractic clinics, and private practice before returning to New York."],
  heroPhoto: { asset: "pr-ap-ns-massage-green", alt: "A green massage treatment room at Pathways Within" },
  heroStop: "wide",
  sections: [
    {
      id: "bio",
      stop: "cairn",
      layout: "wide",
      blocks: [
        {
          kind: "person",
          slug: "danielle-ingenito",
          eyebrow: "LICENSED MASSAGE THERAPIST",
          name: "Danielle Ingenito",
          paragraphs: [
            "Danielle understands that what we carry doesn't always stay in our minds. Stress can become tension. Overwork can become pain. An injury, headache, or persistent ache can affect far more than one part of the body. Having experienced the impact of high stress herself, Danielle discovered practices that helped her reconnect with a sense of balance—and ultimately found a calling in helping others do the same.For Danielle, there are no shortcuts when it comes to understanding and caring for the body. After completing an intensive two-year clinical massage program and more than 1,100 hours of classroom and clinical training, she built her experience in spas, wellness centers, chiropractic clinics, and private practice before returning to New York.",
            "Today, after 12 years in the field, she brings her skills to Pathways because she believes massage belongs in a broader, holistic approach to wellness. Whether someone is navigating chronic pain, injury, stress, or simply the tension of everyday life, Danielle meets them with patience, knowledge, and deep respect for the trust they place in her. Years from now, she knows she will look back and know how many people she helped feel better, how many allowed her to be part of their journey, and those she has been privileged to serve and guide toward a healthier mind, body, and soul.",
          ],
          cta: { label: "Work with Danielle", href: "/contact" },
        },
        {
          kind: "list",
          style: "bullet",
          items: [
            "Danielle is a clinically trained massage therapist who sees the body as a whole—because pain, tension, injury, and stress rarely exist in isolation.",
            "With 1,100+ hours of clinical and classroom training and dual licensure in New York and Connecticut, she draws from deep tissue, trigger point, Swedish, sports massage, and acupressure techniques.",
            "Most importantly, Danielle considers every client's trust an honor—and every step toward feeling better a journey she is privileged to share.",
          ],
        },
      ],
    },
    {
      id: "massage",
      stop: "pool",
      photo: { asset: "cw-ap-massage-session", alt: "A massage session at Pathways Within", shape: "blob" },
      blocks: [
        { kind: "cta", label: "Massage", href: "/services/massage", secondary: true },
      ],
    },
    {
      id: "room",
      stop: "labyrinth",
      layout: "split-reverse",
      photo: { asset: "ha-ap-massage-room", alt: "A massage room at Pathways Within", shape: "arch" },
      blocks: [
        { kind: "cta", label: "Cupping Therapy", href: "/services/cupping-therapy", secondary: true },
      ],
    },
  ],
  closing: {
    heading: "Work with Danielle",
    cta: { label: "Work with Danielle", href: "/contact" },
  },
};

export const wellnessPages: PageContent[] = [
  massage,
  acupuncture,
  cupping,
  cryotherapy,
  energyWork,
  functionalMedicine,
  christineCervo,
  leonardMa,
  tiaBaumohl,
  danielleIngenito,
];

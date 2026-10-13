import type { PageContent } from "../types";

/**
 * Wellness (Massage, Acupuncture, Cupping), Mind-Body Support (Energy Work,
 * Reiki, IET) and wellness provider bio pages. Massage, Acupuncture and Cupping
 * copy comes from the client revision deck. IV Vitamin Therapy is on hold and
 * Cryotherapy is outside the three service buckets; neither is built.
 */

const massage: PageContent = {
  url: "/services/massage",
  title: "Massage Therapy on Long Island — Pathways Within",
  meta: "Clinical massage therapy for pain, muscular tension, mobility and recovery. New York State Licensed Massage Therapists at Pathways Within provide individualized, clinically informed care. NYSHIP accepted for eligible medical massage.",
  source: "client revision deck, Page 8",
  eyebrow: "Wellness",
  h1: "Massage Therapy on Long Island",
  subtitle: "Clinical Massage Therapy for Pain, Muscular Tension, Mobility & Recovery",
  intro: [
    "At Pathways Within, our New York State Licensed Massage Therapists provide individualized, clinically informed massage therapy based on your symptoms, health history, physical presentation, and goals.",
    "Each session begins with a focused intake so your therapist can understand what is bothering you and tailor care accordingly.",
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
        { kind: "p", text: "Massage therapy is a licensed healthcare profession in New York State. Our therapists review your symptoms, health history, areas of pain or restriction, and treatment goals before care begins. Pressure, positioning, techniques, and areas of focus are adjusted based on what you need—not a predetermined routine.", lead: true },
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
        { kind: "p", text: "Massage may complement medical, rehabilitative, mental health, or other integrative care when appropriate." },
      ],
    },
    {
      id: "what-makes-us-different",
      stop: "labyrinth",
      eyebrow: "What Makes Pathways Within Different?",
      heading: "Clinical Care Within a Whole-Person Context",
      photo: { asset: "pr-ap-ns-massage-green", alt: "A green massage treatment room with an In Session sign on the door", shape: "arch" },
      blocks: [
        { kind: "p", text: "Pain and tension do not always exist in isolation. Stress, sleep, movement, activity, posture, injury, and daily habits can all influence how your body feels.", lead: true },
        { kind: "p", text: "Massage may be used on its own or alongside other Pathways Within services. You are never required to use multiple services. The difference is that you have a team around you if additional support becomes helpful." },
      ],
    },
    {
      id: "nyship",
      stop: "seated",
      heading: "NYSHIP Medical Massage",
      photo: { asset: "pr-intake-clipboard", alt: "An intake clipboard", shape: "circle" },
      blocks: [
        { kind: "p", text: "If you have NYSHIP coverage, medical massage may be available when eligibility and plan requirements are met. Contact the Welcome Team at 631-371-3825 for next steps.", lead: true },
        { kind: "cta", label: "Contact the Welcome Team", href: "/contact" },
      ],
    },
    {
      id: "offerings",
      stop: "standing",
      layout: "wide",
      heading: "Massage Offerings",
      blocks: [
        { kind: "h3", text: "Medical Massage" },
        { kind: "p", text: "Goal-directed treatment focused on muscular tension, soft-tissue restriction, discomfort, or functional concerns." },
        { kind: "h3", text: "Sports Massage" },
        { kind: "p", text: "Targeted massage adapted to training demands, movement patterns, recurring tension, and recovery goals." },
        { kind: "h3", text: "Swedish Massage" },
        { kind: "p", text: "A full-body massage using flowing techniques and adjustable pressure to support relaxation and general muscular tension." },
        { kind: "h3", text: "Pregnancy Massage" },
        { kind: "p", text: "Massage adapted for the physiological and positional considerations of pregnancy." },
        { kind: "h3", text: "Hot Stone Massage" },
        { kind: "p", text: "Heated stones may be incorporated when appropriate to provide localized warmth and support muscular relaxation." },
        { kind: "h3", text: "Massage-Based Cupping" },
        { kind: "p", text: "Cupping may be incorporated by appropriately trained providers as one part of an individualized massage treatment plan." },
        { kind: "cta", label: "Cupping Therapy", href: "/services/cupping-therapy", secondary: true },
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
            { q: "Does massage hurt?", a: ["Massage should not be painful. Pressure is adjusted to your comfort and to what your therapist finds during the session. If an area is sensitive, tell your therapist and the approach will change."] },
            { q: "What should I expect afterward?", a: ["You may feel relaxed, looser, or mildly tender in the areas treated. Drink water and give your body time to rest when you can."] },
            { q: "How do I prepare?", a: ["Drink water before your session and wear comfortable clothing. Let your therapist know about any injuries, conditions, medications, or areas you would like to avoid."] },
            { q: "Is massage safe for me?", a: ["Your therapist reviews your health history and current symptoms before care begins and adapts the session accordingly. If a particular technique is not appropriate for you, it will not be used."] },
            { q: "Do I need to be a therapy patient to book massage?", a: ["No. Massage therapy is available to all patients, whether or not you receive other services at Pathways Within."] },
          ],
        },
      ],
    },
  ],
  closing: {
    heading: "Contact Our Welcome Team",
    text: ["Tell us what is bothering you and we will help you find a starting point."],
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
  heroPhoto: { asset: "cw-ap-acupuncture-session", alt: "An acupuncture session at Pathways Within" },
  heroStop: "wide",
  sections: [
    {
      id: "why-acupuncture",
      stop: "cairn",
      heading: "Why Acupuncture?",
      photo: { asset: "cw-ap26-acu-needles", alt: "Acupuncture needles being placed", shape: "blob" },
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
      photo: { asset: "cw-ap-shoulder-needles", alt: "A patient resting with needles placed along the shoulder", shape: "circle" },
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
      photo: { asset: "cw-ap-needle-closeup", alt: "A close-up of a single acupuncture needle", shape: "circle" },
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

const energyWork: PageContent = {
  url: "/services/energy-work",
  title: "Energy Work — Pathways Within",
  meta: "Discover transformative methods designed to balance your mind, body, and spirit. Our Energy Work offerings are rooted in gentle, hands-on healing that supports deep relaxation, emotional processing, and holistic well‑being.",
  source: "35-pathwayswithinwellness-com-energy-work.txt",
  eyebrow: "Mind-Body Support",
  h1: "Energy Work",
  intro: [
    "Discover transformative methods designed to balance your mind, body, and spirit. Our Energy Work offerings are rooted in gentle, hands-on healing that supports deep relaxation, emotional processing, and holistic well‑being.",
  ],
  heroPhoto: { asset: "cw-sunlit-meditation", alt: "A woman meditating in warm sunlight beside a plant" },
  heroStop: "wide",
  sections: [
    {
      id: "reiki",
      stop: "cairn",
      heading: "Reiki (Universal Life Energy)",
      photo: { asset: "cw-face-to-sun", alt: "A woman lifting her face toward the sun", shape: "blob" },
      blocks: [
        { kind: "p", text: "Feel your stress melt away with this soothing, hands-on practice that promotes deep relaxation and emotional clarity. Reiki is ideal for anyone seeking peace, energetic balance, or a spiritual reset—whether as a standalone practice or in combination with talk therapy.", lead: true },
        { kind: "cta", label: "Usui Reiki", href: "/services/reiki" },
      ],
    },
    {
      id: "ita",
      stop: "pool",
      layout: "wide",
      heading: "Integrated Therapeutic Alignment (ITA)",
      blocks: [
        { kind: "p", text: "Integrated Therapeutic Alignment is a gentle, energy-based healing modality designed to bring the body, mind, emotions, and energy system back into balance. By working with key energetic connection points, ITA helps identify and release stored emotions, limiting beliefs, and patterns that may be contributing to stress, discomfort, or imbalance. This restorative practice supports deep relaxation, emotional clarity, and a greater sense of harmony from within." },
      ],
    },
    {
      id: "iet",
      stop: "labyrinth",
      layout: "split-reverse",
      heading: "Integrative Energy Therapy (IET)",
      photo: { asset: "cw-self-embrace-yellow", alt: "A smiling woman in yellow wrapping her arms around herself", shape: "arch" },
      blocks: [
        { kind: "p", text: "Ready to release what’s been holding you back? IET gently clears emotional blocks stored in the body and helps you feel lighter, more grounded, and open to positive change. It’s especially supportive for those processing trauma, anxiety, or life transitions.", lead: true },
        { kind: "cta", label: "Integrative Energy Therapy (IET)", href: "/services/integrative-energy-therapy" },
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
  ],
  closing: {
    heading: "Ready to release what’s been holding you back?",
    cta: { label: "Contact Us", href: "/contact" },
  },
};

const reiki: PageContent = {
  url: "/services/reiki",
  title: "Reiki — Pathways Within",
  meta: "Achieve inner peace and get more acquainted with your inner spirit with Reiki. Reiki offers the healing touch of an experienced practitioner and the relaxation of guided meditation.",
  source: "37-pathwayswithinwellness-com-reiki.txt",
  eyebrow: "Mind-Body Support",
  h1: "Usui Reiki",
  subtitle: "Achieve inner peace and get more acquainted with your inner spirit with Reiki.",
  intro: [
    "If you’re looking for a powerful holistic treatment, look no further. Reiki offers the healing touch of an experienced practitioner and the relaxation of guided meditation. It’s almost like a massage for your mind, with health benefits that extend to your physical self.",
  ],
  heroPhoto: { asset: "cw-face-to-sun", alt: "A woman lifting her face toward the sun" },
  heroStop: "wide",
  sections: [
    {
      id: "what-is-reiki",
      stop: "cairn",
      heading: "What is Reiki?",
      photo: { asset: "cw-sunlit-meditation", alt: "A woman meditating in warm sunlight", shape: "blob" },
      blocks: [
        { kind: "p", text: "Reiki is a technique developed in Japan to reduce stress and improve healing. It’s founded on the idea that our bodies contain our life energy, and if that energy reserve is low, you are more likely to feel stress or even get sick. However, if it is in ample supply, you’ll find that you feel better both physically and emotionally.", lead: true },
        { kind: "p", text: "Reiki perfectly complements our wisdom services because therapy often appeals to the intellectual part of our minds, while Reiki is more attuned to our spiritual side. It’s not religious in nature, which is great for both people of faith and those who are nonreligious because it enhances your inner spirit regardless of your belief system." },
      ],
    },
    {
      id: "five-principles",
      stop: "pool",
      layout: "wide",
      heading: "The Five Principles of Reiki",
      blocks: [
        {
          kind: "list",
          style: "numbered",
          items: [
            "Just for today, do not worry",
            "Just for today, do not anger",
            "Honor your parents, teachers, and elders",
            "Earn your living honestly",
            "Show gratitude for every living thing",
          ],
        },
      ],
    },
    {
      id: "typical-session",
      stop: "labyrinth",
      layout: "split-reverse",
      heading: "A Typical Reiki Session",
      photo: { asset: "cw-stone-stack-bokeh", alt: "A stack of balanced stones in soft light", shape: "arch" },
      blocks: [
        { kind: "p", text: "Reiki is like a healing massage but can be done with or without touching. You would lay fully dressed on a comfortable table and your practitioner would either hover their hands around certain areas or if you’re comfortable, they may lightly touch those areas to improve healing." },
        { kind: "p", text: "People often report feeling heat or tingling where the practitioner is working, or sometimes even memories or colors pop into their imagination. Some people even fall asleep because the practice is so peaceful and relaxing. The best way to learn if Reiki is for you is to try it! You won’t know how it feels until you do it once, and we promise, after the first time, you’ll feel the benefits." },
        { kind: "cta", label: "Contact Us", href: "/contact" },
      ],
    },
    {
      id: "energy-work",
      stop: "seated",
      photo: { asset: "cw-water-drop", alt: "A single drop of water sending ripples across a still surface", shape: "circle" },
      blocks: [
        { kind: "p", text: "Reiki is ideal for anyone seeking peace, energetic balance, or a spiritual reset—whether as a standalone practice or in combination with talk therapy.", lead: true },
        { kind: "cta", label: "Energy Work", href: "/services/energy-work", secondary: true },
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
          intro: "You’ve got questions, and we’ve got answers. Some of our most-asked questions are here but if there’s something else on your mind, we love to chat. Feel free to reach out and let us help you apply a laser focus to your wellness dreams.",
          items: [
            { q: "How often do I have to do Reiki?", a: ["As often as you like! Ideally, you would start with a few consecutive sessions if you’re dealing with a lot of pain. For more general cases, you can expect to do Reiki once a week or once every two weeks and expect good results."] },
            { q: "Can Reiki replace my medical treatment?", a: ["Reiki is meant to work in conjunction with any treatments you are already doing. If you’re taking medication or following other procedures directed by a doctor, you should continue to do so. Reiki can be a complementary pursuit to help heal you faster and better."] },
            { q: "Can anyone practice Reiki?", a: ["Of course! As long as you have a qualified practitioner who you trust, Reiki is a universal practice. The specific goals of Reiki change depending on the person and the pain they are experiencing, but generally, the principle is the same."] },
            { q: "What does Reiki target best?", a: ["Reiki targets the entire body (and spirit), so it can work to heal any issue you may have. You may feel healing in a specific area or just a general sense of well-being and relaxation, which in turn will improve your health in the long run."] },
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

const iet: PageContent = {
  url: "/services/integrative-energy-therapy",
  title: "Integrative Energy Therapy in Long Island — Pathways Within",
  meta: "Integrative Energy Therapy seeks out and breaks down the barriers holding you back from the inside out.",
  source: "38-pathwayswithinwellness-com-integrative-energy-therapy.txt",
  eyebrow: "Mind-Body Support",
  h1: "Integrative Energy Therapy (IET)",
  intro: [
    "In the nooks and crannies of your body as much as your mind, the memories that make you up—even the forgotten ones—shape your being. Holding on to that stagnant energy causes chronic physical and emotional pain.",
    "Integrative Energy Therapy seeks out and breaks down the barriers holding you back from the inside out.",
  ],
  heroPhoto: { asset: "cw-self-embrace-yellow", alt: "A smiling woman in yellow wrapping her arms around herself" },
  heroStop: "wide",
  sections: [
    {
      id: "raising-vibrations",
      stop: "cairn",
      heading: "Raising (Good) Vibrations",
      photo: { asset: "cw-water-drop", alt: "A single drop of water sending ripples across a still surface", shape: "blob" },
      blocks: [
        { kind: "p", text: "Everything that’s ever happened to you still lives inside you—good, bad, and in between. When you experience something, and it becomes covered up, erased, or denied by will or happenstance, it doesn’t just disappear. It stagnates, creating disruptions in the transfer of energy from one space to another. The parts of your whole can no longer communicate effectively with tumbling balls of energy rumbling between mind, body and spirit." },
        { kind: "p", text: "Integrative Energy Therapy (IET) is the next-generation development of targeted physical healing for emotional health, and can help you clear those blockages to restore the fluidity of healing and being. IET is a hands-on healing therapy that seeks out trapped energy in your body.", lead: true },
        { kind: "p", text: "Through the use of a Cellular Memory Map, we can release stored trauma and untapped emotion from the spaces your energy has become stuck beneath them. In the space of this release, we create a blank slate for positive emotions. By restoring that flow of energy, you can raise your physical and emotional vibration so you can rise to meet your most empowered self." },
      ],
    },
    {
      id: "every-body-healing",
      stop: "pool",
      layout: "wide",
      heading: "Every body healing",
      blocks: [
        { kind: "p", text: "Trauma doesn’t need to stem from some profound harm. We all experience trauma as we move through the world. Even if you’re not sure what you’d talk about in therapy, you may find you just feel better when you give your energy a clear path to move through your physical and spiritual bodies. There is no threshold of hurting at which IET becomes beneficial—it’s a healing energetic therapy for everybody, at every level.", lead: true },
        { kind: "p", text: "From regularly scheduled treatments to intermittent maintenance, the balance of benefit and time commitment to restoring the energy pathways of your body is as unique as the life you’ve lived." },
        { kind: "p", text: "Our goal is to get you feeling your absolute best, with access to all the energy your body has to offer to lead an emotionally and physically fulfilling life." },
      ],
    },
    {
      id: "cellular-memory",
      stop: "labyrinth",
      layout: "split-reverse",
      heading: "Spotlight: Cellular Memory",
      photo: { asset: "cw-sea-foam-stones", alt: "Sea foam washing over smooth stones", shape: "arch" },
      blocks: [
        { kind: "p", text: "Integrative Energy Therapy works by targeting areas of the body where your cells take on your trauma. In a very literal sense, these cells become little sponges, soaking up the experiences you have. What’s happened to you can become a visceral reaction to your body’s attempts to overcome it without opening up your emotions to heal from those events." },
        { kind: "p", text: "The practice of energy therapy is colloquially referred to as, “removing the issues from the tissues”. By initiating a hands-on release of those body spaces, IET seeks your blocked energy pathways and slowly works them toward release. Much like yoga or acupuncture, IET is a subtle and targeted approach that works by effectively engaging your cellular being to heal your emotional self." },
      ],
    },
    {
      id: "energy-work",
      stop: "seated",
      photo: { asset: "cw-sunlit-meditation", alt: "A woman meditating in warm sunlight", shape: "circle" },
      blocks: [
        { kind: "p", text: "Ready to release what’s been holding you back? IET gently clears emotional blocks stored in the body and helps you feel lighter, more grounded, and open to positive change. It’s especially supportive for those processing trauma, anxiety, or life transitions.", lead: true },
        { kind: "cta", label: "Energy Work", href: "/services/energy-work", secondary: true },
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
            { q: "How is IET different from Reiki?", a: ["While the healing practices sound similar in the way that they occur, the distinct difference between them lies in the system they seek to align. IET strives to release stored trauma getting in the way of energy flow, while chakra alignment and aura are central to the healing that takes place in Reiki."] },
            {
              q: "What does IET help with?",
              a: [
                "Clearing the energy pathways in the body can help you to effectively manage stress, regulate mood, reduce chronic pain and increase your sense of overall well-being.",
                "The painless release of long-stored emotional blockages is a fantastic way to restore the balance of energy inside and out so you feel more ready to take on whatever life throws at you.",
              ],
            },
            { q: "What does IET feel like?", a: ["Most of our clients find the sensations and overall experience of their session to be deeply relaxing. Over the course of your hour-long energy release, you may find yourself moving through different stages of awareness. You may experience a dreamlike state and afterward, your mood may be more joyful."] },
            {
              q: "Do we talk during IET?",
              a: [
                "While undergoing your IET session, you can choose whether you’d like to just sink into the experience or integrate talk therapy into the moment to work through what you’re feeling.",
                "Either way, we will always create the space to move through what your energy pathways reveal when you are ready in a supportive environment.",
              ],
            },
          ],
        },
        { kind: "cta", label: "Usui Reiki", href: "/services/reiki", secondary: true },
      ],
    },
  ],
  closing: {
    heading: "True beauty starts from within.",
    text: ["Complement your wellness journey with expert therapy services that nurture your mind and soul."],
    cta: { label: "Discover the power of emotional healing today.", href: "/contact" },
  },
};

const christineCervo: PageContent = {
  url: "/team/christine-cervo",
  title: "Christine Cervo — Pathways Within",
  meta: "Christine is a licensed massage therapist with a simple goal: to help people feel better in their bodies.",
  source: "47-pathwayswithinwellness-com-christine-cervo.txt",
  eyebrow: "LICENSED MASSAGE THERAPIST",
  h1: "Christine Cervo",
  intro: ["Christine is a licensed massage therapist with a simple goal: to help people feel better in their bodies."],
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
            "A graduate of the New York College of Health Professions, Christine has additional training in aromatherapy, reflexology, sports massage, and prenatal massage. Her work is both skilled and intuitive, allowing her to adapt each session to the person in front of her rather than follow a one-size-fits-all routine.",
            "Christine pays close attention to what the body is communicating and understands that no two bodies - or days - feel exactly the same. Some sessions may focus on tension, pain, or recovery. Others may create space for quiet, rest, and a much-needed reset.",
          ],
          cta: { label: "Work with Christine Cervo", href: "/contact" },
        },
      ],
    },
    {
      id: "approach",
      stop: "pool",
      photo: { asset: "cw-ap-massage-session", alt: "A massage session at Pathways Within", shape: "blob" },
      blocks: [
        { kind: "p", text: "Her thoughtful, personalized approach reflects the heart of Pathways Within: listen closely, meet people where they are, and create care that helps them feel more comfortable, supported, and connected to themselves.", lead: true },
        { kind: "cta", label: "Massage", href: "/services/massage", secondary: true },
      ],
    },
    {
      id: "room",
      stop: "labyrinth",
      layout: "split-reverse",
      photo: { asset: "pr-ap-ns-massage-green", alt: "A green massage treatment room with an In Session sign on the door", shape: "arch" },
      blocks: [
        { kind: "p", text: "Christine is a licensed massage therapist with a simple goal: to help people feel better in their bodies." },
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
  meta: "Leonard looks beyond isolated symptoms and works with each patient as a whole person, helping support greater balance across the body, mind, and spirit.",
  source: "48-pathwayswithinwellness-com-leonard-ma.txt",
  eyebrow: "LICENSED ACUPUNCTURIST",
  h1: "Leonard Ma",
  intro: ["Leonard's connection to acupuncture began early. Growing up, he saw its impact within his own family and experienced its benefits personally while managing a heart issue as a child."],
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
            "That early exposure later became a clear calling. During his clinical training, Leonard saw how acupuncture could support not only physical pain, but also emotional and mental well-being.",
            "At Pathways Within, he brings a calm, easygoing presence and a deeply holistic approach to care. Leonard looks beyond isolated symptoms and works with each patient as a whole person, helping support greater balance across the body, mind, and spirit.",
          ],
          cta: { label: "Work with Leonard", href: "/contact" },
        },
      ],
    },
    {
      id: "acupuncture",
      stop: "pool",
      photo: { asset: "cw-ap26-acu-needles", alt: "Acupuncture needles being placed", shape: "blob" },
      blocks: [
        { kind: "p", text: "Leonard looks beyond isolated symptoms and works with each patient as a whole person, helping support greater balance across the body, mind, and spirit.", lead: true },
        { kind: "cta", label: "Acupuncture", href: "/services/acupuncture", secondary: true },
      ],
    },
    {
      id: "session",
      stop: "labyrinth",
      layout: "split-reverse",
      photo: { asset: "cw-ap-acupuncture-session", alt: "An acupuncture session at Pathways Within", shape: "arch" },
      blocks: [
        { kind: "p", text: "At Pathways Within, he brings a calm, easygoing presence and a deeply holistic approach to care." },
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
  meta: "Danielle is a licensed massage therapist with 12 years of experience, specializing in therapeutic massage and deep-tissue techniques.",
  source: "50-pathwayswithinwellness-com-danielle-ingenito.txt",
  eyebrow: "LICENSED MASSAGE THERAPIST",
  h1: "Danielle Ingenito",
  intro: ["Danielle is a licensed massage therapist with 12 years of experience, specializing in therapeutic massage and deep-tissue techniques. She completed more than 1,100 hours of comprehensive training at the Connecticut Center for Massage Therapy in Westport, Connecticut."],
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
            "“My approach is tailored to each client, with a focus on relieving tension, reducing pain, and supporting overall wellness. I’m also trained in Transcendental Meditation, practicing for over 10 years.",
            "My belief is the body can heal itself given the proper conditions and environment. Massage therapy is a great way to bring the body back into balance and greatly supports mental health by reducing tat mental noise and excessive thought patterns. Knowing when to slow down and get help is just as important. When the body is relaxed, it comes back to the present moment.",
            "In addition to massage, I found meditation and breathwork reduces overall stress and calms the nervous system.”",
          ],
          cta: { label: "Work with Danielle", href: "/contact" },
        },
      ],
    },
    {
      id: "massage",
      stop: "pool",
      photo: { asset: "cw-ap-massage-session", alt: "A massage session at Pathways Within", shape: "blob" },
      blocks: [
        { kind: "p", text: "Danielle is a licensed massage therapist with 12 years of experience, specializing in therapeutic massage and deep-tissue techniques.", lead: true },
        { kind: "cta", label: "Massage", href: "/services/massage", secondary: true },
      ],
    },
    {
      id: "room",
      stop: "labyrinth",
      layout: "split-reverse",
      photo: { asset: "ha-ap-massage-room", alt: "A massage room at Pathways Within", shape: "arch" },
      blocks: [
        { kind: "p", text: "In addition to massage, I found meditation and breathwork reduces overall stress and calms the nervous system.”" },
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
  energyWork,
  reiki,
  iet,
  christineCervo,
  leonardMa,
  tiaBaumohl,
  danielleIngenito,
];

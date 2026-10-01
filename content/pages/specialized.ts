import type { PageContent } from "../types";

/**
 * Specialized pages: medication management, coaching, Meet Rachel, FAQ, resources, careers.
 * Copy is verbatim from content/source (see each page's `source`).
 */

const medicationManagement: PageContent = {
  url: "/services/medication-management",
  title: "Medication Management on Long Island — Pathways Within | Wisdom & Wellness Services",
  meta: "At Pathways Within, medication management is offered as part of a whole-person approach to mental health and emotional wellness.",
  source: "12-www-pathwayswithin-me-medication-management.txt, 23-www-pathwayswithin-me-clinicians.txt",
  eyebrow: "Medication Management",
  h1: "Medication Management",
  subtitle: "Achieve Clarity, Find Balance & Gain Support",
  intro: [
    "At Pathways Within, medication management is offered as part of a whole-person approach to mental health and emotional wellness. We understand that each person’s path is unique, and medication may be one supportive tool in helping you feel more grounded, balanced, and connected to yourself.",
  ],
  heroPhoto: { asset: "cw-ap26-med-np", alt: "Our nurse practitioner in conversation with a client" },
  heroStop: "wide",
  sections: [
    {
      id: "is-medication-right-for-me",
      stop: "cairn",
      heading: "Is Medication Right for Me?",
      photo: { asset: "cw-ap26-med-single", alt: "A client talking one-on-one about medication options" },
      blocks: [
        { kind: "p", text: "You may be wondering: Do I really need medication? The answer depends on you, your symptoms, and your goals.", lead: true },
        { kind: "p", text: "For some people, medication helps quiet the intensity of anxiety, depression, mood changes, sleep difficulties, ADHD symptoms, or emotional overwhelm so they can feel more present in daily life and more available for therapy." },
        { kind: "p", text: "For others, medication may not be the right next step." },
        { kind: "p", text: "Our role is to help you explore your options with clarity, compassion, and support." },
        { kind: "h3", text: "Medication management may be helpful for clients navigating:" },
        {
          kind: "list",
          style: "pills",
          items: [
            "Anxiety",
            "Depression",
            "Mood changes",
            "Panic symptoms",
            "ADHD",
            "Stress and overwhelm",
            "Sleep disruption",
            "Emotional dysregulation",
            "Life transitions",
            "Medication changes or refills",
            "Support alongside therapy or holistic care",
          ],
        },
        { kind: "p", text: "Our goal is not to change who you are. Our goal is to support your nervous system, your emotional well-being, and your ability to feel more present in your life.", lead: true },
      ],
    },
    {
      id: "nurse-practitioner",
      stop: "pool",
      layout: "wide",
      heading: "MEET OUR NURSE PRACTITIONER",
      photos: [
        { asset: "ha-ap26-camp-tiffany", alt: "Tiffany Roberts, psychiatric nurse practitioner" },
        { asset: "cw-ap26-med-couples", alt: "A couple meeting with our nurse practitioner" },
      ],
      blocks: [
        {
          kind: "person",
          slug: "tiffany-roberts",
          eyebrow: "MEET OUR NURSE PRACTITIONER",
          name: "Tiffany Roberts",
          credentials: "PMNP, MSN, BSN, RN-BC",
          paragraphs: [
            "Tiffany has spent more than 20 years caring for people in almost every kind of circumstance; from hospital patients and people in outpatient care to individuals navigating the correctional and shelter systems. Along the way, one thing that has stayed with her is that you can’t understand someone’s mental health by looking only at their symptoms. The relationships they’re in, the environment in which they live, their culture, their habits, and the pressures they carry all matter. That perspective shapes the way Tiffany works with every patient who sits across from her.",
            "As a psychiatric nurse practitioner, Tiffany works with adolescents and adults who want more than a quick prescription and a return visit. She believes medication can be an important part of treatment, while also helping people build the changes, skills, and support that make lasting improvement possible. Coming from a cultural background where mental health was not always openly discussed, she is especially passionate about creating space for people to talk honestly without shame or judgment. Her goal is to help patients manage their symptoms, yes. Even more so, it’s to help them feel healthier, more present, and able to truly enjoy their lives again.",
            "Over 20 years of nursing experience across hospital, outpatient, correctional, and psychiatric settings has taught Tiffany that every diagnosis comes with a person, a story, and a life beyond the exam room.",
            "Psychiatric nurse practitioner serving adolescents (ages 10 and up) and adults, with a whole-person approach that integrates medication management, lifestyle changes, coping skills, and emerging treatment modalities.",
            "Born into a legacy of nurses and shaped by crisis, culture, and compassion, Tiffany is changing how mental health is understood, especially in communities where suffering was once endured in silence.",
            "I take the time to really understand each person - not just what they’re feeling, but what they need. Medication, when used, is always thoughtful and part of a bigger supportive plan.",
            "Specializes in Anxiety, depression, mood disorders, ADHD and other mood disorders.",
          ],
          cta: { label: "Work with Tiffany", href: "/contact" },
        },
      ],
    },
    {
      id: "collaborative-care",
      stop: "labyrinth",
      heading: "Collaborative Care",
      photo: { asset: "cw-prescriber-conversation", alt: "A prescriber and client talking through a care plan", shape: "blob" },
      blocks: [
        { kind: "p", text: "At Pathways Within, we believe healing is relational, holistic, and deeply personal. Medication management often works best when it is part of a larger support system. For many clients, medication and therapy work together: medication may help reduce the intensity of symptoms, while therapy offers space to process, heal, build insight, and develop meaningful coping tools.", lead: true },
        { kind: "p", text: "Whether medication becomes a short-term support during a difficult season or part of a longer-term wellness plan, our team is here to walk alongside you with care, professionalism, and an understanding of the whole person." },
        { kind: "p", text: "Your care plan may include starting a medication, continuing something that is already helping, adjusting a dosage, or exploring alternatives. Throughout the process, we monitor progress closely and make changes as needed." },
      ],
    },
    {
      id: "what-to-expect",
      stop: "seated",
      heading: "What to Expect",
      photo: { asset: "cw-ap26-med-teen", alt: "A teen client at a medication management appointment" },
      blocks: [
        { kind: "p", text: "Your first appointment is an opportunity to slow down and be heard. Our Psychiatric Nurse Practitioner will review your concerns, medical and mental health history, current medications or supplements, past treatment experiences, and your goals moving forward.", lead: true },
        { kind: "p", text: "If medication is recommended, your provider will explain the purpose, potential benefits, possible side effects, and what to expect as your body adjusts. You will have space to ask questions and make informed decisions about your care." },
        { kind: "p", text: "Follow-up appointments allow us to monitor how you are feeling, make thoughtful adjustments if needed, and continue supporting your progress over time." },
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
          intro: "You’ve got questions, and we’ve got answers. Some of our most-asked questions are here but if there’s something else on your mind, we love to chat. Feel free to reach out and let us help!",
          items: [
            {
              q: "Why would I meet with a psychiatric nurse practitioner?",
              a: ["A psychiatric nurse practitioner is trained to assess mental health symptoms, provide diagnosis when appropriate, and prescribe psychiatric medication. Meeting with our nurse practitioner can be helpful if symptoms are impacting your mood, sleep, focus, relationships, or daily functioning, and you would like to explore whether medication may offer support."],
            },
            {
              q: "Will I be prescribed medication at my first appointment?",
              a: ["Not always. Your first appointment is focused on understanding your needs, history, symptoms, and goals. If medication seems appropriate, our nurse practitioner will discuss options with you, including potential benefits, risks, and side effects. Any medication plan should feel collaborative, informed, and aligned with your overall care."],
            },
            {
              q: "Do I need to be in therapy to receive medication management?",
              a: ["Medication management can be offered on its own, but many people benefit from combining medication with therapy. When you are working with a Pathways Within therapist, our nurse practitioner can collaborate with the team to support a more connected care experience. If you are not currently in therapy, we can help you explore whether therapy may be helpful as part of your overall wellness plan."],
            },
            {
              q: "How often will I need appointments?",
              a: ["The frequency of appointments depends on your needs and where you are in the medication process. When starting or adjusting medication, appointments may be more frequent so we can monitor how you are feeling and make changes safely. Once things feel more stable, follow-up appointments may be spaced out."],
            },
            {
              q: "What if I’m nervous about taking medication?",
              a: ["That is completely understandable. Many people have questions or concerns about psychiatric medication. We will take time to discuss what you are feeling, answer your questions, and help you make decisions at a pace that feels comfortable. Medication is only one tool, and your voice is an important part of the process."],
            },
          ],
        },
      ],
    },
  ],
  closing: {
    heading: "Healing is holistic.",
    text: [
      "Take the next step in your journey with compassionate medication management rooted in whole-person care, collaboration, and emotional wellness. You deserve support that honors your story and helps you move toward balance, clarity, and connection.",
    ],
    cta: { label: "Schedule your Medication Management consultation today.", href: "/contact" },
  },
};

const coaching: PageContent = {
  url: "/services/performance-wellness-coaching",
  // The captured <title> on the old page read "Therapy for Teens on Long Island" (a live-site error); title follows the site's pattern instead.
  title: "Performance & Wellness Coaching on Long Island — Pathways Within | Wisdom & Wellness Services",
  meta: "Performance & Wellness Coaching at Pathways Within offers one-on-one support for people ready to better understand themselves, navigate change, and create lasting growth.",
  source: "13-www-pathwayswithin-me-performance-wellness-coaching.txt, 49-pathwayswithinwellness-com-tia-baumohl.txt, 23-www-pathwayswithin-me-clinicians.txt",
  eyebrow: "Coaching",
  h1: "Performance & Wellness Coaching",
  subtitle: "Growth Looks Different for Everyone",
  intro: [
    "Sometimes you know something needs to shift.",
    "Maybe you keep repeating the same conversation, shutting down under pressure, saying yes when you mean no, or getting in your own way just as something good begins to happen.",
    "Performance & Wellness Coaching at Pathways Within offers one-on-one support for people ready to better understand themselves, navigate change, and create lasting growth. Coaching may be used on its own or alongside therapy and other Pathways Within services.",
  ],
  heroPhoto: { asset: "cw-face-to-sun", alt: "A person turning their face to the sun" },
  heroStop: "wide",
  sections: [
    {
      id: "is-coaching-right-for-me",
      stop: "cairn",
      heading: "Is Coaching Right for Me?",
      photo: { asset: "th-ap26-two-women", alt: "Two women in a coaching conversation" },
      blocks: [
        { kind: "p", text: "You do not need to have everything figured out before your first appointment. A willingness to grow is a good place to start. Coaching may be a good fit if you want to:", lead: true },
        {
          kind: "list",
          style: "check",
          items: [
            "Navigate a life or career transition",
            "Improve communication and relationships",
            "Understand recurring patterns",
            "Build confidence and resilience",
            "Strengthen emotional regulation",
            "Address avoidance or self-sabotage",
            "Life transitions",
            "Feel more grounded and intentional",
          ],
        },
      ],
    },
    {
      id: "meet-your-coach",
      stop: "pool",
      layout: "wide",
      heading: "MEET YOUR COACH",
      photos: [
        { asset: "ha-tia-baumohl", alt: "Tia Baumohl, certified coach and energy medicine practitioner" },
        { asset: "cw-ap26-hands", alt: "Hands held open in a moment of calm" },
      ],
      blocks: [
        {
          kind: "person",
          slug: "tia-baumohl",
          eyebrow: "CERTIFIED COACH & ENERGY MEDICINE PRACTITIONER",
          name: "Tia Baumohl",
          credentials: "Certified Coach & Energy Medicine Practitioner",
          paragraphs: [
            "Performance & Wellness Coaching at Pathways Within is led by Tia Baumohl, a certified coach with advanced training in Somatic Awareness, Internal Family Systems-informed practices, and energy work.",
            "Tia’s style is warm, honest, and collaborative, with enough humor to make the deeper work feel a little less heavy. She has a way of asking the question that makes you pause and think, “I have never looked at it that way before.”",
            "She helps clients notice recurring patterns, understand what may be driving them, and experiment with new ways of responding. There is no pressure to have the perfect answer or to arrive with everything figured out.",
            "Tia will meet you where you are, help you get curious about what is happening beneath the surface, and support you as you move forward with greater clarity and intention.",
            "Tia's work is rooted in helping people navigate change with greater clarity, connection, and confidence.",
            "She began her career supporting mothers and their partners through pregnancy and labor, giving her more than a decade of experience guiding people through some of life's most transformative moments. Over the past five years, she has expanded that work through energy medicine and coaching, supporting individuals and couples as they move through challenging dynamics, strengthen communication, and uncover new possibilities.",
            "Tia is trained in a range of modalities that may help ease anxiety, depression, and nervous system dysregulation. Her approach is warm, strategic, and deeply holistic, helping clients build self-awareness, create meaningful breakthroughs, and move toward lasting personal growth.",
            "Getting my start in supporting mothers and their partners through pregnancy and labor for over a decade, I am seasoned at supporting people during life’s most transformative journeys. With over five years of expertise in energy work and coaching practices, I empower individuals and couples to navigate challenging dynamics, facilitating breakthroughs and uncovering untapped potentials. Trained in various modalities proved to alleviate symptoms of anxiety, depression, and nervous system dysregulation, I offer strategic interventions for relationship enhancement, effective communication, and personal evolution, fostering holistic well-being and profound transformations.",
            "Specializes in assertiveness/ confidence building, effective communication, IFS-Parts work, healing attachment patterns, breaking codependency patterns.",
          ],
          cta: { label: "Work with Tia Baumohl", href: "/contact" },
        },
      ],
    },
    {
      id: "how-coaching-works",
      stop: "labyrinth",
      heading: "How Coaching Works",
      photo: { asset: "cw-ap26-hands", alt: "Open hands resting during a session", shape: "blob" },
      blocks: [
        { kind: "p", text: "Every coaching relationship begins with a conversation.", lead: true },
        { kind: "p", text: "Your first session is an opportunity to talk about what is bringing you in, where you feel stuck, and what you would like to change. Together, you and Tia will identify meaningful goals and create an approach tailored to your needs." },
        { kind: "p", text: "From there, coaching becomes an active partnership. You may reflect on a recent experience, explore a recurring pattern, notice how stress shows up in your body, practice a different response, or try a new approach between sessions." },
        { kind: "p", text: "There is no script and no expectation that you arrive with all the answers. Tia brings thoughtful questions, honest reflection, practical tools, and genuine curiosity. You bring your experiences, goals, and willingness to explore them." },
        { kind: "h3", text: "Your work with performance wellness coach Tia may include:" },
        {
          kind: "list",
          style: "bullet",
          items: [
            "Clarifying goals and priorities",
            "Exploring thoughts, behaviors, and relationship patterns",
            "Recognizing physical and emotional responses",
            "Practicing new ways of communicating",
            "Building tools for everyday situations",
            "Reviewing progress and adjusting goals",
          ],
        },
      ],
    },
    {
      id: "how-coaching-fits",
      stop: "seated",
      heading: "How Coaching Fits Into Your Care",
      blocks: [
        { kind: "p", text: "At Pathways Within, we believe there is no one-size-fits-all approach to wellness.", lead: true },
        { kind: "p", text: "Performance & Wellness Coaching is one part of our integrated model of care and may be used on its own or alongside therapy, medication management, acupuncture, and other wellness services." },
        { kind: "p", text: "Our Welcome Team will help determine the best combination of services that supports your goals." },
      ],
    },
    {
      id: "what-to-expect",
      stop: "standing",
      heading: "What to Expect",
      photo: { asset: "th-ap26-two-women", alt: "Two women talking through what to expect from coaching" },
      blocks: [
        { kind: "p", text: "Growth often begins with small moments of awareness that gradually change how you think, respond, and move through everyday life.", lead: true },
        { kind: "h3", text: "Clients may experience:" },
        {
          kind: "list",
          style: "check",
          items: [
            "Greater self-awareness",
            "More confidence",
            "Healthier communication",
            "Better stress management",
            "Stronger relationships",
            "More intentional decision-making",
            "A deeper connection with themselves",
          ],
        },
      ],
    },
    {
      id: "faq",
      stop: "ivy",
      layout: "wide",
      heading: "Frequently Asked Questions",
      blocks: [
        {
          kind: "faq",
          intro: "Some of our most-asked questions are here but if there’s something else on your mind, we love to chat. Feel free to reach out and let us help!",
          items: [
            {
              q: "How do I know if coaching is right for me?",
              a: [
                "If you have ever caught yourself thinking, “Why do I keep ending up here?” or “I know what I should do...so why can’t I do it?” coaching might be exactly the space you need.",
                "You do not have to show up with a perfectly defined goal. Sometimes the first step is simply getting curious about what has been keeping you stuck.",
              ],
            },
            {
              q: "What makes coaching with Tia different?",
              a: [
                "I do not believe in one-size-fits-all coaching. I will probably ask questions you were not expecting — not because there is a right answer, but because slowing down often helps us notice something we have been missing all along.",
                "Some days we will spend the session untangling a pattern you have noticed for years. Other days we will celebrate a small win that turns out to be much bigger than you realized.",
              ],
            },
            {
              q: "Can I work with Tia while seeing a therapist?",
              a: [
                "Absolutely. In fact, coaching and therapy often work really well together.",
                "Therapy may help you process your past and strengthen your emotional well-being. Coaching focuses on how to apply those insights to your life today — whether that is setting boundaries, navigating relationships, building confidence, or trying a different way of responding.",
              ],
            },
            {
              q: "How long does coaching usually last?",
              a: [
                "It depends. Some clients come with a very specific goal and accomplish what they came for in a few months. Others stay longer because new goals naturally emerge as they grow.",
                "There isn’t a gold star for finishing first. The goal is not to “graduate” from coaching — it is to create meaningful change at a pace that feels right for you.",
              ],
            },
            {
              q: "What kinds of goals can I bring?",
              a: [
                "Pretty much anything that is helping you become a healthier version of yourself.",
                "Relationships. Communication. Confidence. Career decisions. Boundaries. Stress. Self-sabotage. Feeling stuck. Big life transitions.",
                "If it is taking up space in your mind, it is worth bringing into the room.",
              ],
            },
            {
              q: "How do I know whether I need coaching or therapy?",
              a: [
                "You do not have to figure that out before you call us. That is part of our job.",
                "We will learn more about what is bringing you in and help you decide whether coaching, therapy, or another Pathways Within service feels like the best place to start. Sometimes the answer is one. Sometimes it is a combination.",
              ],
            },
            {
              q: "Is this productivity coaching?",
              a: [
                "Not really. You might become more productive along the way, but that is usually because you are spending less energy fighting yourself.",
                "I am much more interested in helping you understand why you do what you do than giving you another planner or to-do list.",
              ],
            },
            {
              q: "Is there a guarantee?",
              a: ["I wish there were. What I can promise is that I will show up with curiosity, honesty, and a genuine investment in your growth. The rest is something we build together."],
            },
          ],
        },
      ],
    },
  ],
  closing: {
    heading: "Growth Looks Different for Everyone",
    text: ["Progress is not measured by perfection. It is measured by becoming more aware, intentional, and aligned with the life you want to create."],
    cta: { label: "Schedule your performance & wellness coaching consultation today.", href: "/contact" },
  },
};

const rachel: PageContent = {
  url: "/about/rachel",
  title: "Meet Rachel — Pathways Within | Wisdom & Wellness Services",
  meta: "Hi, I’m Rachel, therapist, founder, lifelong listener, and the original “Patient Zero” behind Pathways Within.",
  source: "03-www-pathwayswithin-me-about-us.txt, 31-pathwayswithinwellness-com-about.txt, 23-www-pathwayswithin-me-clinicians.txt, 28-www-pathwayswithin-me-news-a-new-way-podcast.txt",
  eyebrow: "FOUNDER OF PATHWAYS WITHIN",
  h1: "Meet Rachel: Founder, Therapist & “Patient Zero”",
  intro: ["Hi, I’m Rachel, therapist, founder, lifelong listener, and the original “Patient Zero” behind Pathways Within."],
  heroPhoto: { asset: "ha-ap26-rachel-solo", alt: "Rachel Lessard, founder of Pathways Within" },
  heroStop: "wide",
  sections: [
    {
      id: "my-story",
      stop: "cairn",
      heading: "Helping people has always been my thing.",
      photo: { asset: "ha-ap26-rachel-family", alt: "Rachel with her family" },
      blocks: [
        { kind: "p", text: "Helping people has always been my thing. Even as a kid, I was the one giving pep talks on the playground, asking one more question, and trying to help everyone make sense of what they were feeling.", lead: true },
        { kind: "p", text: "After losing my dad suddenly as a child, I was raised by a village of aunts, uncles, grandparents, teachers, and friends. They taught me the power of chosen family, the importance of showing up, and the fact that wisdom can come from just about anywhere, sometimes when you least expect it." },
        { kind: "p", text: "Somewhere along the way, I realized that helping others was also helping me understand and heal parts of myself. What started as instinct became purpose, and eventually, my calling." },
        { kind: "p", text: "That calling led me to study psychology, human behavior, and the mind-body-spirit connection. It also led me to build Pathways Within: the kind of place I wished existed when I was learning how to navigate my own path." },
      ],
    },
    {
      id: "woven-in",
      stop: "pool",
      heading: "Therapy is not just what I do. It is woven into who I am.",
      photo: { asset: "ha-rachel-lessard-portrait", alt: "Portrait of Rachel Lessard", shape: "arch" },
      blocks: [
        { kind: "p", text: "I am here for the big, messy, complicated conversations, and I am also the person who will remind you to drink water, unclench your jaw, take the win, and stop pretending rest has to be earned.", lead: true },
        { kind: "p", text: "Together we can explore your experiences in order to help you feel safe and secure again. In my office, with our without your loved one, we can develop new styles of communication that can create the relationship you have always wanted." },
        { kind: "p", text: "Specializes in anxiety, depression, PTSD, couples, hypnotherapy, veterans, first responders, and weight loss surgery evals and counseling." },
      ],
    },
    {
      id: "big-picture-thinker",
      stop: "labyrinth",
      layout: "wide",
      heading: "Founder and Big-Picture Thinker",
      blocks: [
        {
          kind: "person",
          slug: "rachel-lessard",
          eyebrow: "Founder and Big-Picture Thinker",
          name: "Rachel Lessard",
          credentials: "LCSW-R",
          paragraphs: [
            "Rachel created Pathways Within Wellness to expand the conversation around healing beyond the therapy room. She guides the larger vision, exploring how mind, body, and spirit can be supported in practical, personal, and sometimes unexpected ways.",
            "For a behind-the-scenes look at Rachel's journey as founder and 'Patient Zero,' follow The Wisdom of Wellness on Substack at [@the.wisdom.of.wellness](https://substack.com/@the.wisdom.of.wellness).",
          ],
          cta: { label: "Contact Us", href: "/contact" },
        },
      ],
    },
    {
      id: "wisdom-of-wellness",
      stop: "seated",
      heading: "The Wisdom of Wellness",
      photo: { asset: "ha-ap-rachel-lessard", alt: "Rachel Lessard at the office" },
      blocks: [
        { kind: "p", text: "For the more candid version of the story, follow The Wisdom of Wellness on Substack at [@the.wisdom.of.wellness](https://substack.com/@the.wisdom.of.wellness), where I share the behind-the-scenes journey of being a founder, therapist, lifelong learner.", lead: true },
        { kind: "cta", label: "Follow The Wisdom of Wellness on Substack", href: "https://substack.com/@the.wisdom.of.wellness" },
        { kind: "cta", label: "Resources", href: "/resources", secondary: true },
      ],
    },
    {
      id: "podcast",
      stop: "standing",
      heading: "A Podcast with Rachel Lessard",
      photo: { asset: "cw-table-notes", alt: "Notes on a table during a conversation", shape: "blob" },
      blocks: [
        { kind: "p", text: "Owner and founder of Pathways Within, Rachel Lessard, joined Aynisa Leonardo from Wellbridge addiction treatment to discuss the practice and share more about the many pathways to treatment offered here at Pathways Within.", lead: true },
        { kind: "h3", text: "A New Way Podcast with Rachel Lessard" },
        { kind: "p", text: "Connect with us today to learn more about anything that Rachel talked about on the show! Call us at (631) 371-3825 today!" },
      ],
    },
  ],
  closing: {
    heading: "Take what you need. Leave what you do not.",
    text: ["We will walk with you — and probably remind you to breathe along the way."],
    cta: { label: "Contact Us", href: "/contact" },
  },
};

const faq: PageContent = {
  url: "/faq",
  title: "FAQs | Therapy Near You on Long Island — Pathways Within | Wisdom & Wellness Services",
  meta: "Here are some of the most common questions we hear—if you’re curious about anything else, just reach out; we’re always happy to help.",
  source: "26-www-pathwayswithin-me-faq.txt, 03-www-pathwayswithin-me-about-us.txt, 31-pathwayswithinwellness-com-about.txt, 25-www-pathwayswithin-me-locations.txt",
  h1: "Frequently Asked Questions",
  subtitle: "We love answering questions!",
  intro: ["Here are some of the most common questions we hear—if you’re curious about anything else, just reach out; we’re always happy to help."],
  heroPhoto: { asset: "pr-question-pebble", alt: "A pebble with a question mark" },
  heroStop: "wide",
  sections: [
    {
      id: "wondering",
      stop: "cairn",
      layout: "wide",
      heading: "A Few Things You May Be Wondering",
      blocks: [
        {
          kind: "faq",
          items: [
            { q: "What is Pathways Within?", a: ["Pathways Within is a collaborative mental health and wellness organization for the whole person, not just the one concern that brought you through the door."] },
            { q: "What does “whole-person care” mean?", a: ["It means we recognize that mental health, physical health, relationships, stress, lifestyle, and daily responsibilities are all part of the same life. We look at the broader picture and help you explore the support that may be most useful."] },
            { q: "Do I need to know exactly what kind of support I need?", a: ["No, and honestly, most people do not. You may know that something feels off, heavy, stuck, or simply ready to change. Our Welcome Team can help you sort through the options and find a place to begin."] },
            { q: "What services does Pathways Within offer?", a: ["Services may include individual, couples, family, and group therapy, medication management, performance and wellness coaching, acupuncture, massage, nutrition, esthetic services, and other wellness offerings. Availability varies by location, because apparently one building cannot contain all of us."] },
            { q: "Do I have to use more than one service?", a: ["Not at all. Some clients work with one provider, while others build a mix of services over time. Take what feels helpful. Leave what does not. Your care should fit you not the other way around."] },
            { q: "Can my providers communicate with one another?", a: ["Yes, when it is helpful and with your permission. Members of your care team will collaborate to create a more connected healing experience, while your privacy, comfort, and consent stay at the center of the process."] },
            { q: "Is Pathways Within only for people in crisis?", a: ["Definitely not. People come to us during hard seasons, but also for personal growth, stronger relationships, stress support, physical well-being, performance goals, or simply because life could use a tune-up."] },
            { q: "Do you accept insurance?", a: ["Insurance participation varies by provider, service, and individual plan. Some mental health, medication management, acupuncture, and other services may be covered. Our Welcome team can help explain the options based on your coverage."] },
            { q: "Where are services available?", a: ["Pathways Within serves clients across multiple Nassau and Suffolk County locations, with virtual appointments available for eligible services. Our Welcome Team can help you find the provider, service, and location that best fit your life."] },
            { q: "How do I get started?", a: ["Contact our Welcome Team and tell us a little about what is bringing you in. You do not need a polished explanation or all the answers. We will help you find a starting point that feels manageable, supportive, and right for you."] },
          ],
        },
      ],
    },
    {
      id: "wellness",
      stop: "pool",
      layout: "wide",
      heading: "Wellness",
      blocks: [
        {
          kind: "faq",
          items: [
            { q: "Is Pathways Within Wellness only for current therapy clients?", a: ["No. Our Wellness services are available whether or not you receive mental health services through Pathways Within. Some clients use both sides of the organization, while others come to us only for massage, acupuncture, energy work, or another Wellness service."] },
            { q: "Do I need to know which treatment I need?", a: ["Not necessarily. You can contact our team, share what you are experiencing, and we will help guide you toward an appropriate service or provider."] },
            { q: "Are Wellness services customized?", a: ["Yes. Your provider will learn more about your needs, preferences, comfort level, and goals before beginning. Care should feel personal—not like you were handed someone else’s treatment plan."] },
            { q: "Can Wellness services complement therapy?", a: ["They can. Stress, anxiety, grief, and other emotional experiences may also show up physically. Hands-on and holistic care can offer another way to support relaxation, regulation, body awareness, and overall well-being. These services do not replace mental health or medical treatment, but they may complement a broader care plan."] },
            { q: "Do I need to be in pain to book a massage?", a: ["No. Massage can support pain relief and recovery, but it can also be used for relaxation, stress management, preventive care, or simply because your shoulders have been living near your ears all week."] },
            { q: "What should I expect during my first appointment?", a: ["Your provider will begin by asking about your goals, areas of concern, relevant health history, and personal preferences. You will also have an opportunity to ask questions and discuss anything that may make your experience more comfortable."] },
            { q: "Can I combine different Wellness services?", a: ["Yes. Depending on your needs and provider recommendations, you may choose to explore multiple services over time. There is no required path or predetermined package. Start where you are and build from there."] },
            { q: "Is self-care really part of health care?", a: ["We certainly think so. Rest, recovery, stress reduction, and feeling connected to your body can all play meaningful roles in your overall well-being. Self-care is not always candles and quiet music—but we are not opposed to either."] },
            { q: "How do I get started?", a: ["Contact our team or book through the Pathways Within Wellness app. You do not need a perfect plan. You just need a place to begin."] },
          ],
        },
      ],
    },
    {
      id: "where-are-you-located",
      stop: "labyrinth",
      layout: "wide",
      heading: "Where are you located?",
      blocks: [
        { kind: "p", text: "We have four locations in the greater Long Island area! You can find us in Nassau or Smithtown for all of your wisdom and wellness needs. To minimize stress before and after your appointments, each location has dedicated parking for your convenience.", lead: true },
        { kind: "locations" },
      ],
    },
    {
      id: "do-you-take-insurance",
      stop: "seated",
      heading: "Do you take insurance?",
      photo: { asset: "pr-intake-clipboard", alt: "An intake clipboard at the welcome desk" },
      blocks: [
        { kind: "p", text: "We are in-network for most major insurance providers in New York. Once we’ve confirmed your benefits, we can create a therapeutic plan with respect to your benefits and limitations.", lead: true },
        { kind: "p", text: "If your insurance does not cover your treatment or you are otherwise self-pay, we may be able to offer a sliding scale plan. Please reach out to our admissions coordinator to confirm these options." },
        { kind: "p", text: "For your convenience, we accept cash, major credit cards and HSA or FSA funds." },
        {
          kind: "list",
          style: "pills",
          items: [
            "Aetna",
            "Cigna",
            "Optum",
            "UHC",
            "Oxford",
            "UMR",
            "Oscar",
            "1199",
            "Meritain",
            "Magnacare*",
            "Humana",
            "Medicare",
            "NYSHIP*",
            "Student Resource",
            "Allied Benefit",
            "ComPsych",
            "VA community Care benefits",
            "MVP",
            "Northwell Brighton Health",
          ],
        },
        { kind: "note", text: "*Out of Network" },
      ],
    },
    {
      id: "other-faqs",
      stop: "standing",
      layout: "wide",
      heading: "Other FAQs",
      blocks: [
        {
          kind: "faq",
          items: [
            {
              q: "How often we will meet?",
              a: [
                "At the beginning, we will meet once a week, more often if it is deemed therapeutically necessary, for as long as our therapeutic relationship feels beneficial to you.",
                "The work you’re doing may grow or change, and the schedule you need may vary, so we will remain flexible and responsive to the way your growth needs change throughout our relationship.",
              ],
            },
            {
              q: "How long do sessions last?",
              a: [
                "Each session will be one full hour. This is your hour and we are committed to showing up wholly to support the work you’re so bravely doing.",
                "In exchange, we ask that you commit to your scheduled time each week, (it will always be the same day and time) to optimize the time spent with your clinician.",
              ],
            },
            {
              q: "What is your cancellation policy?",
              a: [
                "Appointments must be canceled 72 hours in advance. There will be a $75 no-show fee for appointments canceled within the 72-hour window prior.",
                "All clients must have a credit card on file. Your information will be stored through IvyPay, a HIPAA compliant provider, and can be used for these fees or for co-pays.",
              ],
            },
            {
              q: "What happens if I have to miss a session or I forget?",
              a: ["We understand that life happens! If you need to cancel or reschedule your appointment, we kindly ask for at least 24 hours' notice. Sessions canceled with less than 24 hours’ notice—or missed without notice—may be subject to a cancellation fee. This policy helps us respect the time of both our therapists and clients. If you have questions or an emergency, please don’t hesitate to reach out directly to your clinician."],
            },
            {
              q: "Do you have evening appointments?",
              a: ["We do offer appointments outside regular business hours! With advance scheduling, we can accommodate schedules of every kind. Our appointments can be offered up to 11 pm with select clinicians."],
            },
            {
              q: "Do you offer virtual visits?",
              a: [
                "We do offer virtual visits! Called telehealth, our therapy services can be offered in any format you feel most comfortable with. Whether that means you meet with your therapist every time through our virtual platform or you switch it up between telehealth and in-person visits, we are happy to work with you to meet all your needs.",
                "Before your first visit, we’ll send you a link to get you all set up. During this onboarding process, you’ll have the chance to get familiar with our platform, SimplePractice.",
              ],
            },
            {
              q: "Is virtual therapy private?",
              a: ["Absolutely! SimplePractice is both HIPAA compliant as well as VeriSign security sealed. Your privacy is crucial to us, and we take every step to ensure confidentiality in every format."],
            },
            {
              q: "How do you incorporate Therapy and Wellness in a collaborative treatment plan?",
              a: ["At Pathways Within, we believe true healing happens when the mind and body are supported together. Our therapy services focus on emotional insight, personal growth, and mental well-being—but we don’t stop there. Through our 360º approach to care, we partner with our sister site Pathways to Wellness, we provide a truly holistic experience. Together, we support your journey from the inside out, integrating therapeutic care with restorative wellness services to help you feel grounded, renewed, and whole."],
            },
            {
              q: "Do you offer discounts or sliding scale fees for self-pay without insurance coverage?",
              a: ["Yes, we do offer a limited number of sliding scale spots based on financial need and availability. If you are paying out of pocket and have concerns about affordability, we encourage you to speak with us directly. Our goal is to make therapy as accessible as possible, and we’re happy to explore options that support your care."],
            },
          ],
        },
      ],
    },
  ],
  closing: {
    heading: "More Questions?",
    text: ["Here are some of the most common questions we hear—if you’re curious about anything else, just reach out; we’re always happy to help."],
    cta: { label: "Contact Us", href: "/contact" },
  },
};

const resources: PageContent = {
  url: "/resources",
  title: "Resources — Pathways Within | Wisdom & Wellness Services",
  meta: "Follow The Wisdom of Wellness on Substack at @the.wisdom.of.wellness, where I share the behind-the-scenes journey of being a founder, therapist, lifelong learner.",
  source: "03-www-pathwayswithin-me-about-us.txt, 27-www-pathwayswithin-me-news.txt, 28-www-pathwayswithin-me-news-a-new-way-podcast.txt, 29-www-pathwayswithin-me-news-telehealth.txt",
  h1: "Resources",
  heroPhoto: { asset: "pr-laptop-at-home", alt: "A laptop open at home" },
  heroStop: "wide",
  sections: [
    {
      id: "wisdom-of-wellness",
      stop: "cairn",
      heading: "The Wisdom of Wellness",
      photo: { asset: "ha-ap26-rachel-solo", alt: "Rachel Lessard, founder and “Patient Zero”", shape: "circle" },
      blocks: [
        { kind: "p", text: "For the more candid version of the story, follow The Wisdom of Wellness on Substack at [@the.wisdom.of.wellness](https://substack.com/@the.wisdom.of.wellness), where I share the behind-the-scenes journey of being a founder, therapist, lifelong learner.", lead: true },
        { kind: "cta", label: "Follow The Wisdom of Wellness on Substack", href: "https://substack.com/@the.wisdom.of.wellness" },
      ],
    },
    {
      id: "news",
      stop: "pool",
      layout: "wide",
      heading: "News",
      blocks: [
        { kind: "h3", text: "A Podcast with Rachel Lessard" },
        { kind: "p", text: "Owner & Founder of Pathways Within joins host Aynisa Leonardo" },
        { kind: "p", text: "on A New Way Podcast." },
        { kind: "cta", label: "A New Way Podcast with Rachel Lessard", href: "/about/rachel", secondary: true },
        { kind: "h3", text: "UPDATE!" },
        { kind: "p", text: "Telehealth available in New Jersey, North Carolina and Florida in addition to New York!", lead: true },
        { kind: "p", text: "Connect with us today to learn more about getting started with a therapist near you! Call us at (631) 371-3825 today!" },
      ],
    },
    {
      id: "virtual-library",
      stop: "labyrinth",
      heading: "Virtual Library",
      blocks: [{ kind: "note", text: "[Coming soon: references and books to consider.]" }],
    },
    {
      id: "checklists",
      stop: "seated",
      heading: "Pre and Post Treatment Checklists",
      blocks: [{ kind: "note", text: "[Coming soon.]" }],
    },
    {
      id: "one-pagers",
      stop: "standing",
      heading: "One Pagers on Services",
      blocks: [{ kind: "note", text: "[Coming soon.]" }],
    },
  ],
  closing: {
    heading: "Take what you need. Leave what you do not.",
    cta: { label: "Contact Us", href: "/contact" },
  },
};

const careers: PageContent = {
  url: "/careers",
  title: "Careers — Pathways Within | Wisdom & Wellness Services",
  meta: "Submit your resume through our careers page.",
  source: "(no source capture; functional copy only)",
  h1: "Careers",
  heroPhoto: { asset: "ha-team-bright-room", alt: "The Pathways Within team in a bright room" },
  heroStop: "wide",
  sections: [
    {
      id: "apply",
      stop: "cairn",
      layout: "center",
      blocks: [
        { kind: "p", text: "Submit your resume through our careers page.", lead: true },
        { kind: "cta", label: "View open positions and apply", href: "https://wizehire.com/cmp/pathways-within" },
        { kind: "cta", label: "Email your resume", href: "mailto:Welcome@pathwayswithin.com", secondary: true },
        { kind: "note", text: "[Resume upload form: NEEDS a form endpoint from the client.]" },
      ],
    },
  ],
  closing: {
    heading: "Better Together",
    text: ["Pathways Within Wellness is built around collaboration."],
    cta: { label: "Contact Us", href: "/contact" },
  },
};

export const specializedPages: PageContent[] = [medicationManagement, coaching, rachel, faq, resources, careers];

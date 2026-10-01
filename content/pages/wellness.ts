import type { PageContent } from "../types";

/**
 * Wellness group: service pages 32–38 and provider bio pages 47–50 from
 * pathwayswithinwellness.com, placed verbatim. IV Vitamin Therapy has no
 * source page (on hold).
 */

const massage: PageContent = {
  url: "/services/massage",
  title: "Massage on Long Island — Pathways Within Wellness Services on Long Island",
  meta: "Massage is your gateway to relaxation and healing. Our skilled therapists will guide you on a journey of relaxation to promote overall well-being.",
  source: "32-pathwayswithinwellness-com-massages.txt",
  eyebrow: "Wellness",
  h1: "Massage",
  subtitle: "Massage is your gateway to relaxation and healing.",
  intro: [
    "Our skilled therapists will guide you on a journey of relaxation to promote overall well-being. With a range of massage options tailored to your needs, there’s something for everyone.",
  ],
  heroPhoto: { asset: "cw-ap-massage-session", alt: "A massage session at Pathways Within Wellness" },
  heroStop: "wide",
  sections: [
    {
      id: "relaxation-for-you",
      stop: "cairn",
      heading: "Relaxation designed just for you",
      photo: { asset: "ha-ap-massage-room", alt: "A massage room at Pathways Within Wellness", shape: "blob" },
      blocks: [
        { kind: "p", text: "At Pathways Within, we pride ourselves on quality relaxation in a spa-like environment. Our massages take this ethos to the next level by ensuring that every client receives a bespoke service tailored to their needs.", lead: true },
        { kind: "p", text: "Our attention to detail begins from the very first moment and we offer a variety of massage services to ensure that you walk out the door with less stress in your body and more calm in your soul." },
        { kind: "note", text: "We accept NYSHIP insurance for all massages!" },
      ],
    },
    {
      id: "benefits",
      stop: "pool",
      layout: "wide",
      heading: "Benefits of Massage Therapy",
      blocks: [
        { kind: "p", text: "There are many types of massages offered at our spa, and each has a unique profile of uses and experiences, but all massages are designed to help you feel like the best version of yourself. Massage has a body of benefits with a benefit for every body." },
        { kind: "p", text: "Massage therapy can help you enjoy:", lead: true },
        {
          kind: "list",
          style: "check",
          items: [
            "Lower stress levels",
            "Reduced muscle soreness",
            "Less tension and pain",
            "Clearer headspace (less brain fog)",
            "Brightened and refreshed skin",
            "Better circulation",
            "More relaxation",
            "Increased energy",
            "Improved immune response",
            "More restful sleep",
          ],
        },
      ],
    },
    {
      id: "membership",
      stop: "labyrinth",
      layout: "split-reverse",
      heading: "Become a member",
      photo: { asset: "ha-ap-wellness-lobby", alt: "The wellness lobby with navy armchairs and a retail shelf", shape: "arch" },
      blocks: [
        { kind: "p", text: "In addition to one-time and standing appointment massages, we offer massage memberships to our clients who want access to perma-relaxation. Our memberships grant you access to 60 minutes on the table with one of our elite massage therapists every month, as well as $25 toward any other service we offer." },
        { kind: "p", text: "There are perks to becoming a member like: being able to bank your monthly massages for up to 3 months, getting VIP access to our specials and deals, and a commitment to price stability at the time you sign up. Give us a shout if you’re interested in learning more about our membership offerings or to sign up today!" },
        { kind: "cta", label: "Contact Us", href: "/contact", secondary: true },
      ],
    },
    {
      id: "offerings",
      stop: "seated",
      layout: "wide",
      heading: "Massage Offerings",
      blocks: [
        { kind: "h3", text: "Lymphatic Drainage Massage" },
        { kind: "p", text: "A lymphatic drainage massage is a type of gentle massage therapy that helps to stimulate the lymphatic system, which is responsible for removing waste and toxins from the body. Light pressure and rhythmic, circular movements help move lymph fluid through the lymphatic vessels and toward the lymph nodes." },
        { kind: "h3", text: "Swedish Massage" },
        { kind: "p", text: "This massage technique is the one you’re imagining in a standard massage setting. Gentle pressure is applied using rhythmic and intentional motion that help the muscles to move tension and release strain in tense areas of your body like lower back, shoulders and neck." },
        { kind: "h3", text: "Reflexology Massage" },
        { kind: "p", text: "Focused on the extremities, reflexology is the practice of using pressure points in the hands and feet to activate and soothe corresponding body systems. This coordinated massage technique is thought to reduce pain and increase relaxation. Some clients say it improves sleep and anxiety as well!" },
        { kind: "h3", text: "Prenatal Massage" },
        { kind: "p", text: "Similar to Swedish massage, modified techniques are used to accommodate a pregnant belly. With a combined focus on comfort and relaxation, prenatal massages use altered positioning and special training to relieve swollen joints and sore muscles for pregnant women in a spa like setting." },
        { kind: "h3", text: "Hot Stone Massage" },
        { kind: "p", text: "Flat warm stones are heated to around 125 degrees and placed or moved along areas of your body to release tension, pain and symptoms of fatigue, nausea and insomnia. The heated stones may be moved by tapping, kneading or stroking the targeted areas, or simply allowing them to rest." },
        { kind: "h3", text: "Sport Massage" },
        { kind: "p", text: "For athletes who are aiming for an elite performance without risk of injury or strain, sports massage is a (literal) game changer. You can improve elasticity, fast track your healing and reduce tension and strain through sports massage that also releases tight spots and improves blood flow." },
      ],
    },
    {
      id: "our-rooms",
      stop: "standing",
      photo: { asset: "pr-ap-ns-massage-green", alt: "A green massage treatment room with an In Session sign on the door", shape: "circle" },
      blocks: [
        { kind: "p", text: "From magical massage to relaxing reflexology, we’ve got the spectacular spa experience you need. Call or email today to schedule your massage appointment.", lead: true },
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
          intro: "You’ve got questions, and we’ve got answers. Some of our most-asked questions are here but if there’s something else on your mind, we love to chat.",
          items: [
            { q: "Does massage hurt?", a: ["Some massages can be uncomfortable, but they should never be outright painful unless you are working with a known condition, sensitivity or sore spot that your massage therapist is aware of and you’ve given consent to release."] },
            { q: "What can I expect afterward?", a: ["You may be tender, sore, sleepy or a little bit achy. Massage releases a lot of lymphatic build up which can cause flu-like symptoms in some people. Stay hydrated and plan to rest if you can for a couple of hours after your massage to maximize benefit and decrease discomfort as your body processes this gift you’ve given it."] },
            { q: "What do I need to do to prepare?", a: ["Please be sure to drink lots of water before your massage, and come dressed in light, comfortable clothing. We recommend that you shower the morning of and limit your use of heavily scented products or body treatments."] },
            { q: "Is it safe to get a massage?", a: ["Every body can benefit from expert massage, but not everyone will be able to safely receive the same type of treatments. During your initial consultation, your massage therapist will help you determine which massage style is best suited to your needs with safety at the center of our treatment planning, alongside relaxation."] },
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

const acupuncture: PageContent = {
  url: "/services/acupuncture",
  title: "Acupuncture on Long Island — Pathways Within Wellness Services on Long Island",
  meta: "At Pathways Within, acupuncture is a gentle, restorative treatment designed to support your whole self, mind, body, and spirit.",
  source: "33-pathwayswithinwellness-com-acupuncture.txt",
  eyebrow: "Wellness",
  h1: "Acupuncture",
  subtitle: "Restore Balance, Support Healing, and Reconnect with Your Body",
  intro: [
    "At Pathways Within, acupuncture is a gentle, restorative treatment designed to support your whole self, mind, body, and spirit. Whether you are seeking relief from pain, support through stress, hormonal balance, or a deeper sense of calm, acupuncture offers a pathway back to ease.",
    "Using hair-thin needles placed with care and intention, acupuncture helps cue the body’s natural healing response. Treatments may support circulation, relax tight muscles, calm the nervous system, and encourage the body to move toward balance from the inside out.",
  ],
  heroPhoto: { asset: "cw-ap-acupuncture-session", alt: "An acupuncture session at Pathways Within Wellness" },
  heroStop: "wide",
  sections: [
    {
      id: "benefits",
      stop: "cairn",
      layout: "wide",
      heading: "Benefits of Acupuncture",
      blocks: [
        { kind: "p", text: "This ancient Chinese healing method has almost as many benefits as it does options to incorporate it into different areas of your body and life. If you’ve been looking for the magic cure to so many of life’s problems, acupuncture has an answer for at least some of it.", lead: true },
        {
          kind: "list",
          style: "pills",
          items: [
            "Reducing inflammation",
            "Chronic Pain",
            "Getting better sleep",
            "Seasonal Allergies",
            "Managing Stress",
            "Harnessing Relaxation",
            "PMS or Menopause",
            "Fertility Concerns",
            "Arthritis & Joint Irritation",
            "Healing Injuries",
            "Blood Pressure",
            "Migraines",
            "Swelling Reduction",
            "Youthful Skin",
            "General Wellness",
          ],
        },
      ],
    },
    {
      id: "acupuncture-at-pathways",
      stop: "pool",
      heading: "Acupuncture at Pathways Within",
      photo: { asset: "cw-ap26-acu-needles", alt: "Acupuncture needles being placed", shape: "blob" },
      blocks: [
        { kind: "p", text: "Each session is personalized to you. We take time to understand your symptoms, your story, your stress patterns, and the way your body responds, so your treatment feels supportive, thoughtful, and truly your own.", lead: true },
        { kind: "h3", text: "Initial Acupuncture Session" },
        { kind: "p", text: "Your first visit begins with a comprehensive intake and assessment. This is where we get to know your body beyond the symptom." },
        { kind: "p", text: "We may talk about pain, tension, injuries, surgeries, digestion, sleep, stress, emotional wellness, hormone concerns, test results, and any patterns you have noticed—such as symptoms that feel worse in the morning, after overuse, or during damp weather." },
        { kind: "p", text: "Your practitioner may also use gentle palpation to understand where the body is holding stiffness, tenderness, muscular guarding, or restriction. From there, your treatment is designed around what your body is asking for." },
        { kind: "p", text: "Your first session may begin with fewer needles so we can observe your response and adjust care with comfort and safety in mind." },
        { kind: "p", text: "This session is ideal for new acupuncture clients, chronic pain, injury recovery, stress, hormonal concerns, complex symptoms, or anyone looking for a personalized whole-body approach." },
        { kind: "h3", text: "Follow-Up Acupuncture Session" },
        { kind: "p", text: "Follow-up sessions continue the healing process. Each treatment is adjusted based on how you are feeling, what has changed, and what your body needs that day." },
        { kind: "p", text: "Needles are thin, sterile, and placed with intention. Some points may feel dull, warm, heavy, or gently releasing. Areas such as the hands, feet, ears, or scar tissue may feel more sensitive, while larger areas like the back or legs may feel more subtle." },
        { kind: "p", text: "Once the needles are placed, you will rest in a calm, comfortable space with soft music, low lighting, and time for your body to settle. Many clients leave feeling lighter, looser, calmer, and more connected to themselves." },
        { kind: "p", text: "Follow-up care may support pain relief, muscle tension, nervous system regulation, digestion, sleep, hormone balance, emotional wellness, and maintenance care." },
      ],
    },
    {
      id: "when-to-consider",
      stop: "labyrinth",
      layout: "wide",
      heading: "When should I consider acupuncture?",
      blocks: [
        { kind: "h3", text: "Acupuncture for Pain & Injury Recovery" },
        { kind: "p", text: "Pain often affects more than one area of the body. When we favor one side, protect an injury, or move differently because of discomfort, the body can begin to compensate." },
        { kind: "p", text: "Acupuncture for pain and injury recovery looks at both the area of concern and the surrounding patterns that may be contributing to tension or imbalance. For knee, hip, back, shoulder, or muscular pain, your practitioner may treat the local area as well as related muscles and points to support symmetry, circulation, and ease." },
        { kind: "p", text: "This treatment may be supportive for:" },
        {
          kind: "list",
          style: "pills",
          items: [
            "Knee pain and joint discomfort",
            "Low back tension",
            "Neck and shoulder pain",
            "Muscle tightness",
            "Sprains and strains",
            "Postural compensation",
            "Scar tissue restriction",
            "Overuse patterns",
            "Movement-related discomfort",
          ],
        },
        { kind: "note", text: "For fractures, dislocations, or serious acute injuries, please seek urgent medical care first. For sprains, strains, and soft tissue tension, acupuncture or cupping may be a helpful part of your healing plan." },
        { kind: "h3", text: "Trigger Point Acupuncture" },
        { kind: "p", text: "Trigger point acupuncture is a more focused technique for tight, overactive, or restricted muscles." },
        { kind: "p", text: "A thin needle is placed into a specific area of muscular tension to encourage release. You may feel a brief twitch response, which is a normal sign that the muscle is responding. Mild soreness afterward can happen and is usually short-lived." },
        { kind: "p", text: "This treatment may be helpful for stubborn knots, myofascial pain, chronic tightness, restricted movement, and areas that have not fully released with stretching or massage alone." },
        { kind: "h3", text: "Acupuncture with E-Stim" },
        { kind: "p", text: "E-stim may be added to an acupuncture session when your practitioner feels your body may benefit from additional support." },
        { kind: "p", text: "Small clips are attached to selected needles, creating a gentle pulsing sensation. The intensity is always adjusted to your comfort. E-stim may help support tight muscles, soreness, fatigue, pain relief, and deeper neuromuscular relaxation." },
        { kind: "p", text: "This option is often used for muscular tension, injury recovery, chronic pain patterns, and clients who may benefit from a stronger therapeutic cue." },
      ],
    },
    {
      id: "stress-hormones-immune",
      stop: "seated",
      layout: "split-reverse",
      photo: { asset: "cw-ap26-acu-shoulder", alt: "Acupuncture needles placed in a client’s shoulder", shape: "arch" },
      blocks: [
        { kind: "h3", text: "Acupuncture for Stress, Anxiety & Nervous System Support" },
        { kind: "p", text: "When life feels overwhelming, the body can stay caught in fight-or-flight. Acupuncture offers a quiet space for the nervous system to soften, regulate, and return to a more grounded state." },
        { kind: "p", text: "Treatments may support stress relief, emotional balance, sleep, hormone regulation, and the body’s natural rest-and-digest response." },
        { kind: "p", text: "One option is the NADA ear protocol, which uses five specific points in each ear. This calming protocol may support stress, anxiety, addiction recovery, emotional grounding, and nervous system regulation." },
        { kind: "p", text: "For lasting change, regular sessions are often recommended, especially when stress patterns have been present for a long time." },
        { kind: "h3", text: "Acupuncture for Hormonal Wellness" },
        { kind: "p", text: "Hormonal symptoms can affect the body, mood, energy, sleep, digestion, and overall sense of well-being. Acupuncture approaches these concerns through a whole-body lens." },
        { kind: "p", text: "Your treatment plan may be tailored around cycle patterns, PMS, PMDD, menstrual pain, clotting, fatigue, mood changes, stress, sleep, and digestive symptoms. Hormone testing can be helpful, but it is not required to begin care." },
        { kind: "p", text: "For men’s wellness, acupuncture may support fatigue, stress, muscle tension, hormone regulation, and physical contributors to erectile dysfunction. When symptoms appear to be outside the physical scope of acupuncture care, we may recommend additional medical or therapeutic support." },
        { kind: "h3", text: "Acupuncture for Immune & Histamine Support" },
        { kind: "p", text: "Some concerns require a slower, more layered approach. Histamine sensitivity and immune-related patterns may involve the nervous system, hormones, digestion, inflammation, and stress response." },
        { kind: "p", text: "Acupuncture may help support immune regulation, resilience, and whole-body balance over time. Your practitioner will work with you to set realistic expectations and monitor changes as your body responds." },
        { kind: "p", text: "This care is best suited for clients seeking longer-term support for histamine sensitivity, immune dysregulation patterns, inflammatory symptoms, and overall wellness." },
        { kind: "h3", text: "Pre- and Post-Surgical Acupuncture Support" },
        { kind: "p", text: "Acupuncture may be a supportive part of your preparation and recovery plan." },
        { kind: "p", text: "Before surgery, treatment may focus on calming the nervous system, supporting circulation, reducing muscular compensation, and helping the body stay as balanced as possible." },
        { kind: "p", text: "After surgery, acupuncture typically begins once the incision is sufficiently healed and infection risk is lower, often around two to three weeks post-surgery depending on your medical team’s guidance. Post-surgical care may focus on pain reduction, swelling support, muscle guarding, mobility, strength rebuilding, and rehabilitation support." },
        { kind: "p", text: "We always encourage coordination with your surgeon, orthopedist, and physical therapist so your care feels aligned and safe." },
      ],
    },
    {
      id: "pediatric-needle-free",
      stop: "standing",
      heading: "Pediatric & Teen Acupuncture Support",
      photo: { asset: "cw-ap26-acu-leo", alt: "Acupuncturist Leonard Ma with a teen client", shape: "blob" },
      blocks: [
        { kind: "p", text: "Acupuncture for children and teens is gentle, flexible, and always guided by comfort.", lead: true },
        { kind: "p", text: "Younger clients may have shorter sessions, and needle-free options may be used when appropriate. For children or teens who feel nervous about needles, we may consider acupressure, ear seeds, or other gentle techniques." },
        { kind: "p", text: "Treatment spacing depends on the concern, though some clients may benefit from sessions spaced a few days apart." },
        { kind: "h3", text: "Needle-Free Options" },
        { kind: "p", text: "You do not have to love needles to benefit from East Asian medicine. For needle-sensitive clients, we offer gentle alternatives that can support relaxation, circulation, and balance." },
        {
          kind: "faq",
          items: [
            { q: "Cupping", a: ["Cupping uses gentle suction to support circulation, loosen tight muscles, and encourage tissue release. It may leave temporary bruise like marks on the skin. Please let your practitioner know if you take blood thinners, bruise easily, or have sensitive skin."] },
            { q: "Tui Na", a: ["Tui Na is a therapeutic East Asian bodywork technique that uses focused pressure and movement to support release, alignment, and balance. It is different from a traditional massage and is often used with specific treatment goals in mind."] },
            { q: "Acupressure", a: ["Acupressure uses gentle finger pressure on acupuncture points to support relief and regulation without needles. It can be a beautiful option for clients who prefer a softer approach."] },
            { q: "Ear Seeds", a: ["Ear seeds are small adhesive seeds or beads placed on specific points of the ear. They provide gentle, ongoing stimulation and may support stress, cravings, sleep, pain, and emotional balance."] },
          ],
        },
        { kind: "cta", label: "Cupping Therapy", href: "/services/cupping-therapy", secondary: true },
      ],
    },
    {
      id: "discover-your-pathway",
      stop: "ivy",
      heading: "Discover Your Pathway to Wellness",
      photo: { asset: "cw-ap-needle-closeup", alt: "A close-up of a single acupuncture needle", shape: "circle" },
      blocks: [
        { kind: "p", text: "At Pathways Within Wellness, acupuncture is not one-size-fits-all. Your care is personal, detailed, and guided by your comfort." },
        { kind: "p", text: "Whether you are coming in for pain relief, stress support, hormone balance, injury recovery, or a needle-free option, our intention is to help you feel restored, supported, and more at home in your body." },
        { kind: "p", text: "You deserve to feel your best—inside and out.", lead: true },
        { kind: "cta", label: "Book today", href: "/contact" },
      ],
    },
    {
      id: "what-to-expect",
      stop: "ground",
      layout: "split-reverse",
      heading: "What to expect during your session",
      photo: { asset: "cw-ap-shoulder-needles", alt: "A client resting with needles placed along the shoulder", shape: "arch" },
      blocks: [
        { kind: "p", text: "Your acupuncture session is designed to feel calm, comfortable, and restorative.", lead: true },
        { kind: "p", text: "After your intake and assessment, your practitioner will place thin, sterile needles based on your personalized treatment plan. You may feel warmth, heaviness, tingling, a dull ache, or a gentle sense of release." },
        { kind: "p", text: "Once the needles are placed, you will rest quietly for about 30 minutes. Soft music, low lighting, and a peaceful environment help your body settle into relaxation. A heat lamp may be used to encourage circulation, ease discomfort, and help muscles soften." },
        { kind: "p", text: "Many clients describe the experience as deeply calming and leave feeling more relaxed, open, and grounded." },
        { kind: "h3", text: "Before Your Appointment" },
        { kind: "p", text: "Please eat before your session to reduce the chance of feeling lightheaded. Hydration is also encouraged." },
        { kind: "p", text: "Wear comfortable clothing, especially if we are working with areas such as the knees, legs, back, shoulders, or hips. Your practitioner will guide positioning and draping so you feel comfortable and supported throughout your treatment." },
        { kind: "h3", text: "After Your Appointment" },
        { kind: "p", text: "After acupuncture, you may feel relaxed, sleepy, lighter, or gently energized. Mild soreness, tenderness, or occasional bruising can happen. Some clients may feel lightheaded when standing, especially if they have not eaten." },
        { kind: "p", text: "After your session, give your body time to integrate the treatment. Drink water, move gently, and avoid overexertion when possible." },
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
          intro: "You’ve got questions, and we’ve got answers. Some of our most-asked questions are here but if there’s something else on your mind, we love to chat.",
          items: [
            { q: "Does it hurt?", a: ["You may feel a pinch or some pressure as the needle is inserted into your skin, but this is unlikely. The needles we use are not much thicker than a strand of hair and you’re more likely to feel relaxed. There may be a sense of fullness during the duration of insertion, but there is no lasting pain or intense sensation that comes along with most acupuncture sessions."] },
            {
              q: "Is acupuncture safe?",
              a: [
                "Yes! When performed the high quality technicians and acupuncturists, acupuncture is a safe and comfortable experience with minimal risks. We use pre-sterilized and packaged needs, and discard them immediately after use.",
                "On rare occasions, you may have some itching or soreness after your treatments or experience inflammation or topical irritation from acupuncture. If you have sensitive skin or bruise easily, speak to your acupuncturist before your session.",
              ],
            },
            {
              q: "How long do results last?",
              a: [
                "This is dependent on where the acupuncture is applied and what it’s intended to treat.",
                "Results can last from hours to months, but your treatment plan can be tailored to the results and relaxation you’re craving once you know how your body responds to this slow-release balancing of energy and nervous system.",
              ],
            },
            {
              q: "What if I’m afraid of needles?",
              a: [
                "Our fine needles are unlike what you’d use for a shot or even when receiving a tattoo. These needles are so thin that they feel more like pressure than pinching pain you’d expect.",
                "If you have a fear of needles, please speak to our booking coordinator about your worries. We are happy to support you in overcoming it to experience the relaxing relief of acupuncture.",
              ],
            },
          ],
        },
        { kind: "p", text: "Feel free to reach out and let us help you apply a laser focus to your wellness dreams." },
      ],
    },
  ],
  closing: {
    heading: "You deserve to feel your best—inside and out.",
    text: ["Feel free to reach out and let us help you apply a laser focus to your wellness dreams."],
    cta: { label: "Book today", href: "/contact" },
  },
};

const cupping: PageContent = {
  url: "/services/cupping-therapy",
  title: "Cupping Therapy on Long Island — Pathways Within Wellness Services on Long Island",
  meta: "Cupping is one of the many ways we help clients release tension, restore balance, and reconnect with their body in a calm, supportive environment.",
  source: "34-pathwayswithinwellness-com-cupping-therapy.txt",
  eyebrow: "Wellness",
  h1: "Cupping Therapy",
  subtitle: "Understanding Cupping Therapy",
  intro: [
    "At Pathways Within, every service is designed to support your whole self, mind, body, and spirit. Cupping is one of the many ways we help clients release tension, restore balance, and reconnect with their body in a calm, supportive environment.",
  ],
  heroPhoto: { asset: "cw-ap26-acu-shoulder", alt: "A treatment on the shoulder at Pathways Within Wellness" },
  heroStop: "wide",
  sections: [
    {
      id: "how-it-works",
      stop: "cairn",
      heading: "How Does Cupping Therapy Work?",
      photo: { asset: "cw-ap-treatment-room", alt: "A client resting on the treatment table during a session", shape: "blob" },
      blocks: [
        { kind: "note", text: "Cupping is available with Massage or Acupuncture." },
        { kind: "p", text: "IV therapy delivers fluids, vitamins, minerals, amino acids, and antioxidants directly into the bloodstream, bypassing the digestive system for efficient absorption. This allows your body to receive targeted nutrient support when you need it most." },
      ],
    },
    {
      id: "massage-based",
      stop: "pool",
      layout: "wide",
      heading: "Massage-Based Cupping",
      blocks: [
        { kind: "p", text: "Massage-based cupping is rooted in soft tissue care. This approach focuses on the muscles, fascia, and areas of the body that may be holding stress, tightness, or restriction.", lead: true },
        { kind: "p", text: "Your massage therapist may use cups as part of a customized massage session to help encourage local circulation, ease muscular tension, and support greater comfort and mobility. Cups may be placed in specific areas or gently moved across the skin with oil or lotion, depending on your needs and comfort level." },
        { kind: "p", text: "Massage-based cupping may be a beautiful fit if you are looking for support with:" },
        {
          kind: "list",
          style: "check",
          items: [
            "Neck, shoulder, or back tension",
            "Muscle soreness",
            "Sports recovery",
            "Restricted movement",
            "Chronic areas of tightness",
            "A deeper sense of relaxation and release",
          ],
        },
        { kind: "p", text: "This style of cupping is especially helpful when your goal is to leave with less stress in your body and more calm in your soul." },
        { kind: "cta", label: "Massage", href: "/services/massage", secondary: true },
      ],
    },
    {
      id: "acupuncture-based",
      stop: "labyrinth",
      layout: "wide",
      heading: "Acupuncture-Based Cupping",
      blocks: [
        { kind: "p", text: "Acupuncture-based cupping is offered through the lens of East Asian medicine. Instead of focusing only on the local muscle or area of discomfort, your acupuncturist looks at how your symptoms may connect to the body as a whole.", lead: true },
        { kind: "p", text: "Cups may be placed along acupuncture channels, over specific points, or used alongside acupuncture as part of a personalized treatment plan. This approach may support movement of stagnation, circulation, pain relief, and the body’s natural healing response." },
        { kind: "p", text: "Acupuncture-based cupping may be a good fit if you are looking for support with:" },
        {
          kind: "list",
          style: "check",
          items: [
            "Pain patterns addressed through acupuncture",
            "Areas of stagnation or heaviness",
            "Tension connected to broader body patterns",
            "A treatment plan rooted in East Asian medicine",
            "Whole-body support alongside acupuncture care",
          ],
        },
        { kind: "p", text: "This style of cupping is often part of a larger healing experience, helping your body feel supported from the inside out." },
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
        { kind: "p", text: "Both forms of cupping can be restorative, supportive, and deeply relaxing. The best choice depends on what your body is asking for.", lead: true },
        { kind: "p", text: "Massage-based cupping may be best when your main goal is muscular release, mobility, soft tissue support, or relaxation." },
        { kind: "p", text: "Acupuncture-based cupping may be best when you are seeking cupping as part of a broader acupuncture treatment plan or whole-body East Asian medicine approach." },
        { kind: "p", text: "At Pathways Within Wellness, your practitioner will guide you with care. Before beginning, we will talk through your goals, review any important health considerations, explain what to expect, and adjust the treatment to your comfort." },
      ],
    },
    {
      id: "what-to-expect",
      stop: "standing",
      layout: "wide",
      heading: "What to Expect During Your Cupping Session",
      blocks: [
        { kind: "p", text: "Before your session, your practitioner will take time to understand your goals and make sure cupping is appropriate for you. Your comfort, safety, and individual needs always guide the treatment.", lead: true },
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
            "We recommend drinking water afterward and giving your body time to rest and integrate the treatment.",
          ],
        },
      ],
    },
    {
      id: "our-intention",
      stop: "ivy",
      heading: "Our Intention is never to offer a one-size-fits-all service.",
      photo: { asset: "ha-ap-massage-room", alt: "A quiet massage room at Pathways Within Wellness", shape: "circle" },
      blocks: [
        { kind: "p", text: "Whether cupping is included in your massage or acupuncture session, your care is always personalized, thoughtful, and guided by your comfort." },
        { kind: "p", text: "At Pathways Within Wellness, we are here to help you feel supported, restored, and more connected to your body, one pathway at a time.", lead: true },
        { kind: "cta", label: "Schedule your cupping therapy consultation today.", href: "/contact" },
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
            { q: "Does cupping hurt?", a: ["Cupping should not be painful. Most clients describe the sensation as a gentle pulling, pressure, or release. Some areas may feel more sensitive than others, especially where the body is holding tension. Your practitioner can adjust the suction at any time so the treatment feels supportive and comfortable."] },
            { q: "Are cupping marks bruises?", a: ["Cupping may leave temporary circular marks on the skin that can look like bruises, but they are a normal response to suction. These marks often fade within a few days, although some may last a little longer depending on your body, the area treated, and the level of suction used."] },
            { q: "Is cupping right for everyone?", a: ["Cupping can be a beautiful support for many people, but it is not appropriate for everyone. Please let your practitioner know if you bruise easily, take blood thinners, have fragile or irritated skin, are pregnant, are recovering from surgery, or have any medical condition that may affect your treatment. We will always help determine whether cupping is the right fit for your body and your care plan."] },
          ],
        },
      ],
    },
  ],
  closing: {
    heading: "Our Intention is never to offer a one-size-fits-all service.",
    text: ["At Pathways Within Wellness, we are here to help you feel supported, restored, and more connected to your body, one pathway at a time."],
    cta: { label: "Schedule your cupping therapy consultation today.", href: "/contact" },
  },
};

const energyWork: PageContent = {
  url: "/services/energy-work",
  title: "Energy Work — Pathways Within Wellness Services on Long Island",
  meta: "Discover transformative methods designed to balance your mind, body, and spirit. Our Energy Work offerings are rooted in gentle, hands-on healing that supports deep relaxation, emotional processing, and holistic well‑being.",
  source: "35-pathwayswithinwellness-com-energy-work.txt",
  eyebrow: "Wellness",
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
  title: "Reiki — Pathways Within Wellness Services on Long Island",
  meta: "Achieve inner peace and get more acquainted with your inner spirit with Reiki. Reiki offers the healing touch of an experienced practitioner and the relaxation of guided meditation.",
  source: "37-pathwayswithinwellness-com-reiki.txt",
  eyebrow: "Wellness",
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
  title: "Integrative Energy Therapy in Long Island — Pathways Within Wellness Services on Long Island",
  meta: "Integrative Energy Therapy seeks out and breaks down the barriers holding you back from the inside out.",
  source: "38-pathwayswithinwellness-com-integrative-energy-therapy.txt",
  eyebrow: "Wellness",
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

const cryotherapy: PageContent = {
  url: "/services/cryotherapy",
  title: "Cryotherapy — Pathways Within Wellness Services on Long Island",
  meta: "From burning off latent emotions to residual pain, cryotherapy is a precision tool with a wide breadth of therapeutic benefits.",
  source: "36-pathwayswithinwellness-com-cryotherapy-1.txt",
  eyebrow: "Wellness",
  h1: "Cryotherapy on Long Island",
  subtitle: "From burning off latent emotions to residual pain, cryotherapy is a precision tool with a wide breadth of therapeutic benefits.",
  intro: [
    "The use of cold as a therapeutic tool is a timeless way to experience localized or whole-body healing. Using subzero immersion to freeze out the unwelcome trauma of your past for a brighter future is possible with Cryotherapy.",
  ],
  heroPhoto: { asset: "cw-sea-foam-stones", alt: "Cold sea foam washing over smooth stones" },
  heroStop: "wide",
  sections: [
    {
      id: "cold-therapy-101",
      stop: "cairn",
      heading: "Cold Therapy 101",
      photo: { asset: "cw-water-drop", alt: "A single drop of water sending ripples across a still surface", shape: "blob" },
      blocks: [
        { kind: "p", text: "A brief exposure to extreme cold sounds like a dare you take or an accidental experience you don’t want to repeat, but sometimes the most surprising things can create holistic healing at a cellular level.", lead: true },
        { kind: "p", text: "In an enclosed space, you’ll be plunged into temperatures of up to -300°F for a brief period of time to provoke a myriad of benefits to body, mind, and spirit. The cold is created by liquid nitrogen, designed to ultra chill your skin and all the blood running close to it to create a holistic response of regeneration." },
        { kind: "p", text: "With benefits at every level of your being, this ancient therapy has incredible applications for pain of many kinds. From physical to physiological, the cold truly can sink straight into all elements of your being. The benefits of cryotherapy are so much more than skin-deep." },
      ],
    },
    {
      id: "benefits",
      stop: "pool",
      layout: "wide",
      heading: "Benefits of Cryotherapy",
      blocks: [
        { kind: "p", text: "Every facet of your human experience may find some space to heal with cryotherapy, especially if you experience:" },
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
      photo: { asset: "cw-coastal-stone-circles", alt: "Stone circles on a coastal shoreline", shape: "arch" },
      blocks: [
        { kind: "p", text: "The environments we exist in communicate constantly with our bodies. Both physical and emotional body conversations occur with what’s going on around you to manage the way your muscles and bones move as well as the way your emotions engage with whatever you are experiencing. Using Cryotherapy, we can slow the cellular response while heightening the oxygenation of your blood and tissues. When the temperature drops in such an extreme way, your whole body will respond." },
        { kind: "p", text: "This new and unexpected shift of environment can help to stop chronic conditions in their tracks. Because it is highly effective and minimally invasive, cryotherapy can be used to treat comprehensive and chronic conditions or applied in more localized manners for acute difficulties. From ice packs to immersive chambers, cryotherapy can help." },
      ],
    },
    {
      id: "inflammation",
      stop: "seated",
      heading: "Spotlight: Inflammation Management",
      photo: { asset: "pr-ap-mpq-wellness-boutique", alt: "The wellness boutique shelves at the Massapequa office", shape: "circle" },
      blocks: [
        { kind: "p", text: "Inflammation is not just something that happens to our joints or in response to physical injury. Our whole bodies are subject to react with an inflammatory response to the things we experience." },
        { kind: "p", text: "When our fight-or-flight reflex is engaged, it’s similar to an inflammatory response. Your body is flooded with hormones preparing you for action both mentally and physically. It can be helpful if you are in crisis or require immediate action." },
        { kind: "p", text: "But what happens when you’re experiencing those floods of hormones chronically, and the inflammatory response becomes a constant contention?", lead: true },
        { kind: "p", text: "Pain - Both emotional and physical pain are the result of those responses." },
        { kind: "p", text: "Cryotherapy is an age-old tool that can help you to manage not just the way your body responds to new pain, but how you flush out the hurt that lingers there as well." },
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
          intro: "You’ve got questions, and we’ve got answers. Some of our most-asked questions are here but if there’s something else on your mind, we love to chat. Feel free to reach out and let us help you apply a laser focus to your wellness dreams.",
          items: [
            {
              q: "Is is dangerous?",
              a: [
                "While there are always risks to exposure therapies of any kind, the danger of extreme cold is well controlled in our therapy chambers. We keep you as safe as possible through careful consideration while making healing the central focus.",
                "If you have diabetes, you should avoid cryotherapy. For other health conditions, ask your physician before we begin.",
              ],
            },
            {
              q: "What should i wear?",
              a: [
                "We will ensure you feel well-prepared before undertaking your first session.",
                "Loose-fitting and dry clothing are key to protecting skin from the risk of extreme cold. Socks and gloves will also help to prevent your extremities from experiencing potentially uncomfortable side effects like numbness, redness, or tingling that can occur temporarily after cryotherapy.",
              ],
            },
            { q: "How long do I go to Cryotherapy?", a: ["Individual sessions are brief. For whole-body cryotherapy, you’ll be in the chamber for less than 4 minutes and your whole appointment will be less than a half-hour. Localized therapy varies over time. You may see benefits from one treatment and follow up with visits as often as twice weekly as long as you are seeing results. Some athletes even do daily cryotherapy at home!"] },
            {
              q: "How can the cold help my mood?",
              a: [
                "While the body’s response to physical pain is not directly correlated to emotional pain, creating a shocking change to the physical systems can jar our emotional ones.",
                "By inducing vasoconstriction and sending the blood flow racing back toward your core, we can create higher levels of oxygenation and a wave of endorphins and enzymes that support your emotional wellbeing and, as a result, your mood.",
              ],
            },
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

const ivVitaminTherapy: PageContent = {
  url: "/services/iv-vitamin-therapy",
  title: "IV Vitamin Therapy — Pathways Within Wellness Services on Long Island",
  meta: "IV Vitamin Therapy is on hold until a provider is available.",
  source: "client brief (no source page)",
  eyebrow: "Wellness",
  h1: "IV Vitamin Therapy",
  heroPhoto: { asset: "ha-ap-wellness-lobby", alt: "The wellness lobby at Pathways Within Wellness" },
  heroStop: "wide",
  index: false,
  sections: [
    {
      id: "on-hold",
      stop: "cairn",
      layout: "center",
      blocks: [
        { kind: "note", text: "IV Vitamin Therapy is on hold until a provider is available." },
        { kind: "cta", label: "Contact Us", href: "/contact" },
      ],
    },
  ],
};

const christineCervo: PageContent = {
  url: "/team/christine-cervo",
  title: "Christine Cervo — Pathways Within Wellness Services on Long Island",
  meta: "Christine is a licensed massage therapist with a simple goal: to help people feel better in their bodies.",
  source: "47-pathwayswithinwellness-com-christine-cervo.txt",
  eyebrow: "LICENSED MASSAGE THERAPIST",
  h1: "Christine Cervo",
  intro: ["Christine is a licensed massage therapist with a simple goal: to help people feel better in their bodies."],
  heroPhoto: { asset: "ha-ap-massage-room", alt: "A massage room at Pathways Within Wellness" },
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
      photo: { asset: "cw-ap-massage-session", alt: "A massage session at Pathways Within Wellness", shape: "blob" },
      blocks: [
        { kind: "p", text: "Her thoughtful, personalized approach reflects the heart of Pathways Within Wellness: listen closely, meet people where they are, and create care that helps them feel more comfortable, supported, and connected to themselves.", lead: true },
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
  title: "Leonard Ma — Pathways Within Wellness Services on Long Island",
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
      photo: { asset: "cw-ap-acupuncture-session", alt: "An acupuncture session at Pathways Within Wellness", shape: "arch" },
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
  title: "Tia Baumohl — Pathways Within Wellness Services on Long Island",
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
  title: "Danielle Ingenito — Pathways Within Wellness Services on Long Island",
  meta: "Danielle is a licensed massage therapist with 12 years of experience, specializing in therapeutic massage and deep-tissue techniques.",
  source: "50-pathwayswithinwellness-com-danielle-ingenito.txt",
  eyebrow: "LICENSED MASSAGE THERAPIST",
  h1: "Danielle Ingenito",
  intro: ["Danielle is a licensed massage therapist with 12 years of experience, specializing in therapeutic massage and deep-tissue techniques. She completed more than 1,100 hours of comprehensive training at the Connecticut Center for Massage Therapy in Westport, Connecticut."],
  heroPhoto: { asset: "pr-ap-ns-massage-green", alt: "A green massage treatment room at Pathways Within Wellness" },
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
      photo: { asset: "cw-ap-massage-session", alt: "A massage session at Pathways Within Wellness", shape: "blob" },
      blocks: [
        { kind: "p", text: "Danielle is a licensed massage therapist with 12 years of experience, specializing in therapeutic massage and deep-tissue techniques.", lead: true },
        { kind: "cta", label: "Massage", href: "/services/massage", secondary: true },
      ],
    },
    {
      id: "room",
      stop: "labyrinth",
      layout: "split-reverse",
      photo: { asset: "ha-ap-massage-room", alt: "A massage room at Pathways Within Wellness", shape: "arch" },
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
  cryotherapy,
  ivVitaminTherapy,
  christineCervo,
  leonardMa,
  tiaBaumohl,
  danielleIngenito,
];

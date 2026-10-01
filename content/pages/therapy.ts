import type { PageContent } from "../types";

/**
 * Therapy service pages. Every string is copied verbatim from the named
 * content/source/*.txt capture; only structure, photos and link targets are ours.
 */

const CONTACT = { label: "Contact Us", href: "/contact" };

const individualTherapy: PageContent = {
  url: "/services/individual-therapy",
  title: "Individual Therapy on Long Island — Pathways Within | Wisdom & Wellness Services",
  meta: "Individual therapy is your classic one-on-one counseling. The goal of individual therapy is to find greater self-awareness and give you the tools to live a more meaningful life.",
  source: "04-www-pathwayswithin-me-individual-therapy.txt",
  eyebrow: "Therapy",
  h1: "Individual Therapy on Long Island",
  intro: [
    "Individual therapy is your classic one-on-one counseling. The beauty of individual therapy lies in two main foundations: first, that you are willing to challenge yourself and learn more about the roots of your symptoms and yourself in the process; and second, that you are having a dialogue with a trained professional. The goal of individual therapy is to find greater self-awareness and give you the tools to live a more meaningful life.",
  ],
  heroPhoto: { asset: "th-ap26-seated", alt: "A client seated in a one-on-one therapy session" },
  heroStop: "wide",
  heroCtas: [{ label: "Let's Get Started", href: "/contact" }],
  sections: [
    {
      id: "individual-therapy",
      stop: "cairn",
      layout: "center",
      heading: "Individual Therapy",
      blocks: [
        {
          kind: "quote",
          text: "“The shoe that fits one person pinches another; there is no one recipe for living that suits all cases.”",
          cite: "— Carl Jung",
        },
      ],
    },
    {
      id: "self-exploration",
      stop: "pool",
      heading: "Self-Exploration",
      photo: { asset: "th-ap26-conversation", alt: "A therapist and client in conversation" },
      blocks: [
        {
          kind: "p",
          text: "The Greek philosopher Aristotle said: “Knowing yourself is the beginning of all wisdom.” We believe that any form of therapy is a path to knowing yourself better with the final goal of managing any mental health issues you may experience. Some issues that may be coming up for you include anxiety, depression, grief, anger, and low self-esteem.",
        },
        {
          kind: "p",
          text: "You might be asking yourself: Can therapy really help me? The answer is a resounding yes. Having someone to talk to who is unbiased and non-judgmental can be incredibly helpful on its own. On top of that, add the support and knowledge a skilled therapist brings to the table and you have yourself a winning formula.",
          lead: true,
        },
      ],
    },
    {
      id: "skilled-professionals",
      stop: "labyrinth",
      heading: "Skilled Professionals",
      photo: { asset: "th-ap26-across", alt: "A therapist listening across from a client" },
      blocks: [
        {
          kind: "p",
          text: "Our therapists are trained, licensed, and experienced in different areas of counseling. Each clinician works with special populations based on their expertise and passions. We’ve been working for years with people of all kinds of backgrounds, and we’re confident we have someone in house who can help you with any issues you may be encountering.",
        },
        {
          kind: "p",
          text: "We look to create a journey for each individual that is as individual as they are. We focus on getting to know you, being with you along the way, and figuring out how best to be of service.",
          lead: true,
        },
        { kind: "cta", label: "Meet Our Team", href: "/team", secondary: true },
      ],
    },
    {
      id: "spotlight-cbt",
      stop: "seated",
      layout: "prose",
      heading: "Spotlight: Cognitive Behavioral Therapy (CBT)",
      blocks: [
        {
          kind: "p",
          text: "One of the methods we use often is Cognitive Behavioral Therapy or CBT. This is a type of therapy that focuses on achieving one or more goals by “rewiring” the brain through paying attention to our thoughts, feelings, and behaviors and the ways that they are connected. In this practice, a therapist works to change the patterns of thinking that may lurk behind the negative symptoms that may have originally brought you in for services.",
        },
        {
          kind: "p",
          text: "Often, CBT reveals the stark difference between what your brain thinks will happen and what will actually happen. You may find that, for instance, you have a crippling fear of public speaking. Your mind will tell you that it is easier to avoid public speaking in order to avoid the stress and anxiety that comes with the phobia. CBT seeks to remind you however, that avoidance often allows the fear to grow and become unmanageable.",
        },
        {
          kind: "p",
          text: "To rewire the brain, a therapist will help you identify triggers and problematic thought patterns, and by exploring where they originate, and learning coping skills you will be empowered to challenge those negative thoughts and develop a more positive way of thinking.",
        },
      ],
    },
    {
      id: "faqs",
      stop: "standing",
      layout: "wide",
      heading: "FAQs",
      blocks: [
        {
          kind: "faq",
          items: [
            {
              q: "Why would I want to talk to a therapist?",
              a: [
                "Therapists are people too! The benefit of talking to a therapist is the training and experience we’ve collected over the years. Some people prefer to talk to friends about their problems, and we don’t discourage that because friends can be a great source of support in difficult times. However, friends are often unable to provide an unbiased and non-judgmental perspective and may not know how to support you in the ways you need it most. Many people thrive on both—friends who love and cherish you and a therapist who can help guide and support you through your mental health journey.",
              ],
            },
            {
              q: "How long do I have to be in therapy?",
              a: [
                "Therapy is meant to work for you, so that means we accommodate any preferences you may have. The length and frequency of therapy will depend on your goals and the effort you put forth in following through. It’s difficult for us to predict how long therapy will be a part of your life, but the important part to focus on is that you get to decide and the process can be as flexible as you need. You can see us for a few months, stop, and start back up again. That’s part of the benefit of individual therapy—it’s all about you and what works for your life. Of course the more you view therapy as a priority and commit yourself to the process, the quicker you will likely see results.",
              ],
            },
            {
              q: "How confidential is therapy?",
              a: [
                "Your privacy is a major ethical concern for us. We want you to feel comfortable and therefore we adhere to the guidelines set forth by the American Psychological Association (APA) and HIPAA. Still, there are some limitations. If you express the intent to hurt a child, an elderly person, or yourself, we are required to report some information to relevant authorities. However, aside from these stipulations, what you say within the confines of a therapy session are completely confidential and will remain entirely private.",
              ],
            },
            {
              q: "What happens in a counseling session?",
              a: [
                "Well, part of that is entirely up to you. We want your session to be yours. It’s a space for you to talk about whatever’s on your mind. That being said, each clinician may operate in different ways. If you think you’ll prefer someone who provides a good amount of structure or practices a specific method of therapeutic intervention, we will make sure to pair you up with the right therapist for you.",
                "Once you’re paired with a therapist, your first session will be where you’ll have the opportunity to work out your specific concerns. In return, we will ask questions as well to get to know you and your situation a bit better. Humans are complicated, and the more time we can spend talking to you, the more we’ll be able to get to know you to best help you walk through the concerns that originally brought you in.",
                "Usually, your therapist will have some game plan for the session, but we are also flexible to tackle anything that may come up organically in each session. You can think of the role of the therapist like a conductor on a train. Throughout treatment, you and your therapist are faced with several dark tunnels. You decide which tunnel you would like to explore and your therapist drives the train. At any point, if you decide you want to try a different tunnel, you can turn around together and try again.",
              ],
            },
          ],
        },
      ],
    },
  ],
  closing: {
    heading: "Healing is holistic.",
    text: [
      "Take the next step in your journey with rejuvenating treatments designed to restore balance, confidence, and well-being. You deserve to feel your best—inside and out.",
    ],
    cta: { label: "Discover your Pathway to Wellness", href: "/contact" },
  },
};

const childTherapy: PageContent = {
  url: "/services/child-therapy",
  title: "Therapy for Children on Long Island — Pathways Within | Wisdom & Wellness Services",
  meta: "There’s no singular way forward when someone small is experiencing something really big and we’re happy to help you navigate your next steps.",
  source: "05-www-pathwayswithin-me-child-therapy.txt",
  eyebrow: "Therapy",
  h1: "Therapy for Children on Long Island",
  subtitle: "Do you know your child needs support but you’re not sure where to begin?",
  intro: [
    "There’s no singular way forward when someone small is experiencing something really big and we’re happy to help you navigate your next steps.",
    "Children are not miniature adults, yet they often feel emotions as all-consuming as we do in our adult lives. With different developmental stages and expression cues, supporting your little ones through their difficult feelings and challenging behaviors can feel scary or even downright impossible.",
    "With expert therapists across each age and stage, we are here to help you find the Pathways back to “possible”.",
  ],
  heroPhoto: { asset: "th-ap26-fam-child", alt: "A child with a parent in a therapy room" },
  heroStop: "wide",
  heroCtas: [{ label: "CALL PATHWAYS WITHIN TODAY TO GET STARTED →", href: "/contact" }],
  sections: [
    {
      id: "no-one-got-it-wrong",
      stop: "cairn",
      heading: "No one got it wrong. No one missed a step.",
      photo: { asset: "th-mother-hugging-child", alt: "A mother hugging her child" },
      blocks: [
        {
          kind: "p",
          text: "Recognizing the need for additional support in your child is a powerful parental experience. You may be feeling overwhelmed or as if you’ve gotten something wrong, but the need for therapy is not borne from failure- not on your part, or the part of your child.",
          lead: true,
        },
        {
          kind: "p",
          text: "Sometimes, we just all need a little help in navigating what we’re feeling and how to process that. Giving your children the ability to recognize that need, ask for that support and work through their roadblocks with effective coping skills, developmentally appropriate tools, and a qualified expert to support them is a powerful way to show them you’re listening.",
        },
      ],
    },
    {
      id: "play-therapy",
      stop: "pool",
      eyebrow: "Caring for the big feelings of our littlest loved ones",
      heading: "Play Therapy on Long Island",
      photo: { asset: "th-ap26-kids-toy", alt: "A child playing with a toy during a session" },
      blocks: [
        {
          kind: "p",
          text: "Most often used with children in middle developmental stages from ages 3 to around 12, play therapy capitalizes on the ability of abstract informational exchange to help your child engage in emotional processing through a less invasive lens.",
        },
        { kind: "p", text: "Play therapy works by bridging the gap between the way adults communicate and the way children do.", lead: true },
        {
          kind: "p",
          text: "By bringing play to the forefront of navigating complex emotional experiences, we can not only support but actively help children feel their feelings in a way that makes sense for them.",
        },
      ],
    },
    {
      id: "how-it-works",
      stop: "labyrinth",
      heading: "How it works:",
      photos: [
        { asset: "th-toddler-blocks-floor", alt: "A toddler building with blocks on the floor" },
        { asset: "th-ap26-kids-three", alt: "Three children in a play therapy room" },
        { asset: "th-ap26-kids-point", alt: "A child pointing during play" },
      ],
      blocks: [
        {
          kind: "p",
          text: "Our kids process the world through play. Good or bad, their toys and imaginations represent - either literally or symbolically- the shape and feeling of the world around them.",
        },
        {
          kind: "p",
          text: "Through play therapy, we join the child in their world through their play. As we play and engage with the world at their level, they may become less guarded and create space for us to bridge the gap in communication styles as they act out their inner emotions and experiences in real-time.",
        },
        {
          kind: "p",
          text: "Each therapist has a unique way of engaging in a child’s world, and each child will require a different combination of those methods. Through observation and re-assessment, the therapeutic plan will be a living document that responds to your child’s needs.",
        },
        {
          kind: "p",
          text: "Play therapy will be tailored to the child, the experiences they’ve had, and the way they’re feeling in that moment. Healing and skill-building will take place with a treatment plan outlined from what the therapist learns and build upon how they can best help the child through any and all variables that may occur. Progress may look slow, or grow by leaps and bounds quite quickly, depending.",
        },
      ],
    },
    {
      id: "privacy-and-parent-engagement",
      stop: "seated",
      layout: "prose",
      heading: "Privacy & Parent Engagement in Child Therapy",
      blocks: [
        {
          kind: "p",
          text: "At Pathways Within, we recognize that effective therapy for children involves both respecting their need for privacy and actively engaging parents in the therapeutic process.​",
          lead: true,
        },
        { kind: "h3", text: "Child Privacy" },
        {
          kind: "p",
          text: "Confidentiality is a cornerstone of effective therapy. Children are more likely to open up and engage in the therapeutic process when they feel their privacy is respected. Therapists are committed to maintaining this confidentiality, sharing information with parents only when necessary, such as when there are concerns about the child's safety.",
        },
        { kind: "h3", text: "Parent Engagement" },
        {
          kind: "p",
          text: "While respecting a child's privacy, we also believe in the importance of parental involvement. Parents are encouraged to participate in the therapeutic process, collaborating with therapists to support their child's progress. This partnership ensures that therapeutic strategies are reinforced at home and that parents are equipped to assist their child effectively. ​",
        },
        {
          kind: "p",
          text: "By balancing confidentiality with active parental involvement, we aim to create a supportive environment that fosters healing and growth for your child.",
        },
      ],
    },
  ],
  closing: {
    heading: "Celebrate your child’s ability to ask for help by responding to their needs.",
    cta: { label: "CALL PATHWAYS WITHIN TODAY TO GET STARTED →", href: "/contact" },
  },
};

const teenTherapy: PageContent = {
  url: "/services/teen-therapy",
  title: "Therapy for Teens on Long Island — Pathways Within | Wisdom & Wellness Services",
  meta: "Teens reign supreme in the realm of “I don’t want to talk about it” and with good reason. We’re here to support that effort, not replace or undermine it.",
  source: "06-www-pathwayswithin-me-teen-therapy.txt",
  eyebrow: "Therapy",
  h1: "Therapy for Teens on Long Island",
  subtitle: "Do you or your child need someone to talk to but you’re not sure where or how to begin?",
  intro: [
    "Teens reign supreme in the realm of “I don’t want to talk about it” and with good reason. The cognitive and emotional development that takes place in our teen years is profound—moving each of us along our own journey from voiceless to independent within a complicated world that’s changing around us.",
    "It can be hard to know how to process what you’re feeling while you’re feeling it, much less putting it into words so someone else can understand.",
    "It’s not that teens don’t want to be understood or feel above relating to their loved ones. They’re trying to understand themselves first. We’re here to support that effort, not replace or undermine it.",
  ],
  heroPhoto: { asset: "th-ap26-teen", alt: "A teenager in a therapy session" },
  heroStop: "wide",
  heroCtas: [{ label: "We’re ready to listen →", href: "/contact" }],
  sections: [
    {
      id: "kaleidoscope",
      stop: "cairn",
      heading: "A comfortable and safe therapeutic relationship can help make sense of the kaleidoscope of experiences that can make teenhood feel tumultuous.",
      photo: { asset: "th-teens-pebble-beach", alt: "Teens together on a pebble beach" },
      blocks: [
        { kind: "h3", text: "Social Changes" },
        { kind: "list", style: "pills", items: ["Exposure", "Independence", "Identity", "Influences", "Relationships", "Responsibility", "Values"] },
        { kind: "h3", text: "Emotional Changes" },
        { kind: "list", style: "pills", items: ["Decision making", "Feelings", "Moods", "Peer response", "Perception", "Sensitivity", "Self-consciousness"] },
      ],
    },
    {
      id: "for-teens",
      stop: "pool",
      heading: "For Teens →",
      photo: { asset: "th-teen-denim-jacket", alt: "A teen in a denim jacket" },
      blocks: [
        {
          kind: "p",
          text: "Are you feeling hopeless, helpless, frustrated, or just overwhelmed? Experiencing something and you’re just not sure where to turn or how to process it? We’re here for you.",
          lead: true,
        },
        {
          kind: "p",
          text: "Growing up is complicated and no one is going to tell you it’s normal or that you’re being too “emo” or “angsty”. The truth is, you’re not. You’re going through a lot and there is nothing wrong with asking for help to make sure you can do that safely. Your mental health is important and we value your autonomy in advocating for it and your privacy in talking about the things that matter to you. Be clear, be confident, and don’t overthink it. The beauty of your story is that it’s going to continue to evolve and your site can evolve with it. Your goal should be to make it feel right for right now. Later will take care of itself. It always does.",
        },
        {
          kind: "p",
          text: "If you’re feeling overwhelmed by the things you’re experiencing and fear you may be at risk of harm from yourself or anyone else, please don’t wait for an appointment. Call 911 and seek immediate care.",
        },
      ],
    },
    {
      id: "places-we-can-help",
      stop: "labyrinth",
      layout: "wide",
      heading: "The places we can help",
      blocks: [
        {
          kind: "faq",
          items: [
            { q: "School", a: ["School stress is overwhelming. Balancing your academic needs with your independence and developing responsibilities outside of school can be a lot of pressure."] },
            { q: "Family", a: ["The shape of relationships at home will change and you may be looking to understand how to love your family while celebrating your growing independence."] },
            { q: "Social", a: ["Friends, peers, social groups, and clubs. It’s a lot to try to sort out in figuring out where you fit, where you want to fit, and how to prioritize the people around you."] },
          ],
        },
      ],
    },
    {
      id: "experiences-we-can-support",
      stop: "seated",
      layout: "wide",
      heading: "The experiences we can support",
      blocks: [
        {
          kind: "faq",
          items: [
            { q: "Trauma", a: ["If you’ve been through something that’s sticking with you and affecting your ability to process your healing, you are not alone. There are tools out there to support a variety of types of trauma."] },
            { q: "Abuse", a: ["Have you experienced physical or sexual abuse? After the initial shock of what you’ve been through, you may be ready to move on but you’re not sure how. We want to help you take your life back."] },
            { q: "Health", a: ["Your whole-self health has an impact on how you experience your day-to-day life. Whether you are struggling with physical, mental, or a combination of health concerns, you deserve to feel empowered."] },
          ],
        },
      ],
    },
    {
      id: "in-therapy-at-home",
      stop: "standing",
      heading: "In therapy, you might …",
      photo: { asset: "th-woman-ledge-sunlight", alt: "A young person sitting in the sunlight" },
      blocks: [
        {
          kind: "list",
          style: "check",
          items: [
            "Talk about what’s bothering you because it’s easier to feel your feelings one at a time when you don’t have to keep them all inside",
            "Learn new things about yourself or the situations you’re in so you feel empowered in what’s going on and how it might impact you",
            "Practice skills to help you navigate the world around you like mindfulness, self-talk, and breathing tools no one can see you using- or stop you from accessing",
            "Find new skills and strengths to help you feel confident in who you are and what you want to achieve even when things feel hard",
          ],
        },
        { kind: "h3", text: "At home, you can …" },
        {
          kind: "list",
          style: "check",
          items: [
            "Begin preparing for the growth that will take place as you find a safe space to relax and get support",
            "Practice the skills you’re learning with your therapist",
            "Lean on parents and teachers for support",
            "Care for yourself by staying hydrated, eating well, and moving your body",
            "Care for your mind with empowering self-talk, and open dialogue with someone you trust about how you’re feeling",
          ],
        },
      ],
    },
    {
      id: "for-parents",
      stop: "ivy",
      heading: "For Parents →",
      photo: { asset: "th-parent-teen-car", alt: "A parent and teen talking in the car" },
      blocks: [
        {
          kind: "p",
          text: "Therapy can help find the pathways toward navigating the immense pressures of a constantly changing social and emotional sphere in this transitional time. Whether your teen has experienced something that is beyond your expertise as a parent or is having difficulty processing the changes they’re going through, they deserve support.",
        },
        {
          kind: "p",
          text: "Offering an empathetic, judgment-free space is a wonderful way to engage your teens and open the door for hard conversations. But what happens when we’re having those hard conversations and you’re not sure what to do with what you learn?",
        },
      ],
    },
  ],
  closing: {
    heading: "Therapeutic support for your teens is a tool to support those conversations, not a replacement for having them. It’s just as much a parenting tool for you as it is for them.",
    cta: { label: "We’re ready to listen →", href: "/contact" },
  },
};

const couplesTherapy: PageContent = {
  url: "/services/couples-therapy",
  title: "Couples Therapy on Long Island — Pathways Within | Wisdom & Wellness Services",
  meta: "Relationships can be difficult to maintain, especially as the years go by and each person changes in unforeseen ways. Therapy can be a powerful way to tease out the underlying issues in order to build stronger connections with your partner.",
  source: "07-www-pathwayswithin-me-couples-therapy.txt",
  eyebrow: "Therapy",
  h1: "Couples Therapy on Long Island",
  intro: [
    "Relationships can be difficult to maintain, especially as the years go by and each person changes in unforeseen ways. A break in communication can often lead to other problems that plague modern marriages, and therapy can be a powerful way to tease out the underlying issues in order to build stronger connections with your partner.",
  ],
  heroPhoto: { asset: "th-ap26-couple", alt: "A couple together in a therapy session" },
  heroStop: "wide",
  heroCtas: [{ label: "Let's Get Started", href: "/contact" }],
  sections: [
    {
      id: "couples-therapy",
      stop: "cairn",
      layout: "center",
      heading: "Couples Therapy",
      blocks: [
        {
          kind: "quote",
          text: "“Being the “best you can be” is really only possible when you are deeply connected to another. Splendid isolation is for planets, not people.”",
          cite: "— Dr. Sue Johnson",
        },
      ],
    },
    {
      id: "sound-familiar",
      stop: "pool",
      photo: { asset: "th-couple-boardwalk", alt: "A couple walking along a boardwalk" },
      blocks: [
        {
          kind: "p",
          text: "Do you find yourself wondering why you haven't found the love you want in your relationships? Or why it seems like love fades the longer you’ve been together?",
          lead: true,
        },
        {
          kind: "p",
          text: "Do you believe no matter what you say or do for your significant other, it's never the \"right thing\" or \"good enough\"? Do you find yourself in the aftermath of a betrayal in one way or another?",
          lead: true,
        },
      ],
    },
    {
      id: "in-a-nutshell",
      stop: "labyrinth",
      heading: "Couples Therapy in a Nutshell",
      photo: { asset: "th-ap26-green-couple", alt: "A couple seated together on a green sofa" },
      blocks: [
        {
          kind: "p",
          text: "In a long partnership, people tend to drift apart. It’s the natural ebb and flow of relationships, and there’s nothing inherently wrong in your relationship if you feel this way. The trick is being able to pull yourself back together and rediscover what drew you to your partner in the first place.",
        },
        {
          kind: "p",
          text: "To some couples, it might feel uncomfortable to air out your “dirty laundry” in front of another person. We want you to know that’s not how it feels from our side. We are there simply to help communication flow easily, to serve as a middle ground for each partner. The connection is already there—we’re just there to remind you what it is and how to tap into it.",
        },
      ],
    },
    {
      id: "comfort-is-key",
      stop: "seated",
      layout: "prose",
      heading: "Comfort is Key",
      blocks: [
        {
          kind: "p",
          text: "One of the most important parts of couples therapy is feeling comfortable, both with the idea of attending therapy and with the therapist as well. Usually, one partner is much more convinced about the wonders of therapy than the other, and in these cases, it’s important to show them how grateful you are that they are giving therapy a try.",
        },
        {
          kind: "p",
          text: "It’s important to know that your therapist is not going to take sides regarding whatever conflict you may bring in, no matter their gender or personal history. The role of the therapist is not to claim one partner the victor over the other, but to help them hear and truly see one another.",
        },
        { kind: "p", text: "We also want you to feel comfortable working with the specific therapist you’ve selected.", lead: true },
        {
          kind: "p",
          text: "Ideally, you and your partner will feel comfortable sharing with each other under the guidance of your therapist. But if there’s something that makes you uncomfortable, the best way to solve that problem is to talk to your therapist and see if the issue can be fixed. A good therapist welcomes any input, and we like to be flexible and open to our client’s needs.",
        },
      ],
    },
    {
      id: "spotlight-gottman",
      stop: "standing",
      heading: "Spotlight: The Gottman Method",
      photo: { asset: "th-ap26-older-couple", alt: "An older couple together in session" },
      blocks: [
        {
          kind: "p",
          text: "While couples therapy can take many forms, we specialize in using the Gottman Method. The main idea of this methodology is to give priority to unresolved conflicts and to try and talk through them through the use of positive communication. The goal is to promote communication by avoiding criticism, contempt, defensiveness, and stonewalling -all terms that you will become more familiar with over the course of therapy.",
        },
        {
          kind: "p",
          text: "The Gottman Method has been incredibly effective in our experience in increasing respect, intimacy, and affection in the couples we’ve worked with. By removing barriers toward conflict resolution, couples who are open to using this method can create a profound sense of empathy and understanding in their relationship, enough to sustain them for years to come.",
        },
        { kind: "h3", text: "Spotlight: Somatic Couples Therapy" },
        { kind: "p", text: "We also provide a modified version of Somatic Therapy for couples, which essentially seeks to enhance the mind-body connection." },
        { kind: "cta", label: "Learn more about Somatic Therapy", href: "/services/somatic-therapy", secondary: true },
      ],
    },
    {
      id: "faqs",
      stop: "ivy",
      layout: "wide",
      heading: "FAQs About Couples Therapy on Long Island",
      blocks: [
        {
          kind: "faq",
          items: [
            {
              q: "What does a therapist know about my relationship?",
              a: [
                "This is actually a great point because the benefit of having a therapist for couples therapy is the fact that they’re unbiased strangers. They’re not involved in your lives, and can therefore take a non-judgmental approach to help you realize where particular patterns may be emerging. Many people in long-term relationships don’t even realize the things they may be doing that hurt their partner, but a trained third-party observer can find these moments and gently confront them.",
              ],
            },
            {
              q: "What is the goal of couples therapy?",
              a: [
                "Couples therapy is very much like individual therapy in that each couple is unique and the therapy will reflect that. Furthermore, the goal of therapy is to meet the needs and preferences of the client. In couples therapy, there are two people involved, which means two sets of preferences and needs. Your therapist will do their best to honor both partners and give them both the space they need to express their goals for the relationship, whether it’s to stay together, to separate gracefully, or even to establish solid footing for a younger relationship just starting out.",
              ],
            },
            {
              q: "Why shouldn’t I just end the relationship and start fresh with someone new?",
              a: [
                "Some couples feel that if they can’t solve their problems on their own, they aren’t right for each other. Breaking up seems like the only option. Unfortunately, this is often not the case.",
                "What we know is that people bring the same patterns and bad habits into new relationships, and continue the same cycle. Couples therapy is often more about learning about yourself so you can be a better partner in your relationship. Be aware that the goal of couples therapy is not to make a judgment about whether or not a couple should break up but rather help the people involved understand each other and their relationship from a different perspective.",
              ],
            },
            {
              q: "What results can we expect from couples therapy?",
              a: [
                "While we cannot guarantee your relationship will continue in the way you hope for, we can assure you that by the end of your therapeutic journey you will have a much better understanding of your relationship and yourself as a partner. If both partners are willing and open to working on themselves, you will be a source of comfort and support for each other with the tools at your disposal to manage conflict in much more effective and positive ways.",
              ],
            },
          ],
        },
      ],
    },
  ],
  closing: {
    heading: "These are common feelings to have when you have been in a long-term relationship but couples therapy can help.",
    cta: { label: "Let's Get Started", href: "/contact" },
  },
};

const familyTherapy: PageContent = {
  url: "/services/family-therapy",
  title: "Family Therapy on Long Island — Pathways Within | Wisdom & Wellness Services",
  meta: "Family therapy at Pathways Within supports healing within the relationships that shape us most — whether those are with biological family, chosen family, or the unique constellation of people who make up your support system.",
  source: "08-www-pathwayswithin-me-family-therapy-on-long-island.txt",
  eyebrow: "Therapy",
  h1: "Family Therapy on Long Island",
  subtitle: "Healing happens in connection",
  intro: [
    "Family therapy at Pathways Within supports healing within the relationships that shape us most — whether those are with biological family, chosen family, or the unique constellation of people who make up your support system.",
  ],
  heroPhoto: { asset: "th-ap26-fam-four", alt: "A family of four together in a therapy session" },
  heroStop: "wide",
  heroCtas: [{ label: "Get started with a family therapist →", href: "/contact" }],
  sections: [
    {
      id: "family-looks-different",
      stop: "cairn",
      photo: { asset: "th-family-beach-backs", alt: "A family walking together on the beach" },
      blocks: [
        {
          kind: "p",
          text: "We understand that “family” doesn’t look the same for everyone. That’s why our approach to family therapy is flexible, inclusive, and grounded in deep respect for your lived experience. Whether you're navigating generational conflict, setting new boundaries, or working through a crisis, our goal is to help your family system move toward healthier patterns and deeper connection.",
          lead: true,
        },
      ],
    },
    {
      id: "can-help-with",
      stop: "pool",
      heading: "Family therapy can help with",
      photo: { asset: "th-family-multigen-fire", alt: "A multigenerational family gathered together" },
      blocks: [
        {
          kind: "p",
          text: "Your therapist will work collaboratively with your family to create a space where every voice can be heard and respected. We’ll explore patterns that keep you stuck and build tools to help your family relate in more open, authentic, and compassionate ways.",
        },
        {
          kind: "list",
          style: "pills",
          items: [
            "Communication breakdowns",
            "Major life transitions or losses",
            "Blended family or coparenting",
            "Chronic misunderstandings",
            "Cultural tension within the family",
            "Building stronger bonds",
            "Supporting struggling members",
            "Intergenerational trauma",
          ],
        },
      ],
    },
    {
      id: "spotlight-multigenerational",
      stop: "labyrinth",
      heading: "Spotlight: Support for Multigenerational and Chosen Families →",
      photo: { asset: "th-ap26-fam-two", alt: "Two family members in session together" },
      blocks: [
        {
          kind: "p",
          text: "At Pathways Within, we work with all types of families, including those with multiple generations living together and families formed through community, friendship, or shared identity. These relationships can bring deep meaning — and sometimes unique challenges.",
        },
        {
          kind: "p",
          text: "Our therapists are attuned to the dynamics that can emerge across age groups, cultural perspectives, or identity-based differences. We help families navigate these complexities with compassion, humility, and a commitment to helping each member feel seen, heard, and valued.",
        },
      ],
    },
    {
      id: "faqs",
      stop: "seated",
      layout: "wide",
      heading: "FAQs about Family Therapy",
      blocks: [
        {
          kind: "faq",
          items: [
            {
              q: "Who should attend family therapy?",
              a: ["Anyone who is part of your family system. This might include parents, children, partners, siblings, grandparents, or chosen family. We welcome all configurations and family structures. Therapy may involve everyone together, smaller groupings, or individual meetings as needed."],
            },
            {
              q: "What if not everyone in the family wants to come?",
              a: ["That’s okay. It’s common for some members to feel unsure about therapy. You can begin with those who are open to participating. Often, as changes start happening, others become more willing to join. Your therapist can help navigate those dynamics with care."],
            },
            {
              q: "What kinds of issues does family therapy address?",
              a: ["Family therapy can help with a wide range of concerns, including communication challenges, parenting stress, loss, transitions (such as divorce or blending families), mental health concerns affecting one or more members, and cultural or intergenerational conflict. We also work with families seeking to strengthen their bond proactively."],
            },
            {
              q: "Do you work with chosen or nontraditional families?",
              a: ["Absolutely. We honor all family identities — whether related by blood, marriage, adoption, or shared life. Chosen families, polyamorous constellations, LGBTQIA+ families, and other nontraditional structures are always welcome here."],
            },
            {
              q: "What’s the role of the therapist in family therapy?",
              a: ["Your therapist is a neutral guide who helps your family understand patterns, identify strengths, and improve communication. We don’t take sides or assign blame. Instead, we create space for each person to be heard, and for the family to practice new ways of connecting and growing together."],
            },
          ],
        },
      ],
    },
  ],
  closing: {
    heading: "Healing happens in connection",
    cta: { label: "Get started with a family therapist →", href: "/contact" },
  },
};

const traumaTherapy: PageContent = {
  url: "/services/trauma-therapy",
  title: "Trauma Therapy on Long Island — Pathways Within | Wisdom & Wellness Services",
  meta: "Trauma has lasting physical and emotional effects that can leave you tired, jumpy, anxious, feeling ashamed, exposed, insecure, and wondering who you can trust. We can help you become better at managing your trauma and reducing the symptoms associated with it.",
  source: "09-www-pathwayswithin-me-trauma-therapy.txt",
  eyebrow: "Therapy",
  h1: "Trauma Therapy on Long Island",
  intro: [
    "Trauma has lasting physical and emotional effects that can leave you tired, jumpy, anxious, feeling ashamed, exposed, insecure, and wondering who you can trust. We can’t control everything that happens to us, or how we are affected by these events. However, we can help you become better at managing your trauma and reducing the symptoms associated with it.",
  ],
  heroPhoto: { asset: "th-ap26-green-quiet", alt: "A client sitting quietly in a therapy room" },
  heroStop: "wide",
  heroCtas: [{ label: "Let's Get Started", href: "/contact" }],
  sections: [
    {
      id: "trauma-therapy",
      stop: "cairn",
      layout: "center",
      heading: "Trauma Therapy",
      blocks: [{ kind: "quote", text: "“Trauma is hell on earth. Trauma resolved is a gift from the gods.”", cite: "— Peter A. Levine" }],
    },
    {
      id: "nature-of-trauma",
      stop: "pool",
      heading: "The Nature of Trauma",
      photo: { asset: "th-woman-self-hug", alt: "A woman holding herself in a quiet moment" },
      blocks: [
        {
          kind: "p",
          text: "Many of us experience trauma after an intense experience that may affect our mental, behavioral, and emotional well-being. Trauma can live with you for your entire life, affecting you below the surface as well as manifesting itself through your personality, your actions, and your thoughts. Often, people report not remembering a traumatic experience, but through therapy the memories start to drift back.",
        },
      ],
    },
    {
      id: "benefits",
      stop: "labyrinth",
      heading: "Benefits of Trauma Therapy",
      photo: { asset: "th-water-ripple", alt: "Ripples spreading across still water" },
      blocks: [
        {
          kind: "p",
          text: "For anyone dealing with trauma, therapy that specifically targets that aspect of their mental health is incredibly beneficial. First and foremost, you can learn more about trauma itself and how it can affect people, no matter their background. When you understand how trauma manifests itself, you’ll be more equipped to identify your triggers and establish a sense of safety in your daily life.",
        },
        {
          kind: "p",
          text: "Furthermore, trauma therapy can help you develop the healthy coping skills you need in order to manage your symptoms. Knowing the cause and the methods behind the therapy helps decrease traumatic stress symptoms, and stimulates the processing of your trauma in positive ways.",
        },
      ],
    },
    {
      id: "spotlight-cognitive-processing-emdr",
      stop: "seated",
      layout: "prose",
      heading: "Spotlight: Cognitive Processing & EMDR",
      blocks: [
        { kind: "p", text: "We find that both cognitive processing and EMDR are especially helpful for patients who have experienced trauma.", lead: true },
        {
          kind: "p",
          text: "Cognitive processing aims to heal the harm caused by a traumatic experience. Your therapist will help you zero in on the thoughts and feelings associated with your trauma in an effort to “rewire” how your brain reacts to those thoughts. For many of our patients, cognitive processing has helped them move past their stuck points and move forward with a healthy set of skills to manage their existing and any future trauma.",
        },
        {
          kind: "p",
          text: "EMDR, which stands for Eye Movement Desensitization and Reprocessing, is another tactic we use to combat trauma. EMDR is more structured and involves specific activities, like bilateral or tactile stimulation and right/left eye movement. It’s a form of neurophysiological therapy that helps clients resolve issues without having to talk about them.",
        },
        { kind: "cta", label: "EMDR Therapy", href: "/services/emdr-therapy", secondary: true },
      ],
    },
    {
      id: "faqs",
      stop: "standing",
      layout: "wide",
      heading: "FAQs",
      blocks: [
        {
          kind: "faq",
          items: [
            {
              q: "How do I know if I have trauma?",
              a: [
                "Trauma is often followed by a series of symptoms, which may include unwanted memories, avoidance of people or situations, mental discomfort, and problems remembering the traumatic experience. People also report feeling anger and having a negative self-image. Although “trauma” once only referred to large-scale events like sexual assault, military combat, or car accidents, in recent years, we understand trauma to have a much more widespread effect than this. We now understand that the accumulation of smaller moments where we felt unsafe and unprotected creates another sense of complex trauma.",
              ],
            },
            {
              q: "EMDR sounds interesting but I’m afraid of losing control of myself. How do I know if EMDR is right for me?",
              a: [
                "If you feel any of the symptoms described above, then EMDR might be something worth trying. EMDR is definitely not your normal talk therapy, but that’s what’s so interesting about it. Of course, the goal is always to make you feel comfortable and safe, so we would have a conversation about what it would entail and then you would be able to make your decision.",
              ],
            },
            {
              q: "What can I do outside of therapy to help me with my trauma?",
              a: [
                "Our two main tips are: stay active and don’t self-isolate. Working out, doing yoga, and even meditating can be effective at releasing endorphins and maintaining your physical health, not to mention reclaiming your felt sense of safety within your physical body. Going out and making new friends can always be helpful in fulfilling your emotional and social needs.",
              ],
            },
            {
              q: "Do I have to talk about my trauma?",
              a: [
                "Of course not. While talking is beneficial to both yourself and your therapist because they get to know your story better, we understand that trauma is a serious situation and we would never want to make you talk about something you’re not comfortable doing so.",
                "It is however incredibly empowering to own your story and to re-shape the narrative as you see fit. When you begin to talk about what happened to you, the trauma loses its power over you and you are able to resume control.",
              ],
            },
          ],
        },
      ],
    },
  ],
  closing: {
    heading: "The goal of trauma therapy is to address the underlying symptoms of trauma.",
    text: [
      "The nature of the traumatic experience isn’t always as important as the effect it has on your mind and body. We can’t undo what we have experienced, but we certainly can become better at managing our feelings around that experience in order to live a more peaceful existence.",
    ],
    cta: { label: "Let's Get Started", href: "/contact" },
  },
};

const weightLossSurgerySupport: PageContent = {
  url: "/services/weight-loss-surgery-support",
  title: "Weight Loss Surgery Support on Long Island — Pathways Within | Wisdom & Wellness Services",
  meta: "Weight loss surgery comes with a lot of caveats, and an often overlooked part of the procedure is its psychological effects. By talking to a professional and others who have gone through similar experiences, you can better prepare yourself for the road ahead.",
  source: "10-www-pathwayswithin-me-weight-loss-surgery-support.txt",
  eyebrow: "Therapy",
  h1: "Weight Loss Surgery Support on Long Island",
  intro: [
    "Weight loss surgery comes with a lot of caveats, and an often overlooked part of the procedure is its psychological effects. By talking to a professional and others who have gone through similar experiences, you can better prepare yourself for the road ahead and increase your chances of success.",
  ],
  heroPhoto: { asset: "th-ap26-two-women", alt: "Two women talking together in a therapy room" },
  heroStop: "wide",
  heroCtas: [{ label: "Let's Get Started", href: "/contact" }],
  sections: [
    {
      id: "weight-loss-surgery-support",
      stop: "cairn",
      layout: "center",
      heading: "Weight Loss Surgery Support",
      blocks: [{ kind: "quote", text: "“What we change inwardly will change outer reality.”", cite: "— Plutarch" }],
    },
    {
      id: "education-validation",
      stop: "pool",
      heading: "Education & Validation",
      photo: { asset: "cw-kitchen-morning", alt: "A bright kitchen in the morning" },
      blocks: [
        {
          kind: "p",
          text: "Whether or not you have already made the decision to have weight loss surgery, it’s important to learn as much as you can about the surgery and its effects before going through with the procedure. You may not think that weight loss surgery has effects other than your physical recovery, but these kinds of procedures often affect your mental health as well.",
        },
        { kind: "p", text: "Having some support before experiencing a potentially serious surgery can also help you validate the reasons behind your decision.", lead: true },
      ],
    },
    {
      id: "before-after",
      stop: "labyrinth",
      heading: "Before & After",
      photo: { asset: "th-kitchen-flowers", alt: "Fresh flowers on a kitchen table" },
      blocks: [
        { kind: "p", text: "There are many aspects to having weight loss surgery, and we like to take a comprehensive approach by preparing you beforehand and supporting you after the surgery." },
        {
          kind: "p",
          text: "As a pre-op measure, we offer a weight loss surgery psychological evaluation. This puts you in a room with a professional who will help answer any questions and provide thoughtful feedback on your decision. This is not meant to make you feel inadequate or “crazy”—rather, the goal is to determine your eating habits and see if they’re tied to any underlying mental health issues. Nobody wants to have surgery only to regain the weight, so our evaluation is only a precautionary measure to help you during post-op.",
        },
        {
          kind: "p",
          text: "After the surgery, it’s time to celebrate the successes and create new habits. Post-op support comes in the form of being able to share your experiences with your new body and also rededicating yourself to maintaining a healthy lifestyle.",
        },
      ],
    },
    {
      id: "spotlight-support-group",
      stop: "seated",
      heading: "Spotlight: Weight Loss Surgery Support Group",
      photo: { asset: "th-ap26-group-couch", alt: "A support group gathered on a couch" },
      blocks: [
        {
          kind: "p",
          text: "For some patients, the most valuable resource we provide is the support group, where people going through similar weight-loss surgeries can speak freely about their experiences. The groups can be incredibly diverse, ranging from people who have only just started thinking about surgery to those who had surgeries years prior and are just looking to check-in. It’s a refreshing setting for anyone involved in having weight loss surgery, and you can hear advice from people who have gone through the same situation in which you may find yourself.",
        },
        { kind: "cta", label: "Group Therapy", href: "/services/group-therapy", secondary: true },
      ],
    },
    {
      id: "faqs",
      stop: "standing",
      layout: "wide",
      heading: "FAQs",
      blocks: [
        {
          kind: "faq",
          items: [
            {
              q: "My doctor has answered all my questions. Why should I go to therapy on top of getting the surgery?",
              a: [
                "More often than not, doctors require patients to have a psychological evaluation prior to their surgery. Everyone involved wants for this surgery to be a success for you, and part of that involves identifying your strengths, motivations, and potential areas where you may need extra support after your surgery. Beyond that, we recommend our weight loss surgery support group because it’s always nice to meet other people who can provide some insight into your experience.",
              ],
            },
            {
              q: "What are some other benefits of joining the support group?",
              a: [
                "Other than making strong connections with others who are going or have gone through the same situations, we provide advice on recipes, exercises, and other activities you can do to maintain a healthy lifestyle. We want you to feel accomplished, and being a part of a support group is exactly that—to show you are appreciated and that you matter.",
              ],
            },
            {
              q: "Can I bring a relative to the support group?",
              a: [
                "Of course! Our goal, as always, is for you to feel comfortable and safe. Sometimes people would rather not come to the group alone, and we understand and honor that. Bringing someone else has the advantage of having someone there for support and also providing them with the context for your surgery.",
              ],
            },
          ],
        },
      ],
    },
  ],
  closing: {
    heading: "This is a big decision, and it makes sense that you have questions.",
    text: [
      "Our patients often ask themselves: Am I going to be okay? Am I doing the right thing? Is the surgery worth the risk?",
      "These questions change based on the individual, so in order to answer these questions for yourself we highly encourage you to reach out.",
    ],
    cta: { label: "Let's Get Started", href: "/contact" },
  },
};

const veteransFirstResponders: PageContent = {
  url: "/services/veterans-first-responders",
  title: "Therapy for Veterans and First Responders on Long Island — Pathways Within | Wisdom & Wellness Services",
  meta: "Veterans and first responders are often associated with these words - and with good reason. With experts trained in the tools and therapies designed to support veterans and first responders, we’re here and ready to help.",
  source: "11-www-pathwayswithin-me-veterans-first-responders.txt",
  eyebrow: "Therapy",
  h1: "Therapy for Veterans & First Responders on Long Island",
  subtitle: "Protecting the wellbeing of those who protect us",
  intro: [
    "Strong. Tough. Warrior. Hero.",
    "Veterans and first responders are often associated with these words - and with good reason. These monikers are meant as an honor for those who do us the immense service of being the first to engage in a tragedy, war, or emergency.",
  ],
  heroPhoto: { asset: "th-veteran-salute", alt: "A veteran saluting" },
  heroStop: "wide",
  heroCtas: [{ label: "Reach out now →", href: "/contact" }],
  sections: [
    {
      id: "when-you-dont-feel-tough",
      stop: "cairn",
      heading: "But what happens when you don’t feel tough or strong?",
      photo: { asset: "th-veteran-boots-pack", alt: "A veteran’s boots and pack" },
      blocks: [
        {
          kind: "p",
          text: "Where do you turn when your hero badge feels like a cage and you’re facing loneliness and loss that others struggle to understand?",
          lead: true,
        },
        {
          kind: "p",
          text: "The very experiences that set you apart as an honorable part of our society can make it feel difficult to participate in society as a whole person when you feel like you’ve been taken apart. We want to support you to find your Pathways Within, back to your true self and all the parts that make up the hero you’re perceived as.",
        },
        { kind: "p", text: "With experts trained in the tools and therapies designed to support veterans and first responders, we’re here and ready to help." },
      ],
    },
    {
      id: "speaking-up",
      stop: "pool",
      heading: "Speaking up is not weak.",
      photo: { asset: "cw-veteran-cap", alt: "A veteran wearing a service cap" },
      blocks: [
        { kind: "p", text: "Asking for help is a show of the very strength and bravery you’re known for.", lead: true },
        { kind: "p", text: "Therapy has many benefits for veterans and first responders." },
        { kind: "p", text: "Being able to find supported healing with a professional trained in the things you’ve been through or are experiencing like:" },
        {
          kind: "list",
          style: "pills",
          items: [
            "Post Traumatic Stress Disorder (PTSD)",
            "Anxiety or Panic Attacks",
            "Depression",
            "Isolation or feelings of detachment",
            "Difficulty regulating your mood",
            "Substance abuse",
          ],
        },
        {
          kind: "p",
          text: "You don’t need to be able to identify the support you need to be deserving of receiving it. We are here to help you heal, and part of that journey is navigating what you’ve experienced and where you’re still stuck.",
        },
        {
          kind: "p",
          text: "If you are experiencing suicidal thoughts, ideation, or feel otherwise at risk of self-harm, please do not wait for an appointment. Please seek help immediately by calling 911.",
        },
        { kind: "p", text: "You can also access immediate support through the Veteran Crisis Line here." },
        { kind: "cta", label: "Veteran Crisis Line", href: "https://www.veteranscrisisline.net/", secondary: true },
      ],
    },
    {
      id: "unique-experiences",
      stop: "labyrinth",
      heading: "Unique Experiences. Unique tools.",
      photo: { asset: "th-flag-city-sky", alt: "A flag against the city sky" },
      blocks: [
        {
          kind: "p",
          text: "To engage in a healing relationship with the work you’ve done and the wounds you bear for it, we have curated a special set of tools tailored specifically for those who may be experiencing the repercussions of their noble work.",
        },
        {
          kind: "p",
          text: "While no two therapeutic journeys are alike, the life experiences of those who have spent time in active crisis spaces stand apart from other professional roles. Your status as a helper has taken on a large portion of your identity and colored the way you’ve moved through the world as a person, as a professional, and the lens through which you see the world- even when you’ve left those spaces.",
        },
      ],
    },
    {
      id: "for-veterans",
      stop: "seated",
      layout: "prose",
      heading: "For Veterans",
      blocks: [
        {
          kind: "p",
          text: "The life of a service member is unique. While you’re serving, you remain busy with frequent relocations and unique obligations that make it hard to connect with a sense of community outside the military. Once you leave, the loss of that community offers you roots but may have you feeling ungrounded.",
        },
        { kind: "p", text: "When coupled with the high instances of stress and crisis exposure, veterans are at a higher risk for depression, loneliness, and isolation even after their time is served." },
        {
          kind: "p",
          text: "We offer tools to support you in overcoming what you’ve been through and preparing for what you may experience in the future. Through therapeutic experiences tailored to your lifestyle, needs, and past, we will cultivate a unique plan consisting of therapies like talk therapy, EMDR, or IET to ensure you feel you’ve got a plan in place to heal and manage whatever may come your way.",
        },
      ],
    },
    {
      id: "for-first-responders",
      stop: "standing",
      heading: "For First Responders",
      photo: { asset: "th-man-window-reflection", alt: "A man reflected in a window" },
      blocks: [
        {
          kind: "p",
          text: "Crisis response is a part of your job. Every day, you are facing things that reshape the lives of those you encounter. Your work, your presence, and your impact are felt in the “once in a lifetime” moments that you face time and again- yet each one is as unique as the mark it will leave on you.",
        },
        {
          kind: "p",
          text: "You are not bad at your job if you are struggling to reconcile the things you’ve seen or the way you feel. Leaving work at work isn’t an option for first responders, and we want to ensure you’ve got the tools you need to draw boundaries that allow you to find peace in your life and healing in the trauma often left behind by such formative work.",
        },
        {
          kind: "p",
          text: "Whether you are working in everyday front-line service or are trained to respond to disasters and unprecedented events, you’re more than your job. Your mental health matters and we want to support you.",
          lead: true,
        },
      ],
    },
    {
      id: "when-youre-both",
      stop: "ivy",
      layout: "prose",
      heading: "When you’re both",
      blocks: [
        {
          kind: "p",
          text: "When you’ve had multiple high-stress, crisis-facing roles in your life, you may feel both defined by them and divided by them. The American Psychological Association has indicated a high crossover in modalities and therapeutic experience style for veterans and first responders.",
        },
        {
          kind: "p",
          text: "We combine a variety of therapeutic styles to create a custom plan just for you, designed with you in mind and tailored to your needs. Your healing journey may include puzzling together the shape of your peace, but there is one thing we can always guarantee: you will have a voice in not only your healing but how we work toward it.",
        },
        {
          kind: "p",
          text: "If you aren’t ready to talk about your struggles face to face, virtual support is available. Pathways Within is happy to offer telehealth therapy to meet a variety of needs and offer ongoing psychological care, no matter where your work takes you in the world.",
        },
      ],
    },
  ],
  closing: {
    heading: "Trauma isn’t linear, and neither is healing.",
    text: ["No matter where you are on your journey, we can find our way forward together."],
    cta: { label: "Reach out now →", href: "/contact" },
  },
};

const hypnotherapy: PageContent = {
  url: "/services/hypnotherapy",
  title: "Hypnotherapy on Long Island — Pathways Within | Wisdom & Wellness Services",
  meta: "Hypnotherapy is the intentional induction of a gentle trance-like state to allow your unconscious mind some time in the driver’s seat.",
  source: "14-www-pathwayswithin-me-hypnotherapy.txt",
  eyebrow: "Therapy",
  h1: "Hypnotherapy on Long Island",
  subtitle: "Do you ever wish you could mute the external noise of the world and turn inward to decipher the things you’re feeling?",
  intro: [
    "Hypnotherapy is the intentional induction of a gentle trance-like state to allow your unconscious mind some time in the driver’s seat. By releasing the obligation of conscious feeling, hypnotherapy can help you to release the lingering grasp of psychological, emotional, and somatic experiences.",
  ],
  heroPhoto: { asset: "th-session-reclining", alt: "A client reclining during a guided session" },
  heroStop: "wide",
  heroCtas: [{ label: "Let's Get Started", href: "/contact" }],
  sections: [
    {
      id: "hypnotherapy",
      stop: "cairn",
      layout: "center",
      heading: "Hypnotherapy",
      blocks: [
        { kind: "quote", text: "“The easier you can make it inside your head, the easier it will make things outside your head.”", cite: "— Richard Bandler" },
      ],
    },
    {
      id: "how-hypnosis-heals",
      stop: "pool",
      heading: "How Hypnosis Heals",
      photo: { asset: "th-ap26-resting", alt: "A client resting with eyes closed" },
      blocks: [
        {
          kind: "p",
          text: "As a part of your therapeutic treatment plan, hypnotherapy brings the focus back to you- the truest version of you that lies beneath expectation and repressed response to the things you experience. Whether you’re looking to extinguish a stubborn behavior like smoking or move through spaces where you struggle to access the reality of your pain, a hypnosis state is a valuable tool to access the needs of your unconscious mind.",
        },
        {
          kind: "p",
          text: "Hypnotherapy is not the same thing as stage hypnosis. There is no motivation to deceive or manipulate you. The hope in accessing your unconscious mind is to offer you the freedom from the world around you to harness the healing already possible within you.",
          lead: true,
        },
      ],
    },
    {
      id: "how-can-hypnotherapy-help",
      stop: "labyrinth",
      heading: "How Can Hypnotherapy Help?",
      photo: { asset: "cw-sunlit-meditation", alt: "A person meditating in the sunlight" },
      blocks: [
        {
          kind: "p",
          text: "Hypnosis has proven benefits as a part of a myriad of treatment plans and can be practiced in several ways. You may experience hypnosis through visualized relaxation, behavioral suggestion, gentle internal exploration or as a developing coping skill. Each of these experiences is rooted in the way hypnotic trances engage the neurological pathways at the root of your emotional responses with a goal of moving you through the processes of healing toward recovery.",
        },
        { kind: "h3", text: "You may benefit from hypnotherapy if you have:" },
        {
          kind: "list",
          style: "pills",
          items: [
            "Chronic Pain",
            "Symptoms of Dementia",
            "Persistent nausea or vomiting related to medication like chemo",
            "Irritable Bowel Syndrome",
            "Anxiety or Panic Disorder",
            "Depression (Acute or Chronic)",
            "Insomnia",
          ],
        },
      ],
    },
    {
      id: "spotlight-expression",
      stop: "seated",
      heading: "Spotlight: Expression",
      photo: { asset: "th-woman-gazing-up", alt: "A woman gazing upward" },
      blocks: [
        {
          kind: "p",
          text: "One of the beautiful things about experiencing the world as a whole human being is that we have limitless possibilities in how we express ourselves. Through hypnotherapy, you can lean on the support of a trained professional to explore the expression of your unconscious without the expectation of action. Your expression of thought, feeling, and behavior is all uniquely yours, and your hypnotherapeutic trance will be uniquely yours as well.",
        },
        {
          kind: "p",
          text: "Giving yourself the permission to lean into that freedom with the guidance of your Pathways Within treatment plan and sense of purpose, we can go together toward the expression of yourself you most desire.",
        },
      ],
    },
    {
      id: "faqs",
      stop: "standing",
      layout: "wide",
      heading: "Frequently Asked Questions",
      blocks: [
        {
          kind: "faq",
          items: [
            {
              q: "Will I be aware of what happens?",
              a: [
                "You will be aware of what you’re doing and what’s being asked of you, even while you are under hypnosis. You are not being controlled or having your power altered, in any way. If anything, you are simply returning the control of your body to the full awareness of your mind.",
                "Your awareness will remain focused on the experiences you’re having and, when you return to your active state of awareness, you should remember everything you experience.",
              ],
            },
            {
              q: "What if I change my mind?",
              a: [
                "If you want to try hypnotherapy but aren’t sure if it will be right for you, we can explore it gently. By taking it one session at a time, one breath at a time, we can explore the possibility of your untapped trance space with no expectation of returning there.",
                "If you decide that this isn’t the therapeutic path you were looking for, it is perfectly alright to check off that experience without repeating it.",
              ],
            },
            {
              q: "Does hypnosis hurt?",
              a: [
                "Hypnosis does not cause physical pain or involve any direct physical contact. You may feel a sense of lightness or weighed down as your body lets go of the tension it holds and you relax into the experience of just being, but it should not be painful.",
                "We often enter hypnotic states during moments of daydreaming (like “checking out” when you’ve got too much on your mind), so it may feel familiar.",
              ],
            },
            {
              q: "Will I still be in control of my body?",
              a: [
                "Absolutely. You are still aware of, and in charge of, the actions you take and your own will.",
                "Hypnosis is not a release of your power or autonomy. Instead, it’s the granting of permission to look more honestly at the things happening inside of you instead of around you.",
              ],
            },
          ],
        },
      ],
    },
  ],
  closing: {
    heading: "Hypnotherapy focuses on bringing the mind and body together to create impactful changes in thought and behavior.",
    text: ["Are you ready to release the patterns that don’t serve you through guided hypnosis?"],
    cta: { label: "Create A New Pathway Within Today ⇢", href: "/contact" },
  },
};

const somaticTherapy: PageContent = {
  url: "/services/somatic-therapy",
  title: "Somatic Therapy on Long Island — Pathways Within | Wisdom & Wellness Services",
  meta: "Our bodies have eternal memories. These are the places where trauma hides from plain view, and somatic therapy seeks to heal the body from the tension associated with trauma.",
  source: "15-www-pathwayswithin-me-somatic-therapy.txt",
  eyebrow: "Therapy",
  h1: "Somatic Therapy on Long Island",
  intro: [
    "Our bodies have eternal memories. Whether we remember our experiences or not, they live in our nervous system, our digestive system, our head, neck, shoulders. These are the places where trauma hides from plain view, and somatic therapy seeks to heal the body from the tension associated with trauma.",
  ],
  heroPhoto: { asset: "th-ap26-hands", alt: "Hands resting together during a session" },
  heroStop: "wide",
  heroCtas: [{ label: "Let's Get Started", href: "/contact" }],
  sections: [
    {
      id: "somatic-therapy",
      stop: "cairn",
      layout: "center",
      heading: "Somatic Therapy",
      blocks: [
        {
          kind: "quote",
          text: "“True wealth is having a healthy mind, body, and spirit. True wealth is having the knowledge to maneuver and navigate the mental obstacles that inhibit your ability to soar.”",
          cite: "— Ru Paul",
        },
      ],
    },
    {
      id: "trauma-locked-in-the-body",
      stop: "pool",
      heading: "Trauma Locked in the Body",
      photo: { asset: "cw-self-embrace-yellow", alt: "A person holding themselves against a yellow wall" },
      blocks: [
        {
          kind: "p",
          text: "Somatic Therapy is built on the idea that our bodies are affected by the traumas we may have experienced in the past. Everything we have experienced stays in the memory of our bodies, in gestures and facial expressions, in posture, pain, or other forms of body language. Somatic therapy seeks to address the underlying issues that manifest themselves in your body.",
        },
        {
          kind: "p",
          text: "If we think about our bodies in biological terms, we can better understand how stress affects our nervous system. In our past, stress was beneficial and necessary—if a mountain lion was chasing you, you needed to run away! Now, our concerns are not as urgent but our body still interprets them in similar ways. Our bodies don’t know the difference between being chased by a mountain lion and wondering how to respond to a rude email.",
        },
        {
          kind: "p",
          text: "Sōma is Greek for body, and that’s the cornerstone of somatic psychotherapy. It focuses on the body and how trauma has embedded itself in your physical being. We may be great at convincing ourselves and rationalizing different things, but our bodies don’t lie.",
          lead: true,
        },
      ],
    },
    {
      id: "how-somatic-therapy-works",
      stop: "labyrinth",
      heading: "How Somatic Therapy Works",
      photo: { asset: "cw-ap26-hands", alt: "A practitioner’s hands supporting a client" },
      blocks: [
        {
          kind: "p",
          text: "Talk therapy can often be enough to reveal causes and symptoms of mental health issues. However, when a person undergoes trauma, talking through it could be harmful or simply not beneficial. Somatic therapy looks at how the body is manifesting trauma by paying attention to any digestive issues, muscular tension, pain in certain areas of the body, sexual obstacles, etc.",
        },
        {
          kind: "p",
          text: "Throughout somatic therapy, you are guided to feel more attuned to your body’s messages. This type of therapy does involve light touching in order to determine what areas are especially sensitive. For instance, your therapist may encourage you to touch your shoulder and feel where the tension resides, or your therapist could use their hands to support your shoulder and help you find a position that offers less tension.",
        },
        {
          kind: "p",
          text: "The ultimate goal is to provide you with insight into your mind-body connection that will benefit you for the rest of your life. Somatic therapy has been known to reduce stress and provide opportunities to address physical and emotional problems. Knowing how to listen to your body will ensure you stay both healthy and aware of the underlying issues you may face.",
        },
      ],
    },
    {
      id: "faqs",
      stop: "seated",
      layout: "wide",
      heading: "FAQs",
      blocks: [
        {
          kind: "faq",
          items: [
            {
              q: "What if I don’t like being touched?",
              a: [
                "Often people who have undergone trauma do not like being touched, and that is perfectly normal. However, it’s important to consider the benefits associated with somatic therapy. We try to set up a safe environment where you get to decide your comfort level, and any contact during a session is up to you. Sometimes, physical contact is replaced by self-touching or moving around a physical space. Our goal is to help you in whatever way works best for you.",
              ],
            },
            {
              q: "What’s the difference between stress and trauma?",
              a: [
                "Both stress and trauma are associated with events that impact you negatively. Stress is the immediate aftermath of the event, while trauma is caused when a person can’t let go of the impact caused by the event, or otherwise termed chronic stress. For this reason, trauma is deeper and thus manifests itself in our nervous system and other parts of the body.",
              ],
            },
            {
              q: "I went through a traumatic experience, but it was a long time ago. How could somatic therapy help me?",
              a: [
                "Trauma is like a wine stain on a white shirt. It can be covered up, and you can forget about it, but in the end, it’s still there. We don’t often aim to “cure” trauma because it’s so deep-seated in our consciousness and our bodies that sometimes that task is impossible. What we aim for, rather, is to manage trauma and to provide you with coping skills in order to target symptoms of trauma in the body.",
              ],
            },
            {
              q: "Do I have to talk about my trauma?",
              a: [
                "Of course not. While talking is beneficial to both yourself and your therapist because they get to know your story better, we understand that trauma is a serious situation and we would never want to make you talk about something you’re not comfortable doing so. Moreover, the focus of somatic therapy is the body, so more often than not, the type of trauma is not as important as the effect it’s having on your body.",
              ],
            },
          ],
        },
      ],
    },
  ],
  closing: {
    heading: "Let's Get Started",
    cta: CONTACT,
  },
};

const emdrTherapy: PageContent = {
  url: "/services/emdr-therapy",
  title: "EMDR Therapy on Long Island — Pathways Within | Wisdom & Wellness Services",
  meta: "What if we told you that with the support of a trained therapist, we can use your eyes to navigate the healing processes in your brain? EMDR can help you heal without spending a lot of time rehashing the things that hurt you.",
  source: "16-www-pathwayswithin-me-emdr-therapy.txt",
  eyebrow: "Therapy",
  h1: "EMDR Therapy on Long Island",
  subtitle: "Are you ready to heal, but less prepared to revisit the details of traumatic or repressed memories?",
  intro: [
    "What if we told you that with the support of a trained therapist, we can use your eyes to navigate the healing processes in your brain?",
  ],
  heroPhoto: { asset: "th-ap26-glasses", alt: "A client in glasses during an EMDR session" },
  heroStop: "wide",
  heroCtas: [{ label: "Sounds like something you’ve been looking for? Let’s talk →", href: "/contact" }],
  sections: [
    {
      id: "nothing-wrong-with-you",
      stop: "cairn",
      heading: "There is nothing wrong with you if you struggle to talk about what’s happened to you.",
      photo: { asset: "th-ap26-green-listen", alt: "A therapist listening closely" },
      blocks: [
        {
          kind: "p",
          text: "Trauma can be difficult to process. In order to truly move past the things you’ve gone through, it requires re-living them. This is understandably difficult and can be an exhausting process.",
        },
        {
          kind: "p",
          text: "If the thought of talking at length about old hurts and hard feelings makes you feel uncertain or overwhelmed with anxiety, EMDR therapy may be the tool you’ve been looking for.",
        },
        { kind: "p", text: "EMDR is internationally recognized as a beneficial treatment to heal the brain from the residual and lingering effects of trauma.", lead: true },
        {
          kind: "p",
          text: "With over 3 decades of research behind it, Eye Movement Desensitization And Reprocessing is often used to treat PTSD and other trigger-based trauma disorders but that’s not all it can do.",
        },
      ],
    },
    {
      id: "emdr-can-treat",
      stop: "pool",
      layout: "wide",
      heading: "EMDR can treat",
      blocks: [
        {
          kind: "list",
          style: "pills",
          items: [
            "Anxiety",
            "Panic Attacks and Phobias",
            "Dissociative disorders",
            "Sleep disturbances",
            "Sexual Assault Recovery",
            "Performance Anxiety",
            "Personality Disorders",
            "Chronic Health conditions",
            "Depression",
            "Grief and Loss",
            "Stress Management",
            "Substance Abuse",
            "Eating Disorders",
            "Mood regulation",
          ],
        },
      ],
    },
    {
      id: "what-makes-emdr-different",
      stop: "labyrinth",
      heading: "What makes EMDR different?",
      photo: { asset: "th-session-hands", alt: "Hands in a therapy session" },
      blocks: [
        {
          kind: "p",
          text: "To effectively heal, your brain needs to have a conversation with itself. Three different parts of your brain are involved in that conversation. Respectively, they’re responsible for stress response (fight or flight), learning (both making memories and assessing danger) and behavior analysis (what you’ll do and what others are doing).",
        },
        {
          kind: "p",
          text: "When that conversation breaks down, so does your ability to heal from the things that happened in the places it stopped effectively communicating. You freeze- permanently trapped in the alarm state of those events instead of moving through the stages of processing we typically have in response to them.",
        },
        { kind: "p", text: "EMDR works by using repetitive rhythmic stimulation to help push your brain through that freeze so it can organically resume the healing process it’s been trapped in.", lead: true },
        { kind: "p", text: "The stimulation we use is often a repetitive eye movement, but may also include things like tapping with your hands, or external cues like a tone or sound that’s repeated." },
        { kind: "p", text: "This bilateral stimulation is substituted for the time we often spend dwelling on experiences and emotions." },
        {
          kind: "p",
          text: "Instead, you’ll briefly recall the trauma you experienced while also experiencing this repeated stimulation. This begins a process of reducing the vividness of your response by allowing your brain to do the work of healing without the need of prolonged emotional exposure to the memory.",
        },
      ],
    },
    {
      id: "what-to-expect",
      stop: "seated",
      layout: "wide",
      heading: "Wondering what to expect in EMDR Therapy?",
      blocks: [
        {
          kind: "p",
          text: "While the therapeutic experience isn’t the same for everyone, EMDR Treatment is a structured process. Don’t worry, there’s no one standing over you expecting your response to be as uniform as the guidelines. There’s plenty of room to move at your own pace and comfort level.",
        },
        {
          kind: "steps",
          items: [
            { title: "Phase 1", text: "Introductions and history gathering so we’re familiar with one another before we begin." },
            { title: "Phase 2", text: "Getting you ready. It’s a priority for us to ensure you always know what to expect." },
            { title: "Phase 3", text: "Assessing what it is you’d like to target. We’ll identify the memory, sticky spot or trigger to focus on." },
            {
              title: "Phase 4-7",
              text: "These are the active EMDR phases where we use repetitive exposures to create new pathways for your brain to heal. EMDR relies on Adaptive Information Processing, so during these phases, we’re focused on rewriting your memory storage.",
            },
            {
              title: "Phase 8",
              text: "Results and evaluation. We’ll review your treatment together and the results of our work. This gives you the space to determine how you feel now, and what comes next.",
            },
          ],
        },
      ],
    },
    {
      id: "powerfully-to-the-point",
      stop: "standing",
      heading: "Powerfully to the point",
      photo: { asset: "th-woman-sunlit-wall", alt: "A woman beside a sunlit wall" },
      blocks: [
        {
          kind: "p",
          text: "If you only have a fixed amount of time or are looking to do focused work on overcoming a single trigger, EMDR is a great choice for your therapeutic tool. While it can be used alongside or within many therapy modalities, you can begin to see improvement quite quickly without the intensive exposure to your triggers that may have held you back from seeking the support you deserve.",
        },
        { kind: "p", text: "When we are working through a single memory, you can expect to have 1-3 sessions with your therapist." },
        { kind: "p", text: "For prolonged trauma healing, EMDR treatment often lasts for 6-12 sessions that can be done weekly, with some sessions occurring on consecutive days." },
      ],
    },
  ],
  closing: {
    heading: "EMDR can help you heal without spending a lot of time rehashing the things that hurt you.",
    cta: { label: "EMDR what you’ve been looking for? Get started today →", href: "/contact" },
  },
};

const ifsTherapy: PageContent = {
  url: "/services/ifs-therapy",
  title: "IFS Therapy on Long Island — Pathways Within | Wisdom & Wellness Services",
  meta: "Internal Family Systems (IFS) therapy is a powerful, evidence-based approach that helps you explore and heal the many “parts” within you — the protectors, exiled wounds, and the Self that holds wisdom and compassion.",
  source: "17-www-pathwayswithin-me-ifs-therapy-on-long-island.txt",
  eyebrow: "Therapy",
  h1: "IFS Therapy on Long Island",
  subtitle: "Reconnect with your inner world",
  intro: [
    "Internal Family Systems (IFS) therapy is a powerful, evidence-based approach that helps you explore and heal the many “parts” within you — the protectors, exiled wounds, and the Self that holds wisdom and compassion.",
    "At Pathways Within, IFS therapy is a gentle, non-pathologizing way to deepen your understanding of your inner life. Rather than trying to “fix” you, we support you in developing a more compassionate relationship with all of your parts — even the ones that feel painful, confusing, or hard to face.",
  ],
  heroPhoto: { asset: "th-ap26-black-blazer", alt: "A client in a black blazer in session" },
  heroStop: "wide",
  heroCtas: [{ label: "Get started with an IFS therapist →", href: "/contact" }],
  sections: [
    {
      id: "ifs-can-help",
      stop: "cairn",
      heading: "IFS therapy can help if you",
      photo: { asset: "th-woman-plant-chair", alt: "A woman seated in a chair beside a plant" },
      blocks: [
        {
          kind: "list",
          style: "check",
          items: [
            "Struggle with overwhelming emotions or internal conflict",
            "Feel stuck in patterns of self-criticism, avoidance, or shame",
            "Want to explore the roots of trauma, anxiety, or depression",
            "Have difficulty making decisions or trusting your intuition",
            "Are curious about deep, transformative personal growth",
          ],
        },
      ],
    },
    {
      id: "in-ifs-sessions",
      stop: "pool",
      photo: { asset: "th-person-tall-grass", alt: "A person standing in tall grass" },
      blocks: [
        {
          kind: "p",
          text: "In IFS sessions, your therapist will guide you in slowing down, noticing what’s happening inside, and learning how to relate to your inner experience with care and curiosity. Over time, this process fosters greater clarity, calm, and connection — within yourself and in your relationships with others.",
          lead: true,
        },
      ],
    },
    {
      id: "spotlight-trauma-recovery",
      stop: "labyrinth",
      heading: "Spotlight: IFS for Trauma Recovery →",
      photo: { asset: "th-ap26-green-vest", alt: "A client in a green vest talking with a therapist" },
      blocks: [
        {
          kind: "p",
          text: "Many of our clients find IFS especially effective for trauma work. Unlike traditional talk therapy, IFS allows you to engage with traumatic memories from a place of emotional safety. You won’t be asked to relive painful moments. Instead, you’ll learn to connect with the parts of you that carry pain or fear, understand their roles, and help them heal.",
        },
        {
          kind: "p",
          text: "This approach is particularly supportive for survivors of childhood abuse, complex trauma, or situations where traditional therapy has felt too overwhelming or ineffective. If you’re seeking a gentle, empowering way to work through trauma, IFS offers a path forward.",
        },
      ],
    },
    {
      id: "faqs",
      stop: "seated",
      layout: "wide",
      heading: "FAQs about IFS Therapy",
      blocks: [
        {
          kind: "faq",
          items: [
            {
              q: "What is Internal Family Systems (IFS) therapy?",
              a: [
                "IFS is a therapeutic model based on the idea that our minds are made up of different “parts,” each with its own feelings, beliefs, and roles. Some parts work to protect us, others carry pain, and some simply get stuck in old patterns. IFS helps you understand these parts and build a compassionate relationship with them, guided by your inner Self — a calm, wise, and centered presence within you.",
              ],
            },
            {
              q: "What does an IFS session look like?",
              a: [
                "Your therapist will help you slow down and gently explore your inner world. You might be invited to focus on a specific feeling, behavior, or inner voice, and to “get to know” the part of you behind it. There’s no pressure to re-live trauma or rush the process — IFS is paced to match your comfort and readiness.",
              ],
            },
            {
              q: "Is IFS only for people with trauma?",
              a: [
                "Not at all. While IFS is highly effective for trauma work, it’s also helpful for anyone who feels stuck in repetitive emotional patterns, internal conflict, or self-criticism. Many people use IFS as a path to deepen self-awareness, reduce anxiety, or connect more fully with their intuition and values.",
              ],
            },
            {
              q: "Will I have to “perform” or go deep right away?",
              a: [
                "No. IFS is based on the principle that your system knows what it needs and when it’s ready. You’ll never be pushed to go deeper than you feel comfortable. Your therapist will meet you where you are and create a safe space to explore at your own pace.",
              ],
            },
            {
              q: "How is IFS different from other types of therapy?",
              a: [
                "Many therapies focus on changing thoughts or behaviors. IFS focuses on internal relationships — how your different parts interact, and how your Self can step in as a compassionate leader. The goal isn’t to get rid of parts but to understand and heal them, so they can take on healthier roles.",
              ],
            },
          ],
        },
      ],
    },
  ],
  closing: {
    heading: "Reconnect with your inner world",
    cta: { label: "Get started with an IFS therapist →", href: "/contact" },
  },
};

const griefTherapy: PageContent = {
  url: "/services/grief-therapy",
  title: "Grief Therapy on Long Island — Pathways Within | Wisdom & Wellness Services",
  meta: "People lose loved ones every day; death is a natural part of life. By engaging in grief therapy, you’ll have the time and space to talk through your loss and your therapist will help you develop coping skills to manage your grief in the long term.",
  source: "18-www-pathwayswithin-me-grief-therapy.txt",
  eyebrow: "Therapy",
  h1: "Grief Therapy on Long Island",
  intro: [
    "People lose loved ones every day; death is a natural part of life. However, we are not always prepared to deal with losing a loved one, or with the intensity of grief and its ability to take over our lives. By engaging in grief therapy, you’ll have the time and space to talk through your loss and your therapist will help you develop coping skills to manage your grief in the long term.",
  ],
  heroPhoto: { asset: "th-ap26-older-quiet", alt: "An older client sitting quietly in session" },
  heroStop: "wide",
  heroCtas: [{ label: "Let's Get Started", href: "/contact" }],
  sections: [
    {
      id: "grief-therapy",
      stop: "cairn",
      layout: "center",
      heading: "Grief Therapy",
      blocks: [
        {
          kind: "quote",
          text: "“Healing doesn't mean the damage never existed. It means the damage no longer controls your life.”",
          cite: "— Akshay Dubey",
        },
      ],
    },
    {
      id: "five-stages",
      stop: "pool",
      heading: "The Five Stages of Grief",
      photo: { asset: "th-woman-windy-beach", alt: "A woman on a windy beach" },
      blocks: [
        { kind: "p", text: "Most grief therapy is based on Elisabeth Kubler-Ross’ landmark identification of the five stages of grief:" },
        { kind: "list", style: "numbered", items: ["Denial", "Anger", "Bargaining", "Depression", "Acceptance"] },
        {
          kind: "p",
          text: "This model works to analyze the phases a person goes through when encountered with grief. It’s important to remember that these are not written in stone; some patients may discover that they return to certain phases at different times, or that they enter a phase out of order. Rather than to follow these stages as a one-way formula, the idea is simply to keep them in mind when talking about and understanding your own experience of grief.",
        },
      ],
    },
    {
      id: "four-tasks",
      stop: "labyrinth",
      heading: "The Four Tasks of Mourning",
      photo: { asset: "th-comfort-on-couch", alt: "Comforting a loved one on a couch" },
      blocks: [
        { kind: "p", text: "Another popular model when looking at grief through therapy is J. W. Worden’s “Four Tasks of Mourning”:" },
        {
          kind: "list",
          style: "numbered",
          items: [
            "To accept the reality of the loss",
            "To work through the pain of grief",
            "To adjust to life without the deceased",
            "To maintain a connection to the deceased while moving on with life",
          ],
        },
        {
          kind: "p",
          text: "Here, the objective is not to identify the phases of grief a person may be going through, but rather to point toward the goals a person with grief should aim toward in order to reach a stable mental space.",
        },
      ],
    },
    {
      id: "faqs",
      stop: "seated",
      layout: "wide",
      heading: "FAQs",
      blocks: [
        {
          kind: "faq",
          items: [
            {
              q: "Somebody close to me died. How can you help me?",
              a: [
                "We understand that therapy might not seem like a solution when you have lost someone you love. Many of us who have felt intense grief often feel as though nothing can change the way we feel. However, talking through a traumatic event like loss is incredibly beneficial, especially when you’re doing it with a professional.",
              ],
            },
            {
              q: "How long do I need to attend therapy?",
              a: [
                "Therapy is your journey—your therapist is there to help guide you through the grieving process, but ultimately the length and frequency of your therapy is up to you. Ideally, you’d be staying with your therapist until you’ve developed a trusting relationship and have experienced some improvement in your symptoms or feel confident in your learned coping skills.",
              ],
            },
            {
              q: "What can I expect from grief counseling?",
              a: [
                "You can expect the same dedication and space we offer in individual therapy but with more attention to the loss you have encountered. We will talk about anything that may be bothering you, remember the good times you had with your loved one, honor their memory, and create opportunities to learn coping skills that will help you manage your grief in the long run.",
              ],
            },
            {
              q: "What types of situations do you address in grief therapy?",
              a: [
                "Loss can manifest itself in many different situations. The most common is losing a loved one, but people often experience grief when someone close to them develops dementia or another mind-altering disorder. People may experience grief when a pet dies, or adopted children might feel a sense of grief for the “loss” of their biological parents. Grief is a complicated emotion, and we treat it with the utmost respect and seriousness in order to recognize its significance on someone’s life.",
              ],
            },
          ],
        },
      ],
    },
  ],
  closing: {
    heading: "Let's Get Started",
    cta: CONTACT,
  },
};

const groupTherapy: PageContent = {
  url: "/services/group-therapy",
  title: "Group Therapy on Long Island — Pathways Within | Wisdom & Wellness Services",
  meta: "While group therapy might sound scary or overwhelming at first, the reality is that we yearn for meaningful connections. You have more in common with other people than you think.",
  source: "19-www-pathwayswithin-me-group-therapy.txt",
  eyebrow: "Therapy",
  h1: "Group Therapy on Long Island",
  intro: [
    "While group therapy might sound scary or overwhelming at first, the reality is that we yearn for meaningful connections. Sitting in a room with strangers is the ideal way to share your concerns without feeling judged. You have more in common with other people than you think, and as the weeks go by, you’ll get to practice sharing your own feelings and listening to others talk about their experiences, helping you feel more confident and connected.",
  ],
  heroPhoto: { asset: "th-ap26-group-gesture", alt: "A therapy group in conversation" },
  heroStop: "wide",
  heroCtas: [{ label: "Let's Get Started", href: "/contact" }],
  sections: [
    {
      id: "group-therapy",
      stop: "cairn",
      layout: "center",
      heading: "Group Therapy",
      blocks: [
        {
          kind: "quote",
          text: "“Life doesn’t make any sense without interdependence. We need each other, and the sooner we learn that, the better for us all.”",
          cite: "— Erik Erikson",
        },
      ],
    },
    {
      id: "you-are-not-alone",
      stop: "pool",
      heading: "You Are Not Alone",
      photo: { asset: "th-ap26-group-couch", alt: "Group members seated together on a couch" },
      blocks: [
        {
          kind: "p",
          text: "While you are a unique person, your problems may not be unique. Many other people struggle with issues like anxiety and depression, and they yearn to talk about it with others who feel the same mental anguish.",
          lead: true,
        },
        {
          kind: "p",
          text: "Group therapy is a special opportunity to join a safe space where a select group of individuals are gathered to help each other talk through their problems. And of course, there’s a professional in the room guiding the conversation, moving the group towards healing.",
        },
        {
          kind: "p",
          text: "More often than not, group therapy participants find they have more in common than they imagined when they first met. As the weeks go by, you’ll develop a bond with your group mates and you’ll see that opening up to other people doesn’t make them run away—it makes them appreciate you even more. You are not alone, and group therapy is a brilliant example of that.",
        },
      ],
    },
    {
      id: "learn-to-talk",
      stop: "labyrinth",
      heading: "Learn to Talk About Your Problems",
      photo: { asset: "th-group-window-room", alt: "A group meeting in a bright window-lit room" },
      blocks: [
        {
          kind: "p",
          text: "One of the biggest concerns people have when coming to group therapy is the inability to speak up for themselves in front of other people. That’s the cliché first group session—most people are quiet and timid, afraid of saying too much or not enough.",
        },
        {
          kind: "p",
          text: "Group therapy is excellent at making you aware of your feelings and giving you time to practice how to talk about them. Watching other people have the courage to share their issues is inspiring and often motivates other group members to share their own stories. By opening up in a comfortable space, your confidence and self-esteem will evolve and strengthen your voice outside of therapy.",
        },
      ],
    },
    {
      id: "spotlight-process-group",
      stop: "seated",
      heading: "Spotlight: Process Oriented Group",
      photos: [
        { asset: "th-ap26-group-floor", alt: "A group seated together on the floor" },
        { asset: "th-ap26-group-play", alt: "Group members sharing an activity" },
        { asset: "th-ap26-group-gesture", alt: "A group member speaking to the circle" },
      ],
      blocks: [
        {
          kind: "p",
          text: "Process-oriented group therapy consists of a group of no more than 10 people talking about their concerns and struggles with a therapist as a guiding force. These groups are called “process groups” because the goal is to help each other process their feelings in healthy ways.",
        },
        {
          kind: "p",
          text: "While the format of the groups might not be meticulously structured, group members are encouraged to bring up any issues they may be encountering at the time. Since the other members are unbiased strangers, this is a great opportunity to get honest feedback from a third party. The other members aren’t being paid to tell you anything, so their words come from a truly authentic place.",
        },
        { kind: "p", text: "Usually, these process groups can last between six and eight weeks, and they are private and closed to the general public." },
      ],
    },
    {
      id: "current-groups",
      stop: "standing",
      heading: "Current Groups",
      photo: { asset: "ha-ap-group-room-garden-city", alt: "The group room in Garden City" },
      blocks: [
        { kind: "list", style: "check", items: ["COVID Bereavement Group", "Psychotherapy Book Club Groups", "Chair YOGA & Meditation"] },
        { kind: "cta", label: "Let's Get Started", href: "/contact" },
      ],
    },
    {
      id: "faqs",
      stop: "ivy",
      layout: "wide",
      heading: "FAQs",
      blocks: [
        {
          kind: "faq",
          items: [
            {
              q: "Is group therapy confidential?",
              a: [
                "Your privacy is important to us, and we talk about confidentiality as a significant part of group therapy. Unfortunately, we can’t guarantee other group members won’t break that stipulation, so it’s best to maintain good sense when sharing with a group. Group therapy works best when there is an atmosphere of trust and open communication. When each member shares their personal story, they are making themselves vulnerable, and this often creates stronger bonds between members and reduces the likelihood of sharing personal information outside of the group.",
              ],
            },
            {
              q: "Can I be involved in both individual and group therapy?",
              a: [
                "Of course! Some people find individual therapy to be more helpful, others prefer group therapy, and a third set of people would rather do both. Individual and group therapy provide different benefits, so it would not be out of the question to attend both.",
              ],
            },
            {
              q: "What if I’m shy and can’t participate as much in the conversations?",
              a: [
                "Anxiety and stress is normal at first, but new members often see the benefit of sharing pretty soon after joining and the awkwardness of talking to strangers dissipates. Group therapy is actually the perfect environment to practice new skills and push yourself out of your comfort zone.",
              ],
            },
            {
              q: "What happens if I know someone in the group?",
              a: [
                "Not to worry—this kind of thing can happen from time to time. We ask that if you know someone in your group to please inform your group therapist privately and we’ll discuss the best way to move forward. Sometimes, after discussing the situation, both parties agree to stay in the group together, but if you or the other person don’t feel comfortable being in the same group together, we can work together to find a solution.",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "more-ways",
      stop: "ground",
      photos: [
        { asset: "th-group-loft", alt: "A group gathered in a loft space" },
        { asset: "cw-group-circle", alt: "A circle of people outdoors" },
        { asset: "th-ap26-group-couch", alt: "Group members seated together" },
      ],
      blocks: [
        { kind: "cta", label: "Individual Therapy", href: "/services/individual-therapy", secondary: true },
        { kind: "cta", label: "Weight Loss Surgery Support", href: "/services/weight-loss-surgery-support", secondary: true },
      ],
    },
  ],
  closing: {
    heading: "Let's Get Started",
    cta: CONTACT,
  },
};

const ketamineAssistedTherapy: PageContent = {
  url: "/services/ketamine-assisted-therapy",
  title: "Ketamine Assisted Therapy on Long Island — Pathways Within | Wisdom & Wellness Services",
  meta: "Life-altering change to your healing game, one hour at a time? It’s possible with ketamine-assisted therapy as a part of your clinical counseling experience.",
  source: "20-www-pathwayswithin-me-ketamine-assisted-therapy.txt",
  eyebrow: "Therapy",
  h1: "Ketamine Assisted Therapy on Long Island",
  intro: [
    "Life-altering change to your healing game, one hour at a time? It’s possible with ketamine-assisted therapy as a part of your clinical counseling experience.",
  ],
  heroPhoto: { asset: "cw-ap26-med-single", alt: "A client meeting with a provider" },
  heroStop: "wide",
  heroCtas: [{ label: "Let's Get Started", href: "/contact" }],
  sections: [
    {
      id: "ketamine-assisted-therapy",
      stop: "cairn",
      layout: "center",
      heading: "Ketamine-Assisted Therapy",
      blocks: [
        {
          kind: "quote",
          text: "“To be truly visionary, we have to root our imagination in our concrete reality while simultaneously imagining possibilities beyond that reality.”",
          cite: "— bell hooks",
        },
      ],
    },
    {
      id: "beyond-possible",
      stop: "pool",
      heading: "Beyond what you thought possible",
      photo: { asset: "cw-ap26-med-np", alt: "A nurse practitioner in consultation" },
      blocks: [
        {
          kind: "p",
          text: "You know what it’s like to live with stubborn depression, defeating ennui, or a sense of doom that you cannot escape. If you are one of the millions of people who have tried anti-depressants and antipsychotics to alleviate the symptoms of difficult-to-manage mental health disorders and found no relief, ketamine-assisted therapy may be the next step you’ve been waiting for.",
        },
        {
          kind: "p",
          text: "Ketamine offers you a glimpse beyond the spaces you’ve visited to access healing. Thought to offer a life-altering opportunity to re-grow the connections in your mind that allow you to heal and thrive, ketamine therapy immediately impacts your ability to function right here and now.",
        },
        { kind: "p", text: "Ketamine-assisted therapy may be the psychotherapy supercharger you’ve sought if you have treatment-resistent mental health disorders.", lead: true },
      ],
    },
    {
      id: "benefits",
      stop: "labyrinth",
      layout: "wide",
      heading: "Benefits of Ketamine-assisted Therapy",
      blocks: [
        {
          kind: "list",
          style: "check",
          items: [
            "See immediate improvement from the first treatment!",
            "Eases PTSD symptoms",
            "Treats chronic neuropathic pain",
            "Alleviate intrusive thoughts",
            "Effective alternative to other long-term medications",
            "Reduces feeling of depression",
            "The only treatment to provide relief from suicidal ideation",
          ],
        },
      ],
    },
    {
      id: "spotlight-science",
      stop: "seated",
      eyebrow: "SPOTLIGHT ON THE SCIENCE OF KETAMINE ASSISTED THERAPY",
      heading: "Surprising impacts for depression and OCD symptoms",
      photo: { asset: "cw-medication-hands", alt: "Hands holding medication" },
      blocks: [
        {
          kind: "p",
          text: "While ketamine has become an established therapy for chronic pain management through decades of effective use, it’s still being explored as a treatment for psychotherapeutic support. These developments are exciting, particularly for clients who experience disruptions to their daily routines due to their diagnoses.",
        },
        { kind: "p", text: "In early studies, ketamine-assisted therapy has been found to provide immediate and effective relief for those suffering from many troubling symptoms, including suicidal ideation." },
        {
          kind: "p",
          text: "When you’re stressed, scared, or under overwhelming pressure due to what you’re going through, your mind becomes rigid. It loses the ability to respond effectively to your experiences as it works hard to protect you from the impact of the trauma you’ve been through before. Ketamine-assisted therapy acts as a massage for these areas of your brain, relaxing the rigidity they’ve developed and allowing for more fluidity in how you respond to experiences, thoughts, and energy at a cellular level. Through increased neuroplasticity, the changes you experience can change how you experience things long-term!",
        },
        { kind: "p", text: "Ketamine-assisted therapy gives you the edge to perceive the things you experience in a new way, without long waits to see the results you need.", lead: true },
      ],
    },
    {
      id: "unprecedented-possibility",
      stop: "standing",
      heading: "Unprecedented possibility awaits you",
      photo: { asset: "cw-face-to-sun", alt: "A person turning their face to the sun" },
      blocks: [
        {
          kind: "p",
          text: "While the medications used to support your mental health are typically focused on interrupting the chemicals in your brain that cause your symptoms, ketamine is different. Acting as a mind-opening gateway to a new headspace, you’ll experience ketamine in a safe and fully supported environment.",
        },
        {
          kind: "p",
          text: "This life-changing treatment combines ketamine’s ability to relax and regulate the emotional response of the mind at a cellular level with the guidance and expertise of a therapist prepared to explore your experiences with you.",
        },
      ],
    },
    {
      id: "faqs",
      stop: "ivy",
      layout: "wide",
      heading: "Frequently Asked Questions",
      blocks: [
        {
          kind: "faq",
          intro: "You’ve got questions, and we’ve got answers. Some of our most-asked questions are below, but if there’s something else on your mind, we love to chat. Feel free to reach out for the clarity you seek at any time.",
          items: [
            {
              q: "How is ketamine given?",
              a: [
                "Under your therapist’s supervision, you’ll take your dose as an under-the-tongue (sublingual) tablet that will dissolve. This delivery system allows for the best balance between gentle and time-sensitive efficacy.",
              ],
            },
            {
              q: "Who is ketamine for?",
              a: [
                "Ketamine-assisted therapy is for people who have taken other psychotherapeutic medications and felt no relief. Notably, this treatment is ideal for people who have depression, anxiety, PTSD, suicidal ideation, or Obsessive Compulsive Disorder (OCD).",
                "Ketamine-assisted therapy is a short-acting, long-lasting treatment experience. You may feel immediate effects on your mental state that will be supported by the psychotherapy sessions you’ll have during your ketamine experience.",
              ],
            },
            {
              q: "How many sessions will I need?",
              a: [
                "After your first session, you’ll begin to feel new and exciting changes, but you may find additional change through infrequent but regular low-dose treatment across 1-3 months.",
              ],
            },
            {
              q: "What are the risks?",
              a: [
                "You may feel a brief discomfort like dizziness, nausea, or disorientation when you take your dose.",
                "The data on ketamine risks are low-level and related to chronic pain treatment. Due to the psychoactive nature of ketamine, the primary risk is a negative or scary altered state. This is temporary. Other potential risks of ketamine-assisted therapy are related to long-term use, like a (low) risk of addiction or development of lesions with overuse.",
              ],
            },
          ],
        },
      ],
    },
  ],
  closing: {
    heading: "Ready to start from the outside and work toward your Pathways Within? Call us today!",
    text: [
      "However you’re hoping to take your next steps to unlock the reality you’re dreaming of, we’re here to help. We specialize in packages focused on whole-self healing and an emphasis on wellness.",
    ],
    cta: CONTACT,
  },
};

const parentChildInteractionTherapy: PageContent = {
  url: "/services/parent-child-interaction-therapy",
  title: "Parent-Child Interaction Therapy on Long Island — Pathways Within | Wisdom & Wellness Services",
  meta: "For children and their caregivers who have experienced trauma or are having challenges with overcoming behaviors or habits in the home. Parent-Child Interaction Therapy is the evidence-based answer to the questions parents, caregivers, and guardians have been looking for to help their children.",
  source: "21-www-pathwayswithin-me-parent-child-interaction-therapy.txt",
  eyebrow: "Therapy",
  h1: "Parent-Child Interaction Therapy on Long Island",
  intro: [
    "For children and their caregivers who have experienced trauma or are having challenges with overcoming behaviors or habits in the home. Parent-Child Interaction Therapy is the evidence-based answer to the questions parents, caregivers, and guardians have been looking for to help their children.",
  ],
  heroPhoto: { asset: "th-parent-toddler-toys", alt: "A parent and toddler playing with toys" },
  heroStop: "wide",
  heroCtas: [{ label: "Let's Get Started", href: "/contact" }],
  sections: [
    {
      id: "pcit",
      stop: "cairn",
      layout: "center",
      heading: "Parent-Child Interaction Therapy (PCIT)",
      blocks: [{ kind: "quote", text: "“Behind every young child who believes in himself is a parent who believed first.”", cite: "–Matthew Jacobson" }],
    },
    {
      id: "positive-growth",
      stop: "pool",
      heading: "Finding positive growth for a brighter future",
      photo: { asset: "th-ap26-kids-point", alt: "A child pointing during play with a caregiver" },
      blocks: [
        {
          kind: "p",
          text: "By helping parents to learn new skills and techniques, children are given a more stable foundation for monitoring their own behavior and relationships. PCIT is designed to support children who may experience difficulty with their feelings, behaviors, and attachments.",
        },
        {
          kind: "p",
          text: "PCIT is a type of treatment but it’s also a gift. PCIT focuses on improving the parent-child relationship by giving parents the skills to encourage the positive behaviors their children need to learn while extinguishing dangerous or negative behaviors. Through interaction supported by a trained therapist, you’ll find new ways to connect with your child and break old habits and patterns of behavior.",
        },
      ],
    },
    {
      id: "benefits",
      stop: "labyrinth",
      layout: "wide",
      heading: "Benefits of PCIT",
      blocks: [
        {
          kind: "list",
          style: "check",
          items: [
            "Support positive behavioral interactions",
            "Regulate emotional responses in children",
            "More consistency in parenting style and responses",
            "Gain tools for celebrations and challenges",
            "Lower stress levels for everyone",
            "Everyone will see success",
            "Reduce the risk of harm or recurrence of abuse",
          ],
        },
      ],
    },
    {
      id: "research",
      stop: "seated",
      eyebrow: "THE RESEARCH BEHIND PARENT CHILD INTERACTION THERAPY",
      heading: "Stronger relationships through Intention",
      photo: { asset: "th-parent-child-piggyback", alt: "A parent giving a child a piggyback ride" },
      blocks: [
        {
          kind: "p",
          text: "Parent-Child Interaction Therapy works through responsive and in-the-moment solutions to support effective relationships. You will work with a therapist for as long as you need to extinguish dangerous or undesired behaviors (in both parent and child) to create harmony in the home. The skills you learn in PCIT will facilitate a more stable and positive environment for children with acting out behaviors or those that have experienced abuse.",
        },
        {
          kind: "p",
          text: "Certified as a trauma-informed intervention, PCIT is developed from an evidence base that spans many types of families and children. A body of research spanning globally through the experiences of hundreds of families has universally found that PCIT improves outcomes for individuals, and relationship satisfaction and increases the positive growth of behavior for children.",
        },
      ],
    },
    {
      id: "pride",
      stop: "standing",
      heading: "Invite PRIDE into your relationship!",
      photo: { asset: "th-ap26-fam-behind", alt: "A family seen from behind, close together" },
      blocks: [
        {
          kind: "p",
          text: "The acronym PRIDE is an excellent resource for understanding the focus area of how we’ll work together to facilitate positive and effective interactions to support your child’s growth.",
        },
        {
          kind: "list",
          style: "bullet",
          items: [
            "Praise specifically related to what your child is doing at that moment.",
            "Reflect (verbally) on what your child says or does to show you’re listening.",
            "Imitation is a great way to show approval and encourage children to participate in groups.",
            "Describe what you do or see to give your child the vocabulary to do the same.",
            "Enthusiasm for what your child is doing and the chance to be together.",
          ],
        },
        {
          kind: "p",
          text: "These communication skills are the basis for time spent together during PCIT. A child who feels heard and connected to their caregiver is more likely to reach for healthy connections later in life. Building these satisfying and necessary foundational relationships is the necessary first step of PCIT that must occur to facilitate the compliance we are trying to encourage. Through these genuine and guided interactions, children and parents can benefit from consistent and positive regard for one another during play.",
        },
      ],
    },
    {
      id: "faqs",
      stop: "ivy",
      layout: "wide",
      heading: "Frequently Asked Questions",
      blocks: [
        {
          kind: "faq",
          intro: "You’ve got questions, and we’ve got answers. Some of our most-asked questions are below but if there’s something else on your mind, we love to chat. Feel free to reach out and let us help you apply a laser focus to your wellness dreams.",
          items: [
            {
              q: "How long does it take?",
              a: [
                "Based on play therapy that’s bridged with the support and facilitation of an expert in communicating, sessions will be responsive to the needs of the child.",
                "Each session will be up to 55 minutes long with varying tasks or transitions used as required to best support the learning and growth goals of the families we are supporting.",
              ],
            },
            {
              q: "Who benefits most from PCIT?",
              a: [
                "All parent-child relationships can benefit from learning how to communicate effectively, but PCIT is ideal for children with a diagnosis of ADHD, autism, or mood disorders that disrupt their ability to respond to their emotions effectively.",
                "For children who have been a victim of abuse or experienced violence in the home, PCIT is a proven way to reduce the risk of repeated harm while helping children and their parents to heal from the traumas they’ve been through. Live hands-on support will be available to ensure everyone feels safe and confident at every step of the process.",
              ],
            },
            {
              q: "How many sessions will I need?",
              a: [
                "Good news! PCIT is a short-term therapy with a heavy focus on sustainable solutions that will stay with you even after treatment has concluded.",
                "While there is a time commitment of 2-12 months depending on the family, you will not always require the assistance of your therapist to use the tools you gain in PCIT.",
              ],
            },
            {
              q: "How is this different from other therapy?",
              a: [
                "Instead of focusing on change-talk or solving future problems, PCIT brings the focus to the here and now. What you learn will happen in an organic way with the support of a therapist on hand to facilitate those lessons in an active way. You will have in-session practice for skills you can take with you with confidence from the coaching you’ve received.",
                "Parents have homework and skills to master in order to support their children, and unlike other therapies, no one will ask you to prove anything until you’re good and ready.",
              ],
            },
          ],
        },
      ],
    },
  ],
  closing: {
    heading: "Ready to start from the outside and work toward your Pathways Within? Call us today!",
    text: [
      "We are proud to offer Parent-Child Interaction Training at our Garden City location. We specialize in packages focused on whole-self healing and an emphasis on wellness.",
    ],
    cta: CONTACT,
  },
};

export const therapyPages: PageContent[] = [
  individualTherapy,
  childTherapy,
  teenTherapy,
  couplesTherapy,
  familyTherapy,
  traumaTherapy,
  weightLossSurgerySupport,
  veteransFirstResponders,
  hypnotherapy,
  somaticTherapy,
  emdrTherapy,
  ifsTherapy,
  griefTherapy,
  groupTherapy,
  ketamineAssistedTherapy,
  parentChildInteractionTherapy,
];

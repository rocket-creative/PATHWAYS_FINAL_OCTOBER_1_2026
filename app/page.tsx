import type { Metadata } from "next";
import Link from "next/link";
import { Split } from "@/components/ui/Split";
import { Photo } from "@/components/ui/Photo";
import { Cta, Arrow, LabyrinthGlyph } from "@/components/render/Blocks";
import HeroMark from "@/components/ui/HeroMark";
import { PathLine } from "@/components/ui/PathLine";
import { LocationsBlock } from "@/components/blocks/LocationsBlock";
import Quiz from "@/components/blocks/Quiz";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Pathways Within — A 360º Approach to Healing & Transformation" },
  description:
    "Pathways Within brings mental health, physical wellness, and personal growth into one connected experience on Long Island. Therapy, medication management, coaching, massage, acupuncture, and energy work.",
  alternates: { canonical: "/" },
};

/** Copy: client revision deck, Page 1 (Homepage). */
const SERVICES: { bucket: string; title: string; href: string; asset: string }[] = [
  { bucket: "Mental Health", title: "Individual, Couples & Family Therapy", href: "/services/individual-therapy", asset: "th-ap26-conversation" },
  { bucket: "Mental Health", title: "Child & Teen Therapy", href: "/services/child-therapy", asset: "th-ap26-kids-three" },
  { bucket: "Mental Health", title: "EMDR, IFS & Somatic Therapy", href: "/services/emdr-therapy", asset: "th-ap26-green-listen" },
  { bucket: "Mental Health", title: "Veterans & First Responders", href: "/services/veterans-first-responders", asset: "cw-veteran-cap" },
  { bucket: "Mental Health", title: "Medication Management", href: "/services/medication-management", asset: "cw-ap26-med-np" },
  { bucket: "Mind-Body Support", title: "Performance & Wellness Coaching", href: "/services/performance-wellness-coaching", asset: "ha-tia-baumohl" },
  { bucket: "Mind-Body Support", title: "Energy Work", href: "/services/energy-work", asset: "cw-ap26-hands" },
  { bucket: "Wellness", title: "Massage", href: "/services/massage", asset: "cw-ap-massage-session" },
  { bucket: "Wellness", title: "Acupuncture", href: "/services/acupuncture", asset: "cw-ap26-acu-leo" },
  { bucket: "Wellness", title: "Cupping Therapy", href: "/services/cupping-therapy", asset: "cw-ap26-acu-shoulder" },
];

const INTAKE = [
  { title: "You Contact the Welcome Team", text: "Fill out the Contact Form, call, or text us. No need to choose a provider or service first." },
  { title: "We Learn More About You", text: "A Welcome Team member connects with you to hear what is bringing you in and what kind of support you may be looking for." },
  { title: "We Help Build a Starting Point", text: "Together, we identify an appropriate place to begin across therapy, medication management, coaching, and wellness." },
  { title: "We Stay Connected", text: "We help you schedule your first appointment, and the Welcome Team remains a resource if your needs change along the way." },
];

const WHY = [
  { title: "Whole-Person Care", text: "Mental, physical, and emotional well-being are connected. We treat them that way." },
  { title: "More Than One Way to Begin", text: "Therapy may be right for you. So might medication management, coaching, massage, acupuncture, energy work, or another kind of support." },
  { title: "A Team That Talks to Each Other", text: "When appropriate and with your permission, providers can collaborate so your care feels more connected." },
  { title: "Care That Can Evolve", text: "What you need now may change over time. Your care can change with you." },
];

export default function Home() {
  return (
    <article>
      {/* Hero: the whole branch, wide. */}
      <header className="relative pb-6 lg:min-h-[calc(100svh-var(--header-h))] lg:pb-0" data-stop="wide">
        <HeroMark variant="stage" />
        <div className="wrap pt-10 md:pt-20">
          <div className="glass glass--strong max-w-[760px] px-6 py-7 md:px-10 md:py-10">
            <Split as="h1" text="Pathways Within" />
            <p className="mt-4 text-[clamp(1.15rem,1rem+0.9vw,1.6rem)] font-bold leading-tight text-brand-deep" style={{ fontFamily: "var(--font-display)" }} data-reveal>
              A 360º Approach to Healing &amp; Transformation
            </p>
            <p className="lead mt-5 max-w-[58ch]" data-reveal>
              Pathways Within brings mental health, physical wellness, and personal growth into one connected experience.
            </p>
            <p className="mt-4 max-w-[58ch]" data-reveal>
              Our team works together to help you find the support that makes sense for you—whether that means therapy, medication management, coaching, massage, acupuncture, energy work, or a combination of services.
            </p>
            <p className="mt-4 max-w-[58ch] font-bold text-brand-ink" data-reveal>
              Start with what you know. We can help with the rest.
            </p>
            <div className="mt-8 flex flex-wrap gap-3" data-reveal>
              <Cta label="Contact Us" href="/contact" />
              <Cta label="Find Your Path" href="#find-your-path" secondary />
            </div>
          </div>
        </div>
        <p className="wrap mt-6 flex items-center gap-3 lg:mt-10 text-[0.85rem] font-bold tracking-[0.18em] text-brand-ink uppercase" data-reveal style={{ fontFamily: "var(--font-display)" }}>
          <span className="circle inline-block animate-bounce bg-brand" style={{ width: 10, height: 10 }} aria-hidden="true" />
          Follow the path
        </p>
        <HeroMark variant="badge" home />
      </header>

      <div className="relative" data-draw-scope>
        <PathLine />

        {/* Follow the Path */}
        <section className="section" data-stop="labyrinth">
          <div className="wrap grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="relative mx-auto w-[min(70vw,380px)]">
              <div className="orbit">
                <Photo asset="cw-labyrinth-beach" alt="A stone labyrinth on the beach" shape="circle" className="ring" float={40} sizes="380px" />
              </div>
              <span className="circle ring absolute -right-4 -top-4 flex items-center justify-center bg-white text-center" style={{ width: 118, height: 118 }} data-reveal>
                <span style={{ fontFamily: "var(--font-display)" }} className="font-bold leading-none text-brand-deep">
                  <span className="block text-[2rem]">
                    <span data-count="360">360</span>º
                  </span>
                  <span className="block text-[0.6rem] tracking-[0.18em] uppercase">Approach</span>
                </span>
              </span>
            </div>
            <div className="glass px-6 py-7 md:px-9 md:py-9">
              <p className="eyebrow mb-3" data-reveal>
                Follow the Path
              </p>
              <h2 data-reveal>Everyone’s Route to Care Can Be Different</h2>
              <p className="mt-5" data-reveal>
                The labyrinth in our logo says a lot about how we see growth. A labyrinth is not a maze. There are no wrong turns or dead ends. The path may wind, pause, circle inward, or open outward—but it keeps moving.
              </p>
              <p className="mt-4" data-reveal>
                That same philosophy shapes the Pathways Within experience. Start where you are. Move at your pace. Choose the support that makes sense now, knowing your needs may change along the way.
              </p>
              <p className="lead mt-5" data-reveal>
                The path does not have to be straight to be taking you somewhere.
              </p>
            </div>
          </div>
        </section>

        {/* The 360 Intake */}
        <section className="section" data-stop="seated">
          <div className="wrap wrap--wide grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="glass px-6 py-7 md:px-9 md:py-9">
              <p className="eyebrow mb-3" data-reveal>
                The 360 Intake
              </p>
              <h2 data-reveal>Choose Your Personalized Path</h2>
              <p className="lead mt-4" data-reveal>
                You do not need to arrive knowing exactly what kind of support you need. Our Welcome Team starts with a 360 Intake to learn more about what is going on, what you would like to change, and where it may make sense to begin.
              </p>
              <ol className="mt-8 grid gap-5 pl-0">
                {INTAKE.map((s, i) => (
                  <li key={s.title} className="grid grid-cols-[52px_1fr] items-start gap-4" data-reveal>
                    <span className="circle flex items-center justify-center bg-brand-deep text-[1.05rem] font-bold text-white" style={{ width: 52, height: 52, fontFamily: "var(--font-display)" }}>
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="!text-[1.15rem]">{s.title}</h3>
                      <p className="mt-1 text-[0.98rem]">{s.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <div className="mt-8 flex flex-wrap gap-3" data-reveal>
                <Cta label="Contact Us" href="/contact" />
                <Cta label="How It Works" href="/how-it-works" secondary />
              </div>
            </div>
            <div className="relative mx-auto grid w-[min(80vw,440px)] grid-cols-2 gap-4 lg:mt-16 lg:w-full">
              <Photo asset="ha-ap26-desk-smile" alt="A warm welcome at the front desk" shape="circle" className="ring" float={28} sizes="220px" />
              <Photo asset="pr-intake-clipboard" alt="An intake clipboard" shape="circle" className="ring mt-12" float={44} sizes="220px" />
              <Photo asset="th-ap26-two-women" alt="Two people in conversation" shape="circle" className="ring -mt-6 col-start-2" float={36} sizes="220px" />
            </div>
          </div>
        </section>

        {/* Quiz: the low-pressure entry point, right after the 360 Intake. */}
        <section className="section" data-stop="cairn" id="find-your-path">
          <div className="wrap">
            <div className="mb-6 max-w-[640px]">
              <p className="eyebrow mb-3" data-reveal>
                Find Your Path
              </p>
              <h2 data-reveal>Answer five questions.</h2>
              <p className="lead mt-3" data-reveal>
                A low-pressure way to see where it may make sense to begin.
              </p>
            </div>
            <Quiz />
          </div>
        </section>

        {/* Services */}
        <section className="section" data-stop="pool">
          <div className="wrap">
            <div className="mb-8 max-w-[640px]">
              <p className="eyebrow mb-3" data-reveal>
                Services
              </p>
              <h2 data-reveal>Mental Health. Mind-Body Support. Wellness.</h2>
              <p className="lead mt-4" data-reveal>
                One connected team.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {SERVICES.map((s) => (
                <Link key={s.href} href={s.href} className="tile" data-reveal>
                  <span className="circle bg-brand-soft" style={{ width: 76, height: 76 }}>
                    <img src={`/img/photos/${s.asset}-640.webp`} alt="" width={76} height={76} loading="lazy" className="h-full w-full object-cover" />
                  </span>
                  <span>
                    <span className="eyebrow block !text-[0.62rem]">{s.bucket}</span>
                    <span className="tile__title block">{s.title}</span>
                  </span>
                </Link>
              ))}
              <Link href="/services" className="tile" data-reveal>
                <span className="circle bg-brand-deep" style={{ width: 76, height: 76 }}>
                  <LabyrinthGlyph />
                </span>
                <span className="tile__title text-brand-deep">All services →</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Why */}
        <section className="section" data-stop="standing">
          <div className="wrap wrap--wide grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="relative mx-auto w-[min(72vw,420px)] lg:order-2">
              <Photo asset="cw-cairn-shoreline" alt="A cairn of balanced stones on the shoreline" shape="blob" className="ring" float={40} sizes="420px" />
            </div>
            <div className="glass px-6 py-7 md:px-9 md:py-9 lg:order-1">
              <h2 data-reveal>Why Pathways Within?</h2>
              <ul className="check-list mt-6">
                {WHY.map((w) => (
                  <li key={w.title} data-reveal>
                    <strong>{w.title}:</strong> {w.text}
                  </li>
                ))}
              </ul>
              <p className="lead mt-6" data-reveal>
                Take what you need. Leave what you do not. We will help you find a place to begin.
              </p>
            </div>
          </div>
        </section>

        {/* Founder, short version only */}
        <section className="section" data-stop="ivy">
          <div className="wrap grid items-center gap-10 lg:grid-cols-[1fr_0.8fr]">
            <div className="glass px-6 py-7 md:px-9 md:py-9">
              <p className="eyebrow mb-3" data-reveal>
                Founder of Pathways Within
              </p>
              <h2 data-reveal>Meet Rachel: Founder, Therapist &amp; “Patient Zero”</h2>
              <p className="mt-5" data-reveal>
                Hi, I’m Rachel, therapist, founder, lifelong listener, and the original “Patient Zero” behind Pathways Within.
              </p>
              <p className="mt-4" data-reveal>
                Therapy is not just what I do. It is woven into who I am.
              </p>
              <div className="mt-7 flex flex-wrap gap-3" data-reveal>
                <Cta label="Read Rachel’s story" href="/about/rachel" />
                <Cta label="The Wisdom of Wellness on Substack" href={SITE.substack} secondary />
              </div>
            </div>
            <div className="relative mx-auto w-[min(72vw,400px)]">
              <div className="orbit">
                <Photo asset="ha-ap26-rachel-solo" alt="Rachel Lessard, founder of Pathways Within" shape="circle" className="ring" float={34} sizes="400px" />
              </div>
            </div>
          </div>
        </section>

        {/* Locations, brief */}
        <section className="section" data-stop="ground">
          <div className="wrap wrap--wide">
            <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="eyebrow mb-3" data-reveal>
                  Locations
                </p>
                <h2 data-reveal>Our Long Island Locations</h2>
              </div>
              <Link href="/locations" className="btn btn--ghost" data-reveal>
                All locations <Arrow />
              </Link>
            </div>
            <LocationsBlock compact />
          </div>
        </section>
      </div>

      {/* Get started */}
      <section className="section" data-stop="wide">
        <div className="wrap wrap--narrow">
          <div className="glass glass--strong grid gap-5 px-7 py-9 text-center md:px-12 md:py-12">
            <p className="eyebrow" data-reveal>
              Get Started
            </p>
            <h2 data-reveal>Not Sure Where to Start? Start Here.</h2>
            <p className="lead mx-auto max-w-[56ch]" data-reveal>
              Ready when you are. Reach out to our Welcome Team and we will help from there.
            </p>
            <div className="mt-2 flex flex-wrap justify-center gap-3" data-reveal>
              <Cta label="Contact Us" href="/contact" />
              <Cta label="Find Your Path" href="#find-your-path" secondary />
              <Cta label="631-371-3825" href={SITE.phoneHref} secondary />
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}

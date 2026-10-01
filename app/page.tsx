import type { Metadata } from "next";
import Link from "next/link";
import { Split } from "@/components/ui/Split";
import { Photo } from "@/components/ui/Photo";
import { Cta, Arrow, LabyrinthGlyph } from "@/components/render/Blocks";
import { PathLine } from "@/components/ui/PathLine";
import { LocationsBlock } from "@/components/blocks/LocationsBlock";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Pathways Within - Wisdom and Wellness - New York Therapy" },
  description:
    "At Pathways Within, we believe true well-being is about more than just mental health or physical appearance—it’s about caring for yourself as whole person.",
  alternates: { canonical: "/" },
};

/** Source: 01 (landing), 02 (Wisdom home), 03 (About), 43 (new home page). Copy verbatim; layout new. */
const SERVICES = [
  { title: "Individual, Couples & Family Therapy", href: "/services/individual-therapy", asset: "th-ap26-conversation" },
  { title: "EMDR, IFS & DBT Therapy", href: "/services/emdr-therapy", asset: "th-ap26-green-listen" },
  { title: "CBT & Somatic Therapy", href: "/services/somatic-therapy", asset: "th-ap26-seated" },
  { title: "Support for Veterans & First Responders", href: "/services/veterans-first-responders", asset: "cw-veteran-cap" },
  { title: "Medication Management", href: "/services/medication-management", asset: "cw-ap26-med-np" },
  { title: "Performance & Wellness Coaching", href: "/services/performance-wellness-coaching", asset: "ha-tia-baumohl" },
  { title: "Massage", href: "/services/massage", asset: "cw-ap-massage-session" },
  { title: "Acupuncture", href: "/services/acupuncture", asset: "cw-ap26-acu-leo" },
  { title: "Energy Work", href: "/services/energy-work", asset: "cw-ap26-hands" },
];

const INTAKE = [
  { title: "You contact the Welcome Team", text: "Fill out the form below and someone from our team will be in touch. Or Contact Us Directly." },
  { title: "A 360 intake conversation", text: "A Welcome Team member reaches out and schedules a 360 intake, a conversation about what you are experiencing and what you want to change." },
  { title: "One plan, built around you", text: "The team builds a care plan across therapy, medication management, coaching, and wellness as needed, and matches you with available providers." },
  { title: "Your first appointment", text: "Your first appointment is scheduled. The Welcome Team stays your point of contact." },
];

export default function Home() {
  return (
    <article>
      {/* Hero: the whole branch, wide. */}
      <header className="relative pb-6 lg:min-h-[calc(100svh-var(--header-h))] lg:pb-0" data-stop="wide">
        <div className="wrap pt-10 md:pt-20">
          <div className="glass glass--strong max-w-[760px] px-6 py-7 md:px-10 md:py-10">
            <p className="eyebrow mb-4" data-reveal>
              Discover Your
            </p>
            <Split as="h1" text="Pathways Within" />
            <p className="mt-4 text-[clamp(1.15rem,1rem+0.9vw,1.6rem)] font-bold leading-tight text-brand-deep" style={{ fontFamily: "var(--font-display)" }} data-reveal>
              A 360º Approach to Healing &amp; Transformation
            </p>
            <p className="lead mt-2" data-reveal>
              Your Mind, Body &amp; Spirit—In Harmony
            </p>
            <p className="mt-6 max-w-[58ch]" data-reveal>
              At Pathways Within, we believe true well-being is about more than just mental health or physical appearance—it’s about caring for yourself as whole person. Our unique 360º holistic approach blends clinical therapy and advanced medspa services to support emotional healing, physical renewal, and overall well-being.
            </p>
            <div className="mt-8 flex flex-wrap gap-3" data-reveal>
              <Cta label="Contact Us" href="/contact" />
              <Cta label="Find your path" href="/how-it-works" secondary />
            </div>
          </div>
        </div>
        <p className="wrap mt-6 flex items-center gap-3 lg:mt-10 text-[0.85rem] font-bold tracking-[0.18em] text-brand-ink uppercase" data-reveal style={{ fontFamily: "var(--font-display)" }}>
          <span className="circle inline-block animate-bounce bg-brand" style={{ width: 10, height: 10 }} aria-hidden="true" />
          Follow the path
        </p>
      </header>

      <div className="relative" data-draw-scope>
        <PathLine />

        {/* The labyrinth story */}
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
                  <span className="block text-[0.6rem] tracking-[0.18em] uppercase">Wellness</span>
                </span>
              </span>
            </div>
            <div className="glass px-6 py-7 md:px-9 md:py-9">
              <p className="eyebrow mb-3" data-reveal>
                Everyone’s route to care can be different
              </p>
              <h2 data-reveal>The labyrinth in our logo says a lot about how we see growth.</h2>
              <p className="mt-5" data-reveal>
                A labyrinth is not a maze. There are no wrong turns, trick doors, or giant red signs telling you that you have failed. The path may wind, pause, circle inward, or open outward, but it keeps moving.
              </p>
              <p className="mt-4" data-reveal>
                That same philosophy shapes the Pathways Within experience. Start where you are. Move at your pace. Choose the support that makes sense for you now, knowing that your needs may change along the way.
              </p>
              <p className="lead mt-5" data-reveal>
                The path does not have to be straight to be taking you somewhere.
              </p>
            </div>
          </div>
        </section>

        {/* 360 intake */}
        <section className="section" data-stop="seated">
          <div className="wrap wrap--wide grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="glass px-6 py-7 md:px-9 md:py-9">
              <p className="eyebrow mb-3" data-reveal>
                The 360 Intake
              </p>
              <h2 data-reveal>Choose Your Personalized Path</h2>
              <p className="lead mt-4" data-reveal>
                You do not need to know exactly what kind of support you need. Our Welcome Team guides everyone through the same intake process to build an individual plan.
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
                <Cta label="How it works" href="/how-it-works" secondary />
              </div>
            </div>
            <div className="relative mx-auto grid w-[min(80vw,440px)] grid-cols-2 gap-4 lg:mt-16 lg:w-full">
              <Photo asset="ha-ap26-desk-smile" alt="A warm welcome at the front desk" shape="circle" className="ring" float={28} sizes="220px" />
              <Photo asset="pr-intake-clipboard" alt="An intake clipboard" shape="circle" className="ring mt-12" float={44} sizes="220px" />
              <Photo asset="th-ap26-two-women" alt="Two people in conversation" shape="circle" className="ring -mt-6 col-start-2" float={36} sizes="220px" />
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="section" data-stop="pool">
          <div className="wrap">
            <div className="mb-8 max-w-[640px]">
              <p className="eyebrow mb-3" data-reveal>
                Services
              </p>
              <h2 data-reveal>Healing is holistic.</h2>
              <p className="lead mt-4" data-reveal>
                Mental Health &amp; Therapy. Holistic, Whole Body Care. One team, at every location.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {SERVICES.map((s) => (
                <Link key={s.href} href={s.href} className="tile" data-reveal>
                  <span className="circle bg-brand-soft" style={{ width: 76, height: 76 }}>
                    <img src={`/img/photos/${s.asset}-640.webp`} alt="" width={76} height={76} loading="lazy" className="h-full w-full object-cover" />
                  </span>
                  <span className="tile__title">{s.title}</span>
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
        <section className="section" data-stop="cairn">
          <div className="wrap wrap--wide grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="relative mx-auto w-[min(72vw,420px)] lg:order-2">
              <Photo asset="cw-cairn-shoreline" alt="A cairn of balanced stones on the shoreline" shape="blob" className="ring" float={40} sizes="420px" />
            </div>
            <div className="glass px-6 py-7 md:px-9 md:py-9 lg:order-1">
              <h2 data-reveal>Why Pathways Within?</h2>
              <ul className="check-list mt-6">
                <li data-reveal>
                  <strong>Complete 360º Well-Being:</strong> Inner healing + outer rejuvenation in one place
                </li>
                <li data-reveal>
                  <strong>Expert Practitioners:</strong> Licensed therapists, aestheticians &amp; holistic providers
                </li>
                <li data-reveal>
                  <strong>Tailored Care:</strong> Personalized treatments designed for your unique needs
                </li>
                <li data-reveal>
                  <strong>A Holistic Experience:</strong> Mind-body wellness to help you feel whole
                </li>
              </ul>
              <p className="lead mt-6" data-reveal>
                Your journey to healing, confidence, and balance starts here.
              </p>
            </div>
          </div>
        </section>

        {/* Founder, concise */}
        <section className="section" data-stop="standing">
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
                That calling led me to study psychology, human behavior, and the mind-body-spirit connection. It also led me to build Pathways Within: the kind of place I wished existed when I was learning how to navigate my own path.
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

        {/* Marquee */}
        <section className="section--tight glass glass--strong !rounded-none !border-x-0" aria-label="What clients say">
          <div className="marquee py-4">
            <div className="marquee__track">
              {Array.from({ length: 4 }).map((_, i) => (
                <span key={i} className="text-[clamp(1.05rem,0.95rem+0.8vw,1.5rem)] font-bold text-brand-deep" style={{ fontFamily: "var(--font-display)" }} aria-hidden={i > 0}>
                  The Pathways Within team helped me find my way back to myself -K.F. 〰️
                </span>
              ))}
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
            <h2 data-reveal>We are big believers in therapy tailored to your wants and needs.</h2>
            <p className="lead mx-auto max-w-[56ch]" data-reveal>
              The journey within should be as personal and individual as you are.
            </p>
            <p className="mx-auto max-w-[56ch]" data-reveal>
              We look forward to meeting you and helping you have the experiences you have been craving!
            </p>
            <div className="mt-2 flex flex-wrap justify-center gap-3" data-reveal>
              <Cta label="Contact Us" href="/contact" />
              <Cta label="Find your path" href="/how-it-works" secondary />
              <Cta label={SITE.phone} href={SITE.phoneHref} secondary />
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}

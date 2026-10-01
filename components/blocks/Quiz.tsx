"use client";

import { useId, useState } from "react";
import Link from "next/link";
import { CTA, QUESTIONS, routeAnswers, type AnswerSet, type OptionId, type QuestionId } from "./quizRouter";
import { Arrow } from "@/components/render/Blocks";

/**
 * Five questions, one at a time, real radio inputs, then a result that always
 * ends at Contact Us. Without JavaScript all five questions render in order.
 */
export default function Quiz() {
  const uid = useId();
  const [answers, setAnswers] = useState<AnswerSet>({});
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);
  const q = QUESTIONS[step];
  const result = done ? routeAnswers(answers) : null;

  const choose = (id: QuestionId, opt: OptionId) => {
    setAnswers((a) => ({ ...a, [id]: opt }));
    window.setTimeout(() => {
      if (step < QUESTIONS.length - 1) setStep(step + 1);
      else setDone(true);
    }, 260);
  };

  if (result) {
    return (
      <div className="glass glass--strong grid gap-5 p-8 md:p-10" aria-live="polite">
        {result.crisis && (
          <p className="rounded-[var(--r-md)] bg-[#fff2f2] p-5 text-[1.05rem] text-[#7a1f1f]">
            <strong>If you are in crisis right now: </strong>
            {result.crisis.map((s, i) => (s.href ? <a key={i} href={s.href} className="font-bold text-[#7a1f1f]">{s.text}</a> : <span key={i}>{s.text}</span>))}
          </p>
        )}
        <p className="eyebrow">A good place to begin</p>
        <h3 className="!text-[1.9rem]">{result.title}</h3>
        {result.links.length > 0 && (
          <ul className="grid gap-2">
            {result.links.map((l) => (
              <li key={l.href + l.label}>
                <Link href={l.href} className="font-bold">
                  {l.label} →
                </Link>
              </li>
            ))}
          </ul>
        )}
        {result.followUp && (
          <p>
            {result.followUp.map((s, i) => (s.href ? <Link key={i} href={s.href}>{s.text}</Link> : <span key={i}>{s.text}</span>))}
          </p>
        )}
        <p>You do not need to know which service you need. Tell the Welcome Team what you are experiencing and they will build the plan with you.</p>
        <div className="flex flex-wrap gap-3">
          <Link href={CTA.href} className="btn btn--primary">
            {CTA.label} <Arrow />
          </Link>
          <button
            type="button"
            className="btn btn--ghost"
            onClick={() => {
              setAnswers({});
              setStep(0);
              setDone(false);
            }}
          >
            Start over
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="glass glass--strong grid gap-6 p-8 md:p-10">
      <div className="flex items-center justify-between gap-4">
        <p className="eyebrow">
          Question {step + 1} of {QUESTIONS.length}
        </p>
        <div className="flex gap-1.5" aria-hidden="true">
          {QUESTIONS.map((_, i) => (
            <span key={i} className="circle" style={{ width: 10, height: 10, background: i <= step ? "var(--brand)" : "rgb(0 126 252 / 0.2)" }} />
          ))}
        </div>
      </div>
      <fieldset key={q.id} className="m-0 border-0 p-0">
        <legend className="mb-4 text-[1.5rem] font-bold text-brand-ink" style={{ fontFamily: "var(--font-display)" }}>
          {q.legend}
        </legend>
        <div className="grid gap-2.5">
          {q.options.map((o) => {
            const id = `${uid}-${q.id}-${o.id}`;
            const checked = answers[q.id] === o.id;
            return (
              <label
                key={o.id}
                htmlFor={id}
                className={`flex cursor-pointer items-center gap-3 rounded-full border bg-white px-5 py-3.5 transition ${
                  checked ? "border-brand-deep shadow-[0_0_0_3px_rgb(0_126_252_/_0.2)]" : "border-[rgb(0_126_252_/_0.25)] hover:border-brand"
                }`}
              >
                <input id={id} type="radio" name={`${uid}-${q.id}`} className="sr-only" checked={checked} onChange={() => choose(q.id, o.id)} />
                <span className="circle shrink-0 border-2 border-brand-deep" style={{ width: 18, height: 18, background: checked ? "var(--brand-deep)" : "#fff" }} aria-hidden="true" />
                <span>{o.label}</span>
              </label>
            );
          })}
        </div>
      </fieldset>
      {step > 0 && (
        <button type="button" className="justify-self-start text-[0.95rem] font-bold text-brand-deep" onClick={() => setStep(step - 1)}>
          ← Back
        </button>
      )}
    </div>
  );
}

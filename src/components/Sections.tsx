import { useState } from 'react'
import { Check, ChevronDown, Crown, Droplets, Flower2, Heart, MessageCircle, Palette, Scissors, Sparkles, ShieldCheck, CalendarCheck, type LucideIcon } from 'lucide-react'
import { content, type Lang, type ServiceId } from '../i18n/content'
import { waLink } from '../config/site'
import { Divider } from './Ornaments'
import { Reveal } from './Reveal'

const serviceIcons: Record<ServiceId, LucideIcon> = {
  hair: Scissors,
  color: Droplets,
  makeup: Palette,
  nails: Sparkles,
  skin: Flower2,
  bridal: Crown,
}

const aboutIcons: LucideIcon[] = [Heart, ShieldCheck, CalendarCheck]

export function About({ lang }: { lang: Lang }) {
  const t = content[lang].about
  return (
    <section id="about" className="bg-cream-100 py-20 sm:py-24">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">{t.eyebrow}</p>
          <h2 className="h2">{t.title}</h2>
          <p className="mt-4 text-lg leading-relaxed text-ink/75">{t.text}</p>
          <Divider className="mt-8" />
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {t.items.map((it, i) => {
            const Icon = aboutIcons[i]
            return (
              <Reveal key={it.title} delay={i * 0.08}>
                <div className="h-full rounded-3xl bg-cream-50 p-7 text-center shadow-soft/50 ring-1 ring-plum/5">
                  <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-plum text-gold-light">
                    <Icon size={22} aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 text-xl font-bold text-plum">{it.title}</h3>
                  <p className="mt-2 leading-relaxed text-ink/70">{it.text}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export function Services({ lang }: { lang: Lang }) {
  const t = content[lang].services
  return (
    <section id="services" className="py-20 sm:py-24">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">{t.eyebrow}</p>
          <h2 className="h2">{t.title}</h2>
          <p className="mt-4 text-lg text-ink/75">{t.text}</p>
        </Reveal>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.list.map((s, i) => {
            const Icon = serviceIcons[s.id]
            return (
              <li key={s.id}>
                <Reveal delay={(i % 3) * 0.07} className="h-full">
                  <article className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white ring-1 ring-plum/10 transition duration-300 hover:-translate-y-1 hover:shadow-soft">
                    <div className="relative flex h-28 items-center justify-center bg-gradient-to-br from-plum via-plum-700 to-plum-900">
                      <div aria-hidden="true" className="absolute inset-3 rounded-2xl border border-gold/40" />
                      <Icon size={38} className="text-gold-light transition duration-300 group-hover:scale-110" aria-hidden="true" />
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <h3 className="text-xl font-bold text-plum">{s.title}</h3>
                      <p className="mt-2 leading-relaxed text-ink/70">{s.text}</p>
                      <ul className="mt-4 space-y-1.5 text-[15px] text-ink/80">
                        {s.items.map((x) => (
                          <li key={x} className="flex items-center gap-2">
                            <Check size={15} className="shrink-0 text-gold" aria-hidden="true" />
                            {x}
                          </li>
                        ))}
                      </ul>
                      <a
                        href={waLink(t.bookMsg(s.title))}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-6 inline-flex items-center gap-2 self-start font-bold text-gold-dark transition hover:text-plum"
                      >
                        <MessageCircle size={17} aria-hidden="true" />
                        {t.book}
                      </a>
                    </div>
                  </article>
                </Reveal>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

export function Steps({ lang }: { lang: Lang }) {
  const t = content[lang].steps
  return (
    <section id="steps" className="relative overflow-hidden bg-plum-900 py-20 text-cream-50 sm:py-24">
      <div aria-hidden="true" className="pointer-events-none absolute -top-24 start-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-gold/10 blur-3xl" />
      <div className="container-x relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow !text-gold-light">{t.eyebrow}</p>
          <h2 className="h2 !text-cream-50">{t.title}</h2>
        </Reveal>
        <ol className="mt-12 grid gap-6 md:grid-cols-3">
          {t.list.map((s, i) => (
            <li key={s.title}>
              <Reveal delay={i * 0.1} className="h-full">
                <div className="h-full rounded-3xl border border-gold/30 bg-white/5 p-7">
                  <span className="font-display text-5xl italic text-gold-light" aria-hidden="true">
                    {i + 1}
                  </span>
                  <h3 className="mt-3 text-xl font-bold">{s.title}</h3>
                  <p className="mt-2 leading-relaxed text-cream-200/85">{s.text}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export function Faq({ lang }: { lang: Lang }) {
  const t = content[lang].faq
  const [openIdx, setOpenIdx] = useState<number | null>(0)
  return (
    <section id="faq" className="py-20 sm:py-24">
      <div className="container-x max-w-3xl">
        <Reveal className="text-center">
          <p className="eyebrow">{t.eyebrow}</p>
          <h2 className="h2">{t.title}</h2>
        </Reveal>
        <div className="mt-10 divide-y divide-plum/10 rounded-3xl bg-white ring-1 ring-plum/10">
          {t.list.map((f, i) => {
            const isOpen = openIdx === i
            return (
              <div key={f.q}>
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    id={`faq-btn-${i}`}
                    onClick={() => setOpenIdx(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-start text-lg font-bold text-plum"
                  >
                    {f.q}
                    <ChevronDown size={20} aria-hidden="true" className={`shrink-0 text-gold transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                </h3>
                <div id={`faq-panel-${i}`} role="region" aria-labelledby={`faq-btn-${i}`} hidden={!isOpen} className="px-6 pb-5 leading-relaxed text-ink/75">
                  {f.a}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

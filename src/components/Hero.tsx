import { Check, MessageCircle } from 'lucide-react'
import { content, type Lang } from '../i18n/content'
import { waLink } from '../config/site'
import { Sparkle } from './Ornaments'
import { Reveal } from './Reveal'

export function Hero({ lang }: { lang: Lang }) {
  const t = content[lang].hero
  const href = waLink(lang === 'ar' ? 'مرحباً Glamora، عايزة أحجز موعد' : 'Hello Glamora, I would like to book an appointment')

  return (
    <section id="top" className="relative overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute -top-40 end-[-10%] h-[520px] w-[520px] rounded-full bg-cream-300/60 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute bottom-0 start-[-8%] h-[360px] w-[360px] rounded-full bg-rose/10 blur-3xl" />

      <div className="container-x relative grid items-center gap-10 pb-16 pt-6 lg:grid-cols-2 lg:gap-14 lg:pb-24 lg:pt-12">
        <div>
          <Reveal>
            <p className="eyebrow flex items-center gap-2">
              <Sparkle className="h-3.5 w-3.5 text-gold" />
              {t.eyebrow}
            </p>
            <h1 className="mt-4 font-display text-[2.6rem] font-semibold leading-[1.12] text-plum sm:text-6xl rtl:font-arabic rtl:font-bold rtl:leading-[1.35]">
              {t.title}{' '}
              <span className="italic text-gold-dark rtl:not-italic">{t.accent}</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink/80">{t.text}</p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={href} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                <MessageCircle size={18} aria-hidden="true" />
                {t.primary}
              </a>
              <a href="#services" className="btn btn-ghost">
                {t.secondary}
              </a>
            </div>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-plum/80">
              {t.points.map((p) => (
                <li key={p} className="flex items-center gap-1.5">
                  <Check size={16} className="text-gold" aria-hidden="true" />
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="relative">
          <div className="relative mx-auto max-w-xl">
            <div aria-hidden="true" className="absolute -inset-3 rounded-[2rem] border border-gold/40" />
            <img
              src="/brand/logo-960.webp"
              srcSet="/brand/logo-480.webp 480w, /brand/logo-960.webp 960w"
              sizes="(min-width: 1024px) 560px, 90vw"
              width={960}
              height={640}
              alt={t.logoAlt}
              fetchPriority="high"
              className="relative w-full rounded-[1.6rem] shadow-soft"
            />
            <Sparkle className="absolute -top-5 end-6 h-7 w-7 text-gold-light" />
            <Sparkle className="absolute -bottom-4 start-8 h-5 w-5 text-gold" />
          </div>
        </Reveal>
      </div>
    </section>
  )
}

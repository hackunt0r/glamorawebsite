import { useEffect, useState } from 'react'
import { Menu, X, MessageCircle } from 'lucide-react'
import { content, type Lang } from '../i18n/content'
import { waLink } from '../config/site'

interface Props {
  lang: Lang
  onToggleLang: () => void
}

export function Header({ lang, onToggleLang }: Props) {
  const t = content[lang]
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const bookHref = waLink(lang === 'ar' ? 'مرحباً Glamora، عايزة أحجز موعد' : 'Hello Glamora, I would like to book an appointment')

  return (
    <header
      className={`sticky top-0 z-40 transition-colors duration-300 ${
        scrolled || open ? 'bg-cream-50/90 shadow-[0_1px_0_rgba(74,25,56,0.08)] backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="container-x flex h-[68px] items-center justify-between gap-4">
        <a href="#top" className="flex items-center gap-2" aria-label="Glamora Beauty Salon">
          <img src="/brand/logo-480.webp" width={72} height={48} alt="" className="h-11 w-auto rounded-md" />
          <span className="font-display text-2xl font-semibold italic text-plum">Glamora</span>
        </a>

        <nav aria-label={lang === 'ar' ? 'التنقل الرئيسي' : 'Main navigation'} className="hidden items-center gap-7 lg:flex">
          {t.nav.map((n) => (
            <a key={n.id} href={`#${n.id}`} className="text-[15px] font-medium text-plum/80 transition hover:text-gold-dark">
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={onToggleLang}
            aria-label={t.switchAria}
            className="rounded-full border border-plum/25 px-3 py-1.5 text-sm font-bold text-plum transition hover:bg-plum/5"
          >
            {t.switchLabel}
          </button>
          <a href={bookHref} target="_blank" rel="noopener noreferrer" className="btn btn-primary hidden !py-2 text-sm sm:inline-flex">
            <MessageCircle size={16} aria-hidden="true" />
            {t.cta}
          </a>
          <button
            type="button"
            className="rounded-full p-2 text-plum lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? t.menuClose : t.menuOpen}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-menu" aria-label={lang === 'ar' ? 'القائمة' : 'Menu'} className="border-t border-plum/10 bg-cream-50 lg:hidden">
          <ul className="container-x flex flex-col py-3">
            {t.nav.map((n) => (
              <li key={n.id}>
                <a href={`#${n.id}`} onClick={() => setOpen(false)} className="block rounded-lg px-2 py-3 text-lg font-medium text-plum hover:bg-plum/5">
                  {n.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a href={bookHref} target="_blank" rel="noopener noreferrer" className="btn btn-primary w-full">
                <MessageCircle size={18} aria-hidden="true" />
                {t.cta}
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}

import { useEffect, useState } from 'react'
import { MessageCircle } from 'lucide-react'
import { content, type Lang } from './i18n/content'
import { waLink } from './config/site'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { About, Services, Steps, Faq } from './components/Sections'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

const initialLang = (): Lang => {
  try {
    const saved = localStorage.getItem('glamora-lang')
    if (saved === 'ar' || saved === 'en') return saved
  } catch {
    /* storage unavailable */
  }
  return 'ar'
}

export default function App() {
  const [lang, setLang] = useState<Lang>(initialLang)
  const t = content[lang]

  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dir = t.dir
    try {
      localStorage.setItem('glamora-lang', lang)
    } catch {
      /* ignore */
    }
  }, [lang, t.dir])

  return (
    <>
      <a href="#about" className="sr-only focus:not-sr-only focus:absolute focus:start-3 focus:top-3 focus:z-50 focus:rounded-lg focus:bg-white focus:px-4 focus:py-2">
        {t.skip}
      </a>
      <Header lang={lang} onToggleLang={() => setLang(lang === 'ar' ? 'en' : 'ar')} />
      <main>
        <Hero lang={lang} />
        <About lang={lang} />
        <Services lang={lang} />
        <Steps lang={lang} />
        <Faq lang={lang} />
        <Contact lang={lang} />
      </main>
      <Footer lang={lang} />

      <a
        href={waLink(lang === 'ar' ? 'مرحباً Glamora' : 'Hello Glamora')}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t.float}
        className="fixed bottom-5 end-5 z-40 flex items-center gap-2 rounded-full bg-[#1f8f4e] px-4 py-3 font-bold text-white shadow-lg transition hover:bg-[#177a41] active:scale-95"
      >
        <MessageCircle size={20} aria-hidden="true" />
        <span className="hidden sm:inline">{t.float}</span>
      </a>
    </>
  )
}

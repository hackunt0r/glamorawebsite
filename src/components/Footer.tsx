import { content, type Lang } from '../i18n/content'
import { site } from '../config/site'
import { Divider } from './Ornaments'

export function Footer({ lang }: { lang: Lang }) {
  const t = content[lang]
  const social = [
    { label: 'Instagram', href: site.instagram },
    { label: 'Facebook', href: site.facebook },
    { label: 'TikTok', href: site.tiktok },
  ]
  return (
    <footer className="bg-plum-900 pb-24 pt-14 text-cream-100 sm:pb-12">
      <div className="container-x">
        <div className="flex flex-col items-center text-center">
          <img src="/brand/logo-480.webp" width={240} height={160} alt="Glamora Beauty Salon" loading="lazy" className="h-28 w-auto rounded-2xl" />
          <p className="mt-3 text-cream-200/80">{t.footer.tag}</p>
          <Divider className="mt-6" />
        </div>

        <div className="mt-10 grid gap-8 text-center sm:grid-cols-3 sm:text-start">
          <nav aria-label={t.footer.links}>
            <p className="font-bold text-gold-light">{t.footer.links}</p>
            <ul className="mt-3 space-y-2">
              {t.nav.map((n) => (
                <li key={n.id}>
                  <a href={`#${n.id}`} className="text-cream-200/85 hover:text-white">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <p className="font-bold text-gold-light">{t.contact.phoneTitle}</p>
            <ul className="mt-3 space-y-2 text-cream-200/85">
              <li>
                <a href={site.phoneHref} dir="ltr" className="hover:text-white">
                  {site.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="hover:text-white">
                  {site.email}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-bold text-gold-light">{t.footer.follow}</p>
            <ul className="mt-3 space-y-2">
              {social.map((s) => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer" className="text-cream-200/85 hover:text-white">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-cream-200/60">
          <p>
            © {new Date().getFullYear()} Glamora Beauty Salon. {t.footer.rights}
          </p>
          <p className="mt-1">{t.footer.sampleNote}</p>
        </div>
      </div>
    </footer>
  )
}

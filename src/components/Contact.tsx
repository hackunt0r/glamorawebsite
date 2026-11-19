import { useMemo, useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Clock, MapPin, MessageCircle, Phone } from 'lucide-react'
import { content, type Lang } from '../i18n/content'
import { site, waLink } from '../config/site'
import { Reveal } from './Reveal'

const field =
  'mt-1.5 w-full rounded-xl border border-plum/20 bg-white px-4 py-3 text-base text-ink placeholder:text-ink/40 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/40'

export function Contact({ lang }: { lang: Lang }) {
  const t = content[lang].contact
  const f = t.form

  const schema = useMemo(
    () =>
      z.object({
        name: z.string().trim().min(2, f.errors.name).max(60),
        phone: z.string().trim().regex(/^\+?[0-9\s-]{8,15}$/, f.errors.phone),
        service: z.string().min(1, f.errors.service),
        date: z.string().max(60).optional(),
        note: z.string().max(400).optional(),
      }),
    [f.errors.name, f.errors.phone, f.errors.service],
  )
  type Values = z.infer<typeof schema>

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Values>({ resolver: zodResolver(schema), defaultValues: { name: '', phone: '', service: '', date: '', note: '' } })

  const [waUrl, setWaUrl] = useState<string | null>(null)

  const onSubmit = (v: Values) => {
    const url = waLink(f.msg({ name: v.name, phone: v.phone, service: v.service, date: v.date ?? '', note: v.note ?? '' }))
    setWaUrl(url)
    window.open(url, '_blank', 'noopener,noreferrer')
    reset()
  }

  return (
    <section id="contact" className="bg-cream-100 py-20 sm:py-24">
      <div className="container-x grid gap-10 lg:grid-cols-5 lg:gap-14">
        <Reveal className="lg:col-span-2">
          <p className="eyebrow">{t.eyebrow}</p>
          <h2 className="h2">{t.title}</h2>
          <p className="mt-4 text-lg leading-relaxed text-ink/75">{t.text}</p>

          <ul className="mt-8 space-y-5">
            <li className="flex gap-4">
              <Clock className="mt-1 shrink-0 text-gold-dark" size={22} aria-hidden="true" />
              <div>
                <p className="font-bold text-plum">{t.hoursTitle}</p>
                <p className="text-ink/75">{t.hoursText}</p>
              </div>
            </li>
            <li className="flex gap-4">
              <MapPin className="mt-1 shrink-0 text-gold-dark" size={22} aria-hidden="true" />
              <div>
                <p className="font-bold text-plum">{t.addressTitle}</p>
                <p className="text-ink/75">{t.addressText}</p>
                <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer" className="mt-1 inline-block font-bold text-gold-dark underline-offset-4 hover:underline">
                  {t.mapCta}
                </a>
              </div>
            </li>
            <li className="flex gap-4">
              <Phone className="mt-1 shrink-0 text-gold-dark" size={22} aria-hidden="true" />
              <div>
                <p className="font-bold text-plum">{t.phoneTitle}</p>
                <a href={site.phoneHref} dir="ltr" className="text-ink/75 hover:text-plum">
                  {site.phoneDisplay}
                </a>
              </div>
            </li>
          </ul>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-3">
          <form onSubmit={handleSubmit(onSubmit)} noValidate className="rounded-3xl bg-white p-6 shadow-soft ring-1 ring-plum/10 sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="font-bold text-plum">
                  {f.name}
                </label>
                <input id="name" autoComplete="name" placeholder={f.namePh} aria-invalid={!!errors.name} aria-describedby={errors.name ? 'err-name' : undefined} className={field} {...register('name')} />
                {errors.name && (
                  <p id="err-name" role="alert" className="mt-1 text-sm text-red-700">
                    {errors.name.message}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="phone" className="font-bold text-plum">
                  {f.phone}
                </label>
                <input id="phone" type="tel" inputMode="tel" dir="ltr" autoComplete="tel" placeholder={f.phonePh} aria-invalid={!!errors.phone} aria-describedby={errors.phone ? 'err-phone' : undefined} className={`${field} text-start`} {...register('phone')} />
                {errors.phone && (
                  <p id="err-phone" role="alert" className="mt-1 text-sm text-red-700">
                    {errors.phone.message}
                  </p>
                )}
              </div>
            </div>

            <div className="mt-5">
              <label htmlFor="service" className="font-bold text-plum">
                {f.service}
              </label>
              <select id="service" aria-invalid={!!errors.service} aria-describedby={errors.service ? 'err-service' : undefined} className={field} {...register('service')}>
                <option value="">{f.servicePh}</option>
                {content[lang].services.list.map((s) => (
                  <option key={s.id} value={s.title}>
                    {s.title}
                  </option>
                ))}
              </select>
              {errors.service && (
                <p id="err-service" role="alert" className="mt-1 text-sm text-red-700">
                  {errors.service.message}
                </p>
              )}
            </div>

            <div className="mt-5">
              <label htmlFor="date" className="font-bold text-plum">
                {f.date}
              </label>
              <input id="date" className={field} {...register('date')} />
            </div>

            <div className="mt-5">
              <label htmlFor="note" className="font-bold text-plum">
                {f.note}
              </label>
              <textarea id="note" rows={3} placeholder={f.notePh} className={field} {...register('note')} />
            </div>

            <button type="submit" className="btn btn-gold mt-6 w-full">
              <MessageCircle size={18} aria-hidden="true" />
              {f.submit}
            </button>
            <p className="mt-3 text-sm text-ink/60">{f.help}</p>

            {waUrl && (
              <div role="status" className="mt-4 rounded-xl bg-cream-100 p-4 text-sm text-plum">
                <p className="font-bold">{f.opened}</p>
                <a href={waUrl} target="_blank" rel="noopener noreferrer" className="mt-1 inline-block font-bold text-gold-dark underline underline-offset-4">
                  {f.fallback}
                </a>
              </div>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  )
}

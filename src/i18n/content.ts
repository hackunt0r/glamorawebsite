export type Lang = 'ar' | 'en'

export type ServiceId = 'hair' | 'color' | 'makeup' | 'nails' | 'skin' | 'bridal'

interface Content {
  dir: 'rtl' | 'ltr'
  switchLabel: string
  switchAria: string
  nav: { id: string; label: string }[]
  cta: string
  menuOpen: string
  menuClose: string
  skip: string
  hero: {
    eyebrow: string
    title: string
    accent: string
    text: string
    primary: string
    secondary: string
    points: string[]
    logoAlt: string
  }
  about: { eyebrow: string; title: string; text: string; items: { title: string; text: string }[] }
  services: {
    eyebrow: string
    title: string
    text: string
    book: string
    bookMsg: (service: string) => string
    list: { id: ServiceId; title: string; text: string; items: string[] }[]
  }
  steps: { eyebrow: string; title: string; list: { title: string; text: string }[] }
  faq: { eyebrow: string; title: string; list: { q: string; a: string }[] }
  contact: {
    eyebrow: string
    title: string
    text: string
    hoursTitle: string
    hoursText: string
    addressTitle: string
    addressText: string
    mapCta: string
    phoneTitle: string
    form: {
      name: string
      namePh: string
      phone: string
      phonePh: string
      service: string
      servicePh: string
      date: string
      note: string
      notePh: string
      submit: string
      sending: string
      help: string
      opened: string
      fallback: string
      errors: { name: string; phone: string; service: string }
      msg: (v: { name: string; phone: string; service: string; date: string; note: string }) => string
    }
  }
  footer: { tag: string; links: string; follow: string; rights: string; sampleNote: string }
  float: string
}

const arServices: Content['services']['list'] = [
  {
    id: 'hair',
    title: 'قص وتصفيف الشعر',
    text: 'قصّات تناسب شكل وجهك وأسلوب حياتك، مع تصفيف للمناسبات واليوم العادي.',
    items: ['قص وتشذيب', 'سشوار وتصفيف', 'تسريحات المناسبات'],
  },
  {
    id: 'color',
    title: 'صبغة وعناية بالشعر',
    text: 'ألوان وهايلايت وعلاجات ترطيب وتغذية بمنتجات مناسبة لنوع شعرك.',
    items: ['صبغة وهايلايت', 'بروتين وكيراتين', 'علاجات ترطيب'],
  },
  {
    id: 'makeup',
    title: 'مكياج',
    text: 'مكياج ناعم لليوم أو مكياج سهرة متكامل يبرز ملامحك بشكل طبيعي.',
    items: ['مكياج يومي', 'مكياج سهرة', 'تجربة مكياج'],
  },
  {
    id: 'nails',
    title: 'مانيكير وباديكير',
    text: 'عناية بأظافرك ويديك وقدميك بأدوات معقّمة وتشكيلة ألوان واسعة.',
    items: ['مانيكير', 'باديكير', 'تلوين وتصميمات'],
  },
  {
    id: 'skin',
    title: 'عناية بالبشرة',
    text: 'تنظيف عميق وماسكات وجلسات ترطيب بحسب احتياج بشرتك.',
    items: ['تنظيف بشرة', 'ماسكات وترطيب', 'إزالة شعر'],
  },
  {
    id: 'bridal',
    title: 'باكدج العروس',
    text: 'تجهيز كامل للعروس: شعر ومكياج وأظافر، مع تجربة قبل اليوم الكبير.',
    items: ['تجربة قبل الزفاف', 'شعر ومكياج', 'تجهيز يوم الزفاف'],
  },
]

const enServices: Content['services']['list'] = [
  {
    id: 'hair',
    title: 'Haircuts and styling',
    text: 'Cuts shaped to your face and lifestyle, with styling for everyday and special occasions.',
    items: ['Cut and trim', 'Blow-dry and styling', 'Occasion updos'],
  },
  {
    id: 'color',
    title: 'Color and hair care',
    text: 'Color, highlights, and hydration or nourishing treatments chosen for your hair type.',
    items: ['Color and highlights', 'Protein and keratin', 'Hydration treatments'],
  },
  {
    id: 'makeup',
    title: 'Makeup',
    text: 'Soft day looks or full evening glam that brings out your features naturally.',
    items: ['Day makeup', 'Evening makeup', 'Makeup trial'],
  },
  {
    id: 'nails',
    title: 'Manicure and pedicure',
    text: 'Careful nail, hand and foot care with sterilized tools and a wide range of colors.',
    items: ['Manicure', 'Pedicure', 'Polish and nail art'],
  },
  {
    id: 'skin',
    title: 'Skincare',
    text: 'Deep cleansing, masks and hydration sessions based on what your skin needs.',
    items: ['Facial cleansing', 'Masks and hydration', 'Hair removal'],
  },
  {
    id: 'bridal',
    title: 'Bridal package',
    text: 'Complete bridal preparation: hair, makeup and nails, with a trial before the big day.',
    items: ['Pre-wedding trial', 'Hair and makeup', 'Wedding-day styling'],
  },
]

export const content: Record<Lang, Content> = {
  ar: {
    dir: 'rtl',
    switchLabel: 'EN',
    switchAria: 'Switch to English',
    nav: [
      { id: 'about', label: 'عن الصالون' },
      { id: 'services', label: 'الخدمات' },
      { id: 'steps', label: 'خطوات الحجز' },
      { id: 'faq', label: 'أسئلة شائعة' },
      { id: 'contact', label: 'تواصلي معنا' },
    ],
    cta: 'احجزي الآن',
    menuOpen: 'فتح القائمة',
    menuClose: 'إغلاق القائمة',
    skip: 'تخطي إلى المحتوى',
    hero: {
      eyebrow: 'صالون تجميل نسائي',
      title: 'جمالك يستحق',
      accent: 'اهتمام خاص',
      text: 'شعر، مكياج، أظافر وبشرة في مكان واحد، بخبيرات يسمعن لك أولاً ثم يبدعن. احجزي موعدك في دقيقة عبر واتساب.',
      primary: 'احجزي موعدك',
      secondary: 'شوفي الخدمات',
      points: ['حجز سريع عبر واتساب', 'أدوات معقّمة', 'استشارة قبل كل خدمة'],
      logoAlt: 'شعار Glamora Beauty Salon: سيدة بتاج ذهبي وشعر بني يلتف مع خطوط ذهبية',
    },
    about: {
      eyebrow: 'عن Glamora',
      title: 'مكان هادئ تحسّين فيه إنك الأهم',
      text: 'Glamora صالون نسائي يجمع بين الأناقة والراحة. هدفنا إنك تخرجين من عندنا وأنتِ راضية عن شكلك وواثقة فيه، بدون مبالغة وبدون وعود غير حقيقية.',
      items: [
        { title: 'نسمعك أولاً', text: 'قبل أي خدمة نتكلم عن اللي تحبيه وتحتاجينه ونقترح الأنسب لك.' },
        { title: 'نظافة وتعقيم', text: 'نحرص على نظافة الأدوات والمكان واستخدام أدوات شخصية للأظافر.' },
        { title: 'مواعيد منظمة', text: 'نحجز لك وقتاً محدداً حتى لا تضيع وقتك في الانتظار.' },
      ],
    },
    services: {
      eyebrow: 'خدماتنا',
      title: 'كل ما تحتاجينه للعناية بنفسك',
      text: 'اختاري الخدمة واحجزي مباشرة، وهنكّد معاكِ السعر والميعاد على واتساب.',
      book: 'اطلبي هذه الخدمة',
      bookMsg: (s) => `مرحباً Glamora، عايزة أحجز خدمة: ${s}`,
      list: arServices,
    },
    steps: {
      eyebrow: 'الحجز',
      title: 'ثلاث خطوات بسيطة',
      list: [
        { title: 'اختاري الخدمة', text: 'حددي الخدمة اللي محتاجاها من القائمة أو اكتبي لنا طلبك.' },
        { title: 'ابعتي رسالة واتساب', text: 'املئي النموذج أو اضغطي زر الحجز، وهتفتح لك محادثة جاهزة.' },
        { title: 'نأكد الميعاد والسعر', text: 'فريقنا يرد عليكِ بالمواعيد المتاحة والسعر قبل الحضور.' },
      ],
    },
    faq: {
      eyebrow: 'أسئلة شائعة',
      title: 'قبل ما تحجزي',
      list: [
        { q: 'إزاي أحجز موعد؟', a: 'اضغطي على زر احجزي الآن أو املئي نموذج التواصل، وهتفتح لك رسالة واتساب جاهزة نكمل منها الحجز.' },
        { q: 'هل لازم أحجز مسبقاً؟', a: 'الحجز المسبق أفضل لضمان الوقت المناسب، خصوصاً في أيام الإجازات والمناسبات.' },
        { q: 'إزاي أعرف سعر الخدمة؟', a: 'الأسعار بتختلف حسب نوع الشعر أو التصميم، فنؤكد السعر معاكِ على واتساب قبل الموعد.' },
        { q: 'ينفع أعمل تجربة مكياج أو شعر قبل الفرح؟', a: 'أكيد، باكدج العروس بيشمل تجربة قبل الزفاف. اكتبي لنا الموعد المتوقع وهنرتب معاكِ.' },
        { q: 'لو احتجت أغير أو ألغي الميعاد؟', a: 'ابعتي لنا على واتساب قبل الموعد بوقت كافٍ وهنعدّله معاكِ.' },
      ],
    },
    contact: {
      eyebrow: 'تواصلي معنا',
      title: 'جاهزة نحجز لك؟',
      text: 'املئي البيانات وهنفتح لك واتساب برسالة جاهزة. لو الأسهل ليكِ تكلمينا مباشرة، الأرقام تحت.',
      hoursTitle: 'مواعيد العمل',
      hoursText: 'من السبت إلى الخميس، 10 صباحاً حتى 9 مساءً',
      addressTitle: 'العنوان',
      addressText: 'القاهرة، مصر (عنوان تجريبي، يُستبدل بالعنوان الفعلي)',
      mapCta: 'افتحي الخريطة',
      phoneTitle: 'اتصلي بنا',
      form: {
        name: 'الاسم',
        namePh: 'اسمك',
        phone: 'رقم الموبايل',
        phonePh: '01xxxxxxxxx',
        service: 'الخدمة المطلوبة',
        servicePh: 'اختاري خدمة',
        date: 'الميعاد المفضل (اختياري)',
        note: 'ملاحظات (اختياري)',
        notePh: 'أي تفاصيل تحبي نعرفها',
        submit: 'ابعتي عبر واتساب',
        sending: 'جارٍ فتح واتساب…',
        help: 'الضغط على الزر يفتح تطبيق واتساب برسالة جاهزة، ولن تُرسل إلا عندما تضغطين إرسال هناك.',
        opened: 'تم فتح واتساب. اضغطي إرسال في المحادثة لإتمام الطلب.',
        fallback: 'لو لم يفتح واتساب، اضغطي هنا',
        errors: {
          name: 'اكتبي اسمك (حرفان على الأقل)',
          phone: 'اكتبي رقم موبايل صحيح',
          service: 'اختاري الخدمة',
        },
        msg: (v) =>
          `مرحباً Glamora،\nالاسم: ${v.name}\nالموبايل: ${v.phone}\nالخدمة: ${v.service}${
            v.date ? `\nالميعاد المفضل: ${v.date}` : ''
          }${v.note ? `\nملاحظات: ${v.note}` : ''}`,
      },
    },
    footer: {
      tag: 'صالون تجميل نسائي',
      links: 'روابط سريعة',
      follow: 'تابعينا',
      rights: 'جميع الحقوق محفوظة.',
      sampleNote: 'بيانات التواصل والعنوان في هذه النسخة تجريبية وتُستبدل بالبيانات الفعلية.',
    },
    float: 'واتساب',
  },
  en: {
    dir: 'ltr',
    switchLabel: 'عربي',
    switchAria: 'التبديل إلى العربية',
    nav: [
      { id: 'about', label: 'About' },
      { id: 'services', label: 'Services' },
      { id: 'steps', label: 'How to book' },
      { id: 'faq', label: 'FAQ' },
      { id: 'contact', label: 'Contact' },
    ],
    cta: 'Book now',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    skip: 'Skip to content',
    hero: {
      eyebrow: "Women's beauty salon",
      title: 'Your beauty deserves',
      accent: 'special attention',
      text: 'Hair, makeup, nails and skincare under one roof, with stylists who listen first and then create. Book in a minute on WhatsApp.',
      primary: 'Book your visit',
      secondary: 'See services',
      points: ['Quick WhatsApp booking', 'Sterilized tools', 'Consultation before every service'],
      logoAlt: 'Glamora Beauty Salon logo: a woman wearing a golden tiara with brown hair swirling in golden ribbons',
    },
    about: {
      eyebrow: 'About Glamora',
      title: 'A calm place where you come first',
      text: 'Glamora is a women-only salon that blends elegance with comfort. We want you to leave feeling happy and confident with how you look, without exaggeration and without unrealistic promises.',
      items: [
        { title: 'We listen first', text: 'Before any service we talk about what you like and need, then suggest what suits you best.' },
        { title: 'Clean and sterilized', text: 'We keep tools and the space clean and use personal tools for nail services.' },
        { title: 'Organized appointments', text: 'We book a specific time for you so you are not left waiting.' },
      ],
    },
    services: {
      eyebrow: 'Our services',
      title: 'Everything you need to look after yourself',
      text: 'Pick a service and book directly. We confirm the price and time with you on WhatsApp.',
      book: 'Request this service',
      bookMsg: (s) => `Hello Glamora, I would like to book: ${s}`,
      list: enServices,
    },
    steps: {
      eyebrow: 'Booking',
      title: 'Three simple steps',
      list: [
        { title: 'Choose a service', text: 'Pick what you need from the list or tell us your request.' },
        { title: 'Send a WhatsApp message', text: 'Fill in the form or tap a booking button and a ready-made chat opens.' },
        { title: 'We confirm time and price', text: 'Our team replies with available slots and the price before your visit.' },
      ],
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'Before you book',
      list: [
        { q: 'How do I book an appointment?', a: 'Tap Book now or fill in the contact form. A ready-made WhatsApp message opens and we continue the booking there.' },
        { q: 'Do I need to book in advance?', a: 'Booking ahead is best to secure your preferred time, especially on weekends and around occasions.' },
        { q: 'How do I find out the price?', a: 'Prices depend on hair type or design, so we confirm the price with you on WhatsApp before the appointment.' },
        { q: 'Can I do a makeup or hair trial before my wedding?', a: 'Yes. The bridal package includes a pre-wedding trial. Tell us your expected date and we will arrange it.' },
        { q: 'What if I need to change or cancel?', a: 'Message us on WhatsApp well before the appointment and we will reschedule with you.' },
      ],
    },
    contact: {
      eyebrow: 'Contact us',
      title: 'Ready to book?',
      text: 'Fill in your details and we open WhatsApp with a ready message. If calling is easier, our numbers are below.',
      hoursTitle: 'Opening hours',
      hoursText: 'Saturday to Thursday, 10 AM to 9 PM',
      addressTitle: 'Address',
      addressText: 'Cairo, Egypt (sample address, replace with the real one)',
      mapCta: 'Open map',
      phoneTitle: 'Call us',
      form: {
        name: 'Name',
        namePh: 'Your name',
        phone: 'Mobile number',
        phonePh: '01xxxxxxxxx',
        service: 'Service',
        servicePh: 'Choose a service',
        date: 'Preferred time (optional)',
        note: 'Notes (optional)',
        notePh: 'Anything you would like us to know',
        submit: 'Send via WhatsApp',
        sending: 'Opening WhatsApp…',
        help: 'This button opens WhatsApp with a ready message. Nothing is sent until you press send there.',
        opened: 'WhatsApp opened. Press send in the chat to complete your request.',
        fallback: 'If WhatsApp did not open, tap here',
        errors: {
          name: 'Enter your name (at least 2 characters)',
          phone: 'Enter a valid mobile number',
          service: 'Choose a service',
        },
        msg: (v) =>
          `Hello Glamora,\nName: ${v.name}\nMobile: ${v.phone}\nService: ${v.service}${
            v.date ? `\nPreferred time: ${v.date}` : ''
          }${v.note ? `\nNotes: ${v.note}` : ''}`,
      },
    },
    footer: {
      tag: "Women's beauty salon",
      links: 'Quick links',
      follow: 'Follow us',
      rights: 'All rights reserved.',
      sampleNote: 'Contact details and address in this version are sample data to be replaced with the real ones.',
    },
    float: 'WhatsApp',
  },
}

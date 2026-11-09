import { ServiceItem } from '../types';

export const servicesData: ServiceItem[] = [
  {
    id: 'balayage',
    name: {
      fr: 'Balayage & Hair Color',
      ar: 'البالياج وتلوين الشعر',
      en: 'Balayage & Hair Color',
    },
    category: 'color',
    demoPrice: '8 500 DA',
    duration: '3h30 - 4h',
    description: {
      fr: 'Technique signature d’éclaircissement fondu sans démarcation. Crée des reflets dimensionnels ensoleillés, dorés ou polaires tout en préservant la santé et la brillance du cheveu.',
      ar: 'تقنية التفتيح المميزة بدون خطوط حادة، تمنح شعركِ أبعاداً لونية ثلاثية الأبعاد بلمعان ساحر مع الحفاظ التام على صحة ألياف الشعر.',
      en: 'Signature seamless blending and bespoke lightening for sun-kissed, caramel, or creamy dimensional highlights while safeguarding hair integrity.',
    },
    highlights: {
      fr: [
        'Nuancier personnalisé adapté à votre teint',
        'Protecteur de liaisons capillaires (Plex) inclus',
        'Gloss tonifiant haute brillance + brushing offert',
      ],
      ar: [
        'درجات ألوان مخصصة تتناغم مع لون بشرتكِ',
        'حماية ألياف الشعر بتقنية البليكس المتطورة',
        'رينساج عالي اللمعان وسيشوار نهائي متألق',
      ],
      en: [
        'Customized shade curation tailored to your skin tone',
        'Bond-protecting treatment included during lift',
        'Toning gloss treatment + signature finish blowout',
      ],
    },
    image: '/src/assets/images/hair_balayage_blonde_1794245748263.jpg',
  },
  {
    id: 'coloration',
    name: {
      fr: 'Coloration Complète & Racines',
      ar: 'الصبغة الكاملة وتجديد الجذور',
      en: 'Full Color & Root Retouch',
    },
    category: 'color',
    demoPrice: '5 000 DA',
    duration: '2h - 2h30',
    description: {
      fr: 'Formules professionnelles enrichies en actifs nourrissants pour une couleur uniforme, éclatante et intense avec couverture intégrale.',
      ar: 'صبغات احترافية غنية بالزيوت المغذية لتمنحكِ لوناً غنياً ومتجانساً مع تغطية كاملة وتألق استثنائي.',
      en: 'Professional high-shine formulas for rich, uniform pigment coverage with long-lasting luminosity and deep nourishment.',
    },
    highlights: {
      fr: [
        'Couverture 100% sans effet casque',
        'Bouclier protecteur cuir chevelu sensible',
        'Bain d’huile et soin fixateur de reflets',
      ],
      ar: [
        'تغطية مثالية وطبيعية بالكامل',
        'حماية مخصصة لفروة الرأس الحساسة',
        'حمام زيت وتثبيت للون واللمعان',
      ],
      en: [
        '100% natural multidimensional pigment blending',
        'Protective barrier for sensitive scalp comfort',
        'Color-locking oil bath and shine sealant',
      ],
    },
    image: '/src/assets/images/hero_hair_editorial_1794245747374.jpg',
  },
  {
    id: 'bridal',
    name: {
      fr: 'Haute Coiffure Mariée',
      ar: 'تسريحات العرائس الفاخرة',
      en: 'Bridal Couture Styling',
    },
    category: 'bridal',
    demoPrice: '8 000 DA',
    duration: '2h30 - 3h',
    description: {
      fr: 'Accompagnement exclusif pour le jour J : création d’une coiffure unique en harmonie avec votre robe, pose et fixation millimétrée du voile et des bijoux de tête.',
      ar: 'تصميم ملكي خاص لليلة العمر يجمع بين الفخامة والنعومة، متناغم تماماً مع فستانك ومجوهراتك مع تثبيت محكم للتاج والطرحة.',
      en: 'Dedicated bridal hair experience: romantic sculpted chignon, effortless soft curls, and expert anchoring of your veil and fine headpieces.',
    },
    highlights: {
      fr: [
        'Diagnostic style en harmonie avec votre tenue',
        'Fixation ultra-sécurisée des accessoires et du voile',
        'Tenue impeccable testée pour toute la fête',
      ],
      ar: [
        'استشارة لتنسيق التسريحة مع تفاصيل الفستان',
        'تثبيت محكم وآمن للإكسسوارات والتاج والطرحة',
        'ثبات متألق يدوم طوال ساعات المناسبة',
      ],
      en: [
        'Pre-styling consultation matching gown details',
        'Secure anchoring of veils and couture accessories',
        'All-night resistant hold ensuring effortless grace',
      ],
    },
    image: '/src/assets/images/hair_bridal_chignon_1794245748975.jpg',
  },
  {
    id: 'styling',
    name: {
      fr: 'Coiffure & Styling Événement',
      ar: 'تسريحات المناسبات والسيشوار',
      en: 'Event Styling & Blowout',
    },
    category: 'styling',
    demoPrice: '3 500 DA',
    duration: '1h - 1h30',
    description: {
      fr: 'Des brushings souples, wavy modernes texturisés ou attaches sophistiquées pour toutes vos soirées et réceptions.',
      ar: 'تموجات الويفي العصرية، سيشوار حريري متدفق وتسريحات ناعمة تلائم جميع مناسباتكِ السعيدة وسهراتك.',
      en: 'Voluminous Parisian blowouts, relaxed beachy waves, and contemporary half-up hairstyles crafted for effortless elegance.',
    },
    highlights: {
      fr: [
        'Brushing volumateur longue tenue',
        'Wavy texturisé au fer céramique doux',
        'Voile de brillance et spray anti-humidité',
      ],
      ar: [
        'سيشوار بامتلاء وكثافة تدوم طويلاً',
        'تموجات ويفي بأدوات سيراميك لطيفة على الشعر',
        'رذاذ حماية من الرطوبة ولمعان زجاجي',
      ],
      en: [
        'Long-lasting voluminous salon blowout',
        'Gentle ceramic-crafted waves and movement',
        'Anti-humidity seal and velvety shine spray',
      ],
    },
    image: '/src/assets/images/salon_interior_atelier_1794245770309.jpg',
  },
  {
    id: 'care',
    name: {
      fr: 'Soins Capillaires & Botox Miroir',
      ar: 'علاجات الشعر وبوتوكس اللمعان',
      en: 'Restorative Hair Spa & Botox',
    },
    category: 'care',
    demoPrice: '3 000 DA',
    duration: '1h30',
    description: {
      fr: 'Thérapie de reconstruction intense pour cheveux affaiblis, déshydratés ou sensibilisés par les colorations. Effet miroir et douceur dès la première séance.',
      ar: 'جلسة عناية فائقة وترميم عميق للشعر المتعب أو الجاف، تمنحه ملمساً ناعماً ولمعاناً زجاجياً من الجلسة الأولى.',
      en: 'Deep restorative therapy for dry or chemically processed strands. Delivers mirror-like reflection, eliminates frizz, and seals split ends.',
    },
    highlights: {
      fr: [
        'Pénétration thermo-activée au cœur du cortex',
        'Scellement immédiat des cuticules abîmées',
        'Toucher soyeux et légèreté sans alourdir',
      ],
      ar: [
        'تغلغل حراري عميق لتغذية ألياف الشعر',
        'إغلاق فوري لطبقات الشعر المتقصفة',
        'ملمس حريري فائق بدون إثقال الخصلات',
      ],
      en: [
        'Heat-activated molecular cortex infusion',
        'Instant sealing of cuticles and frayed ends',
        'Weightless feather-light silkiness and mirror sheen',
      ],
    },
    image: '/src/assets/images/hair_gloss_treatment_1794245749409.jpg',
  },
];

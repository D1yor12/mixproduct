export const STORE_INFO = {
  name: 'MixProduct',
  legalName: 'MixProduct Uzbekistan',
  tagline: 'Техника, которая выбирает ваш стиль.',
  subtagline: 'Смартфоны, премиальная электроника и бытовая техника в MixProduct.',
  phone: '+998 97 403 37 00',
  phoneRaw: '+998974033700',
  phoneSecondary: '+998 90 111 11 42',
  phoneSecondaryRaw: '+998901111142',
  telegramUsername: 'mixproduct_uz',
  telegramUrl: 'https://t.me/mixproduct_uz',
  telegramAdmin: '@Irkinov_Shuhratbek',
  instagramUsername: 'mix_productuz',
  instagramUrl: 'https://www.instagram.com/mix_productuz?stkn=enhzdzliMG9jNW1q',
  address: 'Малик, 44B, Ташкент, Узбекистан',
  addressShort: 'ТРЦ «Малика», блок B-44',
  city: 'Ташкент',
  hours: 'Ежедневно с 09:00 до 22:00',
  googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=MixProduct+Malika+44B+Tashkent',
  yandexMapsUrl: 'https://yandex.ru/maps/?text=%D0%A2%D0%B0%D1%88%D0%BA%D0%B5%D0%BD%D1%82+%D0%A2%D0%A6+%D0%9C%D0%B0%D0%BB%D0%B8%D0%BA%D0%B0+44B',
  year: 2026,
};

export const NAV_LINKS = [
  { label: 'Главная', href: '#hero' },
  { label: 'Каталог', href: '#catalog' },
  { label: 'Бренды', href: '#brands' },
  { label: 'Преимущества', href: '#benefits' },
  { label: 'О магазине', href: '#store' },
  { label: 'Контакты', href: '#contact' },
];

export const BRANDS = [
  {
    name: 'Apple',
    category: 'iPhone, iPad, Mac, Watch',
    highlight: 'Флагманские устройства и экосистема',
    count: 'Оригинальная продукция'
  },
  {
    name: 'Samsung',
    category: 'Galaxy S, Z Fold, Flip, Watch',
    highlight: 'Инновационные экраны и камеры',
    count: 'Официальные поставки'
  },
  {
    name: 'Xiaomi',
    category: 'Серии Ultra, Pro, Smart Life',
    highlight: 'Оптика Leica и технологичность',
    count: 'Широкий модельный ряд'
  },
  {
    name: 'POCO',
    category: 'Серии F, X, производительность',
    highlight: 'Мощь флагманских чипсетов',
    count: 'Доступная производительность'
  },
  {
    name: 'Google',
    category: 'Pixel 9, Pro, XL, Fold',
    highlight: 'Чистый Android и Google AI камеры',
    count: 'Оригинальные девайсы'
  },
  {
    name: 'И другие бренды',
    category: 'Dyson, De’Longhi, Sony, JBL',
    highlight: 'Премиальная бытовая техника и звук',
    count: 'Мировые производители'
  }
];

export const CATEGORIES = [
  {
    id: 'smartphones',
    title: 'Смартфоны',
    subtitle: 'Флагманы и новинки мировых брендов',
    count: 'Apple • Samsung • Xiaomi • POCO • Google',
    image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=1000&auto=format&fit=crop',
    featuredTag: 'Топ продаж'
  },
  {
    id: 'premium',
    title: 'Премиальная электроника',
    subtitle: 'Ноутбуки, планшеты и аудиосистемы',
    count: 'MacBook • iPad Pro • Hi-Fi Sound',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1000&auto=format&fit=crop',
    featuredTag: 'Премиум'
  },
  {
    id: 'appliances',
    title: 'Бытовая техника',
    subtitle: 'Умный дом, стайлинг и кофемашины',
    count: 'Dyson • De’Longhi • Роботы-пылесосы',
    image: 'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?q=80&w=1000&auto=format&fit=crop',
    featuredTag: 'Для дома'
  },
  {
    id: 'accessories',
    title: 'Аксессуары',
    subtitle: 'Смарт-часы, наушники и зарядные станции',
    count: 'AirPods • Galaxy Watch • MagSafe',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop',
    featuredTag: 'Оригинал'
  }
];

export const BENEFITS = [
  {
    iconName: 'ShieldCheck',
    title: 'Официальная гарантия',
    description: 'Гарантия на технику и уверенность после покупки.',
    highlight: '100% Оригинал'
  },
  {
    iconName: 'CreditCard',
    title: 'Рассрочка',
    description: 'Удобная возможность приобрести необходимую технику в рассрочку.',
    highlight: 'Гибкие условия'
  },
  {
    iconName: 'Store',
    title: 'Физический магазин',
    description: 'Можно приехать в магазин, посмотреть технику и получить консультацию.',
    highlight: 'ТРЦ Малика, 44B'
  },
  {
    iconName: 'Award',
    title: 'Проверенные бренды',
    description: 'Apple, Samsung, Xiaomi, POCO, Google и другие известные производители.',
    highlight: 'Мировые лидеры'
  }
];

export const PRODUCTS = [
  {
    id: 'iphone-16-pro-max',
    name: 'Apple iPhone 16 Pro Max',
    brand: 'Apple',
    category: 'smartphones',
    badge: 'Новинка',
    specs: '256GB / 512GB / 1TB • Титановый корпус • Чип A18 Pro • Дисплей 6.9" ProMotion 120Hz',
    description: 'Флагман линейки Apple с рекордным временем работы, новой кнопкой управления камерой Camera Control и улучшенным телеобъективом 5x.',
    image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=1000&auto=format&fit=crop',
    priceLabel: 'Уточняйте цену',
    inStock: true
  },
  {
    id: 'samsung-galaxy-s24-ultra',
    name: 'Samsung Galaxy S24 Ultra',
    brand: 'Samsung',
    category: 'smartphones',
    badge: 'Galaxy AI',
    specs: '256GB / 512GB • Snapdragon 8 Gen 3 for Galaxy • Камера 200 Мп • Встроенный S Pen',
    description: 'Абсолютный флагман с функциями искусственного интеллекта Galaxy AI, титановым корпусом и ярким плоским экраном Dynamic AMOLED 2X.',
    image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?q=80&w=1000&auto=format&fit=crop',
    priceLabel: 'Уточняйте цену',
    inStock: true
  },
  {
    id: 'google-pixel-9-pro',
    name: 'Google Pixel 9 Pro XL',
    brand: 'Google',
    category: 'smartphones',
    badge: 'Google Tensor G4',
    specs: '128GB / 256GB / 512GB • Чистый Android • Камера 50 Мп с Magic Editor • 16GB RAM',
    description: 'Эталон фотографии на смартфонах с эксклюзивными алгоритмами Google AI, премиальным матовым стеклом и дисплеем Super Actua.',
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=1000&auto=format&fit=crop',
    priceLabel: 'Уточняйте цену',
    inStock: true
  },
  {
    id: 'xiaomi-14-ultra',
    name: 'Xiaomi 14 Ultra',
    brand: 'Xiaomi',
    category: 'smartphones',
    badge: 'Оптика Leica',
    specs: '512GB • Квадрокамера Leica 50 Мп с дюймовым сенсором • Snapdragon 8 Gen 3 • Быстрая зарядка 90W',
    description: 'Профессиональный камерофон с бесступенчатой регулируемой диафрагмой, разработанный в сотрудничестве с легендарной оптикой Leica.',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1000&auto=format&fit=crop',
    priceLabel: 'Уточняйте цену',
    inStock: true
  },
  {
    id: 'poco-f6-pro',
    name: 'POCO F6 Pro',
    brand: 'POCO',
    category: 'smartphones',
    badge: 'Флагманский чип',
    specs: '512GB / 1TB • Snapdragon 8 Gen 2 • Экран WQHD+ 120Hz AMOLED • HyperCharge 120W',
    description: 'Ультимативная мощность для гейминга и повседневных задач с передовой системой охлаждения LiquidCool 4.0.',
    image: 'https://images.unsplash.com/photo-1567581935884-3349723552ca?q=80&w=1000&auto=format&fit=crop',
    priceLabel: 'Уточняйте цену',
    inStock: true
  },
  {
    id: 'macbook-pro-16',
    name: 'Apple MacBook Pro 16"',
    brand: 'Apple',
    category: 'premium',
    badge: 'M3 Pro / Max',
    specs: 'До 128GB Unified Memory • Liquid Retina XDR 16.2" • Цвет Space Black • До 22 часов работы',
    description: 'Бескомпромиссная рабочая станция для дизайнеров, инженеров и создателей контента с поразительной автономностью и пиковой яркостью 1600 нит.',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1000&auto=format&fit=crop',
    priceLabel: 'Уточняйте цену',
    inStock: true
  },
  {
    id: 'ipad-pro-13-m4',
    name: 'Apple iPad Pro 13" (M4)',
    brand: 'Apple',
    category: 'premium',
    badge: 'Ultra Retina XDR',
    specs: 'Чип Apple M4 • Тандемный OLED дисплей • Толщина всего 5.1 мм • Поддержка Apple Pencil Pro',
    description: 'Самое тонкое устройство в истории Apple с ошеломляющей мощностью чипа M4 нового поколения и невероятно глубоким черным цветом.',
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=1000&auto=format&fit=crop',
    priceLabel: 'Уточняйте цену',
    inStock: true
  },
  {
    id: 'airpods-max',
    name: 'Apple AirPods Max',
    brand: 'Apple',
    category: 'accessories',
    badge: 'Hi-Fi Audio',
    specs: 'Активное шумоподавление • Прозрачный режим • Пространственное аудио • Амбушюры из пены с эффектом памяти',
    description: 'Полноразмерные наушники премиум-класса с выверенным акустическим дизайном и непревзойденной системой активного шумоподавления.',
    image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=1000&auto=format&fit=crop',
    priceLabel: 'Уточняйте цену',
    inStock: true
  },
  {
    id: 'delonghi-magnifica-s',
    name: 'Кофемашина De’Longhi Magnifica S',
    brand: 'De’Longhi',
    category: 'appliances',
    badge: 'Премиум дом',
    specs: 'Давление 15 бар • Встроенная кофемолка со стальными жерновами • Ручной капучинатор • Регулировка крепости',
    description: 'Итальянская классика автоматического приготовления эспрессо и капучино из свежемолотых зерен прямо у вас дома.',
    image: 'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?q=80&w=1000&auto=format&fit=crop',
    priceLabel: 'Уточняйте цену',
    inStock: true
  },
  {
    id: 'dyson-v15-detect',
    name: 'Беспроводной пылесос Dyson V15 Detect',
    brand: 'Dyson',
    category: 'appliances',
    badge: 'Лазерная подсветка',
    specs: 'Мощность всасывания 240 AW • Лазерная насадка Fluffy • Пьезоэлектрический датчик частиц • До 60 мин работы',
    description: 'Интеллектуальная уборка с подсветкой невидимой пыли и автоматической регулировкой мощности в зависимости от типа покрытия.',
    image: 'https://images.unsplash.com/photo-1558317374-067fb5f30001?q=80&w=1000&auto=format&fit=crop',
    priceLabel: 'Уточняйте цену',
    inStock: true
  },
  {
    id: 'dyson-supersonic',
    name: 'Фен Dyson Supersonic HD15',
    brand: 'Dyson',
    category: 'appliances',
    badge: 'Инновационный уход',
    specs: 'Двигатель Dyson V9 • Интеллектуальный контроль температуры • 5 магнитных насадок в комплекте',
    description: 'Быстрая сушка без экстремальных температур для защиты природного блеска и гладкости волос.',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1000&auto=format&fit=crop',
    priceLabel: 'Уточняйте цену',
    inStock: true
  },
  {
    id: 'apple-watch-ultra-2',
    name: 'Apple Watch Ultra 2',
    brand: 'Apple',
    category: 'accessories',
    badge: 'Титан 49 мм',
    specs: 'Титановый корпус • Яркость 3000 нит • Двухчастотный GPS • До 72 часов в режиме энергосбережения',
    description: 'Самые прочные и функциональные смарт-часы для экстремальных условий, спорта и активного образа жизни.',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000&auto=format&fit=crop',
    priceLabel: 'Уточняйте цену',
    inStock: true
  }
];

export const STORE_HIGHLIGHTS = [
  { label: 'Физический магазин', desc: 'Малик, 44B в Ташкенте' },
  { label: 'Рассрочка', desc: 'Удобные условия оплаты' },
  { label: 'Гарантия', desc: 'Уверенность в покупке' },
];

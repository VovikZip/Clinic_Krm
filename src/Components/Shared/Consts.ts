import neurology from '@/assets/Images/Icons/Neurology.png';
import cardiology from '@/assets/Images/Icons/Cardiology.png';
import orthopedics from '@/assets/Images/Icons/Orthopoedics.png';
import surgery from '@/assets/Images/Icons/Surgery.png';
import dentistry from '@/assets/Images/Icons/Dentistry.png';
import radiology from '@/assets/Images/Icons/Radiology.png';
import urology from '@/assets/Images/Icons/Urology.png';
import medicine from '@/assets/Images/Icons/Medicine.png';
import seeMoreImage from '@/assets/Images/Icons/seeMoreImage.png';

import Banner1 from '@/assets/Images/Banner1.png';
import Banner2 from '@/assets/Images/Banner2.png';

import doc1 from '@/assets/Images/Doctors/doc1.png';
import doc2 from '@/assets/Images/Doctors/doc2.png';
import doc3 from '@/assets/Images/Doctors/doc3.png';
import doc4 from '@/assets/Images/Doctors/doc4.png';

import user1 from '@/assets/Images/users/user1.jpg';
import user2 from '@/assets/Images/users/user2.jpg';
import user3 from '@/assets/Images/users/user3.jpg';

import logo from '@/assets/Images/logo.png';

export const links = ['Home', 'Doctors', 'Services', 'Reviews'];

export const descNums = [
  {
    num: '',
    text: 'Постійна підтримка пацієнтів',
  },
  {
    num: '',
    text: 'Сучасне обстеження та лікування',
  },
  {
    num: '',
    text: '15+ Спеціалістів',
  },
  {
    num: '',
    text: 'Лікарі з великим досвідом',
  },
  {
    num: '',
    text: 'Сучасне слухопротезування',
  },
];

export const ServicesData = [
  {
    img: neurology,
    title: 'Аудіологія',
    id: 'аудіологія',
    heading: 'Neurology Department',
    texts: [
      'Expert neurological consultations',
      'Comprehensive brain and nerve care',
      'Advanced neuroimaging services',
      'Treatment for epilepsy and seizures',
      'Memory and cognitive assessments',
      'Pediatric neurology expertise',
      'Movement disorders management',
    ],
  },
  {
    img: cardiology,
    title: 'Слуховіапарати',
    id: 'слуховіапарати',
    heading: 'Cardiology Department',
    texts: [
      'Аудіометрія',
      'Тімпанометрія',
      'Акустична рефлексометрія',
      'Підбір слухових апаратів',
      'Налаштування та сервіс',
      'Консультація з аудіологом',
      'Навчання користуванню слуховими апаратами',
      'Електрофізіологічні тести',
      'Консультація ЛОР-лікаря',
    ],
  },
  {
    img: orthopedics,
    title: 'Хірургія',
    id: 'хірургія',
    heading: 'Orthopedics Department',
    texts: [
      'Orthopedic surgery and joint replacements',
      'Sports injury and trauma care',
      'Physical therapy and rehabilitation',
      'Spine and back pain solutions',
      'Arthritis and joint disorder treatment',
      'Orthopedic consultations',
      'Customized orthopedic care plans',
    ],
  },
  {
    img: surgery,
    title: 'Реабілітація',
    id: 'реабілітація',
    heading: 'Surgery Department',
    texts: [
      'Minimally invasive and laparoscopic surgery',
      'Gastrointestinal surgery and endoscopy',
      'Plastic and reconstructive surgery',
      'Cancer and tumor resection',
      'Post-operative care and recovery',
      'Surgical consultations',
      'Emergency surgical interventions',
    ],
  },
  {
    img: dentistry,
    title: 'Діагностика',
    id: 'діагностика',
    heading: 'Dentistry Department',
    texts: [
      'Routine dental check-ups and cleanings',
      'Cosmetic dentistry and teeth whitening',
      'Oral surgery and extractions',
      'Dental implants and restorations',
      'Pediatric and family dentistry',
      'Gum disease treatment',
      'Orthodontic and braces options',
    ],
  },
  {
    img: radiology,
    title: 'Лорконсультація',
    id: 'лорконсультація',
    heading: 'Radiology Department',
    texts: [
      'Advanced diagnostic imaging services',
      'Mammography and breast health screening',
      'Interventional radiology procedures',
      'Virtual colonoscopy and body scans',
      'Radiology consultations',
      'Fast and accurate imaging results',
      'State-of-the-art radiology technology',
    ],
  },
  {
    img: urology,
    title: 'Логопедія',
    id: 'логопедія',
    heading: 'Urology Department',
    texts: [
      'Urinary tract and kidney evaluations',
      'Urologic surgery and stone removal',
      "Men's and women's urological health",
      'Prostate and bladder care',
      'Incontinence and pelvic floor therapy',
      'Urological consultations',
      'Comprehensive urology solutions',
    ],
  },
  {
    img: medicine,
    title: 'Medicine',
    id: 'medicine',
    heading: 'Medicine Department',
    texts: [
      'Primary care and internal medicine',
      'Chronic disease management and prevention',
      'Immunizations and wellness checks',
      'Holistic and integrative medicine',
      'Geriatric and pediatric medicine',
      'Health education and lifestyle coaching',
      'Individualized medical treatment plans',
    ],
  },
  {
    img: seeMoreImage,
    title: 'See More',
    id: 'seemore',
    heading: 'Explore Our Services',
    texts: [
      'Explore additional healthcare options',
      'Specialized medical services for all needs',
      'Discover a world of medical solutions',
      'Find the right care for you',
      'Comprehensive healthcare offerings',
      'More than meets the eye',
      'Healthcare beyond expectations',
    ],
  },
];

export const Banner1Data = {
  heading: 'Ми Піклуємося Про Ваше Здоров’я Вух, Носа та Горла',
  texts: [
    'Легкі ЛОР консультації',
    'Фахові спеціалісти ЛОР',
    'Нічна екстрена допомога 24/7',
    'Доступні ціни на лікування',
    'Просте бронювання запису',
  ],
  img: Banner1,
};

export const DoctorsData = {
  heading: 'Наші спеціалісти',
  doctors: [
    {
      img: doc1,
      name: 'Dr. John Smith',
      job: 'Cardiologist',
    },
    {
      img: doc2,
      name: 'Dr. Kristin Watson',
      job: 'Dentist',
    },
    {
      img: doc3,
      name: 'Dr. Robert Flores',
      job: 'Surgeon',
    },
    {
      img: doc4,
      name: 'Dr. Katherine Allen',
      job: 'Neurologist',
    },
  ],
  heading2: 'Хто Ми?',
  desc: 'Сайт ЛОР клініки — це цифровий майданчик, який об’єднує медичних фахівців, пацієнтів та адміністраторів для оптимізації послуг з догляду за вухами, носом і горлом. Ця інноваційна платформа забезпечує безперебійний зв’язок і координацію між командами, дозволяючи надавати ефективну та персоналізовану допомогу пацієнтам.',
  img: Banner2,
};

export const FeedbackData = {
  heading: 'Відгуки',
  feedbacks: [
    {
      img: user1,
      name: 'Ralph Edwards',
      job: 'Businessman',
      desc: 'My experience with this hospital has been great. I highly recommend their services to anyone in need of quility healthcare. they truly prioritize patients care!',
    },
    {
      img: user2,
      name: 'Josh Smith',
      job: 'Engineer',
      desc: 'The healthcare professionals were top-natch. they were knowledgeable, attentive, and took the time to answer all of my questions and address my concerns',
    },
    {
      img: user3,
      name: 'Eleanor Pena',
      job: 'Teacher',
      desc: "One thing that stood out to me was the efficiency of the service, i didn't have to wait long for my appointment, and the entire process was hassle-free experience",
    },
  ],
};

export const FooterData = {
  logo: logo,
  addresses: ['4517 Washington Ave', 'Manchester, Kentucky 39495'],
  phone: '+1 (505) 555-0125',
  departments: [
    'Cardiology',
    'Dentistry',
    'Neurology',
    'Orthopedics',
    'Surgery',
    'More',
  ],
  links: links,
};

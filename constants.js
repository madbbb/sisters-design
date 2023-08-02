const landscape = require('./projects/landscape.json');

const press = [
  {
    id: 'andrew-martin-international',
    img: 'Image6.jpg',
    name: {
      ru:
        'Andrew Martin International Interior Design review, выпуск 13, 2009 год',
      en: 'Andrew Martin International Interior Design review. 2009'
    },
    images: ['Image11.jpg', 'Image3.jpg', 'Image4.jpg', 'Image21.jpg']
  },
  {
    id: 'ad-2',
    img: 'AD02.jpg',
    name: {
      ru: 'AD №2, февраль 2009',
      en: 'AD N2, February 2009'
    },
    images: ['4scan.jpg', '5scan.jpg', '6scan.jpg', '7scan.jpg', '15scan.jpg']
  },
  {
    id: 'ad-3',
    img: 'AD03.jpg',
    name: {
      ru: 'AD №3, март 2009',
      en: 'AD N3, March 2009'
    },
    images: [
      '10scan.jpg',
      '13scan.jpg',
      '16scan.jpg',
      '12scan.jpg',
      '11scan.jpg',
      '9scan.jpg',
      '8scan1.jpg'
    ]
  },
  {
    id: 'ad-10',
    img: 'AD10.jpg',
    name: {
      ru: 'AD №10, октябрь 2009',
      en: 'AD N10, October 2009'
    },
    images: ['1scan.jpg', '2scan.jpg', '3scan.jpg']
  },
  {
    id: '100-buro',
    img: 'Image1.jpg',
    name: {
      ru: '100 Интерьерных бюро Москвы и Санкт-Петербурга 2009',
      en: "100 Moscow and Saint Petersburg's Interior Design Studios 2009"
    },
    images: ['Image1.jpg', 'Image2.jpg']
  },
  {
    id: 'mezonin-116',
    img: 'mezonin.jpg',
    name: {
      ru: 'Мезонин №116 ноябрь 2009',
      en: 'Mezonin N116 November 2009'
    },
    images: ['mezonin-1.jpg', 'mezonin-2.jpg', 'mezonin-3.jpg', 'mezonin-4.jpg']
  },
  {
    id: '100-buro-2010',
    img: '100inter_obl_big.jpg',
    name: {
      ru: '100 Интерьерных бюро Москвы и Санкт-Петербурга 2010',
      en: "100 Moscow and Saint Petersburg's Interior Design Studios 2010"
    },
    images: ['100inter_obl_big.jpg', '100inter_inner_big.jpg']
  },
  {
    id: 'di-06-2010',
    img: 'dom_and_inter_6.jpg',
    name: {
      ru: 'Дом & Интерьер №6 2010',
      en: 'Home & Interior N6 2010'
    },
    images: [
      'dom_and_inter_6.jpg',
      'dom_and_inter_6_inner0.jpg',
      'dom_and_inter_6_inner1.jpg'
    ]
  },
  {
    id: 'di-08-2010',
    img: 'dom_and_inter_8.jpg',
    name: {
      ru: 'Дом & Интерьер №8 2010',
      en: 'Home & Interior N8 2010'
    },
    images: [
      'dom_and_inter_8.jpg',
      'dom_and_inter_8_inner1.jpg',
      'dom_and_inter_8_inner2.jpg',
      'dom_and_inter_8_inner3.jpg',
      'dom_and_inter_8_inner41.jpg',
      'dom_and_inter_8_inner5.jpg',
      'dom_and_inter_8_inner6.jpg',
      'dom_and_inter_8_inner7.jpg'
    ]
  },
  {
    id: 'kvartirniy-otvet',
    img: 'kvotvet_10_2010.jpg',
    name: {
      ru: 'Квартирный ответ №10 2010',
      en: 'Kvartirniy otvet N10 2010'
    },
    images: [
      'kvotvet_10_2010.jpg',
      'kvotvet_10_2010_1.jpg',
      'kvotvet_10_2010_2.jpg',
      'kvotvet_10_2010_3.jpg',
      'kvotvet_10_2010_4.jpg',
      'kvotvet_10_2010_5.jpg',
      'kvotvet_10_2010_6.jpg',
      'kvotvet_10_2010_7.jpg',
      'kvotvet_10_2010_8.jpg',
      'kvotvet_10_2010_9.jpg',
      'kvotvet_10_2010_10.jpg',
      'kvotvet_10_2010_11.jpg',
      'kvotvet_10_2010_12.jpg',
      'kvotvet_10_2010_13.jpg'
    ]
  },
  {
    id: 'mezonin-2011',
    img: 'mezonin0.jpg',
    name: {
      ru: 'Мезонин 2011',
      en: 'Mezonin 2011'
    },
    images: ['mezonin0.jpg', 'mezonin1.jpg', 'mezonin2.jpg', 'mezonin3.jpg']
  }
];

const projects = [
  {
    id: 'zagorodn_dom',
    img: 'zagorodn_dom.jpg',
    name: {
      ru: 'Проект загородного дома, посёлок “Опушкино” 2020 год',
      en: 'Interior design project of 600 sq.m country house near Moscow, Opushkino, 2020 year'
    },
    photoBy: {
      ru: 'Михаил Лоскутов',
      en: 'Mihail Loskutov'
    },
    images: [
      '1h.jpg',
      '2.jpg',
      '3.jpg',
      '4h.jpg',
      '5.jpg',
      '6.jpg',
      '7h.jpg',
      '8.jpg',
      '9.jpg',
      '10h.jpg',
      '11.jpg',
      '12.jpg',
      '13.jpg',
      '14.jpg',
      '15h.jpg',
      '16.jpg',
      '17.jpg',
      '18h.jpg',
      '19.jpg',
      '20.jpg',
      '21.jpg',
    ]
  },
  {
    id: 'komsomolskiy',
    img: 'komsnew1.jpg',
    name: {
      ru: 'Комсомольский проспект, Москва. Квартира 2019',
      en: 'Komsomolsky Prospekt, Moscow apartment. 2019'
    },
    photoBy: {
      ru: 'Михаил Лоскутов',
      en: 'Mihail Loskutov'
    },
    images: [
      '13.jpg',
      '10.jpg',
      '9h.jpg',
      '3h.jpg',
      '5.jpg',
      '14.jpg',
      '7.jpg',
      '8.jpg',
      '4.jpg',
      '16.jpg',
      '1.jpg',
      '2.jpg',
      '12h.jpg'
    ]
  },
  {
    id: 'sovwriter',
    img: 'sovwriternew.jpg',
    name: {
      ru: 'Поселок «Советский писатель», Подмосковье. Дом 2018',
      en: 'Soviet writer village, 2018'
    },
    photoBy: {
      ru: 'Михаил Лоскутов, Михаил Степанов',
      en: 'Mihail Loskutov, Mihail Stepanov'
    },
    images: [
      '3h.jpg',
      '9.jpg',
      '1.jpg',
      '6h.jpg',
      '4.jpg',
      '12.jpg',
      '7.jpg',
      '5.jpg',
      '11.jpg',
      '8.jpg',
      '2.jpg',
      '10.jpg'
    ]
  },
  {
    id: 'sovwriterland',
    img: 'sovwriterlandnew.jpg',
    name: {
      ru: 'Поселок «Советский писатель», Подмосковье. Ландшафт 2018',
      en: 'Soviet writer village, landscape 2018'
    },
    photoBy: {
      ru: 'Михаил Лоскутов, Михаил Степанов',
      en: 'Mihail Loskutov, Mihail Stepanov'
    },
    images: [
      '1h.jpg',
      '2.jpg',
      '3.jpg',
      '4h.jpg',
      '5.jpg',
      '6.jpg',
      '7h.jpg',
      '8.jpg',
      '9.jpg',
      '10h.jpg'
    ]
  },
  {
    id: 'smolnew',
    img: 'smolnew.jpg',
    name: {
      ru: 'Смоленский бульвар, Москва. Квартира 2018',
      en: 'Smolenskij Bulvar, apartment in Moscow, 2018'
    },
    photoBy: {
      ru: 'Сергей Ананьев',
      en: 'Sergey Ananiyev'
    },
    images: [
      '1h.jpg',
      '15.jpg',
      '16.jpg',
      '4h.jpg',
      '5.jpg',
      '6.jpg',
      '3.jpg',
      '2.jpg',
      '17h.jpg',
      '8.jpg',
      '7.jpg',
      '9.jpg',
      '18.jpg',
      '10.jpg',
      '25.jpg',
      '24.jpg',
      '23.jpg',
      '21h.jpg',
      '14.jpg',
      '13.jpg',
      '19h.jpg',
      '12.jpg',
      '11.jpg',
      '20h.jpg',
      '27.jpg',
      '26.jpg',
      '22.jpg'
    ]
  },
  {
    id: 'sadov',
    img: 'sadov.jpg',
    name: {
      ru: '«Садовые кварталы». Квартира 2017',
      en: '«Sadovije Quarters». apartment in Moscow 2017'
    },
    photoBy: {
      ru: 'Сергей Ананьев',
      en: 'Sergey Ananiyev'
    },
    images: [
      '13.jpg',
      '12.jpg',
      '1h.jpg',
      '6.jpg',
      '8.jpg',
      '2.jpg',
      '7.jpg',
      '4h.jpg',
      '5.jpg',
      '10.jpg',
      '3.jpg',
      '9.jpg',
      '11.jpg',
      '14.jpg'
    ]
  },
  {
    id: 'smolenskiy2016',
    img: 'smolenskiy2016.jpg',
    name: {
      ru: 'Смоленский бульвар, Москва. Квартира 2016',
      en: 'Smolenskij Bulvar, apartment in Moscow, 2016'
    },
    images: [
      '1h.jpg',
      '10.jpg',
      '11.jpg',
      '12h.jpg',
      '2.jpg',
      '3.jpg',
      '6h.jpg',
      '13.jpg',
      '14.jpg'
    ]
  },
  {
    id: 'golutvinskiy',
    img: 'golutvinskiy.jpg',
    name: {
      ru: 'Голутвинский переулок, Москва. Квартира 2014',
      en: 'Golutvinskij Pereylok, apartment in Moscow, 2014'
    },
    photoBy: {
      ru: 'Сергей Ананьев',
      en: 'Sergey Ananiyev'
    },
    images: [
      '16.jpg',
      '9.jpg',
      '7h.jpg',
      '2.jpg',
      '3.jpg',
      '8.jpg',
      '6.jpg',
      '13h.jpg',
      '14.jpg',
      '11.jpg',
      '4h.jpg',
      '5.jpg',
      '14.jpg',
      '10h.jpg',
      '11.jpg',
      '15.jpg'
    ]
  },
  {
    id: 'lipkyland',
    img: 'lipkyland.jpg',
    name: {
      ru: 'Поселок «Липки», Подмосковье. Ландшафт 2014',
      en: 'Lipki village, Moscow oblast, landscape, 2014'
    },
    photoBy: {
      ru: 'Михаил Степанов',
      en: 'Mihail Stepanov'
    },
    images: [
      '1h.jpg',
      '4h.jpg',
      '3.jpg',
      '6.jpg',
      '7h.jpg',
      '5.jpg',
      '2.jpg',
      '9h.jpg',
      '8h.jpg'
    ]
  },
  {
    id: 'lipkyspa',
    img: 'lipkyspa.jpg',
    name: {
      ru: 'Поселок «Липки», Подмосковье. Частный СПА - комплекс 2013',
      en: 'Lipki village, Moscow oblast, private spa-complex, 2013'
    },
    photoBy: {
      ru: 'Михаил Степанов',
      en: 'Mihail Stepanov'
    },
    images: [
      '1h.jpg',
      '3.jpg',
      '5.jpg',
      '13h.jpg',
      '12h.jpg',
      '8h.jpg',
      '9h.jpg',
      '14h.jpg',
      '6.jpg',
      '17.jpg',
      '16h.jpg',
      '15h.jpg'
    ]
  },
  {
    id: 'lipky',
    img: '11.jpg',
    name: {
      ru: 'Поселок «Липки», Подмосковье. Дом 2009',
      en: 'Lipki village, 2009'
    },
    photoBy: {
      ru: 'Михаил Степанов',
      en: 'Mihail Stepanov'
    },
    images: [
      '5.jpg',
      '26.jpg',
      '4h.jpg',
      '1.jpg',
      '2.jpg',
      '3h.jpg',
      '25.jpg',
      '24.jpg',
      '10h.jpg',
      '8.jpg',
      '9.jpg',
      '11h.jpg',
      '6.jpg',
      '7.jpg',
      '13h.jpg',
      '15h.jpg',
      '14h.jpg',
      '17.jpg',
      '18.jpg',
      '16h.jpg',
      '20h.jpg',
      '21.jpg',
      '19.jpg',
      '23h.jpg',
      '12.jpg',
      '22.jpg'
    ]
  },
  {
    id: 'golutvinskiy10',
    img: 'golutvinskiy10.jpg',
    name: {
      ru: 'Большой Палашевский переулок, Москва. Квартира 2010',
      en: 'Palashevskij Pereylok, apartment in Moscow, 2010'
    },
    photoBy: {
      ru: 'Дмитрий Журавлев',
      en: 'Dmitry Zhuravlev'
    },
    images: [
      '1h.jpg',
      '6.jpg',
      '3.jpg',
      '2.jpg',
      '5.jpg',
      '7h.jpg',
      '4h.jpg',
      '8.jpg'
    ]
  }
];

projects.push(landscape)
exports.projects = projects;
exports.press = press;

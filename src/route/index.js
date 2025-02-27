// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

const welcome = [
  {
    text1: 'Яковлева Альона Ігорівна',
    mob1: '+380 93 921 93 93',
    logo: '/img/logo_BD_w.png',
    text2: 'Яковлев Максим Ігорович',
    mob2: '+380 63 241 33 51',
  },
]

const video = [
  {
    text: 'ДАВАЙТЕ ЗНАЙОМИТИСЯ!',
    video: '/videos/karatekid.mp4', // Вкажіть правильний шлях до вашого відеофайлу
  },
]
// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  const gallery = [
    { header: 'Фотогалерея' },
    { photo: '/img/photo1.jpg' },
    { photo: '/img/photo2.jpg' },
    { photo: '/img/photo3.jpg' },
    { photo: '/img/photo4.jpg' },
  ]
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {
    layout: 'default',
    page: {
      title: 'Клуб карате БУСІ ДО',
    },
    header: [
      { text: 'ПРО КЛУБ', url: '#abouteus' },
      { text: 'НАШІ ТРЕНЕРИ', url: '#trainers' },
      { text: 'ПРОПОЗИЦІЇ', url: '#service' },
      { text: 'СПОРТИВНІ ЗБОРИ', url: '#sportcamp' },
      { text: 'ГАЛЕРЕЯ', url: '#galery' },
      { text: 'НАШІ ЧЕМПІОНИ', url: '#champ' },
      { text: 'КОНТАКТИ', url: '#address' },
    ],
    welcome: [
      {
        text1: 'Яковлева Альона Ігорівна',
        mob1: '+380 93 921 93 93',
        logo: '/img/logo_BD_w.png',
        text2: 'Яковлев Максим Ігорович',
        mob2: '+380 63 241 33 51',
      },
    ],
    video: [
      {
        text: 'ДАВАЙТЕ ЗНАЙОМИТИСЯ!',
        video: '',
      },
    ],
    trainers: [
      {
        pic: '/img/trainers/mi.jpg',
        text: '',
      },
      {
        pic: '',
        text: '',
      },
      {
        pic: '',
        text: '',
      },
    ],
    services: [
      {
        list: [
          {
            pic: '/img/1',
            head: 'Традиційне карате для дітей від 5-ти років',
            text1: 'СЗШ № 81',
            text2: 'СЗШ №128',
            text3: `НВК "Сузір'я" №209`,
          },
          {
            pic: '/img/1',
            head: 'Традиційне карате для дітей від 5-ти років',
            text1: 'СЗШ № 81',
            text2: 'СЗШ №128',
          },
          {
            pic: '/img/1',
            head: 'Традиційне карате для дітей від 5-ти років',
            text1: 'СЗШ № 81',
            text2: 'СЗШ №128',
            text3: `НВК "Сузір'я" №209`,
          },
          {
            pic: '/img/1',
            head: 'Традиційне карате для дітей від 5-ти років',
            text1: 'СЗШ № 81',
            text2: 'СЗШ №128',
            text3: `НВК "Сузір'я" №209`,
          },
        ],
        textfoot: [
          { text1: 'ПЕРШЕ ТРЕНУВАННЯ БЕЗКОШТОВНЕ!' },
          {
            text2: `Тренування відбуваються три рази на тиждень.`,
          },
          {
            text3:
              'Більш детальну інформацію можна отримати за телефонами вказаними на сайті.',
          },
        ],
      },
    ],
    galery: gallery,
    galery: [{ header: '' }, { photo: '' }],
    // champions: [{ header: '' }, { photo: '' }],
    about: [
      { head: '' },
      {
        head: '',
        img: '',
        text: '',
      },
      {
        head: '',
        img: '',
        text: '',
      },
      {
        head: '',
        img: '',
        text: '',
      },
      {
        head: '',
        img: '',
        text: '',
      },
      {
        head: '',
        img: '',
        text: '',
      },
    ],
    sportmeetings: [
      { head: '' },
      { text: '' },
      { text: '' },
      { text: '' },
      { text: '' },
      { text: '' },
      { text: '' },
      { photo: {} },
    ],
    contacts: [
      {
        pic: '',
        adr: `СЗШ №128 Адреса: вул. Р.Окіпної 6. 5 хв пішки від ст.м."Лівоборежна"`,
        name: 'Тренер: Яковлева Альона Ігорівна',
        timetable: `ПН.  15:00 - 16:30;  16:30 - 18:00
                    СР.   15:00 - 16:30;  16:30 - 18:00
                    ПТ.   15:00 - 16:30;  16:30 - 18:00`,
        text: 'Подробиці уточнюйте за телефоном: ',
        tel: '+380 93 921 93 93',
      },
      {
        pic: '',
        adr: `СЗШ №81 Адреса: пр. П. Тичини 22-А Дніпровський р-н, ж/м Березняки`,
        name: 'Тренер: Яковлев Максим Ігорович',
        timetable: `ПН.  17:00 - 18:30; 18:30 - 20:00
                    ВТ.    16:00 - 18:00; 18:00 - 20:00
                    СР.   17:00 - 18:30; 18:30 - 20:00
                    ЧТ.    16:00 - 18:00; 18:00 - 20:00
                    ПТ.    17:00 - 18:30; 18:30 - 20:00
                    СБ.    10:00 - 12:00; 12:00 - 14:00`,
        text: 'Подробиці уточнюйте за телефоном: ',
        tel: '+380 63 241 33 51',
      },
      {
        pic: '',
        adr: `НВК "Сузір'я" №209 Адреса: вул. Березняківська 32 Дніпровський р-н,  ж/м Березняки`,
        name: 'Тренера: Яковлева Альона Ігорівна, Яковлев Максим Ігорович',
        timetable: `ПН.  15-00 - 16:30;  18:30 - 20:00 
                    СР.   15-00 - 16:30;  18:30 - 20:00
                    ПТ.   15-00 - 16:30;  18:30 - 20:00`,
        text: 'Подробиці уточПодробиці уточнюйте за телефонами: ',
        tel: '+380 93 921 93 93, +380 63 241 33 51',
      },
    ],
    blackfooter: {
      text: 'This site was made by Verochka',
      name: 'Karate Club "Busi-Do" 2024',
      pic: '',
    },
  })

  //                  ↑↑ сюди вводимо JSON дані
})

// // ================================================================

// // Підключаємо роутер до бек-енду
module.exports = router

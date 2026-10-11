let activeLanguage = 'en';
const menuButton = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');

function setMenuOpen(open) {
  if (!menuButton || !mainNav) return;
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', languageCopy[activeLanguage].menu[open ? 'close' : 'open']);
  mainNav.classList.toggle('is-open', open);
}

menuButton?.addEventListener('click', () => {
  setMenuOpen(menuButton.getAttribute('aria-expanded') !== 'true');
});

mainNav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => setMenuOpen(false));
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') setMenuOpen(false);
});

document.addEventListener('click', (event) => {
  if (mainNav?.classList.contains('is-open') && !mainNav.contains(event.target) && !menuButton?.contains(event.target)) {
    setMenuOpen(false);
  }
});

const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();

const revealItems = document.querySelectorAll('.service-card, .essential-item, .process-steps article');
revealItems.forEach((item, index) => {
  item.classList.add('reveal');
  item.style.transitionDelay = `${(index % 4) * 65}ms`;
});

if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('is-visible'));
}

const languageCopy = {
  en: { menu: { open: 'Open navigation', close: 'Close navigation', choose: 'Choose language' } },
  hy: {
    pageTitle: 'Websites YVN — Ձեր բիզնեսի առաջին լավ տպավորությունը',
    description: 'Ժամանակակից, մտածված կայքեր Հայաստանի ռեստորանների, սրճարանների և ընկերությունների համար։ Օգնեմ, որ ձեր բիզնեսը հեշտ գտնեն ու ընտրեն։',
    menu: { open: 'Բացել նավարկումը', close: 'Փակել նավարկումը', choose: 'Ընտրել լեզուն' },
    previewLabel: 'Ռեստորանի կայքի օրինակ',
    photoAlt: 'Ջերմ լուսավորությամբ ռեստորանի սրահ',
    emailSubject: 'Հարցում կայքի նախագծի մասին',
    '.main-nav > a:nth-of-type(1)': 'Իմ աշխատանքները',
    '.main-nav > a:nth-of-type(2)': 'Ինչ է պետք կայքին',
    '.main-nav > a:nth-of-type(3)': 'Աշխատանքի ընթացքը',
    '.main-nav > a:nth-of-type(4)': 'Խոսե՞նք <span aria-hidden="true">↗</span>',
    '.hero-copy > .eyebrow': '<span class="eyebrow-dot"></span> Անկախ վեբ ստուդիա · Հայաստան',
    '.hero-copy h1': 'Ձեր բիզնեսը<br>արժանի է <em>լավ</em><br>առաջին<br>տպավորության։',
    '.hero-text': 'Ստեղծում եմ մտածված ու հեշտ օգտագործվող կայքեր Հայաստանի ռեստորանների, սրճարանների և ընկերությունների համար, որպեսզի ճիշտ մարդիկ գտնեն ձեզ, վստահեն ու կապ հաստատեն։',
    '.hero-actions .button': 'Պատմեք ձեր նախագծի մասին <span aria-hidden="true">↗</span>',
    '.hero-actions .text-link': 'Տեսնել կայքի կարևոր մասերը <span aria-hidden="true">↓</span>',
    '.hero-note span:last-child': 'Ստեղծված է, որ մարդիկ հեշտ գտնեն ձեր բիզնեսը։',
    '.sample-nav-links': 'ՃԱՇԱՑԱՆԿ&nbsp;&nbsp;&nbsp; ՄԵՐ ՄԱՍԻՆ&nbsp;&nbsp;&nbsp; ԳՏԵՔ ՄԵԶ',
    '.sample-reserve': 'ԱՄՐԱԳՐԵԼ ↗',
    '.sample-headline strong': 'Յուրաքանչյուր<br>սեղանի շուրջ<br>պատմություն կա։',
    '.sample-headline small': 'Սեզոնային ուտեստներ՝ հայկական արմատներով։',
    '.sample-bottom span:nth-of-type(1)': 'ՀԱՄԵՂ ՈՒՏԵՍՏ · ԼԱՎ ԸՆԿԵՐԱԿՑՈՒԹՅՈՒՆ',
    '.sample-bottom span:nth-of-type(2)': 'ՏԵՍՆԵԼ ՃԱՇԱՑԱՆԿԸ ↗',
    '.preview-caption': '<span class="caption-line"></span> Կայքի գլխավոր էջի օրինակ',
    '.trust-inner > span:nth-of-type(1)': 'Պարզ՝ ցանկացած էկրանին',
    '.trust-inner > span:nth-of-type(2)': 'Հարմարեցված ձեր բիզնեսին',
    '.trust-inner > span:nth-of-type(3)': 'Հայերեն և անգլերեն',
    '.trust-inner > span:nth-of-type(4)': 'Հեշտ է կապ հաստատել',
    '#services .section-kicker': 'Կայք, որն աշխատում է ձեզ համար',
    '#services .section-heading h2': 'Ստեղծված է այն վայրերի համար,<br>ուր մարդիկ սիրում են <em>այցելել</em>։',
    '#services .section-heading > p': 'Յուրաքանչյուր բիզնես ունի իր բնավորությունը։ Ձեր կայքը պետք է պարզ ու հրապուրիչ ներկայացնի այն, ինչով դուք առանձնանում եք։',
    '.service-card:nth-child(1) .service-number': '01 / ՍՆՈՒՆԴ ԵՎ ՀՅՈՒՐԸՆԿԱԼՈՒԹՅՈՒՆ',
    '.service-card:nth-child(1) h3': 'Ռեստորաններ',
    '.service-card:nth-child(1) p': 'Հեշտացրեք ճաշացանկը տեսնելը, ձեր վայրը գտնելն ու սեղան ամրագրելը։',
    '.service-card:nth-child(1) .service-tags span:nth-child(1)': 'Ճաշացանկ',
    '.service-card:nth-child(1) .service-tags span:nth-child(2)': 'Ամրագրում',
    '.service-card:nth-child(1) .service-tags span:nth-child(3)': 'Հասցե',
    '.service-card:nth-child(2) .service-number': '02 / ՁԵՐ ՍԻՐԵԼԻ ՎԱՅՐԸ',
    '.service-card:nth-child(2) h3': 'Սրճարաններ',
    '.service-card:nth-child(2) p': 'Ներկայացրեք մթնոլորտը, աշխատանքային ժամերն ու առիթը՝ կրկին այցելելու համար։',
    '.service-card:nth-child(2) .service-tags span:nth-child(1)': 'Լուսանկարներ',
    '.service-card:nth-child(2) .service-tags span:nth-child(2)': 'Ժամեր',
    '.service-card:nth-child(2) .service-tags span:nth-child(3)': 'Նորություններ',
    '.service-card:nth-child(3) .service-number': '03 / ԶԱՐԳԱՑՈՂ ԲԻԶՆԵՍ',
    '.service-card:nth-child(3) h3': 'Ընկերություններ',
    '.service-card:nth-child(3) p': 'Բացատրեք՝ ինչ եք առաջարկում, ում եք օգնում և ինչպես կարող է նոր հաճախորդը սկսել։',
    '.service-card:nth-child(3) .service-tags span:nth-child(1)': 'Ծառայություններ',
    '.service-card:nth-child(3) .service-tags span:nth-child(2)': 'Մեր մասին',
    '.service-card:nth-child(3) .service-tags span:nth-child(3)': 'Հարցումներ',
    '.essentials-intro .eyebrow': 'Կարևորը՝ ճիշտ ու գեղեցիկ ներկայացված',
    '.essentials-intro h2': 'Ի՞նչ պետք է<br>ունենա լավ<br><em>կայքը</em>։',
    '.essentials-intro > p': 'Ձեր կայքը լավագույն ծանոթությունն է ձեր բիզնեսի հետ․ այն պատասխանում է մարդկանց հարցերին ու հստակ ցույց տալիս հաջորդ քայլը։',
    '.essentials-intro .button': 'Պլանավորենք ձերը <span aria-hidden="true">↗</span>',
    '.essentials-stamp > span': 'ՍՏԵՂԾՎԱԾ Է<br>ՄԱՐԴԿԱՆՑ ՀԱՄԱՐ',
    '.essential-item:nth-child(1) h3': 'Հստակ առաջին տպավորություն',
    '.essential-item:nth-child(1) p': 'Մի քանի վայրկյանում ներկայացրեք՝ ով եք, ինչ եք առաջարկում և ինչու արժե ընտրել ձեզ։',
    '.essential-item:nth-child(2) h3': 'Մարդկանց անհրաժեշտ տեղեկությունները',
    '.essential-item:nth-child(2) p': 'Ճաշացանկը կամ ծառայությունները, աշխատանքային ժամերը, հասցեն ու կապի տվյալները պետք է հեշտ գտնվեն։',
    '.essential-item:nth-child(3) h3': 'Հաջորդ քայլը՝ առանց բարդության',
    '.essential-item:nth-child(3) p': 'Օգնեք սեղան ամրագրել, զանգահարել, գտնել հասցեն, առաջարկ խնդրել կամ հարցում ուղարկել։',
    '.essential-item:nth-child(4) h3': 'Հարմար է հեռախոսով օգտագործել',
    '.essential-item:nth-child(4) p': 'Կայքն արագ է բեռնվում, գեղեցիկ տեսք ունի փոքր էկրանին, իսկ կոճակները հեշտ է սեղմել։',
    '.essential-item:nth-child(5) h3': 'Բառեր ու պատկերներ, որոնք ձեր մասին են',
    '.essential-item:nth-child(5) p': 'Իրական լուսանկարներն ու միասնական ոճը մարդկանց պատկերացում կտան ձեր բիզնեսի մասին։',
    '.essential-item:nth-child(6) h3': 'Լեզու, որ հասկանալի է հաճախորդներին',
    '.essential-item:nth-child(6) p': 'Հայերեն և անգլերեն բովանդակությամբ ավելի շատ մարդիկ կհասկանան ձեր առաջարկն ու իրենց հարմար կզգան։',
    '#process .section-kicker': 'Առաջին նամակից մինչև կայքի մեկնարկը',
    '#process .section-heading h2': 'Լավ աշխատանքը<br>սկսվում է <em>զրույցից</em>։',
    '#process .section-heading > p': 'Պարզ ընթացք՝ ձեր նպատակներին համապատասխան։ Ամեն քայլում կիմանաք՝ ինչի վրա ենք աշխատում։',
    '.process-steps article:nth-child(1) h3': 'Պատմեք ձեր գաղափարի մասին',
    '.process-steps article:nth-child(1) p': 'Կիսվեք՝ ինչով եք զբաղվում, ում եք ուզում հասնել և ինչի պետք է օգնի կայքը։',
    '.process-steps article:nth-child(2) h3': 'Մշակենք գաղափարը',
    '.process-steps article:nth-child(2) p': 'Կորոշենք ձեր բիզնեսին համապատասխան էջերը, բովանդակությունն ու տեսքը։',
    '.process-steps article:nth-child(3) h3': 'Ստեղծենք ու հղկենք',
    '.process-steps article:nth-child(3) p': 'Կստեղծեմ կայքը և ձեր կարծիքի հիման վրա կկատարելագործեմ մանրուքները։',
    '.process-steps article:nth-child(4) h3': 'Գործարկենք կայքը',
    '.process-steps article:nth-child(4) p': 'Կպատրաստենք կայքը գործարկման, և կբացատրեմ՝ ինչ անել հետո։',
    '.contact-copy .eyebrow': '<span class="eyebrow-dot"></span> ՁԵՐ ԲԻԶՆԵՍԻ ՀԱՋՈՐԴ ԼԱՎ ՏՊԱՎՈՐՈՒԹՅՈՒՆԸ',
    '.contact-copy h2': 'Ձեր բիզնեսը<br><em>թող առանձնանա</em>։',
    '.contact-copy > p': 'Նոր գաղափա՞ր ունեք, թե՞ ուզում եք թարմացնել գործող կայքը։ Պատմեք դրա մասին․ սիրով կլսեմ ձեր ծրագրերը։',
    '.contact-copy .button': 'Սկսենք զրույցը <span aria-hidden="true">↗</span>',
    '.contact-card-top > span:first-child': 'ԿԱՊ ՀԱՍՏԱՏԵԼ',
    '.contact-row:nth-of-type(1) .contact-label': 'ԷԼ․ ՓՈՍՏ',
    '.contact-row:nth-of-type(2) .contact-label': 'ՀԵՌԱԽՈՍ',
    '.contact-row:nth-of-type(3) .contact-label': 'INSTAGRAM',
    '.contact-card-note': '<span class="online-dot"></span> Անկախ վեբ ստուդիա · Երևան, Հայաստան',
    '.footer-note': 'Մտածված կայքեր Հայաստանի բիզնեսների համար։',
    '.back-top': 'ՎԵՐԵՎ ↑'
  },
  ru: {
    pageTitle: 'Websites YVN — Первое впечатление о вашем бизнесе',
    description: 'Продуманные современные сайты для ресторанов, кафе и компаний Армении. Помогаю представить ваш бизнес так, чтобы его было легко найти и выбрать.',
    menu: { open: 'Открыть навигацию', close: 'Закрыть навигацию', choose: 'Выбрать язык' },
    previewLabel: 'Пример сайта ресторана',
    photoAlt: 'Зал ресторана с тёплым освещением',
    emailSubject: 'Запрос о создании сайта',
    '.main-nav > a:nth-of-type(1)': 'Направления',
    '.main-nav > a:nth-of-type(2)': 'Что важно для сайта',
    '.main-nav > a:nth-of-type(3)': 'Как проходит работа',
    '.main-nav > a:nth-of-type(4)': 'Обсудим? <span aria-hidden="true">↗</span>',
    '.hero-copy > .eyebrow': '<span class="eyebrow-dot"></span> Независимая веб-студия · Армения',
    '.hero-copy h1': 'Ваш бизнес<br>заслуживает<br><em>хорошего</em><br>впечатления.',
    '.hero-text': 'Создаю продуманные и удобные сайты для ресторанов, кафе и компаний Армении — чтобы нужные люди могли найти вас, довериться вам и сделать следующий шаг.',
    '.hero-actions .button': 'Расскажите о проекте <span aria-hidden="true">↗</span>',
    '.hero-actions .text-link': 'Что важно для хорошего сайта <span aria-hidden="true">↓</span>',
    '.hero-note span:last-child': 'Чтобы людям было проще находить местные компании.',
    '.sample-nav-links': 'МЕНЮ&nbsp;&nbsp;&nbsp; О НАС&nbsp;&nbsp;&nbsp; НАЙТИ НАС',
    '.sample-reserve': 'ЗАБРОНИРОВАТЬ ↗',
    '.sample-headline strong': 'Вкус<br>места<br>с историей.',
    '.sample-headline small': 'Сезонные блюда с армянскими корнями.',
    '.sample-bottom span:nth-of-type(1)': 'ВКУСНАЯ ЕДА · ХОРОШАЯ КОМПАНИЯ',
    '.sample-bottom span:nth-of-type(2)': 'СМОТРЕТЬ МЕНЮ ↗',
    '.preview-caption': '<span class="caption-line"></span> Пример главной страницы',
    '.trust-inner > span:nth-of-type(1)': 'Удобно на любом экране',
    '.trust-inner > span:nth-of-type(2)': 'Создано для вашего бизнеса',
    '.trust-inner > span:nth-of-type(3)': 'Армянский и английский',
    '.trust-inner > span:nth-of-type(4)': 'Связаться легко',
    '#services .section-kicker': 'Сайт, который помогает вашему делу',
    '#services .section-heading h2': 'Для мест,<br>куда хочется <em>зайти</em>.',
    '#services .section-heading > p': 'У каждого бизнеса свой характер. Сайт должен ясно и привлекательно показать, чем вы отличаетесь от других.',
    '.service-card:nth-child(1) .service-number': '01 / ЕДА И ГОСТЕПРИИМСТВО',
    '.service-card:nth-child(1) h3': 'Рестораны',
    '.service-card:nth-child(1) p': 'Покажите меню, помогите найти ресторан и забронировать столик.',
    '.service-card:nth-child(1) .service-tags span:nth-child(1)': 'Меню',
    '.service-card:nth-child(1) .service-tags span:nth-child(2)': 'Бронь столика',
    '.service-card:nth-child(1) .service-tags span:nth-child(3)': 'Адрес',
    '.service-card:nth-child(2) .service-number': '02 / ЛЮБИМОЕ МЕСТО РЯДОМ',
    '.service-card:nth-child(2) h3': 'Кафе',
    '.service-card:nth-child(2) p': 'Расскажите об атмосфере и часах работы, чтобы гостям захотелось заглянуть.',
    '.service-card:nth-child(2) .service-tags span:nth-child(1)': 'Фотогалерея',
    '.service-card:nth-child(2) .service-tags span:nth-child(2)': 'Часы работы',
    '.service-card:nth-child(2) .service-tags span:nth-child(3)': 'События',
    '.service-card:nth-child(3) .service-number': '03 / РАСТУЩИЙ БИЗНЕС',
    '.service-card:nth-child(3) h3': 'Компании',
    '.service-card:nth-child(3) p': 'Объясните, что предлагаете, кому помогаете и как стать вашим клиентом.',
    '.service-card:nth-child(3) .service-tags span:nth-child(1)': 'Услуги',
    '.service-card:nth-child(3) .service-tags span:nth-child(2)': 'О компании',
    '.service-card:nth-child(3) .service-tags span:nth-child(3)': 'Заявки',
    '.essentials-intro .eyebrow': 'Всё нужное — просто и со вкусом',
    '.essentials-intro h2': 'Что должно<br>быть на хорошем<br>сайте <em>для дела</em>?',
    '.essentials-intro > p': 'Сайт — знакомство с вашим бизнесом. Он отвечает на вопросы посетителей и подсказывает, что сделать дальше.',
    '.essentials-intro .button': 'Обсудим ваш сайт <span aria-hidden="true">↗</span>',
    '.essentials-stamp > span': 'СОЗДАНО<br>ДЛЯ ЛЮДЕЙ',
    '.essential-item:nth-child(1) h3': 'Понятное первое впечатление',
    '.essential-item:nth-child(1) p': 'За несколько секунд расскажите, кто вы, что предлагаете и почему стоит выбрать вас.',
    '.essential-item:nth-child(2) h3': 'Важная информация под рукой',
    '.essential-item:nth-child(2) p': 'Меню или услуги, часы работы, адрес и контакты должны легко находиться.',
    '.essential-item:nth-child(3) h3': 'Следующий шаг без лишних сложностей',
    '.essential-item:nth-child(3) p': 'Помогите забронировать столик, позвонить, построить маршрут или отправить запрос.',
    '.essential-item:nth-child(4) h3': 'Удобно пользоваться с телефона',
    '.essential-item:nth-child(4) p': 'Сайт быстро загружается, отлично выглядит на небольшом экране, а кнопки удобно нажимать.',
    '.essential-item:nth-child(5) h3': 'Тексты и фото в вашем стиле',
    '.essential-item:nth-child(5) p': 'Настоящие фотографии и единый стиль помогут почувствовать характер вашего бизнеса.',
    '.essential-item:nth-child(6) h3': 'Язык, понятный вашим клиентам',
    '.essential-item:nth-child(6) p': 'Контент на армянском и английском поможет большему числу людей понять ваше предложение.',
    '#process .section-kicker': 'От первого сообщения до запуска',
    '#process .section-heading h2': 'Хорошая работа<br>начинается с <em>разговора</em>.',
    '#process .section-heading > p': 'Понятный процесс с учётом ваших целей. Вы будете знать, над чем мы работаем на каждом этапе.',
    '.process-steps article:nth-child(1) h3': 'Расскажите об идее',
    '.process-steps article:nth-child(1) p': 'Расскажите, чем занимаетесь, кого хотите привлечь и чем должен помочь сайт.',
    '.process-steps article:nth-child(2) h3': 'Спланируем решение',
    '.process-steps article:nth-child(2) p': 'Определим нужные страницы, содержание и визуальный стиль вашего сайта.',
    '.process-steps article:nth-child(3) h3': 'Создадим и доработаем',
    '.process-steps article:nth-child(3) p': 'Я создам сайт и учту ваши замечания, чтобы довести всё до нужного уровня.',
    '.process-steps article:nth-child(4) h3': 'Запустим сайт',
    '.process-steps article:nth-child(4) p': 'Подготовим сайт к запуску, а я объясню, что делать дальше.',
    '.contact-copy .eyebrow': '<span class="eyebrow-dot"></span> ВАШЕ СЛЕДУЮЩЕЕ ХОРОШЕЕ ВПЕЧАТЛЕНИЕ',
    '.contact-copy h2': 'Пусть ваш бизнес<br><em>заметят.</em>',
    '.contact-copy > p': 'Запускаете новый проект или хотите обновить сайт? Расскажите о нём — буду рад узнать, что вы задумали.',
    '.contact-copy .button': 'Давайте обсудим <span aria-hidden="true">↗</span>',
    '.contact-card-top > span:first-child': 'СВЯЗАТЬСЯ',
    '.contact-row:nth-of-type(1) .contact-label': 'ЭЛ. ПОЧТА',
    '.contact-row:nth-of-type(2) .contact-label': 'ТЕЛЕФОН',
    '.contact-row:nth-of-type(3) .contact-label': 'INSTAGRAM',
    '.contact-card-note': '<span class="online-dot"></span> Независимая веб-студия · Ереван, Армения',
    '.footer-note': 'Продуманные сайты для бизнеса в Армении.',
    '.back-top': 'НАВЕРХ ↑'
  }
};

const translatedSelectors = new Set([
  ...Object.keys(languageCopy.hy).filter((key) => key.startsWith('.') || key.startsWith('#')),
  ...Object.keys(languageCopy.ru).filter((key) => key.startsWith('.') || key.startsWith('#'))
]);
const originalMarkup = new Map();
translatedSelectors.forEach((selector) => {
  const element = document.querySelector(selector);
  if (element) originalMarkup.set(selector, element.innerHTML);
});

function setLanguage(language, savePreference = true) {
  const locale = languageCopy[language] ? language : 'en';
  activeLanguage = locale;
  translatedSelectors.forEach((selector) => {
    const element = document.querySelector(selector);
    if (!element) return;
    element.innerHTML = locale === 'en' ? originalMarkup.get(selector) : (languageCopy[locale][selector] ?? originalMarkup.get(selector));
  });

  document.documentElement.lang = locale;
  document.title = locale === 'en' ? 'Websites YVN — A better first impression for your business' : languageCopy[locale].pageTitle;
  const description = document.querySelector('meta[name="description"]');
  if (description) description.content = locale === 'en'
    ? 'Thoughtful, modern websites for Armenian restaurants, cafés, and growing businesses. Let’s make your business easy to discover and choose.'
    : languageCopy[locale].description;

  document.querySelectorAll('[data-language]').forEach((button) => {
    button.setAttribute('aria-pressed', String(button.dataset.language === locale));
  });
  const languageSwitch = document.querySelector('.language-switch');
  if (languageSwitch) languageSwitch.setAttribute('aria-label', locale === 'en' ? 'Choose language' : languageCopy[locale].menu.choose);
  if (menuButton) {
    const expanded = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-label', languageCopy[locale].menu[expanded ? 'close' : 'open']);
  }
  const heroPreview = document.querySelector('.hero-art');
  if (heroPreview) heroPreview.setAttribute('aria-label', locale === 'en' ? 'A sample restaurant website preview' : languageCopy[locale].previewLabel);
  const previewImage = document.querySelector('.sample-photo img');
  if (previewImage) previewImage.alt = locale === 'en' ? 'Warmly lit restaurant dining room' : languageCopy[locale].photoAlt;
  const contactEmailButton = document.querySelector('.contact-copy .button');
  if (contactEmailButton) {
    const subject = locale === 'en' ? 'Website project enquiry' : languageCopy[locale].emailSubject;
    contactEmailButton.href = `mailto:viralclipsss32@gmail.com?subject=${encodeURIComponent(subject)}`;
  }

  if (savePreference) {
    try { localStorage.setItem('websites-yvn-language', locale); } catch { /* Storage may be unavailable in private browsing. */ }
  }
}

document.querySelectorAll('[data-language]').forEach((button) => {
  button.addEventListener('click', () => {
    setLanguage(button.dataset.language);
    if (window.matchMedia('(max-width: 820px)').matches) setMenuOpen(false);
  });
});

let savedLanguage = 'hy';
try { savedLanguage = localStorage.getItem('websites-yvn-language') || 'hy'; } catch { /* Use Armenian when storage is unavailable. */ }
setLanguage(savedLanguage, false);

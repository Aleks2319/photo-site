const photoArticles = [
  {
    foto: 'https://picsum.photos/id/250/400/250',
    title: 'Сравнение камер: Зеркалка против Беззеркалки в 2026 году',
    intro: 'Выбрать первую камеру — задача не из простых. В этой статье сравниваем плюсы и минусы двух систем для новичков и профи...'
  },
  {
    foto: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=400&auto=format&fit=crop&q=80',
    title: '7 лучших локаций для пейзажной съемки этой осенью',
    intro: 'Ищете вдохновение для съемки природы? Мы подобрали 7 невероятных мест с правильным светом и потрясающими видами...'
  },
  {
    foto: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=400&auto=format&fit=crop&q=80',
    title: '11 полезных горячих клавиш в Lightroom для ускорения работы',
    intro: 'Фотографы постоянно пытаются ускорить рутинную обработку серий. Делимся комбинациями клавиш, которые сэкономят вам часы...'
  },
  {
    foto: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80',
    title: 'Что такое «Золотой час»? Как использовать естественный свет',
    intro: 'Как работает мягкое вечернее солнце и почему его так любят фотографы? Разберем ключевые понятия работы со светом...'
  },
  {
    foto: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&auto=format&fit=crop&q=80',
    title: 'Выбор объектива: 50mm против 85mm для портретной съёмки',
    intro: 'Сравнение двух самых популярных фокусных расстояний. Разбираем размытие фона, геометрию и боке...'
  },
  {
    foto: 'https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?w=400&auto=format&fit=crop&q=80',
    title: 'Как настроить выдержку, диафрагму и ISO: Экспозиция для новичков',
    intro: 'Полное руководство по экспозиционному треугольнику. Учимся снимать в ручном режиме (M) без смазов и шума...'
  },
  {
    foto: 'https://images.unsplash.com/photo-1520390138845-fd2d229dd553?w=400&auto=format&fit=crop&q=80',
    title: 'Секреты ночной фотосъемки: Как снимать в темноте',
    intro: 'Разбираем работу со штативом, длинной выдержкой и ручной фокусировкой для получения четких ночных кадров...'
  },
  {
    foto: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=400&auto=format&fit=crop&q=80',
    title: 'Цветокоррекция и ретушь: Как создать собственный авторский пресет',
    intro: 'Пошаговый гайд по созданию стиля в фоторедакторах. Работа с тоновой кривой, HSL и раздельным тонированием...'
  }
];

let currentIndex = 0;
let itemsPerPage = 4;

const newsGrid = document.getElementById('news-grid');
const loadMoreBtn = document.getElementById('load-more-btn');

function renderArticles() {
  const nextArticles = photoArticles.slice(currentIndex, currentIndex + itemsPerPage);

  nextArticles.forEach(article => {
    const cardHTML = `
      <article class="card">
        <img src="${article.foto}" alt="${article.title}">
        <div class="card-body">
          <h3>${article.title}</h3>
          <p>${article.intro}</p>
          <a href="#" class="btn btn-warning">Читать далее</a>
        </div>
      </article>
    `;
    newsGrid.insertAdjacentHTML('beforeend', cardHTML);
  });

  currentIndex += itemsPerPage;

  itemsPerPage = 2;

  if (currentIndex >= photoArticles.length) {
    loadMoreBtn.style.display = 'none';
  }
}

renderArticles();

loadMoreBtn.addEventListener('click', renderArticles);

const headerSearchInput = document.getElementById('header-search-input');
const searchOverlay = document.getElementById('search-overlay');
const closeSearchBtn = document.getElementById('close-search-btn');
const searchInput = document.getElementById('search-input');

if (headerSearchInput && searchOverlay && closeSearchBtn) {
  headerSearchInput.addEventListener('focus', () => {
    searchOverlay.classList.add('active');
    headerSearchInput.blur();
    if (searchInput) searchInput.focus();
  });

  function closeSearch() {
    searchOverlay.classList.remove('active');
  }

  closeSearchBtn.addEventListener('click', closeSearch);

  searchOverlay.addEventListener('click', (e) => {
    if (e.target === searchOverlay) {
      closeSearch();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && searchOverlay.classList.contains('active')) {
      closeSearch();
    }
  });
}
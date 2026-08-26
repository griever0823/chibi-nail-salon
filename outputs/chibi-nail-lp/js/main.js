/*
  CHANGE: 写真を assets/images/ に置き、下記配列へ1件追加するとギャラリーに表示されます。
  image: ファイルパス / title: 表示名 / category: 補助表記 / badge: "NEW" または "人気"（不要なら空文字）
*/
const galleryItems = [
  { image: 'assets/images/nail1.jpg', title: 'Olive nuance', category: 'NUANCE', badge: 'NEW' },
  { image: 'assets/images/gallery-02.svg', title: 'Soft french', category: 'FRENCH', badge: '人気' },
  { image: 'assets/images/gallery-03.svg', title: 'Sheer beige', category: 'SIMPLE', badge: '' },
  { image: 'assets/images/gallery-04.svg', title: 'Metal detail', category: 'ART', badge: '' },
  { image: 'assets/images/gallery-05.svg', title: 'Moss marble', category: 'NUANCE', badge: 'NEW' },
  { image: 'assets/images/gallery-06.svg', title: 'Milky pink', category: 'SIMPLE', badge: '' }
];

const gallery = document.querySelector('#gallery-grid');
galleryItems.forEach((item) => {
  const figure = document.createElement('figure');
  figure.className = 'gallery-card reveal';
  figure.innerHTML = `<img src="${item.image}" alt="${item.title} のネイルデザイン" loading="lazy"><figcaption>${item.category}<br>${item.title}</figcaption>${item.badge ? `<span class="badge">${item.badge}</span>` : ''}`;
  figure.addEventListener('click', () => openLightbox(item));
  figure.tabIndex = 0;
  figure.setAttribute('role', 'button');
  figure.setAttribute('aria-label', `${item.title} を拡大表示`);
  figure.addEventListener('keydown', (event) => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); openLightbox(item); } });
  gallery.appendChild(figure);
});

const lightbox = document.querySelector('[data-lightbox]');
const lightboxImage = document.querySelector('[data-lightbox-image]');
const lightboxCaption = document.querySelector('[data-lightbox-caption]');
function openLightbox(item) { lightboxImage.src = item.image; lightboxImage.alt = `${item.title} のネイルデザイン（拡大）`; lightboxCaption.textContent = `${item.category} / ${item.title}`; lightbox.showModal(); }
document.querySelector('[data-lightbox-close]').addEventListener('click', () => lightbox.close());
lightbox.addEventListener('click', (event) => { if (event.target === lightbox) lightbox.close(); });

const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); } }), { threshold: .12 });
document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));

const menuButton = document.querySelector('[data-menu-toggle]');
const menu = document.querySelector('[data-menu]');
menuButton.addEventListener('click', () => { const open = menu.classList.toggle('is-open'); menuButton.setAttribute('aria-expanded', open); menuButton.setAttribute('aria-label', open ? 'メニューを閉じる' : 'メニューを開く'); });
menu.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => { menu.classList.remove('is-open'); menuButton.setAttribute('aria-expanded', 'false'); }));
window.addEventListener('scroll', () => document.querySelector('[data-header]').classList.toggle('is-scrolled', window.scrollY > 8), { passive: true });
document.querySelector('[data-year]').textContent = new Date().getFullYear();

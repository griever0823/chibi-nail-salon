/*
  CHANGE: 写真を assets/images/ に置き、下記配列へ1件追加するとギャラリーに表示されます。
  image: ファイルパス / title: 表示名 / category: 補助表記 / badge: "NEW" または "人気"（不要なら空文字）
*/
const galleryItems = [
  { image: 'assets/images/gallery-09.jpg', title: 'Monochrome Ribbon', category: 'ホワイトベース × ブラックリボン', badge: 'NEW' },
  { image: 'assets/images/gallery-10.png', title: 'Royal Ruby Jewelry', category: 'ルビーハート × ゴールド透かしパーツ', badge: '' },
  { image: 'assets/images/gallery-11.png', title: 'Royal Ruby Jewelry', category: 'ルビーハート × ゴールド透かしパーツ', badge: '' },
  { image: 'assets/images/gallery-12.jpg', title: 'Sweet Ribbon Pink', category: 'パステルピンク × ホワイトパーツ', badge: 'PICKUP' },
  { image: 'assets/images/gallery-13.jpg', title: 'Dark Black Cross', category: 'ブラックグラデーション × シルバークロス', badge: '人気' },
  { image: 'assets/images/gallery-14.jpg', title: 'Sheer Ribbon Pink', category: 'シアーピンク × ホワイトリボン', badge: '' },
  { image: 'assets/images/gallery-15.jpg', title: 'Crystal Butterfly & Ribbon', category: 'クリアベース × 3Dバタフライ＆レース', badge: 'NEW' },
  { image: 'assets/images/gallery-17.jpg', title: '3D Pop Pink Heart', category: 'ビビッドピンク × ぷっくりハート', badge: '' },
  { image: 'assets/images/gallery-16.jpg', title: 'Pastel Butterfly', category: '水色・イエロー × ゴールドバタフライ', badge: '' },
  { image: 'assets/images/gallery-18.jpg', title: 'Innocent White Cross', category: 'クリアホワイト × 3Dクロス＆リボン', badge: '' },
  { image: 'assets/images/gallery-19.jpg', title: 'Black × Pearl Texture', category: 'ブラックビーズ × シルバー＆ゴールドパーツ', badge: '' },
  { image: 'assets/images/gallery-20.png', title: 'Cherry & Drip French', category: 'ホワイトベース × ボルドーチェリー', badge: '' },
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

// ファーストビューロゴのアニメーション
const heroShape = document.querySelector('.hero__shape');

if (heroShape) {
  let startTime = null;

  const animateHeroShape = (time) => {
    if (!startTime) startTime = time;
    const elapsed = time - startTime;
    const moveY = Math.sin(elapsed / 1400) * 12;
    const moveX = Math.cos(elapsed / 1900) * 8;
    const rotate = Math.sin(elapsed / 3000) * 3;
    const scale = 1 + Math.sin(elapsed / 2000) * 0.035;
    heroShape.style.transform =
      `translate(${moveX}px, ${moveY}px) rotate(${rotate}deg) scale(${scale})`;
    requestAnimationFrame(animateHeroShape);
  };

  requestAnimationFrame(animateHeroShape);
}


const lightbox = document.querySelector('[data-lightbox]');
const lightboxImage = document.querySelector('[data-lightbox-image]');
const lightboxCaption = document.querySelector('[data-lightbox-caption]');
function openLightbox(item) { lightboxImage.src = item.image; lightboxImage.alt = `${item.title} のネイルデザイン（拡大）`; lightboxCaption.textContent = `${item.category} / ${item.title}`; lightbox.showModal(); }
document.querySelector('[data-lightbox-close]').addEventListener('click', () => lightbox.close());
lightbox.addEventListener('click', (event) => { if (event.target === lightbox) lightbox.close(); });

const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); } }), { threshold: .12 });
const storyVideo = document.querySelector('.placeholder-image video');

// STORYビデオのアニメーション部分
if (storyVideo) {
  const videoObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        storyVideo.play();
      }
    });
  }, { threshold: 0.3 });

  videoObserver.observe(storyVideo);
}


document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));

const menuButton = document.querySelector('[data-menu-toggle]');
const menu = document.querySelector('[data-menu]');
menuButton.addEventListener('click', () => { const open = menu.classList.toggle('is-open'); menuButton.setAttribute('aria-expanded', open); menuButton.setAttribute('aria-label', open ? 'メニューを閉じる' : 'メニューを開く'); });
menu.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => { menu.classList.remove('is-open'); menuButton.setAttribute('aria-expanded', 'false'); }));
window.addEventListener('scroll', () => document.querySelector('[data-header]').classList.toggle('is-scrolled', window.scrollY > 8), { passive: true });
document.querySelector('[data-year]').textContent = new Date().getFullYear();

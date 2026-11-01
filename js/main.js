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
  { image: 'assets/images/gallery-23.jpg', title: 'Cherry & Drip French', category: 'ホワイトベース × ボルドーチェリー', badge: '' },
  { image: 'assets/images/gallery-24.jpg', title: 'Nude Cross Design', category: 'ヌードベージュ × 3Dクロムクロス', badge: '' },
  { image: 'assets/images/gallery-25.jpg', title: 'White Ribbon & Rose', category: 'ホワイトフレンチ × 3Dリボン＆フラワー', badge: '' },
  { image: 'assets/images/gallery-26.jpg', title: 'Nuance Cross Art', category: 'クリアベージュ × 英字ロゴ＆クロスパーツ', badge: '' },
  { image: 'assets/images/gallery-27.jpg', title: 'Full Crystal Sparkle', category: 'クリアベース × 埋め尽くしビジュー', badge: '' },
  { image: 'assets/images/gallery-28.jpg', title: 'White Gothic Ribbon', category: 'ホワイトロング × 3Dリボン＆ゴシックパーツ', badge: '' },
  { image: 'assets/images/gallery-29.jpg', title: 'Black & Dot French', category: 'ブラックフレンチ × ドット＆大粒ビジュー', badge: '' },
  { image: 'assets/images/gallery-30.jpg', title: 'Pink Gradation Bijoux', category: 'ピンクグラデーション × ホワイトローズ＆ストーン', badge: '' },
  { image: 'assets/images/gallery-31.jpg', title: 'Monochrome Dot French', category: 'モノトーンフレンチ × シークレットドット', badge: '' },
  { image: 'assets/images/gallery-32.jpg', title: 'Pastel Green Lace', category: 'パステルグリーン × ホワイトレース＆リボン', badge: '' },
  { image: 'assets/images/gallery-33.jpg', title: 'Mint Green Cross', category: 'ミントグリーン × 3Dクロスパターン', badge: '' },
  { image: 'assets/images/gallery-34.jpg', title: 'Milky White Flower', category: 'ミルキーホワイト × ドット＆3Dフラワー', badge: '' },
  { image: 'assets/images/gallery-35.jpg', title: 'Pastel Mint Pop Art', category: 'パステルミント × 3Dポップパーツ＆ボタン', badge: '' },
  { image: 'assets/images/gallery-36.jpg', title: 'Pure White Ribbon', category: 'ホワイトグラデーション × 3Dリボンモチーフ', badge: '' },
  { image: 'assets/images/gallery-37.jpg', title: 'Black Dot & Pink Rose', category: 'ブラックドット × 星ホロ＆ピンクローズ', badge: '' },
  { image: 'assets/images/gallery-38.jpg', title: 'Black French & Kitty', category: 'ブラックフレンチ × キャラクター＆ビジューパーツ', badge: '' },
  { image: 'assets/images/gallery-39.jpg', title: 'Milky White Gothic Cross', category: 'ミルキーホワイト × 3Dブラックゴシッククロス', badge: '' },
  { image: 'assets/images/gallery-40.jpg', title: 'Pink Ribbon Ribbon Ribbon', category: 'シアーピンク × ホワイト＆ピンク3Dリボン', badge: '' },
  { image: 'assets/images/gallery-41.jpg', title: 'Elegant White French', category: 'ヌードベージュ × ホワイトロングフレンチ＆ストーン', badge: '' },
  { image: 'assets/images/gallery-42.jpg', title: 'Mint Green Cross Art', category: 'ミントグリーン × 3Dクロムクロス', badge: '' },
  { image: 'assets/images/gallery-43.jpg', title: 'Romantic Pink Rose & Ribbon', category: 'シアーベース × ピンク＆ホワイトローズ・リボン', badge: '' },
  { image: 'assets/images/gallery-44.jpg', title: 'Pink Gradation Bijoux Chain', category: 'ピンクグラデーション × 3Dリボン＆チェーンパーツ', badge: '' },
  { image: 'assets/images/gallery-45.jpg', title: 'Colorful Gemstone Shimmer', category: 'クリアベース × タイムレス・カラーストーン', badge: '' },
  { image: 'assets/images/gallery-46.jpg', title: 'Monochrome Heart Dot', category: 'ブラックフレンチ＆ドット × ビジューアート', badge: '' },
  { image: 'assets/images/gallery-47.jpg', title: 'Sweet Chocolate Ribbon', category: 'ピンクベース × チョコレートアート＆リボン', badge: '' },
  { image: 'assets/images/gallery-48.jpg', title: 'Yellow & Black Dot Pop', category: 'イエローベージュ＆ブラックフレンチ × ドット', badge: '' },
  { image: 'assets/images/gallery-49.jpg', title: 'Gothic Black Lace Cross', category: 'ブラックフレンチ × ホワイトレース＆クロス', badge: '' },
  { image: 'assets/images/gallery-50.jpg', title: 'Milky Rose & Piercing Parts', category: 'ミルキーホワイト × ピンクローズ＆ボディピアス風パーツ', badge: '' },
  { image: 'assets/images/gallery-51.jpg', title: 'White Ribbon & Bijoux French', category: 'ホワイトフレンチ × 3Dリボン＆ストーン', badge: '' },
  { image: 'assets/images/gallery-52.jpg', title: 'Monochrome Dot & Ribbon', category: 'ブラック＆ホワイトドット × リボンパーツ', badge: '' },
  { image: 'assets/images/gallery-53.jpg', title: 'Pink Dot & Lace Rose', category: 'ピンクベース × ドット＆レース・ホワイトローズ', badge: '' },
  { image: 'assets/images/gallery-54.jpg', title: 'Black Lace Gothic Cross', category: 'ブラックレース × 3Dゴシッククロス', badge: '' },
  { image: 'assets/images/gallery-55.jpg', title: 'Shimmering Pink Gradation', category: 'シアーピンクグラデーション × 繊細ラメ', badge: '' },
  { image: 'assets/images/gallery-56.jpg', title: 'Beige Dot & Cross Motif', category: 'ベージュブラウン × ドット＆3Dクロス', badge: '' },
  { image: 'assets/images/gallery-57.jpg', title: 'Pastel Pink Ribbon Party', category: 'パステルピンク × 3Dリボン＆パール', badge: '' },
  { image: 'assets/images/gallery-58.jpg', title: 'Pink Gradation Chrome Cross', category: 'ピンクグラデーション × 3Dクロムクロス', badge: '' },
  { image: 'assets/images/gallery-59.jpg', title: 'Monochrome French & Black Ribbon', category: 'ブラックフレンチ × ブラックリボン', badge: '' },
  { image: 'assets/images/gallery-60.jpg', title: 'Clear Base White Rose & Ribbon', category: 'クリアベース × ホワイトローズ＆リボン', badge: '' },
  { image: 'assets/images/gallery-61.jpg', title: 'Pastel Blue & Colorful Cross', category: 'パステルブルー × カラフル3Dクロス', badge: '' },
  { image: 'assets/images/gallery-62.jpg', title: 'Pink Drip Heart & Gothic Cross', category: 'ピンクベース × ブラックドリップ・ハート・クロス', badge: '' },
  { image: 'assets/images/gallery-63.jpg', title: 'Black & Pink Argyle Ribbon', category: 'ブラック＆ピンク × アーガイル柄・リボン', badge: '' },
  { image: 'assets/images/gallery-64.jpg', title: 'Matte Mint Green Cross', category: 'マットミントグリーン × 3Dクロス', badge: '' },
  { image: 'assets/images/gallery-65.jpg', title: 'White Pink Gradation Bijoux', category: 'ホワイトピンクグラデーション × 大粒ビジュー', badge: '' },
  { image: 'assets/images/gallery-66.jpg', title: 'Full Bijoux & Rose Gradation', category: 'ホワイトグラデーション × 埋め尽くしビジュー＆ローズ', badge: '' },
  { image: 'assets/images/gallery-67.jpg', title: 'Nude Gold Glitter & Black Rose', category: 'ヌードベージュ × 煌めきラメ・ブラックローズ', badge: '' },
  { image: 'assets/images/gallery-68.jpg', title: 'Mint Green Lace & Piercing', category: 'ミントグリーン × レース柄・ボディピアス風パーツ', badge: '' },
  { image: 'assets/images/gallery-69.jpg', title: 'White Lace & Cross Bijoux', category: 'シアーベージュ × ホワイトレース＆クロス', badge: '' },
  { image: 'assets/images/gallery-70.jpg', title: 'Green & White Stripe Star', category: 'グリーン＆ホワイトストライプ × スターパーツ', badge: '' },
  { image: 'assets/images/gallery-71.jpg', title: 'Milky White & Black Dot Flower', category: 'ミルキーホワイトベース × 黒ドット・3Dフラワー', badge: '' },
  { image: 'assets/images/gallery-72.jpg', title: 'Pure White Ribbon Party', category: 'ホワイトグラデーション × 3Dリボン・パール', badge: '' },
  { image: 'assets/images/gallery-73.jpg', title: 'Starry Pink & Black Dot Rose', category: 'シアーピンク・スターホロ × ブラックドット＆ローズ', badge: '' },
  { image: 'assets/images/gallery-74.jpg', title: 'Red Polka Dot & Strawberry', category: 'レッドドット × いちごモチーフ・リボン', badge: '' },
  { image: 'assets/images/gallery-75.jpg', title: 'Black French & Hello Kitty Bijoux', category: 'ブラックフレンチ × キャラクター・ビジュー', badge: '' },
  { image: 'assets/images/gallery-76.jpg', title: 'Milky White Black Gothic Cross', category: 'ミルキーホワイトロング × 3Dブラッククロス', badge: '' },
  { image: 'assets/images/gallery-77.jpg', title: 'Classic White Long French', category: 'ヌードベージュ × ホワイトロングフレンチ', badge: '' },
  { image: 'assets/images/gallery-78.jpg', title: 'Silver Glitter Lace & Ribbon', category: 'シアーベース × シルバーラメ・レース・3Dリボン', badge: '' },
  // { image: 'assets/images/gallery-.jpg', title: '', category: '', badge: '' },
  // { image: 'assets/images/gallery-.jpg', title: '', category: '', badge: '' },
  // { image: 'assets/images/gallery-.jpg', title: '', category: '', badge: '' },
  // { image: 'assets/images/gallery-.jpg', title: '', category: '', badge: '' },
  // { image: 'assets/images/gallery-.jpg', title: '', category: '', badge: '' },
  // { image: 'assets/images/gallery-.jpg', title: '', category: '', badge: '' },
  // { image: 'assets/images/gallery-.jpg', title: '', category: '', badge: '' },
  // { image: 'assets/images/gallery-.jpg', title: '', category: '', badge: '' },
  // { image: 'assets/images/gallery-.jpg', title: '', category: '', badge: '' },
  // { image: 'assets/images/gallery-.jpg', title: '', category: '', badge: '' },
  // { image: 'assets/images/gallery-.jpg', title: '', category: '', badge: '' },

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

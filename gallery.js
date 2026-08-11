import { supabase, GALLERY_BUCKET } from './supabase-client.js';

const stage = document.getElementById('gallery-stage');
const emptyState = document.getElementById('gallery-empty');
const status = document.getElementById('gallery-status');
const previousButton = document.getElementById('gallery-previous');
const nextButton = document.getElementById('gallery-next');
const dots = document.getElementById('gallery-dots');

let slides = [];
let activeIndex = 0;
let timer;

function showSlide(index) {
  if (!slides.length) return;
  activeIndex = (index + slides.length) % slides.length;
  slides.forEach((slide, slideIndex) => {
    slide.classList.toggle('active', slideIndex === activeIndex);
  });
  [...dots.children].forEach((dot, dotIndex) => {
    dot.classList.toggle('active', dotIndex === activeIndex);
    dot.setAttribute('aria-current', dotIndex === activeIndex ? 'true' : 'false');
  });
}

function restartTimer() {
  window.clearInterval(timer);
  if (slides.length > 1) {
    timer = window.setInterval(() => showSlide(activeIndex + 1), 6000);
  }
}

function changeSlide(direction) {
  showSlide(activeIndex + direction);
  restartTimer();
}

async function loadGallery() {
  status.textContent = 'Loading ministry moments…';
  const { data, error } = await supabase.storage
    .from(GALLERY_BUCKET)
    .list('', { limit: 100, sortBy: { column: 'created_at', order: 'desc' } });

  if (error) {
    status.textContent = 'The gallery could not be loaded right now.';
    console.error('Gallery load failed:', error.message);
    return;
  }

  const photos = data.filter((item) => item.id && !item.name.startsWith('.'));
  status.textContent = '';
  if (!photos.length) {
    emptyState.hidden = false;
    previousButton.hidden = true;
    nextButton.hidden = true;
    return;
  }

  emptyState.hidden = true;
  photos.forEach((photo, index) => {
    const { data: publicUrl } = supabase.storage.from(GALLERY_BUCKET).getPublicUrl(photo.name);
    const figure = document.createElement('figure');
    figure.className = `gallery-slide${index === 0 ? ' active' : ''}`;

    const image = document.createElement('img');
    image.src = publicUrl.publicUrl;
    image.alt = photo.metadata?.caption || `GCL Ministries gallery photo ${index + 1}`;
    image.loading = index === 0 ? 'eager' : 'lazy';
    image.decoding = 'async';
    figure.appendChild(image);
    stage.appendChild(figure);

    const dot = document.createElement('button');
    dot.type = 'button';
    dot.className = `gallery-dot${index === 0 ? ' active' : ''}`;
    dot.setAttribute('aria-label', `Show gallery photo ${index + 1}`);
    dot.addEventListener('click', () => {
      showSlide(index);
      restartTimer();
    });
    dots.appendChild(dot);
  });

  slides = [...stage.querySelectorAll('.gallery-slide')];
  const hasMultiple = slides.length > 1;
  previousButton.hidden = !hasMultiple;
  nextButton.hidden = !hasMultiple;
  dots.hidden = !hasMultiple;
  restartTimer();
}

previousButton.addEventListener('click', () => changeSlide(-1));
nextButton.addEventListener('click', () => changeSlide(1));
stage.addEventListener('mouseenter', () => window.clearInterval(timer));
stage.addEventListener('mouseleave', restartTimer);
document.addEventListener('visibilitychange', () => {
  document.hidden ? window.clearInterval(timer) : restartTimer();
});

loadGallery();

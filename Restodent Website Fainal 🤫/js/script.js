const toggleBtn = document.querySelector('.mobill_bars i');
const menu = document.getElementById('navigation_manu');
const menuLinks = document.querySelectorAll('#navigation_manu a');

// Toggle button click (open/close)
toggleBtn.addEventListener('click', e => {
  e.stopPropagation(); // Prevent immediate close
  menu.classList.toggle('open');

  if (menu.classList.contains('open')) {
    toggleBtn.classList.remove('fa-bars');
    toggleBtn.classList.add('fa-xmark');
  } else {
    toggleBtn.classList.remove('fa-xmark');
    toggleBtn.classList.add('fa-bars');
  }
});

// Close when clicking any menu link
menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('open');
    toggleBtn.classList.remove('fa-xmark');
    toggleBtn.classList.add('fa-bars');
  });
});

// Close when clicking outside menu
document.addEventListener('click', e => {
  if (
    menu.classList.contains('open') &&
    !menu.contains(e.target) &&
    !toggleBtn.contains(e.target)
  ) {
    menu.classList.remove('open');
    toggleBtn.classList.remove('fa-xmark');
    toggleBtn.classList.add('fa-bars');
  }
});

//
// script.js

document.addEventListener('DOMContentLoaded', function () {
  // সব মেনু লিঙ্ক সিলেক্ট করি
  const links = document.querySelectorAll('#navigation_manu a');

  links.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault(); // ডিফল্ট লিঙ্ক রিলোড বন্ধ করবে

      // লিঙ্কের টেক্সট (Home, menu, about, book Table)
      const sectionName = this.textContent.trim().toLowerCase();

      let targetId = '';
      if (sectionName === 'home') targetId = 'hero_header_area';
      if (sectionName === 'menu') targetId = 'manu_area';
      if (sectionName === 'about') targetId = 'about_area';
      if (sectionName === 'book table') targetId = 'book_table_area';

      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        targetEl.scrollIntoView({
          behavior: 'smooth',
        });
      }
    });
  });
});

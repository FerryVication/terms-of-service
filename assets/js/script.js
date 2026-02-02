// Tab Elements
const ppTab = document.getElementById('pp-tab');
const tosTab = document.getElementById('tos-tab');
const ppContent = document.getElementById('pp-content');
const tosContent = document.getElementById('tos-content');

// Language Toggle Elements
const langToggle = document.getElementById('lang-toggle');
const langText = document.getElementById('lang-text');

// Language State
let currentLang = 'en'; // Default language is English

// Tab Switching Logic
ppTab.addEventListener('click', () => {
  ppTab.classList.add('active');
  tosTab.classList.remove('active');
  ppContent.style.display = 'block';
  tosContent.style.display = 'none';
});

tosTab.addEventListener('click', () => {
  tosTab.classList.add('active');
  ppTab.classList.remove('active');
  tosContent.style.display = 'block';
  ppContent.style.display = 'none';
});

// Language Toggle Logic
langToggle.addEventListener('click', () => {
  if (currentLang === 'en') {
    switchToIndonesian();
  } else {
    switchToEnglish();
  }
});

function switchToEnglish() {
  currentLang = 'en';
  document.documentElement.lang = 'en';
  
  // Update button
  langText.textContent = 'Bahasa Indonesia';
  langToggle.querySelector('.flag').textContent = '🇮🇩';
  
  // Update all translatable elements
  const translatableElements = document.querySelectorAll('[data-en]');
  translatableElements.forEach(element => {
    const englishText = element.getAttribute('data-en');
    if (element.tagName === 'LI' || element.tagName === 'P' || element.tagName === 'H3' || element.tagName === 'H2' || element.tagName === 'SPAN') {
      element.innerHTML = englishText;
    } else {
      element.textContent = englishText;
    }
  });
}

function switchToIndonesian() {
  currentLang = 'id';
  document.documentElement.lang = 'id';
  
  // Update button
  langText.textContent = 'En';
  langToggle.querySelector('.flag').textContent = '🇬🇧';
  
  // Update all translatable elements
  const translatableElements = document.querySelectorAll('[data-id]');
  translatableElements.forEach(element => {
    const indonesianText = element.getAttribute('data-id');
    if (element.tagName === 'LI' || element.tagName === 'P' || element.tagName === 'H3' || element.tagName === 'H2' || element.tagName === 'SPAN') {
      element.innerHTML = indonesianText;
    } else {
      element.textContent = indonesianText;
    }
  });
}

// Smooth Scroll for anchors (if needed in future)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Add subtle animation on page load
window.addEventListener('load', () => {
  document.querySelector('.container').style.opacity = '0';
  document.querySelector('.container').style.transform = 'translateY(20px)';
  
  setTimeout(() => {
    document.querySelector('.container').style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    document.querySelector('.container').style.opacity = '1';
    document.querySelector('.container').style.transform = 'translateY(0)';
  }, 100);
});
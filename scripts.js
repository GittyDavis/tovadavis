  <script>
    let currentLang = 'en';
    
    function toggleLanguage() {
  const englishSection = document.getElementById('englishSection');
  const hebrewSection = document.getElementById('hebrewSection');
  const langText = document.getElementById('langText');
  const navMenu = document.getElementById('navMenu');

  if (currentLang === 'en') {
    englishSection.classList.remove('active');
    hebrewSection.classList.add('active');
    langText.textContent = 'English';
    currentLang = 'he';

    navMenu.innerHTML = `
      <a href="#home" onclick="closeNav()">בית</a>
      <a href="#about" onclick="closeNav()">אודות</a>
      <a href="#skills" onclick="closeNav()">כישורים</a>
      <a href="#hebrew-projects" onclick="closeNav()">פרויקטים</a>
      <a href="#contact" onclick="closeNav()">צור קשר</a>
    `;
  } else {
    hebrewSection.classList.remove('active');
    englishSection.classList.add('active');
    langText.textContent = 'עברית';
    currentLang = 'en';

    navMenu.innerHTML = `
      <a href="#home" onclick="closeNav()">Home</a>
      <a href="#about" onclick="closeNav()">About</a>
      <a href="#skills" onclick="closeNav()">Skills</a>
      <a href="#projects" onclick="closeNav()">Projects</a>
      <a href="#contact" onclick="closeNav()">Contact</a>
    `;
  }
}

    function toggleNav() {
      document.getElementById('navMenu').classList.toggle('active');
    }
    
    function closeNav() {
      document.getElementById('navMenu').classList.remove('active');
    }
    
    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute('href'));
        if (target) {
          target.scrollIntoView({behavior: 'smooth', block: 'start'});
        }
        closeNav();
      });
    });
  </script>

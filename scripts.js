  <script>
    let currentLang = 'en';
    
    function toggleLanguage() {
      const englishSection = document.getElementById('englishSection');
      const hebrewSection = document.getElementById('hebrewSection');
      const langText = document.getElementById('langText');
      
      if (currentLang === 'en') {
        englishSection.classList.remove('active');
        hebrewSection.classList.add('active');
        langText.textContent = 'English';
        currentLang = 'he';
      } else {
        hebrewSection.classList.remove('active');
        englishSection.classList.add('active');
        langText.textContent = 'עברית';
        currentLang = 'en';
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

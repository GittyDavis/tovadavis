 <script>
    function toggleNav(){document.getElementById('navMenu').classList.toggle('active')}
    function closeNav(){document.getElementById('navMenu').classList.remove('active')}

    /* smooth scrolling */
    document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
      anchor.addEventListener('click',e=>{
        e.preventDefault();
        const target=document.querySelector(anchor.getAttribute('href'));
        target&&target.scrollIntoView({behavior:'smooth',block:'start'});
        closeNav();
      });
    });
  </script>

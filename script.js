// Toggle menu mobile
document.querySelector('.menu-toggle').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('active');
  });
  
  // Mendukung navigasi keyboard pada menu toggle
  document.querySelector('.menu-toggle').addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      document.querySelector('.nav-links').classList.toggle('active');
    }
  });
  
  // Smooth scroll untuk navigasi internal
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Tutup menu mobile saat klik di luar header
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.header')) {
      document.querySelector('.nav-links').classList.remove('active');
    }
  });
  
  // Mengatur state aktif pada navigasi mobile saat scroll
  window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.mobile-nav a');
    
    sections.forEach(section => {
      const top = window.scrollY;
      const offset = section.offsetTop - 100;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');
  
      if (top >= offset && top < offset + height) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href').includes(id)) {
            link.classList.add('active');
          }
        });
      }
    });
  });
  
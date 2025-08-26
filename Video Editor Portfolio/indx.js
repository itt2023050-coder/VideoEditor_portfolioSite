
    document.getElementById('year').textContent = new Date().getFullYear();
    const sections = [...document.querySelectorAll('section')];
    const links = [...document.querySelectorAll('.menu a')];
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = '#' + entry.target.id;
          links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === id));
        }
      });
    }, { rootMargin: '-40% 0px -55% 0px', threshold: 0 });
    sections.forEach(s => obs.observe(s));
    document.querySelectorAll('.card').forEach(card => {
      card.addEventListener('click', () => {
        const btn = card.querySelector('.reveal .links a');
        if (btn && btn.href) window.open(btn.href, '_blank');
      });
    });
  
// init
document.addEventListener('DOMContentLoaded', () => {
  // AOS
  if (window.AOS) AOS.init({duration:600, once:true});

  // year
  document.getElementById('year').textContent = new Date().getFullYear();

  // mobile hamburger
  const hamb = document.getElementById('hamb');
  const navlinks = document.getElementById('navlinks');
  hamb && hamb.addEventListener('click', () => {
    if (navlinks.style.display === 'flex') navlinks.style.display = '';
    else navlinks.style.display = 'flex';
  });

  // Smooth scroll for internal anchors
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      const href = this.getAttribute('href');
      if(!href || href === '#') return;
      const target = document.querySelector(href);
      if(target){
        e.preventDefault();
        target.scrollIntoView({behavior:'smooth', block:'start'});
        // close mobile nav
        if(window.innerWidth < 920) navlinks.style.display = '';
      }
    });
  });

  // Contact demo
  const send = document.getElementById('send');
  send && send.addEventListener('click', ()=>{
    const n = document.getElementById('cname').value.trim();
    const e = document.getElementById('cemail').value.trim();
    const m = document.getElementById('cmsg').value.trim();
    if(!n||!e||!m){ alert('Please fill all fields'); return; }
    alert(`Thanks ${n}! Message sent (demo).`);
    document.getElementById('contact-form').reset();
  });

  // CV Print / Save as PDF
  const printCv = document.getElementById('printCv');
  printCv && printCv.addEventListener('click', () => {
    // Open a new window with CV content and call print
    const cvSection = document.querySelector('#cv').innerHTML;
    const win = window.open('', '_blank', 'width=900,height=800');
    win.document.write(`
      <html><head>
        <title>Naishal Patel — CV</title>
        <style>
          body{font-family:Inter, Arial; padding:30px; color:#111}
          h2{color:#0b69a3}
          .cv-left,.cv-right{margin-bottom:12px}
        </style>
      </head><body>
      ${cvSection}
      <script>window.onload = ()=> { window.print(); }</script>
      </body></html>`);
    win.document.close();
  });

});

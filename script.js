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
  // ----- Generate Clean PDF CV -----
document.getElementById("printCv").addEventListener("click", async () => {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  const title = "Naishal Patel — CV";
  const body = `
Computer Engineering Student — PDEU

Skills:
Java, Spring Boot, Spring Security, React, JavaScript,
MySQL, MongoDB, REST APIs, Git, JWT Auth

Projects:
1. Full-Stack E-Commerce Platform
   - Spring Boot + React
   - JWT Auth, Product CRUD, Admin Panel, Cart & Checkout

2. Finance Management System
   - Spring Boot + React + MongoDB
   - Expense Tracking, Dashboards, Categories

Certifications:
- Udemy Certificate 1 (Backend)
- Udemy Certificate 2 (Frontend)

Achievements:
- Completed 100-Day LeetCode Challenge

Contact:
Email: naishal.patel710@gmail.com
GitHub: https://github.com/NP713
LinkedIn: linkedin.com/in/naishal-patel-b61a84281
  `;

  doc.setFont("Helvetica", "bold");
  doc.setFontSize(18);
  doc.text(title, 10, 20);

  doc.setFont("Helvetica", "normal");
  doc.setFontSize(11);

  let yPos = 35;
  body.split("\n").forEach(line => {
    doc.text(line, 10, yPos);
    yPos += 7;
  });

  doc.save("Naishal_Patel_CV.pdf");
});


});

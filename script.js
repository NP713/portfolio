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
document.getElementById("printCv").addEventListener("click", () => {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({ unit: "pt", format: "a4" });

  // Title
  doc.setFont("Helvetica", "bold");
  doc.setFontSize(20);
  doc.text("Naishal Patel — CV", 40, 50);

  // Basic Info
  doc.setFont("Helvetica", "normal");
  doc.setFontSize(12);
  doc.text("B.Tech — Computer Engineering, PDEU", 40, 80);
  doc.text("CGPA: 9.75", 40, 100);

  // Contact
  doc.setFont("Helvetica", "bold");
  doc.text("Contact", 40, 130);
  doc.setFont("Helvetica", "normal");
  doc.text("Email: naishal.patel710@gmail.com", 40, 150);
  doc.text("GitHub: https://github.com/NP713", 40, 170);
  doc.text("LinkedIn: linkedin.com/in/naishal-patel-b61a84281", 40, 190);

  // Skills Table
  doc.setFont("Helvetica", "bold");
  doc.text("Skills", 40, 230);
  doc.autoTable({
    startY: 240,
    head: [["Technical Skills"]],
    body: [
      ["Java, Spring Boot, Spring Security"],
      ["React, JS, HTML, CSS"],
      ["MySQL, MongoDB, REST APIs"],
      ["JWT, Git, Postman"],
    ],
    margin: { left: 40 },
    theme: "grid",
  });

  // Projects
  doc.setFont("Helvetica", "bold");
  doc.text("Projects", 40, doc.lastAutoTable.finalY + 40);
  doc.setFont("Helvetica", "normal");
  let y = doc.lastAutoTable.finalY + 60;

  doc.text("1. Full-Stack E-Commerce Platform (Spring Boot + React)", 40, y);
  doc.text("- JWT Auth, Product CRUD, Admin Panel, Checkout", 40, y + 20);

  y += 45;

  doc.text("2. Finance Management System (Spring Boot + React + MongoDB)", 40, y);
  doc.text("- Expense Tracking, Dashboards, Categories, CSV Export", 40, y + 20);

  // Achievements
  y += 60;
  doc.setFont("Helvetica", "bold");
  doc.text("Achievements", 40, y);
  doc.setFont("Helvetica", "normal");
  doc.text("- Completed 100-Day LeetCode Challenge", 40, y + 20);

  // Certificates
  y += 60;
  doc.setFont("Helvetica", "bold");
  doc.text("Certificates", 40, y);
  doc.setFont("Helvetica", "normal");
  doc.text("- Udemy Certificate 1", 40, y + 20);
  doc.text("- Udemy Certificate 2", 40, y + 40);

  // Save PDF
  doc.save("Naishal_Patel_CV.pdf");
});


});


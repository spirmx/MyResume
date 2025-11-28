document.addEventListener("DOMContentLoaded", () => {
  // 1. Typing Effect
  const typingElement = document.getElementById("typing-text");
  const roles = ["IT Student.", "Cybersecurity Enthusiast.", "Network Lover.", "Future Developer."];
  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    if (!typingElement) return;
    const currentRole = roles[roleIndex];
    if (isDeleting) {
      typingElement.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typingElement.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
    }
    let typeSpeed = isDeleting ? 50 : 100;
    if (!isDeleting && charIndex === currentRole.length) {
      typeSpeed = 2000; isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false; roleIndex = (roleIndex + 1) % roles.length; typeSpeed = 500;
    }
    setTimeout(type, typeSpeed);
  }
  type();

  // 2. Scroll Animation & Progress Bar
  const progressBar = document.getElementById("progress-bar");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        if (entry.target.id === "skills") {
          document.querySelectorAll(".bar-fill").forEach(bar => {
            bar.style.width = bar.getAttribute("data-width");
          });
        }
      }
    });
  }, { threshold: 0.15 });
  document.querySelectorAll(".reveal, .reveal-left, .reveal-card, .reveal-scale, #skills").forEach(el => observer.observe(el));

  // 3. Navbar, Sticky Logic & Progress Calculation
  const navbar = document.querySelector(".navbar");
  const stickyProfile = document.getElementById("stickyProfile");
  const backToTop = document.getElementById("backToTop");

  window.addEventListener("scroll", () => {
    const y = window.scrollY;
    
    // Navbar Shadow
    navbar.style.boxShadow = y > 50 ? "0 4px 20px rgba(0,0,0,0.1)" : "none";
    
    // Sticky Profile Show/Hide
    if (y > 400) {
      stickyProfile.classList.add("show");
      backToTop.classList.add("show");
    } else {
      stickyProfile.classList.remove("show");
      backToTop.classList.remove("show");
    }

    // Scroll Progress Calculation
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (scrollTop / scrollHeight) * 100;
    if(progressBar) progressBar.style.width = scrolled + "%";
  });

  // 4. 3D Tilt Effect for Cards (ลูกเล่นเอียงการ์ด)
  const cards = document.querySelectorAll(".tilt-card");
  cards.forEach(card => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const w = rect.width;
      const h = rect.height;
      
      // คำนวณองศาการเอียง (-15deg ถึง 15deg)
      const rotateX = ((y / h) - 0.5) * -15; 
      const rotateY = ((x / w) - 0.5) * 15;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = `perspective(1000px) rotateX(0) rotateY(0) scale(1)`;
    });
  });

  // 5. Utilities
  const navToggle = document.getElementById('navToggle');
  const links = document.querySelector('.links');
  if(navToggle) navToggle.addEventListener('click', () => links.classList.toggle('open'));

  const btnLang = document.getElementById("langToggle");
  if(btnLang) {
    btnLang.addEventListener("click", () => {
      const isTH = btnLang.textContent === "EN";
      document.querySelectorAll(".lang-th").forEach(el => el.style.display = isTH ? "none" : "block");
      document.querySelectorAll(".lang-en").forEach(el => el.style.display = isTH ? "block" : "none");
      btnLang.textContent = isTH ? "TH" : "EN";
    });
  }

  const modal = document.getElementById("qrModal");
  const openModal = document.getElementById("openModal");
  const closeModal = document.getElementById("closeModal");
  if(openModal && modal) {
    openModal.addEventListener("click", () => modal.style.display = "flex");
    closeModal.addEventListener("click", () => modal.style.display = "none");
    window.addEventListener("click", (e) => { if (e.target === modal) modal.style.display = "none"; });
  }

  document.getElementById('year').textContent = new Date().getFullYear();
  backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: 'smooth' }));
});

function sendMsg(e) {
  e.preventDefault();
  const f = e.target;
  const subject = encodeURIComponent("Contact from Portfolio: " + f.name.value);
  const body = encodeURIComponent(f.message.value + "\n\nFrom: " + f.name.value + " <" + f.email.value + ">");
  window.location.href = `mailto:sorasakx2530@outlook.co.th?subject=${subject}&body=${body}`;
  f.reset();
  return false;
}
/* ============================================================
   🚀  Interactive Resume Engine
   สร้างสไลด์ทั้งหมดจากข้อมูลใน data.js + คุมอนิเมชัน/การเลื่อน
   ============================================================ */

const D = window.RESUME;
let LANG = 'th';            // ภาษาเริ่มต้น
let current = 0;            // สไลด์ปัจจุบัน
let themeIndex = 0;         // ธีมสีปัจจุบัน
const slides = [];         // เมตาของสไลด์ { label }

/* ---------- helper ---------- */
const el = (tag, cls, html) => {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (html != null) e.innerHTML = html;
  return e;
};
const $ = (s) => document.querySelector(s);

/* ============================================================
   1) สร้างสไลด์ทั้งหมด
   ============================================================ */
function buildDeck() {
  const deck = $('#deck');

  deck.appendChild(slideHero());
  deck.appendChild(slideAbout());
  deck.appendChild(slideEducation());
  deck.appendChild(slideSkills());
  deck.appendChild(slidePortfolio());
  deck.appendChild(slideCerts());
  deck.appendChild(slideContact());

  buildDots();
  $('#brandBtn').innerHTML = `${D.brand}<span class="accent">${D.brandAccent}</span>`;
  $('#cvBtn').href = D.cvFile;
  $('#lineId').textContent = 'LINE ID: ' + D.contact.lineId;
  $('#qrImg').src = D.contact.qr;
  document.querySelectorAll('link[rel="icon"]').forEach(l => l.href = D.favicon);
}

function wrap(id, label, inner) {
  const s = el('section', 'slide');
  s.id = 'slide-' + id;
  s.dataset.label = label;
  const box = el('div', 'slide-inner');
  box.appendChild(inner);
  s.appendChild(box);
  slides.push({ label });
  return s;
}

/* ---------- Slide: Hero ---------- */
function slideHero() {
  const h = D.hero;
  const inner = el('div', 'hero-wrap');
  inner.innerHTML = `
    <img class="hero-avatar anim" src="${h.profileImg}" alt="${h.name}">
    <h1 class="hero-name anim">${h.name}</h1>
    <div class="anim badge-row">
      <span class="spu-badge">
        <span class="spu-ico"><i class="fa-solid ${h.badgeIcon || 'fa-graduation-cap'}"></i></span>
        <span class="from">${h.role}</span>
        <span class="spu-text">${h.university}</span>
      </span>
      ${h.status ? `<span class="status-pill">
        <span class="live-dot"></span>${h.status}
      </span>` : ''}
    </div>
    <div class="typing-line anim">I am a <span id="typing"></span><span class="cursor">&nbsp;</span></div>
    <div class="hero-cta anim">
      <button class="btn btn-primary" data-goto="4"><i class="fa-solid fa-rocket"></i> ดูผลงาน</button>
      <button class="btn btn-ghost" data-goto="6"><i class="fa-regular fa-paper-plane"></i> ติดต่อผม</button>
    </div>
  `;
  return wrap('home', 'Home', inner);
}

/* ---------- Slide: About ---------- */
function slideAbout() {
  const a = D.about;
  const inner = el('div');
  const stats = a.stats.map(s =>
    `<div class="stat glass"><div class="num" data-count="${s.value}" data-suffix="${s.suffix}">0</div><div class="lbl">${s.label}</div></div>`
  ).join('');
  inner.innerHTML = `
    <div class="anim"><span class="eyebrow">Get to know</span></div>
    <h2 class="slide-title anim">About <span class="grad">Me</span></h2>
    <div class="grid-2">
      <div class="anim">
        <p class="about-text" data-about></p>
        <ul class="facts">
          <li><i class="fa-regular fa-envelope"></i> ${D.contact.items[0].label}</li>
          <li><i class="fa-brands fa-github"></i> ${D.contact.items[1].label}</li>
        </ul>
        <div class="stats">${stats}</div>
      </div>
      <div class="about-card glass anim">
        <h3><i class="fa-solid fa-bolt" style="color:var(--accent-4)"></i> <span data-hl-title></span></h3>
        <ul data-highlights></ul>
      </div>
    </div>
  `;
  return wrap('about', 'About', inner);
}

/* ---------- Slide: Education ---------- */
function slideEducation() {
  const inner = el('div');
  const items = D.education.map(e => `
    <div class="tl-item anim">
      <span class="tl-dot"></span>
      <div class="tl-card glass">
        <h4><i class="fa-solid ${e.icon}"></i> ${e.school}</h4>
        <div class="tl-period">${e.degree} • ${e.period}</div>
        <div class="tl-detail">${e.detail}</div>
      </div>
    </div>
  `).join('');
  inner.innerHTML = `
    <div class="anim"><span class="eyebrow">My journey</span></div>
    <h2 class="slide-title anim">Edu<span class="grad">cation</span></h2>
    <div class="timeline">${items}</div>
  `;
  return wrap('education', 'Education', inner);
}

/* ---------- Slide: Skills ---------- */
function slideSkills() {
  const inner = el('div');
  const cards = D.skillCategories.map(c => {
    const lis = c.items.map(i => `<li><i class="${i.icon}" style="color:${i.color}"></i> ${i.name}</li>`).join('');
    return `
      <div class="skill-card glass anim">
        <div class="skill-head">
          <span class="cat-ico" style="background:${c.color}"><i class="fa-solid ${c.icon}"></i></span>
          <h3>${c.title}</h3>
        </div>
        <ul>${lis}</ul>
      </div>`;
  }).join('');
  const bars = D.skillBars.map(b => `
    <div class="bar-row anim">
      <div class="bar-top"><label>${b.label}</label><span>${b.value}%</span></div>
      <div class="bar-track"><div class="bar-fill" data-width="${b.value}%"></div></div>
    </div>
  `).join('');
  inner.innerHTML = `
    <div class="anim"><span class="eyebrow">What I can do</span></div>
    <h2 class="slide-title anim">Technical <span class="grad">Skills</span></h2>
    <div class="skill-grid">${cards}</div>
    <div class="bars">${bars}</div>
  `;
  return wrap('skills', 'Skills', inner);
}

/* ---------- Slide: Portfolio ---------- */
function slidePortfolio() {
  const inner = el('div');
  const cards = D.projects.map((p, idx) => {
    const tags = p.tools.slice(0, 3).map(t => `<span>${t}</span>`).join('');
    return `
      <article class="proj-card tilt anim" data-project="${idx}">
        <span class="proj-icon"><i class="fa-solid ${p.icon}"></i></span>
        <img src="${p.img}" alt="${p.title}">
        <div class="proj-body">
          <div class="proj-sub">${p.subtitle}</div>
          <div class="proj-title">${p.title}</div>
          <div class="proj-tags">${tags}</div>
          <span class="proj-more">ดูรายละเอียด <i class="fa-solid fa-arrow-right"></i></span>
        </div>
      </article>`;
  }).join('');
  inner.innerHTML = `
    <div class="anim"><span class="eyebrow">Things I built</span></div>
    <h2 class="slide-title anim">Port<span class="grad">folio</span></h2>
    <div class="proj-grid">${cards}</div>
  `;
  return wrap('portfolio', 'Portfolio', inner);
}

/* ---------- Slide: Certifications ---------- */
function slideCerts() {
  const inner = el('div');
  const cards = D.certifications.map(c => `
    <div class="cert-card glass anim">
      <div class="cert-badge" style="background:${c.color}"><i class="fa-solid ${c.icon}"></i></div>
      <h4>${c.name}</h4>
      <div class="org">${c.org}</div>
      <div class="date">${c.date}</div>
      <a class="cert-link" href="${c.link}" target="_blank">View Credential <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
    </div>
  `).join('');
  inner.innerHTML = `
    <div class="anim"><span class="eyebrow">Proof of learning</span></div>
    <h2 class="slide-title anim">Certifi<span class="grad">cations</span></h2>
    <div class="cert-grid">${cards}</div>
  `;
  return wrap('certs', 'Certs', inner);
}

/* ---------- Slide: Contact ---------- */
function slideContact() {
  const inner = el('div');
  const items = D.contact.items.map(c => `
    <a class="contact-item glass anim" href="${c.link}" target="_blank">
      <span class="ci-ico"><i class="${c.icon}" style="color:${c.color}"></i></span>
      <span>
        <span class="ci-text">${c.label}</span><br>
        <span class="ci-type">${c.type}</span>
      </span>
    </a>
  `).join('');
  inner.innerHTML = `
    <div class="anim"><span class="eyebrow">Let's connect</span></div>
    <h2 class="slide-title anim">Get in <span class="grad">Touch</span></h2>
    <div class="grid-2">
      <div class="anim">
        <p class="slide-sub">${D.contact.intro}</p>
        <div class="contact-list">${items}</div>
      </div>
      <form class="contact-form glass anim" onsubmit="return sendMsg(event)">
        <input type="text" name="name" placeholder="ชื่อของคุณ" required>
        <input type="email" name="email" placeholder="อีเมล" required>
        <textarea name="message" rows="5" placeholder="ข้อความ..." required></textarea>
        <button class="btn btn-primary" type="submit"><i class="fa-regular fa-paper-plane"></i> ส่งข้อความ</button>
        <button class="btn btn-ghost" type="button" id="openQr"><i class="fa-brands fa-line"></i> สแกน LINE QR</button>
      </form>
    </div>
  `;
  return wrap('contact', 'Contact', inner);
}

/* ============================================================
   2) Dots / นำทาง
   ============================================================ */
function buildDots() {
  const nav = $('#dots');
  slides.forEach((s, i) => {
    const b = el('button', 'dot');
    b.dataset.goto = i;
    b.dataset.label = s.label;
    nav.appendChild(b);
  });
}

function goTo(i) {
  i = Math.max(0, Math.min(slides.length - 1, i));
  const all = document.querySelectorAll('.slide');
  all.forEach((s, idx) => {
    s.classList.remove('active', 'prev');
    if (idx === i) s.classList.add('active');
    else if (idx < i) s.classList.add('prev');
  });
  document.querySelectorAll('.dot').forEach((d, idx) => d.classList.toggle('active', idx === i));

  current = i;
  $('#slide-progress-bar').style.width = ((i + 1) / slides.length * 100) + '%';
  $('#prevBtn').disabled = i === 0;
  $('#nextBtn').disabled = i === slides.length - 1;
  $('#scrollHint').classList.toggle('hide', i !== 0);

  triggerSlide(i);
}

/* อนิเมชันเฉพาะสไลด์ (นับเลข / แถบ) */
function triggerSlide(i) {
  const slide = document.querySelectorAll('.slide')[i];
  if (!slide) return;
  // นับเลขสถิติ
  slide.querySelectorAll('[data-count]').forEach(countUp);
  // แถบทักษะ
  slide.querySelectorAll('.bar-fill').forEach(bar => {
    bar.style.width = '0';
    requestAnimationFrame(() => setTimeout(() => bar.style.width = bar.dataset.width, 200));
  });
}

function countUp(node) {
  const target = +node.dataset.count;
  const suffix = node.dataset.suffix || '';
  let n = 0;
  const step = Math.max(1, Math.ceil(target / 40));
  clearInterval(node._t);
  node._t = setInterval(() => {
    n += step;
    if (n >= target) { n = target; clearInterval(node._t); }
    node.textContent = n + suffix;
  }, 28);
}

/* ============================================================
   3) ภาษา (TH/EN)
   ============================================================ */
function applyLang() {
  const a = D.about;
  document.querySelectorAll('[data-about]').forEach(n => n.innerHTML = a[LANG]);
  document.querySelectorAll('[data-hl-title]').forEach(n => n.textContent = a.highlightsTitle);
  document.querySelectorAll('[data-highlights]').forEach(n => {
    n.innerHTML = a.highlights[LANG].map(h => `<li>${h}</li>`).join('');
  });
  $('#langToggle').textContent = LANG === 'th' ? 'EN' : 'ไทย';
}

/* ============================================================
   4) Typing effect
   ============================================================ */
function startTyping() {
  const node = $('#typing');
  if (!node) return;
  const words = D.hero.typing;
  let w = 0, c = 0, deleting = false;
  function tick() {
    const word = words[w];
    node.textContent = word.slice(0, c);
    if (!deleting && c < word.length) { c++; setTimeout(tick, 90); }
    else if (!deleting && c === word.length) { deleting = true; setTimeout(tick, 1400); }
    else if (deleting && c > 0) { c--; setTimeout(tick, 45); }
    else { deleting = false; w = (w + 1) % words.length; setTimeout(tick, 250); }
  }
  tick();
}

/* ============================================================
   5) Particle background (canvas)
   ============================================================ */
function initParticles() {
  const canvas = $('#particles');
  const ctx = canvas.getContext('2d');
  let w, h, parts = [];
  const COUNT = window.innerWidth < 700 ? 38 : 80;

  function resize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  }
  function make() {
    parts = Array.from({ length: COUNT }, () => ({
      x: Math.random() * w, y: Math.random() * h,
      vx: (Math.random() - .5) * .4, vy: (Math.random() - .5) * .4,
      r: Math.random() * 1.8 + .6
    }));
  }
  const mouse = { x: -999, y: -999 };
  window.addEventListener('mousemove', e => { mouse.x = e.clientX; mouse.y = e.clientY; });

  function loop() {
    ctx.clearRect(0, 0, w, h);
    for (let i = 0; i < parts.length; i++) {
      const p = parts[i];
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > w) p.vx *= -1;
      if (p.y < 0 || p.y > h) p.vy *= -1;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(120,180,255,.6)';
      ctx.fill();
      // เส้นเชื่อมระหว่างอนุภาคใกล้กัน
      for (let j = i + 1; j < parts.length; j++) {
        const q = parts[j];
        const dx = p.x - q.x, dy = p.y - q.y;
        const dist = dx * dx + dy * dy;
        if (dist < 13000) {
          ctx.globalAlpha = 1 - dist / 13000;
          ctx.strokeStyle = 'rgba(80,140,240,.35)';
          ctx.lineWidth = .6;
          ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y); ctx.stroke();
          ctx.globalAlpha = 1;
        }
      }
      // ดึงเข้าหาเมาส์เล็กน้อย
      const mdx = mouse.x - p.x, mdy = mouse.y - p.y;
      const md = Math.hypot(mdx, mdy);
      if (md < 140) { p.x += mdx / md * .5; p.y += mdy / md * .5; }
    }
    requestAnimationFrame(loop);
  }
  resize(); make(); loop();
  window.addEventListener('resize', () => { resize(); make(); });
}

/* ============================================================
   6) Tilt 3D effect บนการ์ดโปรเจกต์
   ============================================================ */
function initTilt() {
  document.querySelectorAll('.tilt').forEach(card => {
    card.addEventListener('mousemove', e => {
      const r = card.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - .5;
      const py = (e.clientY - r.top) / r.height - .5;
      card.style.transform = `perspective(700px) rotateY(${px * 10}deg) rotateX(${-py * 10}deg) translateY(-6px)`;
    });
    card.addEventListener('mouseleave', () => { card.style.transform = ''; });
  });
}

/* ============================================================
   7) Modal โปรเจกต์
   ============================================================ */
function openProject(idx) {
  const p = D.projects[idx];
  const tags = p.tools.map(t => `<span>${t}</span>`).join('');
  const linkBtn = p.link
    ? `<a class="btn btn-primary" href="${p.link}" target="_blank"><i class="fa-solid fa-arrow-up-right-from-square"></i> เปิดโปรเจกต์จริง</a>`
    : `<span class="proj-sub">โปรเจกต์ส่วนตัว / ยังไม่เผยแพร่</span>`;
  $('#modalBody').innerHTML = `
    <img class="modal-img" src="${p.img}" alt="${p.title}">
    <div class="modal-pad">
      <h2>${p.title}</h2>
      <div class="m-sub">${p.subtitle}</div>
      <div class="modal-tags">${tags}</div>
      <p>${p.desc}</p>
      <p>${p.longDesc}</p>
      ${linkBtn}
    </div>
  `;
  $('#projectModal').classList.add('open');
}

/* ============================================================
   8) ฟอร์มติดต่อ
   ============================================================ */
function sendMsg(e) {
  e.preventDefault();
  const f = e.target;
  const subject = encodeURIComponent('ติดต่อจากเว็บ Resume — ' + f.name.value);
  const body = encodeURIComponent(`ชื่อ: ${f.name.value}\nอีเมล: ${f.email.value}\n\n${f.message.value}`);
  window.location.href = `mailto:${D.contact.items[0].label}?subject=${subject}&body=${body}`;
  return false;
}

/* ============================================================
   9) ธีมสี (สลับโทนทั้งเว็บ + จำค่าที่เลือก)
   ============================================================ */
function applyTheme(i) {
  const list = D.themes;
  themeIndex = ((i % list.length) + list.length) % list.length;
  const t = list[themeIndex];
  const r = document.documentElement.style;
  r.setProperty('--accent',   t.accent);
  r.setProperty('--accent-2', t.accent2);
  r.setProperty('--accent-3', t.accent3);
  r.setProperty('--accent-4', t.accent4);
  r.setProperty('--glow', `0 0 40px ${t.accent}59`);

  const dot = document.querySelector('.theme-dot');
  if (dot) dot.style.background = `linear-gradient(120deg, ${t.accent}, ${t.accent2})`;
  const btn = document.getElementById('themeToggle');
  if (btn) btn.title = 'ธีม: ' + t.name;
  try { localStorage.setItem('resumeTheme', themeIndex); } catch (_) {}
}

let toastTimer;
function showToast(msg) {
  let el = document.getElementById('toast');
  if (!el) { el = document.createElement('div'); el.id = 'toast'; document.body.appendChild(el); }
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('show'), 1600);
}

/* ============================================================
   10) Event wiring + navigation
   ============================================================ */
function wireEvents() {
  // คลิกปุ่มที่มี data-goto
  document.body.addEventListener('click', e => {
    const g = e.target.closest('[data-goto]');
    if (g) { goTo(+g.dataset.goto); return; }
    const proj = e.target.closest('[data-project]');
    if (proj) { openProject(+proj.dataset.project); return; }
    if (e.target.closest('#openQr')) { $('#qrModal').classList.add('open'); }
  });

  $('#prevBtn').onclick = () => goTo(current - 1);
  $('#nextBtn').onclick = () => goTo(current + 1);
  $('#modalClose').onclick = () => $('#projectModal').classList.remove('open');
  $('#qrClose').onclick = () => $('#qrModal').classList.remove('open');
  document.querySelectorAll('.modal').forEach(m =>
    m.addEventListener('click', e => { if (e.target === m) m.classList.remove('open'); })
  );

  $('#langToggle').onclick = () => { LANG = LANG === 'th' ? 'en' : 'th'; applyLang(); };
  $('#themeToggle').onclick = () => {
    applyTheme(themeIndex + 1);
    showToast('🎨 ' + D.themes[themeIndex].name);
  };

  // คีย์บอร์ด
  window.addEventListener('keydown', e => {
    if (e.key === 'ArrowDown' || e.key === 'PageDown' || e.key === ' ') { e.preventDefault(); goTo(current + 1); }
    else if (e.key === 'ArrowUp' || e.key === 'PageUp') { e.preventDefault(); goTo(current - 1); }
    else if (e.key === 'Home') goTo(0);
    else if (e.key === 'End') goTo(slides.length - 1);
    else if (e.key === 'Escape') document.querySelectorAll('.modal.open').forEach(m => m.classList.remove('open'));
  });

  // ล้อเมาส์ (มี throttle)
  let wheelLock = false;
  window.addEventListener('wheel', e => {
    if (document.querySelector('.modal.open')) return;
    const slide = document.querySelectorAll('.slide')[current];
    // ถ้าสไลด์เลื่อนภายในได้ (เนื้อหายาว) ให้เลื่อนในก่อน
    const canScroll = slide.scrollHeight > slide.clientHeight + 4;
    if (canScroll) {
      const atTop = slide.scrollTop <= 0;
      const atBottom = slide.scrollTop + slide.clientHeight >= slide.scrollHeight - 4;
      if ((e.deltaY > 0 && !atBottom) || (e.deltaY < 0 && !atTop)) return;
    }
    if (wheelLock) return;
    wheelLock = true;
    setTimeout(() => wheelLock = false, 850);
    goTo(current + (e.deltaY > 0 ? 1 : -1));
  }, { passive: true });

  // สัมผัส (swipe)
  let ty = 0;
  window.addEventListener('touchstart', e => ty = e.touches[0].clientY, { passive: true });
  window.addEventListener('touchend', e => {
    if (document.querySelector('.modal.open')) return;
    const dy = ty - e.changedTouches[0].clientY;
    if (Math.abs(dy) > 55) goTo(current + (dy > 0 ? 1 : -1));
  }, { passive: true });
}

/* ============================================================
   11) Init
   ============================================================ */
window.addEventListener('DOMContentLoaded', () => {
  buildDeck();
  applyLang();
  applyTheme(+(localStorage.getItem('resumeTheme') || 0));
  wireEvents();
  initParticles();
  initTilt();
  startTyping();

  // ซ่อน loader แล้วโชว์สไลด์แรก
  setTimeout(() => {
    $('#loader').classList.add('hide');
    goTo(0);
  }, 900);
});

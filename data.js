/* ============================================================
   ⚙️  ไฟล์ข้อมูลหลัก — แก้ตรงนี้ที่เดียวพอ ไม่ต้องแตะ HTML
   ทุกอย่างในเว็บถูกสร้างจากข้อมูลในไฟล์นี้
   ============================================================ */

const RESUME = {

  /* ---------- ข้อมูลทั่วไป / Branding ---------- */
  brand: "SORASAK",
  brandAccent: ".ARM",
  cvFile: "assets/CV.pdf",          // ไฟล์ Resume สำหรับปุ่มดาวน์โหลด
  favicon: "assets/profile.jpg",

  /* ---------- ชุดธีมสี (กดปุ่ม 🎨 มุมขวาบนเพื่อสลับ) ---------- */
  themes: [
    { name: "Cyber Blue",   accent: "#38bdf8", accent2: "#a78bfa", accent3: "#34d399", accent4: "#fb7185" },
    { name: "Neon Purple",  accent: "#a78bfa", accent2: "#f472b6", accent3: "#22d3ee", accent4: "#fbbf24" },
    { name: "Matrix Green", accent: "#34d399", accent2: "#22d3ee", accent3: "#a3e635", accent4: "#f59e0b" },
    { name: "Sunset",       accent: "#fb7185", accent2: "#fbbf24", accent3: "#f472b6", accent4: "#38bdf8" },
    { name: "Ice Mint",     accent: "#22d3ee", accent2: "#34d399", accent3: "#a78bfa", accent4: "#f472b6" }
  ],

  /* ---------- หน้าแรก (Hero) ---------- */
  hero: {
    name: "SORASAK SONKRAI",
    nameTh: "สรศักดิ์ ศรไกร",
    university: "Sripatum University",
    role: "Student at",
    badgeIcon: "fa-graduation-cap",          // ไอคอนในป้ายมหา'ลัย
    status: "Open for Internship",           // ป้ายสถานะ (เว้นว่าง "" = ซ่อน)
    statusIcon: "fa-circle",                 // จุดไฟกะพริบ
    profileImg: "assets/profile.jpg",
    // ข้อความที่จะวิ่งพิมพ์สลับกันไปเรื่อยๆ
    typing: [
      "IT Student 💻",
      "Cybersecurity Enthusiast 🛡️",
      "Network Designer 🌐",
      "Self-Learner 🚀",
      "Problem Solver 🧩"
    ]
  },

  /* ---------- เกี่ยวกับฉัน (About) ---------- */
  about: {
    th: "สวัสดีครับ ผม <strong>สรศักดิ์ ศรไกร</strong> นักศึกษาสายไอทีที่มีความสนใจอย่างลึกซึ้งในด้าน <strong>Cybersecurity</strong> และ <strong>Network Infrastructure</strong> ผมชอบเปลี่ยนความท้าทายให้เป็นประสบการณ์ และพร้อมเรียนรู้เทคโนโลยีใหม่ๆ เพื่อนำมาประยุกต์ใช้งานจริง",
    en: "Hi! I'm <strong>Sorasak Sonkrai</strong>, an IT student passionate about <strong>Cybersecurity</strong> and <strong>Network Infrastructure</strong>. I enjoy turning challenges into experience and am always eager to learn new technologies for real-world application.",
    highlightsTitle: "Highlights",
    highlights: {
      th: [
        "สนใจระบบความปลอดภัยไซเบอร์",
        "ชอบเรียนรู้ด้วยตนเอง (Self-Learner)",
        "ทำงานเป็นทีมและสื่อสารได้ดี",
        "กำลังมองหาที่ฝึกงานสหกิจศึกษา"
      ],
      en: [
        "Focus on Cybersecurity & Network",
        "Strong Self-Learning Ability",
        "Great Teamwork & Communication",
        "Open for Internship Opportunities"
      ]
    },
    // ตัวเลขสถิติเด่นๆ (วิ่งนับเลข)
    stats: [
      { value: 5,  suffix: "+", label: "Projects" },
      { value: 3,  suffix: "+", label: "Certificates" },
      { value: 10, suffix: "+", label: "Technologies" },
      { value: 2,  suffix: "",  label: "Years Coding" }
    ]
  },

  /* ---------- การศึกษา (Education) ---------- */
  education: [
    {
      school: "Sripatum University",
      degree: "B.Sc. Information Technology",
      period: "2023 – Present",
      detail: "Database, Web Development, Network System",
      icon: "fa-graduation-cap"
    },
    {
      school: "U-Thong School",
      degree: "High School (Science-Math)",
      period: "2017 – 2022",
      detail: "Mathematics & Science Program",
      icon: "fa-school"
    }
  ],

  /* ---------- ทักษะ (Skills) ---------- */
  skillCategories: [
    {
      title: "Frontend",
      icon: "fa-code",
      color: "#38bdf8",
      items: [
        { name: "HTML5",      icon: "fa-brands fa-html5",       color: "#e34f26" },
        { name: "CSS3",       icon: "fa-brands fa-css3-alt",    color: "#1572b6" },
        { name: "JavaScript", icon: "fa-brands fa-js",          color: "#e8b71a" },
        { name: "Bootstrap",  icon: "fa-brands fa-bootstrap",   color: "#7952b3" }
      ]
    },
    {
      title: "Backend",
      icon: "fa-server",
      color: "#a78bfa",
      items: [
        { name: "PHP",         icon: "fa-brands fa-php",    color: "#777bb4" },
        { name: "Python",      icon: "fa-brands fa-python", color: "#3776ab" },
        { name: "Java (Basic)",icon: "fa-brands fa-java",   color: "#e76f00" }
      ]
    },
    {
      title: "Database",
      icon: "fa-database",
      color: "#34d399",
      items: [
        { name: "MySQL",    icon: "fa-solid fa-database",     color: "#00758f" },
        { name: "AppSheet", icon: "fa-solid fa-table-cells",  color: "#34a853" }
      ]
    },
    {
      title: "Security & Tools",
      icon: "fa-shield-halved",
      color: "#fb7185",
      items: [
        { name: "Kali Linux",          icon: "fa-brands fa-linux",         color: "#88aabb" },
        { name: "Cisco Packet Tracer", icon: "fa-solid fa-network-wired",  color: "#1ba0d7" },
        { name: "Git / GitHub",        icon: "fa-brands fa-git-alt",       color: "#f05032" }
      ]
    },
    {
      title: "AI / LLM Use",
      icon: "fa-robot",
      color: "#f59e0b",
      items: [
        { name: "Prompt Engineering",   icon: "fa-solid fa-wand-magic-sparkles", color: "#a78bfa" },
        { name: "Google Gemini",        icon: "fa-brands fa-google",             color: "#4285f4" },
        { name: "Open Source AI",       icon: "fa-solid fa-robot",               color: "#7c8cff" }
      ]
    }
  ],

  // แถบความสามารถ (Progress bars)
  skillBars: [
    { label: "Frontend Dev",        value: 50 },
    { label: "Backend & DB",        value: 45 },
    { label: "Network & Security",  value: 60 },
    { label: "AI/LLM & Soft Skills",value: 70 }
  ],

  /* ---------- ผลงาน (Portfolio) ---------- */
  projects: [
    {
      title: "PAPAYA SHOP",
      subtitle: "E-Commerce",
      desc: "ร้านค้าออนไลน์จำลองสำหรับขายสินค้า ฝึกการใช้ HTML, CSS, JavaScript เพื่อสร้างหน้าเว็บ Responsive ที่ใช้งานได้ดี",
      longDesc: "เป็นโปรเจกต์ที่มุ่งเน้นการสร้างประสบการณ์ผู้ใช้ที่ดีตั้งแต่ต้นจนจบ ตั้งแต่หน้าสินค้าไปจนถึงหน้าตะกร้าสินค้า โดยใช้ CSS Grid และ Flexbox เป็นหลักในการจัดวาง เพื่อให้เว็บไซต์ดูดีบนทุกอุปกรณ์",
      tools: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
      img: "https://placehold.co/800x500/0f172a/38bdf8?text=PAPAYA+SHOP",
      link: "https://spirmx.github.io/PAPAYA-PogPog/",
      icon: "fa-cart-shopping"
    },
    {
      title: "Member Login System",
      subtitle: "Auth / Backend",
      desc: "ระบบจัดการสมาชิกและเข้าสู่ระบบพื้นฐาน สร้างด้วย PHP และ MySQL เพื่อเข้าใจการทำงานของ Server-side และการเชื่อมต่อฐานข้อมูล",
      longDesc: "ระบบมีการป้องกัน SQL Injection เบื้องต้น และใช้ Session Management ในการควบคุมการเข้าถึงหน้าต่างๆ เพื่อจำกัดสิทธิ์ผู้ใช้",
      tools: ["PHP", "MySQL", "HTML", "CSS"],
      img: "https://placehold.co/800x500/0f172a/a78bfa?text=LOGIN+SYSTEM",
      link: "",
      icon: "fa-right-to-bracket"
    },
    {
      title: "Network Infrastructure",
      subtitle: "Network Design",
      desc: "ออกแบบเครือข่ายสำหรับองค์กรขนาดเล็ก-กลาง ด้วย Cisco Packet Tracer จำลอง Router, Switch และ VLANs เพื่อความปลอดภัยและประสิทธิภาพ",
      longDesc: "โปรเจกต์นี้แสดงให้เห็นถึงความเข้าใจในการออกแบบ IP Addressing Scheme, การกำหนดค่า Spanning Tree Protocol และการรักษาความปลอดภัยของ Port",
      tools: ["Cisco Packet Tracer", "VLAN", "Subnetting"],
      img: "https://placehold.co/800x500/0f172a/34d399?text=NETWORK+TOPOLOGY",
      link: "",
      icon: "fa-network-wired"
    },
    {
      title: "Inventory Management",
      subtitle: "No-Code App",
      desc: "แอปจัดการสินค้าคงคลังแบบ No-Code/Low-Code ด้วย Google AppSheet ให้ผู้ใช้ที่ไม่มีความรู้ด้านโค้ดจัดการข้อมูลได้ง่าย",
      longDesc: "แอปฯ ถูกออกแบบมาให้ใช้งานง่ายบนมือถือ สามารถสแกนบาร์โค้ดเพื่ออัปเดตสต็อกสินค้าได้ทันที ทำให้การทำงานในคลังสินค้ามีประสิทธิภาพมากขึ้น",
      tools: ["AppSheet", "Google Sheets", "No-Code"],
      img: "https://placehold.co/800x500/0f172a/fb7185?text=INVENTORY+APP",
      link: "",
      icon: "fa-boxes-stacked"
    }
  ],

  /* ---------- ใบรับรอง (Certifications) ---------- */
  certifications: [
    { name: "Cisco Networking Essentials", org: "Cisco Networking Academy", date: "2024", link: "#", icon: "fa-network-wired", color: "#3b82f6" },
    { name: "Python for Beginners",        org: "Codecademy",                date: "2023", link: "#", icon: "fa-python",        color: "#f59e0b" },
    { name: "Cybersecurity Fundamentals",  org: "IBM",                       date: "2024", link: "#", icon: "fa-shield-halved", color: "#10b981" }
  ],

  /* ---------- ติดต่อ (Contact) ---------- */
  contact: {
    intro: "พร้อมเรียนรู้งานและร่วมงานเสมอครับ ติดต่อผมได้ตามช่องทางด้านล่าง",
    lineId: "Phiarmy",
    qr: "assets/qrcode.jpg",
    items: [
      { type: "email",    label: "sorasakx2530@outlook.co.th", link: "mailto:sorasakx2530@outlook.co.th", icon: "fa-solid fa-envelope",   color: "#f59e0b" },
      { type: "github",   label: "github.com/spirmx",          link: "https://github.com/spirmx",          icon: "fa-brands fa-github",    color: "#e2e8f0" },
      { type: "facebook", label: "บุรุษ แห่งเมคลี",              link: "https://facebook.com/hiyturbrp",     icon: "fa-brands fa-facebook",  color: "#1877f2" },
      { type: "linkedin", label: "Sorasak Sonkrai",            link: "https://www.linkedin.com/in/spirmx",  icon: "fa-brands fa-linkedin",  color: "#0a66c2" },
      { type: "location", label: "Bangkok, Thailand",          link: "#",                                   icon: "fa-solid fa-location-dot", color: "#fb7185" }
    ]
  }
};

// เปิดให้ script.js เรียกใช้ได้
window.RESUME = RESUME;

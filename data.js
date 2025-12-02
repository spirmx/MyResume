// ข้อมูล Portfolio ทั้งหมด
const projects = {
    'papaya': {
        title: 'PAPAYA SHOP (E-Commerce)',
        desc: 'โปรเจกต์ร้านค้าออนไลน์จำลองสำหรับขายสินค้า ได้ฝึกฝนการใช้ HTML, CSS และ JavaScript เพื่อสร้างหน้าเว็บที่ตอบสนองต่อการใช้งานได้ดี (Responsive Design).',
        tools: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
        img: 'https://placehold.co/800x500/1e293b/FFF?text=PAPAYA+SHOP+MOCKUP',
        link: 'https://spirmx.github.io/PAPAYA-PogPog/', 
        longDesc: "เป็นโปรเจกต์ที่มุ่งเน้นการสร้างประสบการณ์ผู้ใช้ที่ดีตั้งแต่ต้นจนจบ ตั้งแต่หน้าสินค้า ไปจนถึงหน้าตะกร้าสินค้า โดยใช้ CSS Grid และ Flexbox เป็นหลักในการจัดวาง เพื่อให้เว็บไซต์ดูดีบนทุกอุปกรณ์"
    },
    'login': {
        title: 'Member Login System',
        desc: 'ระบบจัดการสมาชิกและเข้าสู่ระบบพื้นฐาน สร้างด้วย PHP และ MySQL เพื่อทำความเข้าใจการทำงานของ Server-side Scripting และการเชื่อมต่อฐานข้อมูล',
        tools: ['PHP', 'MySQL', 'HTML', 'CSS'],
        img: 'https://placehold.co/800x500/1e293b/FFF?text=Login+System+MOCKUP',
        link: 'https://spirmx.github.io/MyResume',
        longDesc: "ระบบมีการป้องกัน SQL Injection เบื้องต้น และใช้ Session Management ในการควบคุมการเข้าถึงหน้าต่างๆ เพื่อจำกัดสิทธิ์ผู้ใช้"
    },
    'network': {
        title: 'Network Infrastructure Design',
        desc: 'การออกแบบเครือข่ายสำหรับองค์กรขนาดเล็ก-กลาง โดยใช้ Cisco Packet Tracer เพื่อจำลองการทำงานของ Router, Switch และ VLANs เพื่อเพิ่มความปลอดภัยและประสิทธิภาพ',
        tools: ['Cisco Packet Tracer', 'VLAN', 'Subnetting'],
        img: 'https://placehold.co/800x500/1e293b/FFF?text=NETWORK+TOPOLOGY',
        link: 'https://spirmx.github.io/MyResume',
        longDesc: "โปรเจกต์นี้แสดงให้เห็นถึงความเข้าใจในการออกแบบ IP Addressing Scheme, การกำหนดค่า Spanning Tree Protocol และการรักษาความปลอดภัยของ Port"
    },
    'inventory': {
        title: 'Inventory Management App',
        desc: 'แอปพลิเคชันจัดการสินค้าคงคลังแบบ No-Code/Low-Code พัฒนาด้วย Google AppSheet เพื่อให้ผู้ใช้งานที่ไม่มีความรู้ด้านโค้ดสามารถจัดการข้อมูลสินค้าได้อย่างง่ายดาย',
        tools: ['AppSheet', 'Google Sheets', 'No-Code'],
        img: 'https://placehold.co/800x500/1e293b/FFF?text=APPSHEET+DASHBOARD',
        link: 'https://spirmx.github.io/MyResume',
        longDesc: "แอปฯ ถูกออกแบบมาให้ใช้งานง่ายบนมือถือ สามารถสแกนบาร์โค้ดเพื่ออัปเดตสต็อกสินค้าได้ทันที ทำให้การทำงานในคลังสินค้ามีประสิทธิภาพมากขึ้น"
    }
};

// ข้อมูล Certifications ทั้งหมด
const certifications = [
    { name: "Cisco Networking Essentials", org: "Cisco Networking Academy", date: "2024", verifyLink: "#", img: "https://placehold.co/600x400/3b82f6/FFF?text=CISCO+CERT" },
    { name: "Python for Beginners", org: "Codecademy", date: "2023", verifyLink: "#", img: "https://placehold.co/600x400/f59e0b/FFF?text=PYTHON+CERT" },
    { name: "Cybersecurity Fundamentals", org: "IBM", date: "2024", verifyLink: "#", img: "https://placehold.co/600x400/10b981/FFF?text=CYBER+CERT" }
];

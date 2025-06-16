function toggleTheme() {
  document.body.classList.toggle("dark");
}

function showIntro() {
  showModal(`
    👋 <strong>Hi, I'm IHEDIOHA IFEYINWA</strong><br><br>
    Fueled by <strong>tech</strong>, <strong>creative curiosity</strong>, and <strong>code</strong> — I build with purpose, learn with heart, and create with joy. ✨
  `);
}

function showProjects() {
  showModal(`
    💻 <strong>My Projects</strong><br>
    <ul>
      <li><a href="https://flowbelle.netlify.app" target="_blank">FlowBelle – Period Tracker</a></li>
      <li><a href="https://naturegreen.netlify.app" target="_blank">Nature Green – Eco Landing Page</a></li>
      <li><a href="https://flowdot.vercel.app" target="_blank">FlowDot – Cycle Calendar</a></li>
    </ul>
  `);
}

function showSkills() {
  showModal(`
    📚 <strong>Skills & Tools</strong><br>
    <ul>
      <li>HTML, CSS, JavaScript</li>
      <li>Responsive Design & UI/UX</li>
      <li>Figma, Git & GitHub, Netlify</li>
      <li>QA Testing Basics</li>
    </ul>
  `);
}

function showFun() {
  showModal("🌼 <strong>Fun Fact</strong><br>I love soft, glowing web designs, magical user interfaces, and expressing my creativity through digital art ✨");
}

function showContact() {
  showModal(`
    📝 <strong>Contact Me</strong><br>
    📧 Email: you@example.com<br><br>
    🐙 <a href="https://github.com/yourusername" target="_blank">GitHub</a><br>
    🔗 <a href="https://linkedin.com/in/yourname" target="_blank">LinkedIn</a><br><br>
    📄 <a href="cv.pdf" download>Download My CV</a><br><br>
    📅 Currently available for internships & freelance gigs!
  `);
}

function showModal(content) {
  const modal = document.getElementById("modal");
  const modalContent = document.getElementById("modal-content");
  modalContent.innerHTML = content;
  modal.classList.remove("hidden");
}

function closeModal() {
  document.getElementById("modal").classList.add("hidden");
}

function toggleTheme() {
  document.body.classList.toggle("dark");
}

function showIntro() {
  showModal(`
    👋 <strong>Hi, I'm IHEDIOHA IFEYINWA</strong><br><br>
    A Frontend Web Developer fueled by <strong>tech</strong>, <strong>creative curiosity</strong>, and <strong>code</strong> — I build with purpose, learn with heart, and create with joy. ✨
  `);
}

function showProjects() {
  showModal(`
    💻 <strong>My Projects</strong><br><br>

    <p><strong>🌸 FlowBelle – Period Tracker</strong><br>
    A soft, intuitive menstrual tracking app inspired by Flo. Tracks cycles, moods, ovulation, and symptoms with personalized insights.<br>
    <span class="tag">HTML</span> <span class="tag">CSS</span> <span class="tag">JavaScript</span> <span class="tag">React</span><br>
    <a href="https://flowdot.vercel.app" target="_blank">Visit FlowBelle</a></p><br>

    <p><strong>🏋️‍♀️ GymVerse – E-commerce for Fitness</strong><br>
    A sleek and responsive fitness gear e-commerce site with clean UI and product exploration features.<br>
    <span class="tag">HTML</span> <span class="tag">CSS</span> <span class="tag">JavaScript</span> <span class="tag">React</span><br>
    <a href="https://gymverse-blond.vercel.app" target="_blank">Visit GymVerse</a></p><br>

    <p><strong>🍲 Recipe Finder</strong><br>
    A smart recipe discovery tool with interactive cards, ratings, and favorites. Helps users explore meals based on preference.<br>
    <span class="tag">HTML</span> <span class="tag">CSS</span> <span class="tag">JavaScript</span><br>
    <a href="https://recipefinder-self.vercel.app" target="_blank">Try Recipe Finder</a></p><br>

    <p><strong>💸 PennyWise – Budget App</strong><br>
    A minimal budgeting app to track daily expenses, manage income, and visualize savings goals easily.<br>
    <span class="tag">HTML</span> <span class="tag">CSS</span> <span class="tag">JavaScript</span><br>
    <a href="https://pennywise-gamma.vercel.app" target="_blank">Use PennyWise</a></p><br>

    <p><strong>📝 Daily Task Agenda</strong><br>
    A lightweight to-do planner for organizing your daily tasks with a clean, calming UI.<br>
    <span class="tag">HTML</span> <span class="tag">CSS</span> <span class="tag">JavaScript</span><br>
    <a href="https://dailytaskagenda.vercel.app" target="_blank">View Daily Agenda</a></p>
  `);
}


function showSkills() {
  showModal(`
    <h1>📚 <strong>Skills & Tools</h1></strong><br><br>

    <h2>💻 Frontend</h2>
    <div class="tech-icons">
      <div><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML" /><p>HTML</p></div>
      <div><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS" /><p>CSS</p></div>
      <div><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" /><p>JavaScript</p></div>
      <div><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" /><p>React</p></div>
      <div><img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="Tailwind" /><p>Tailwind</p></div>
    </div>

    <h2>⚙️ Tools</h2>
    <div class="tech-icons">
      <div><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" alt="VS Code" /><p>VS Code</p></div>
      <div><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" /><p>GitHub</p></div>
      <div><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" /><p>Git</p></div>
      <div><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-plain.svg" alt="Netlify" /><p>Netlify</p></div>
    </div>

    <h2>🎨 Design</h2>
    <div class="tech-icons">
      <div><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="Figma" /><p>Figma</p></div>
    </div>
  `);
}

function showFun() {
  showModal(`
    🌼 <strong>Fun Fact</strong><br>
    When I’m not designing dreamy interfaces or building smooth web experiences, you’ll probably find me lifting at home, adjusting my glute routine, or syncing workout ideas into tech projects. I treat pixels like reps — intentional, focused, and always aiming for growth. (And yes, my favorite color palette has <em>serious</em> quad energy 💪✨)
  `);
}


function showContact() {
  showModal(`
    <strong>📬 Contact Me</strong><br><br>
    <p>Email: <a href="mailto:ihediohaifeyinwa@gmail.com">ihediohaifeyinwa@gmail.com</a></p>

    <div class="social-icons" style="margin: 20px 0; font-size: 1.8rem;">
      <a href="https://www.instagram.com/ify_fii?igsh=YzZhcXB3bDIxcWJr&utm_source=qr" target="_blank" title="Instagram">
        <i class="fab fa-instagram"></i>
      </a>
      <a href="https://x.com/tech_girl_?s=21" target="_blank" title="X">
        <i class="fab fa-x-twitter"></i>
      </a>
      <a href="https://github.com/Ifhy1" target="_blank" title="GitHub">
        <i class="fab fa-github"></i>
      </a>
      <a href="https://www.linkedin.com/in/ifeyinwa-ihedioha-522219267" target="_blank" title="LinkedIn">
        <i class="fab fa-linkedin"></i>
      </a>
    </div>

    <a href="cv.pdf" download>📄 Download My CV</a><br><br>
    <p>📅 Currently available for internships & freelance gigs!</p>
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

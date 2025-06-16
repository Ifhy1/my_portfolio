function toggleTheme() {
  document.body.classList.toggle("dark");
}

function showProjects() {
  showModal("✨ <strong>My Projects</strong><br>• FlowBelle App<br>• Nature Green<br>• Recipe Finder<br>• More coming soon...");
}

function showSkills() {
  showModal("📚 <strong>My Skills</strong><br>HTML, CSS, JavaScript, UI/UX, Responsive Design, Beginner QA Testing");
}

function showFun() {
  showModal("🪴 Here's a fun fact:<br>I love mixing creativity with code — soft visuals, strong logic!");
}

function showContact() {
  showModal("📝 Let's Connect:<br>Email: you@example.com<br>LinkedIn / GitHub coming soon!");
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

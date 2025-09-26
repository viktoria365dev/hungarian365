// 1. Declare variables
let phrases = [];

// 2. Phrase feature (only runs if elements exist)
const huEl = document.getElementById("hungarianPhrase");
const enEl = document.getElementById("englishTranslation");
const btn = document.getElementById("newPhraseBtn");

if (huEl && enEl && btn) {
  fetch("phrases.json")
    .then((response) => response.json())
    .then((data) => {
      phrases = data;
      showRandomPhrase();
    })
    .catch((error) => console.error("Error loading phrases:", error));

  function showRandomPhrase() {
    const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
    huEl.classList.add("fade-out");
    enEl.classList.add("fade-out");

    setTimeout(() => {
      huEl.textContent = randomPhrase.hu;
      enEl.textContent = randomPhrase.en;
      huEl.classList.remove("fade-out");
      enEl.classList.remove("fade-out");
    }, 500);
  }

  btn.addEventListener("click", showRandomPhrase);
}

// 3. Footer year + EMAIL
document.addEventListener("DOMContentLoaded", function () {
  // Dynamic year
  const yearSpan = document.getElementById("currentYear");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
  const user = "hungarian365";
  const domain = "gmail.com";
  const email = `${user}@${domain}`;

  // Email obfuscation for Contact page button
  const emailButton = document.getElementById("emailButton");
  if (emailButton) {
    emailButton.innerHTML = `<a href="mailto:${email}" class="btn btn-success">Email</a>`;
  }
});

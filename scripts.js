let phrases = [];

fetch("phrases.json")
  .then((response) => response.json())
  .then((data) => {
    phrases = data;
    showRandomPhrase();
  })
  .catch((error) => console.error("Error loading phrases:", error));

const huEl = document.getElementById("hungarianPhrase");
const enEl = document.getElementById("englishTranslation");
const btn = document.getElementById("newPhraseBtn");

function showRandomPhrase() {
  const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];

  huEl.classList.add("fade-out");
  enEl.classList.add("fade-out");

  setTimeout(() => {
    // Change text after fade-out
    huEl.textContent = randomPhrase.hu;
    enEl.textContent = randomPhrase.en;

    huEl.classList.remove("fade-out");
    enEl.classList.remove("fade-out");
  }, 500);
}

btn.addEventListener("click", showRandomPhrase);

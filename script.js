// animação simples de texto digitando
const texto = "• Desenvolvedora Back-end •";
let index = 0;

function escrever() {
  const header = document.querySelector("header p");
  if (index < texto.length) {
    header.textContent += texto.charAt(index);
    index++;
    setTimeout(escrever, 70);
  }
}

window.addEventListener("load", () => {
  const header = document.querySelector("header p");
  header.textContent = "";
  escrever();
});

// animação dos cards ao rolar
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

document.querySelectorAll(".card").forEach(card => {
  card.classList.add("hidden");
  observer.observe(card);
});

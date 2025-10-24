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

// Seleciona ambos os formulários, se existirem
const forms = document.querySelectorAll(".home-form, .contact-form");

forms.forEach(form => {
  form.addEventListener("submit", function(e) {
    e.preventDefault();

    showMessage("✅ Mensagem enviada com sucesso!");

    setTimeout(() => {
      form.submit(); // envia pro FormSubmit normalmente
    }, 1000);
  });
});

function showMessage(text) {
  const msg = document.createElement("div");
  msg.classList.add("alert");
  msg.textContent = text;
  document.body.appendChild(msg);
  setTimeout(() => msg.remove(), 3000);
}




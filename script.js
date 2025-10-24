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

// Easter Egg: tecla secreta "N"
document.addEventListener("keydown", (e) => {
  if (e.key.toLowerCase() === "n") {
    showMessage("💡 Ei, você descobriu um Easter Egg!");
  }
});

// ==== MODAL DE IMAGEM ====
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");
const closeModal = document.querySelector(".close");

document.querySelectorAll(".project-img").forEach(img => {
  img.addEventListener("click", () => {
    modal.style.display = "block";
    modalImg.src = img.src;
  });
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

// ==== SLIDER DAS IMAGENS DOS PROJETOS ====
document.querySelectorAll(".project-slider").forEach((slider) => {
  const images = Array.from(slider.querySelectorAll(".project-img"));
  const prev = slider.querySelector(".prev");
  const next = slider.querySelector(".next");
  let index = 0; // começa na primeira imagem

  // Mostra apenas a imagem ativa
  function showImage(n) {
    images.forEach((img, i) => {
      img.classList.toggle("active", i === n);
      img.style.zIndex = i === n ? "2" : "1"; // garante que a ativa fica na frente
    });
  }

  // Botão "próximo"
  next.addEventListener("click", (e) => {
    e.stopPropagation();
    index = (index + 1) % images.length; // volta ao início se chegar ao fim
    showImage(index);
  });

  // Botão "anterior"
  prev.addEventListener("click", (e) => {
    e.stopPropagation();
    index = (index - 1 + images.length) % images.length; // volta ao final se for antes do 0
    showImage(index);
  });

  // Inicializa o primeiro slide visível
  showImage(index);
});


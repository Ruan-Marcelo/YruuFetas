// ==========================
// LIGHTBOX
// ==========================
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

document.querySelectorAll(".gallery img").forEach((img) => {
  img.addEventListener("click", () => {
    lightbox.style.display = "block";
    lightboxImg.src = img.src;
  });
});

document.querySelector("#lightbox .close").onclick = () => {
  lightbox.style.display = "none";
};

lightbox.onclick = (e) => {
  if (e.target !== lightboxImg) {
    lightbox.style.display = "none";
  }
};

// ==========================
// SERVIÇOS + MODAL DINÂMICO
// ==========================
let servicesData = [];

fetch("servicos.json")
  .then((res) => res.json())
  .then((data) => {
    servicesData = data;
    renderServices(data);
  })
  .catch((err) => console.error(err));

// renderizar cards
function renderServices(data) {
  const container = document.getElementById("servicesContainer");
  container.innerHTML = "";

  data
    .filter((s) => s.active)
    .forEach((service) => {
      const card = document.createElement("div");
      card.classList.add("service-card");

      card.dataset.category = service.category;

      card.innerHTML = `
        <div class="card-overlay">
          <span class="icon">${service.icon}</span>
          <h3>${service.title}</h3>
          <p>${service.description}</p>
        </div>
      `;

      // clique → modal dinâmico
      card.addEventListener("click", () => abrirModal(service));

      container.appendChild(card);
    });
}

// ==========================
// MODAL DINÂMICO
// ==========================
function abrirModal(service) {
  if (!service.modalContent) return;

  const modal = document.getElementById("dynamicModal");
  const content = document.getElementById("modalContent");

  content.innerHTML = `
    <span class="close">&times;</span>
    <h2>${service.modalContent.title}</h2>
    <p>${service.modalContent.text}</p>
    <a href="${service.modalContent.whatsapp}" class="btn">
      ${service.modalContent.buttonText}
    </a>
  `;

  modal.classList.add("show");

  // fechar botão
  content.querySelector(".close").onclick = () => {
    modal.classList.remove("show");
  };
}

// fechar clicando fora
document
  .getElementById("dynamicModal")
  .addEventListener("click", (e) => {
    if (e.target.id === "dynamicModal") {
      e.currentTarget.classList.remove("show");
    }
  });

// ==========================
// FILTRO
// ==========================
function filtrar(categoria) {
  if (categoria === "todos") {
    renderServices(servicesData);
  } else {
    const filtrados = servicesData.filter(
      (s) => s.category === categoria
    );
    renderServices(filtrados);
  }
}

// ==========================
// CHATBOT WHATSAPP
// ==========================
const chatbot = document.getElementById("chatbot");
const openChatbot = document.getElementById("openChatbot");
const closeChatbot = document.getElementById("closeChatbot");
const chatbotForm = document.getElementById("chatbotForm");

function toggleChatbot(show) {
  chatbot.classList.toggle("show", show);
  chatbot.setAttribute("aria-hidden", String(!show));
}

function formatDate(dateValue) {
  if (!dateValue) return "A definir";

  const [year, month, day] = dateValue.split("-");
  return `${day}/${month}/${year}`;
}

function getCheckedValues(formData, name) {
  const values = formData.getAll(name).filter(Boolean);
  return values.length ? values.join(", ") : "A definir";
}

openChatbot.addEventListener("click", () => toggleChatbot(true));
closeChatbot.addEventListener("click", () => toggleChatbot(false));

chatbot.addEventListener("click", (event) => {
  if (event.target === chatbot) {
    toggleChatbot(false);
  }
});

chatbotForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(chatbotForm);
  const message = [
    "Olá! Quero um orçamento para evento pela Yruu Festa.",
    "",
    `Tipo de festa: ${formData.get("tipo")}`,
    `Data: ${formatDate(formData.get("data"))}`,
    `Convidados: ${formData.get("convidados") || "A definir"}`,
    `Buffet desejado: ${getCheckedValues(formData, "buffet")}`,
    `Estrutura: ${getCheckedValues(formData, "estrutura")}`,
    `Observações: ${formData.get("observacoes") || "Nenhuma observação extra"}`,
  ].join("\n");

  const whatsappUrl = `https://wa.me/5516981231479?text=${encodeURIComponent(
    message
  )}`;

  window.open(whatsappUrl, "_blank", "noopener,noreferrer");
});

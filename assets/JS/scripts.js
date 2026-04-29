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

      card.style.backgroundImage = `url(${service.image})`;
      card.style.backgroundSize = "cover";
      card.style.backgroundPosition = "center";

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
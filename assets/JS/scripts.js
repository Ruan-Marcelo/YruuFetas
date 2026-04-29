 const lightbox = document.getElementById("lightbox");
      const lightboxImg = document.getElementById("lightbox-img");
      const closeBtn = document.querySelector(".close");

      // pegar todas imagens da galeria
      document.querySelectorAll(".gallery img").forEach((img) => {
        img.addEventListener("click", () => {
          lightbox.style.display = "block";
          lightboxImg.src = img.src;
        });
      });

      // fechar no X
      closeBtn.onclick = () => {
        lightbox.style.display = "none";
      };

      // fechar clicando fora
      lightbox.onclick = (e) => {
        if (e.target !== lightboxImg) {
          lightbox.style.display = "none";
        }
      };

      // abrir modal
document.querySelectorAll(".service-card").forEach(card => {
  card.addEventListener("click", () => {
    const modalId = card.getAttribute("data-modal");
    document.getElementById(modalId).style.display = "block";
  });
});

// fechar modal (X)
document.querySelectorAll(".close").forEach(btn => {
  btn.addEventListener("click", () => {
    btn.closest(".modal").style.display = "none";
  });
});

// fechar clicando fora
window.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal")) {
    e.target.style.display = "none";
  }
});
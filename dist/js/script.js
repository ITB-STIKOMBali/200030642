const navBar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  const windowPosition = window.scrollY > 0;
  navBar.classList.toggle("scrolling-active", windowPosition);
});

document.addEventListener("DOMContentLoaded", function () {
  // Temukan semua tautan dengan kelas .gallery-link
  var architectureLinks = document.querySelectorAll(".arsitektur-link");
  var galleryLinks = document.querySelectorAll(".gallery-link");

  // Iterasi melalui setiap tautan
  galleryLinks.forEach(function (link) {
    // Tambahkan event listener untuk tindakan klik
    link.addEventListener("click", function (event) {
      // Cegah perilaku default dari tautan
      event.preventDefault();
      // console.log(event.target);

      if (event.target.tagName === "IMG") {
        // Buka modal dengan id yang sesuai
        var modal = document.querySelector("#popupModal");
        modal.classList.add("show");
        modal.style.display = "block";
        // set gambar di modal otomatis
        modal
          .querySelector(".img-modal")
          .setAttribute("src", event.target.getAttribute("src"));

        modal.querySelector(".modal-title").textContent =
          event.target.parentElement.getAttribute("data-heading");

        // set text di modal otomatis
        modal.querySelector(".text-modal").textContent =
          event.target.parentElement.getAttribute("data-text");
      }

      // console.log(modal.querySelector(".img-modal"));
    });
  });

  architectureLinks.forEach(function (link) {
    // Tambahkan event listener untuk tindakan klik
    link.addEventListener("click", function (event) {
      // Cegah perilaku default dari tautan
      event.preventDefault();
      // console.log(event.target.tagName);

      // Buka modal dengan id yang sesuai

      if (event.target.tagName === "IMG") {
        var modal = document.querySelector("#popupModal");
        modal.classList.add("show");
        modal.style.display = "block";
        // set gambar di modal otomatis
        modal
          .querySelector(".img-modal")
          .setAttribute("src", event.target.getAttribute("src"));

        modal.querySelector(".modal-title").textContent =
          event.target.parentElement.getAttribute("data-heading");

        // set text di modal otomatis
        modal.querySelector(".text-modal").textContent =
          event.target.nextElementSibling.textContent;
      }

      // console.log(modal.querySelector(".img-modal"));
    });
  });

  // Temukan tombol close di setiap modal
  var closeButtons = document.querySelectorAll(".modal .close");

  // Iterasi melalui setiap tombol close
  closeButtons.forEach(function (button) {
    // Tambahkan event listener untuk tindakan klik
    button.addEventListener("click", function (event) {
      // Tutup modal
      var modal = this.closest(".modal");
      modal.classList.remove("show");
      modal.style.display = "none";
    });
  });

  // Menutup modal ketika area di luar modal diklik
  window.addEventListener("click", function (event) {
    var modals = document.querySelectorAll(".modal");
    modals.forEach(function (modal) {
      if (event.target === modal) {
        modal.classList.remove("show");
        modal.style.display = "none";
      }
    });
  });
});

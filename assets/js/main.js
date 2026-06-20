
document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".site-nav");
  var dropdowns = document.querySelectorAll("[data-nav-dropdown]");
  var mobileQuery = window.matchMedia("(max-width: 980px)");

  function closeDropdown(dropdown) {
    var button = dropdown.querySelector(".nav-dropdown__toggle");
    dropdown.classList.remove("is-open");
    if (button) {
      button.setAttribute("aria-expanded", "false");
    }
  }

  function closeAllDropdowns() {
    dropdowns.forEach(closeDropdown);
  }

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
      if (!open) {
        closeAllDropdowns();
      }
    });
  }

  dropdowns.forEach(function (dropdown) {
    var button = dropdown.querySelector(".nav-dropdown__toggle");
    var links = dropdown.querySelectorAll(".nav-dropdown__menu a");

    if (!button) {
      return;
    }

    button.addEventListener("click", function () {
      if (!mobileQuery.matches) {
        button.setAttribute("aria-expanded", "true");
        return;
      }

      var willOpen = !dropdown.classList.contains("is-open");
      closeAllDropdowns();
      dropdown.classList.toggle("is-open", willOpen);
      button.setAttribute("aria-expanded", String(willOpen));
    });

    dropdown.addEventListener("mouseenter", function () {
      if (!mobileQuery.matches) {
        button.setAttribute("aria-expanded", "true");
      }
    });

    dropdown.addEventListener("mouseleave", function () {
      if (!mobileQuery.matches) {
        button.setAttribute("aria-expanded", "false");
      }
    });

    dropdown.addEventListener("focusin", function () {
      if (!mobileQuery.matches) {
        button.setAttribute("aria-expanded", "true");
      }
    });

    dropdown.addEventListener("focusout", function () {
      window.setTimeout(function () {
        if (!mobileQuery.matches && !dropdown.contains(document.activeElement)) {
          button.setAttribute("aria-expanded", "false");
        }
      }, 0);
    });

    links.forEach(function (link) {
      link.addEventListener("click", function () {
        closeDropdown(dropdown);
        if (nav && nav.classList.contains("is-open")) {
          nav.classList.remove("is-open");
        }
        if (toggle) {
          toggle.setAttribute("aria-expanded", "false");
        }
      });
    });
  });

  document.addEventListener("click", function (event) {
    if (!mobileQuery.matches) {
      return;
    }

    var clickedDropdown = event.target.closest("[data-nav-dropdown]");
    if (!clickedDropdown) {
      closeAllDropdowns();
    }
  });

  if (mobileQuery.addEventListener) {
    mobileQuery.addEventListener("change", closeAllDropdowns);
  }

  document.querySelectorAll("[data-faq-accordion]").forEach(function (faqList) {
    faqList.querySelectorAll("details").forEach(function (detail) {
      detail.addEventListener("toggle", function () {
        if (!detail.open) {
          return;
        }

        faqList.querySelectorAll("details[open]").forEach(function (openDetail) {
          if (openDetail !== detail) {
            openDetail.open = false;
          }
        });
      });
    });
  });

  document.querySelectorAll("[data-wa-form]").forEach(function (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      var data = new FormData(form);
      var message = [
        "Halo PT Jurti Agung Mulia, saya ingin konsultasi proyek kelistrikan.",
        "Nama: " + (data.get("nama") || ""),
        "WhatsApp: " + (data.get("whatsapp") || ""),
        "Lokasi: " + (data.get("lokasi") || ""),
        "Kebutuhan: " + (data.get("kebutuhan") || "")
      ].join("\n");
      window.open("https://wa.me/6283184037448?text=" + encodeURIComponent(message), "_blank", "noopener");
      form.reset();
    });
  });
});

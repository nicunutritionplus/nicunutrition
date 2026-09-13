document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      nav.classList.toggle("open");
    });
  }

  var banner = document.getElementById("cookie-banner");
  if (banner) {
    if (localStorage.getItem("nn-cookies-accepted") === "yes") {
      banner.classList.add("hidden");
    }
    var acceptBtn = document.getElementById("cookie-accept");
    if (acceptBtn) {
      acceptBtn.addEventListener("click", function () {
        localStorage.setItem("nn-cookies-accepted", "yes");
        banner.classList.add("hidden");
      });
    }
  }

  var newsletterForm = document.querySelector(".newsletter-form");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", function (e) {
      e.preventDefault();
      newsletterForm.innerHTML = "<p style=\"color:#fff;font-weight:700;\">Thanks for signing up!</p>";
    });
  }

  var contactForm = document.querySelector(".contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      contactForm.innerHTML = "<p style=\"font-weight:700;\">Thanks for reaching out! We'll be in touch soon.</p>";
    });
  }
});

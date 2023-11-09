// Memunculkan Offcanvas Navbar
const stickyTop = document.querySelector(".sticky-top");
const offcanvas = document.querySelector(".offcanvas");

offcanvas.addEventListener("show.bs.offcanvas", function () {
  stickyTop.style.overflow = "visible";
});

// Menghilangkan White Screen Berlebih
const offCanvas = document.querySelector(".offcanvas");

offCanvas.addEventListener("hidden.bs.offcanvas", function () {
  stickyTop.style.overflow = "hidden";
});

// Disable Scroll Diawal
const rootElement = document.querySelector(":root");

function disableScroll() {
  scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

  window.onscroll = function () {
    window.scrollTo(scrollTop, scrollLeft);
  };

  rootElement.style.scrollBehavior = "auto";
}

// Enable Scroll
function enableScroll() {
  window.onscroll = function () {};
  rootElement.style.scrollBehavior = "smooth";
  playAudio();
}

// Play Audio
function playAudio() {
  const bgm = document.querySelector("#bgm");
  song.play();
}

disableScroll();

// Script Untuk Form Spreadsheet
window.addEventListener("load", function () {
  const form = document.getElementById("my-form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const data = new FormData(form);
    const action = e.target.action;
    fetch(action, {
      method: "POST",
      body: data,
    }).then(() => {
      alert("Konfirmasi kehadiran berhasil terkirim!");
    });
  });
});

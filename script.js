// Auto-update year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Click on author name alert
document.getElementById("author").addEventListener("click", function(e) {
  e.preventDefault();
  alert("👋 Hi, I am Govind Tupkari. Thanks for visiting my Tribute Page!");
});

// Scroll to top button functionality
let scrollBtn = document.getElementById("scrollTopBtn");

window.onscroll = function () {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
};

scrollBtn.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

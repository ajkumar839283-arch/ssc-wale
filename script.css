// Mobile Menu
const menuBtn = document.getElementById("menuBtn");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", () => {
  if (nav.style.display === "flex") {
    nav.style.display = "none";
  } else {
    nav.style.display = "flex";
    nav.style.flexDirection = "column";
    nav.style.position = "absolute";
    nav.style.top = "70px";
    nav.style.right = "20px";
    nav.style.background = "#0f172a";
    nav.style.padding = "15px";
    nav.style.borderRadius = "10px";
  }
});

// Smooth Scroll
document.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", function(e) {
    const target = this.getAttribute("href");
    if (target.startsWith("#")) {
      e.preventDefault();
      document.querySelector(target).scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});

// Welcome Message
window.onload = () => {
  console.log("Welcome to SSC Exam Hub");
};

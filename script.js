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
function searchExam(){

let search=document.getElementById("searchBox").value.toLowerCase().trim();

if(search==="cgl" || search==="ssc cgl"){
window.location.href="cgl.html";
}

else if(search==="chsl" || search==="ssc chsl"){
window.location.href="chsl.html";
}

else if(search==="cpo" || search==="ssc cpo"){
window.location.href="cpo.html";
}

else if(search==="mts" || search==="ssc mts"){
window.location.href="mts.html";
}

else{
alert("Exam not found!");
}

}

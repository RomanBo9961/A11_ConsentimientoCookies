const box = document.getElementById("cookieBox");
const btn = document.getElementById("acceptBtn");

if (!localStorage.getItem("cookieAccepted")) {
    box.style.display = "block";
}

btn.addEventListener("click", () => {
    localStorage.setItem("cookieAccepted", "true");
    box.style.display = "none";
});

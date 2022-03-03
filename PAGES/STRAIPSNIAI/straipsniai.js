let mygtukas = document.querySelectorAll("a")[0];
let straipsnis1 = document.querySelectorAll("section")[0];

mygtukas.addEventListener("click", function () {
    straipsnis1.classList.add("show");
})
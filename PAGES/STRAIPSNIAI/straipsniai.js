let straipsniuKorteles = document.querySelector("#straipsniu-korteles");
let buttons = straipsniuKorteles.querySelectorAll(".card a");

let straipsniai = document.querySelector("#straipsniai");
let straipsniuTekstai = straipsniai.querySelectorAll("div");
let btnGetBack = straipsniai.querySelector(".btn-primary");

for (let i = 0; i < buttons.length; i++) {
	const btn = buttons[i];
	const txt = straipsniuTekstai[i];
	btn.addEventListener("click", function(){
		txt.classList.add("show");
		txt.classList.remove("hide");
		btnGetBack.classList.add("show");
		btnGetBack.classList.remove("hide");
		straipsniuKorteles.classList.remove("show");
		straipsniuKorteles.classList.add("hide");
	});
}
btnGetBack.addEventListener("click", function(){
	for (let i = 0; i < straipsniuTekstai.length; i++) {
		const txt = straipsniuTekstai[i];
		txt.classList.add("hide");
		txt.classList.remove("show");
		straipsniuKorteles.classList.remove("hide");
		straipsniuKorteles.classList.add("show");
	}
	btnGetBack.classList.add("hide");
	btnGetBack.classList.remove("show");
})
for (let i = 0; i < straipsniuTekstai.length; i++) {
	const txt = straipsniuTekstai[i];
	txt.classList.add("hide");
}

btnGetBack.classList.add("hide");



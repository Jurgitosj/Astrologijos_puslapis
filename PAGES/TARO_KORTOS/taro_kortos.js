let taroKortos = document.querySelectorAll("#taro-kortos .card-box");
let kortuAprasymai = document.querySelectorAll("#kortu-aprasymai div");

let atverstosKortos = [];
let kortuLaikai = [ "Praeitis", "Dabartis", "Ateitis" ];

function sleptiKortas() {
	let visosKortos = document.querySelector("#taro-kortos");
	visosKortos.classList.add('hide');
}

function nustatytiKortuAprasymuMatomuma(arReikiaRodytiPasirinktasKortas) {
	kortuAprasymai.forEach((korta, indeksas) => {
		korta.classList.add('hide');
	});

	if (arReikiaRodytiPasirinktasKortas) {
		atverstosKortos.forEach((kortosIndeksas, kortosEiliskumoIndeksas) => {
			const atverstaKorta = kortuAprasymai[kortosIndeksas];
			atverstaKorta.classList.remove('hide');
			const atverstosKortosLaikoTekstas = atverstaKorta.querySelector("h1");
			atverstosKortosLaikoTekstas.innerHTML = kortuLaikai[kortosEiliskumoIndeksas];
		});
	}
}

for (let i = 0; i < taroKortos.length; i++) {
	const korta = taroKortos[i];
	korta.addEventListener("click", function(){
		if (atverstosKortos.length >= 3) {
			return;
		}

		let isrinktaKortosIndeksas = -1;
		while(true) {
			isrinktaKortosIndeksas = Math.floor(Math.random() * kortuAprasymai.length);
			const doesntExist = atverstosKortos.findIndex(x => x == isrinktaKortosIndeksas) == -1;
			if (doesntExist) {
				break;
			}
		}

		atverstosKortos.push(isrinktaKortosIndeksas);
		korta.classList.add("card-box-opened");

		let atverstosKortosNuotrauka = kortuAprasymai[isrinktaKortosIndeksas].querySelector("img");
		let atverstosKorotsNuoroda = atverstosKortosNuotrauka.getAttribute('src');

		let pasirinktosKortosNuotrauka = korta.querySelector(".card-box-back img");
		pasirinktosKortosNuotrauka.setAttribute('src', atverstosKorotsNuoroda);

		if (atverstosKortos.length >= 3) {
			setTimeout(() => {
				sleptiKortas();
				nustatytiKortuAprasymuMatomuma(true);
			}, 1150);
		}
	})
}

nustatytiKortuAprasymuMatomuma(false);

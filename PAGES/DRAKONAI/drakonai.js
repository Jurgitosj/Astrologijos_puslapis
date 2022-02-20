// Pagalbines

function pasleptiTekstus() {
    let drakonu_tekstai = document.getElementById("drakonu-tekstai");
    drakonu_tekstai.style.display = "none";

    let tekstai = drakonu_tekstai.getElementsByTagName('div');
    for (let tekstas of tekstai) {
        tekstas.style.display = "none";
    }
}

function keistiKorteliuMatomuma(matomos) {
    let korteles = document.getElementById("drakonu-korteles");
    if (matomos) {
        korteles.style.display = "block";
    } else {
        korteles.style.display = "none";
    }
}

// HTML kode naudojamos funkcijos

function initializePage() {
    keistiKorteliuMatomuma(true);
    pasleptiTekstus();
}

function rodytiDaugiauTeksto(tekstoId) {
    let drakono_tektas = document.getElementById(tekstoId);
    drakono_tektas.style.display = "block";

    let visi_tekstai = document.getElementById("drakonu-tekstai");
    visi_tekstai.style.display = "block";

    keistiKorteliuMatomuma(false);
}

function rodytiKorteles() {
    pasleptiTekstus();
    keistiKorteliuMatomuma(true);
}

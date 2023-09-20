//auteração de tema


//menu hamburguer
const hamburger = document.querySelector(".hamburguer");
const nav = document.querySelector(".hamburguer-out");
const active = document.querySelector(".un-activated")

hamburger.addEventListener("click", () => nav.classList.toggle("hamburguer-in"));
hamburger.addEventListener("click", () => active.classList.toggle("activated"));


//roupas menu hamburguer
const roupas_in = document.querySelector(".roupas-out");

function clickRoupa() {
    itensR.classList.toggle("itensR-in")
    roupas_in.classList.toggle("roupas-in")
}

//mangas menu hamburguer
const mangas_in = document.querySelector(".mangas-out");

function clickManga() {
    itensM.classList.toggle("itensM-in")
    mangas_in.classList.toggle("mangas-in")
}

//jogos menu hamburguer
const jogos_in = document.querySelector(".jogos-out");


function clickJogos() {
    itensJ.classList.toggle("itensJ-in")
    jogos_in.classList.toggle("jogos-in")
}

//Acessórios menu hamburguer
const assets_in = document.querySelector(".assets-out");

function clickAssets() {
    itensA.classList.toggle("itensA-in")
    assets_in.classList.toggle("assets-in")
}
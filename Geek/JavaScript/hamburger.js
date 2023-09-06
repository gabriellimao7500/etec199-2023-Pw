//auteração de tema
const background = document.querySelector(".background") 
const sun = document.querySelector(".sun-none")
const city = document.querySelector(".city-none")
const button_theme = document.querySelector(".theme-alternateS")

var theme = "white"

function turn_theme(){
    if (theme == "white"){
        theme = "dark"
        background.classList.toggle("darkmode")
        sun.classList.toggle("mon")
        city.classList.toggle("city-on")
        button_theme.classList.toggle("theme-alternateM")
        setTimeout(function(){
            sun.classList.toggle("mon")
            city.classList.toggle("city-on")
        },4000)
    }else{
        theme = "white"
        background.classList.toggle("darkmode")
        sun.classList.toggle("sun")
        city.classList.toggle("city-on")
        button_theme.classList.toggle("theme-alternateM")    
        setTimeout(function(){
            sun.classList.toggle("sun")
            city.classList.toggle("city-on")
        },4000)
    }
}

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
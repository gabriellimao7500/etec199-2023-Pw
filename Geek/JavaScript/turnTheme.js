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
        setTimeout(function(){
            localStorage.setItem("theme","dark")
            console.log(localStorage.getItem("theme"))
        },4000)
    }else{
        theme = "white"
        localStorage.setItem("theme","white")   
        background.classList.toggle("darkmode")
        sun.classList.toggle("sun")
        city.classList.toggle("city-on")
        button_theme.classList.toggle("theme-alternateM") 
        localStorage.setItem("theme","white")   
        background.classList.remove("darkmodet")
        setTimeout(function(){
            sun.classList.toggle("sun")
            city.classList.toggle("city-on")
        },4000)
        console.log(localStorage.getItem("theme"))
    }
}


if(localStorage.getItem("theme") == "dark"){
    background.classList.add("darkmodet")
}if(localStorage.getItem("theme") == "white"){
    background.classList.remove("darkmodet")
}


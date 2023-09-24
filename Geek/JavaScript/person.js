const menu = document.querySelector('.person-menu')
const personButton = document.querySelector('.person-me')
const person_off = document.querySelector('.person-off')
const person_on = document.querySelector('.person-on')

var createdUser = localStorage.getItem("usuário")


var buyNum = localStorage.getItem('buynum')

if(isNaN(buyNum) || buyNum == null || buyNum == 0){
    localStorage.setItem("buynum",0)
    var buyNum = localStorage.getItem('buynum')
}

var user = localStorage.getItem("user")


if(createdUser != user){
    localStorage.setItem("buynum",0)
    buyNum = localStorage.getItem('buynum')
    user = createdUser
    localStorage.setItem("user",user)
}

const Numbuy = document.querySelector('.num-buy')
Numbuy.innerHTML = localStorage.getItem('buynum')

var on_off = false


personButton.addEventListener("click", () => {
    if(on_off == false){
        menu.classList.add("menu-activated")
        menu.classList.remove("menu-unactivated")
        person_off.classList.add("none")
        person_on.classList.remove("none")
        on_off = true
    }else{
        menu.classList.remove("menu-activated")
        menu.classList.add("menu-unactivated")
        person_off.classList.remove("none")
        person_on.classList.add("none")
        on_off = false
    }
})

function buy(){
    buyNum ++
    localStorage.setItem("buynum",buyNum)
    Numbuy.innerHTML = localStorage.getItem('buynum')
}

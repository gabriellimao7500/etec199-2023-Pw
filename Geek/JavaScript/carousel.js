//roupas

const controls_roupas = document.querySelectorAll('.control-roupas');
const items_roupas = document.querySelectorAll('.item-roupas');

const maxItems_roupas = items_roupas.length 

let currentItem_roupas = 1;

controls_roupas.forEach(control => {
  control.addEventListener('click', () => {
    const isLeftR = control.classList.contains('arrow-left');
    if(isLeftR){
      currentItem_roupas -= 3;
    }else{
      currentItem_roupas += 3;
    }

    if(currentItem_roupas >= maxItems_roupas){
      currentItem_roupas = 0;
    }
    if(currentItem_roupas < 0){
      currentItem_roupas = maxItems_roupas - 1;
    }
    items_roupas[currentItem_roupas].scrollIntoView({
      inline: "nearest",
      behavior: "smooth",
      block:"nearest",
    })
  })
});

//games


const controls_games = document.querySelectorAll('.control-games');
const items_games = document.querySelectorAll('.item-games');

const maxItems_games = items_games.length 

let currentItem_games = 0;

controls_games.forEach(control => {
  control.addEventListener('click', () => {
    const isLeftJ = control.classList.contains('arrow-left');
    if(isLeftJ){
      currentItem_games -= 4;
    }else{
      currentItem_games += 4;
    }

    if(currentItem_games >= maxItems_games){
      currentItem_games = 0;
    }
    if(currentItem_games < 0){
      currentItem_games = maxItems_games - 1;
    }
    items_games[currentItem_games].scrollIntoView({
      inline: "nearest",
      behavior: "smooth",
      block:"nearest",
    })
    console.log(currentItem_games)
  })
});

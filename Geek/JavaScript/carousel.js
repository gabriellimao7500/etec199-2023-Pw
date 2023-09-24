//roupas

const controls_roupas = document.querySelectorAll('.control-roupas');
const items_roupas = document.querySelectorAll('.item-roupas');

const maxItems_roupas = items_roupas.length 

let currentItem_roupas = 2;

controls_roupas.forEach(control => {
  control.addEventListener('click', () => {
    const isLeftR = control.classList.contains('arrow-left');
    if(isLeftR){
      currentItem_roupas -= 2;
    }else{
      currentItem_roupas += 2;
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

//mangas


const controls_mangas = document.querySelectorAll('.control-mangas');
const items_mangas = document.querySelectorAll('.item-mangas');

const maxItems_mangas = items_mangas.length 

let currentItem_mangas = 3;

controls_mangas.forEach(control => {
  control.addEventListener('click', () => {
    const isLeftM = control.classList.contains('arrow-left');
    if(isLeftM){
      currentItem_mangas -= 3;
    }else{
      currentItem_mangas += 3;
    }

    if(currentItem_mangas >= maxItems_mangas){
      currentItem_mangas = 0;
    }
    if(currentItem_mangas < 0){
      currentItem_mangas = maxItems_mangas - 1;
    }
    items_mangas[currentItem_mangas].scrollIntoView({
      inline: "nearest",
      behavior: "smooth",
      block:"nearest",
    })
    console.log(currentItem_mangas)
  })
});



//all


const controls_all = document.querySelectorAll('.control-all');
const items_all = document.querySelectorAll('.item-all');

const maxItems_all = items_all.length 

let currentItem_all = 0;

controls_all.forEach(control => {
  control.addEventListener('click', () => {
    const isLeftM = control.classList.contains('arrow-left');
    if(isLeftM){
      currentItem_all -= 3;
    }else{
      currentItem_all += 3;
    }

    if(currentItem_all >= maxItems_all){
      currentItem_all = 0;
    }
    if(currentItem_all < 0){
      currentItem_all = maxItems_all - 1;
    }
    items_all[currentItem_all].scrollIntoView({
      inline: "nearest",
      behavior: "smooth",
      block:"nearest",
    })
    console.log(currentItem_all)
  })
});



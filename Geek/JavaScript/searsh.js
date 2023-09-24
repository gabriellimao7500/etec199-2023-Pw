const INPUT_BUSCA = document.getElementById('search-input')
const TABELA_PRODUTOS = document.querySelector('.all-gallery')
const TABELA_PESQUISA = document.querySelector('.offcar')


INPUT_BUSCA.addEventListener('keyup', () => {
    let expressao = INPUT_BUSCA.value.toLowerCase();

    if(expressao.length < 2){
        TABELA_PESQUISA.classList.add("offcar")
        return;
    }

    TABELA_PESQUISA.classList.remove('offcar')

    let linhas = TABELA_PRODUTOS.getElementsByTagName('a');
    let name = TABELA_PRODUTOS.getElementsByClassName('info');
    
    for (let posicao in name){
        if(true === isNaN(posicao)){
            continue;
        }

        let conteudo_linha = name[posicao].innerHTML.toLowerCase()

        if (true === conteudo_linha.includes(expressao)){
            linhas[posicao].style.display = '';
        }else{
            linhas[posicao].style.display = 'none';
        }

    }
})
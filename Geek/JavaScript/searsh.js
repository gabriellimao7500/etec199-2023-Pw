const INPUT_BUSCA = document.getElementById('search-input')
const TABELA_PRODUTOS = document.querySelector('.roupas-gallery')

INPUT_BUSCA.addEventListener('keyup', () => {
    let expressao = INPUT_BUSCA.value.toLowerCase();

    if(expressao.length < 2 && expressao.length > 0){
        return;
    }

    let linhas = TABELA_PRODUTOS.getElementsByTagName('a');
    
    for (let posicao in linhas){
        if(true === isNaN(posicao)){
            continue;
        }

        let conteudo_linha = linhas[posicao].innerHTML.toLowerCase()

        if (true === conteudo_linha.includes(expressao)){
            linhas[posicao].style.display = '';
        }else{
            linhas[posicao].style.display = 'none';
        }

    }
})
function tocaSom (seletorAudio) { //não entendi isso, pq preciso desse parametro
    const elemento = document.querySelector(seletorAudio);

    if (elemento != null && elemento.localName === 'audio') {  
         elemento.play();
    } else {
        console.log('elemento não encontrado ou seletor inválido');
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for ( let i = 0 ; i < listaDeTeclas.length ; i++){

    const tecla = listaDeTeclas[i];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;//template string

    tecla.onclick = function () { //isso é uma função anonima
        tocaSom(idAudio);
    }
    
    tecla.onkeydown = function (evento) { //no parametro a palavra "event" é bem comum de ser utilizada ou simplesmente "e"
        
        
        if (evento.code === 'Space' || evento.code === 'Enter') {
          tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function() {
        tecla.classList.remove('ativa');
    }

}

/**
= ATRIBUIÇÃO
== COMPARAR IGUALDADE
===SUPER COMPARADOR DE IGUALDADE (tudo tem que ser igual até o tipo)  E.g.: 1 === "1"   false pq um é do tipo number e o outro texto
 */

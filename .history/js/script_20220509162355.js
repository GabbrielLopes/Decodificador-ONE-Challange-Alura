/* Regras Codificador: 
"e" é convertido para "enter" 
"i" é convertido para "imes"
"a" é convertido para "ai"
"o" é convertido para "ober"
"u" é convertido para "ufat"
Apenas letras minúsculas
Não permite acentuação   

 Regras Decodificador: 
"enter" é convertido para "e" 
"imes" é convertido para "i"
"ai" é convertido para "a"
"ober" é convertido para "o"
"ufat" é convertido para "u"
Apenas letras minúsculas
Não permite acentuação   */

var botaoEncriptar = buscaElemento(".btn-criptografar");
var botaoDesencriptar = buscaElemento(".btn-descriptografar");
var botaoCopiar = buscaElemento(".btn-copy");
var campoMensagem = buscaElemento(".campo-mensagem");
var sectionMensagem = buscaElemento(".mensagem textarea");
var campoTexto = buscaElemento(".campo-texto");

function buscaElemento(elemento){
    return document.querySelector(elemento);
}

//  Função onde joga o valor do campo de texto para o campo mensagem,chamando a função de encriptar
function btnEncriptar() {
    var texto = campoTexto.value;
    sectionMensagem.value = encriptar(texto);
    campoTexto.value = "";
}

//  Função onde faz a criptografia do texo digitado pelo usuário
function encriptar (texto) {
    var texto = texto.replaceAll(/e/gi,"enter")
    .replaceAll(/i/gi,"imes")
    .replaceAll(/a/gi, "ai")
    .replaceAll(/o/gi,"ober")
    .replaceAll(/u/gi,"ufat");
    
    stringEncriptada = texto;
    return stringEncriptada.toLowerCase();
}

// Função onde joga o valor do campo de texto para o campo mensagem,chamando a função de desencriptar
function btnDesencriptar() {
    var texto = campoTexto.value;
    sectionMensagem.value = desencriptar(texto);
    campoTexto.value = "";
}

// Função onde desencripta o texto digitado pelo usuário
function desencriptar (texto) {
    var texto = texto.replaceAll("enter","e")
    .replaceAll("imes","i")
    .replaceAll("ai", "a")
    .replaceAll("ober","o")
    .replaceAll("ufat","u");

    stringDesencriptada = texto;
    return stringDesencriptada;
}

// Função de copiar o valor do campo da mensagem e muda o nome do botão para copiado por 3,5 segundos
function btnCopiar(e) {
    navigator.clipboard.writeText(sectionMensagem.value);
    botaoCopiar.textContent = "Copiado!";
    botaoCopiar.style.border="2px solid white";
    setTimeout(function(){
        botaoCopiar.textContent = "Copiar"; 
        botaoCopiar.style.border="1px solid rgba( 0, 0, 0 , 0.3";
        botaoCopiar.style.color="rgba(216, 223, 232, 0.9)";
    },3500);
}

// Função onde verifica se o campo da mensagem está vazio e adiciona e remove classe para mostrar imagem de acordo com a verificação.
/*function verificaMensagem() {
    if(sectionMensagem.value == ""){
        sectionMensagem.classList.add("campo-mensagem-imagem");
    } else {
        sectionMensagem.classList.remove("campo-mensagem-imagem");
    }
}

// Repetindo a função verificaMensagem para verificar a todo momento se o campoMensagem está vazio
setInterval(verificaMensagem, 10);*/

// Escutadores de eventos, quando os botões forem clicados, executar suas devidas funções
botaoEncriptar.addEventListener('click', btnEncriptar);
botaoDesencriptar.addEventListener('click', btnDesencriptar);
botaoCopiar.addEventListener('click', btnCopiar);

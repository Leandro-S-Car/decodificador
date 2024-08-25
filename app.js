// codificador de texto e decodificador 

let  textoEntrada = document.querySelector('.entrada');
let  textoSaida = document.querySelector('.saida_texto');

let a = 'ai';
let e = 'enter';
let i = 'imes';
let o = 'ober';
let u = 'ufat';
let ai = 'a';
let enter = 'e';
let imes = 'i';
let ober = 'o';
let ufat = 'u';

function btnEncriptar () {
  let cripto = textoCodificado(textoEntrada.value);
  textoSaida.value = cripto;
  textoEntrada.value = '';
}

function btnDesencriptar () {
  let descripto = textoOriginal(textoEntrada.value);
  textoSaida.value = descripto;
  textoEntrada.value = '';
}

function textoCodificado(texto){
  let codificado1 = texto.replace(/e/g, e );
  let codificado2 = codificado1.replace(/i/g, i);
  let codificado3 = codificado2.replace(/a/g, a);
  let codificado4 = codificado3.replace(/o/g, o);
  let codificado5 = codificado4.replace(/u/g, u);
  return codificado5;
}

function textoOriginal(codi){
  let codificado6 = codi.replace(/enter/g, enter );
  let codificado7 = codificado6.replace(/imes/g, imes);
  let codificado8 = codificado7.replace(/ai/g, ai);
  let codificado9 = codificado8.replace(/ober/g, ober);
  let codificado10 = codificado9.replace(/ufat/g, ufat);
  
  return codificado10;

}


function copiarTexto() {
  let texto = document.querySelector('.saida_texto');
  texto.select();
  navigator.clipboard.writeText(texto.value)
}

const calcular = document.getElementById('calcular');

function imc (){
   const nome = document.getElementById('nome').value;
   const altura = document.getElementById('altura').value;
   const peso = document.getElementById('peso').value;
   const resultado = document.getElementById('resultado');

   if (nome != '' && altura != '' && peso != ''){
      const  valorIMC = (peso / (altura * altura)).toFixed(0)

      let classificacao = '';
      if (valorIMC <18.5){
         classificacao = 'abaixo do peso';
      } else if (valorIMC <25){
         classificacao = 'no peso ideal';
      } else if (valorIMC <30){
         classificacao = 'levemente acima do peso';
      } else if (valorIMC <35){
         classificacao = 'obeso grau 1';
      } else if (valorIMC <40){
         classificacao = 'obeso grau 2';
      } else {
         classificacao = 'obeso grau 3';
      }
      resultado.textContent = `${nome}, seu IMC é igual a: ${valorIMC}, e você está ${classificacao}`;
   } else {
    resultado.textContent = "PREENCHA TODOS OS CAMPOS!!!!!!!!"
 }
}
calcular.addEventListener('click', imc)

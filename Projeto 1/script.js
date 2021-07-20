var imagem1 = document.getElementById('bob');
const botao1 = document.getElementById('botao');

botao1.onclick = function(){
    alert('Você trocou o humor!');
    if (botao1.value === "estado1"){
        imagem1.src= 'bobtriste.jpg';
       botao1.value = "estado2";
    }
    else  {
         imagem1.src= 'bob.png';
         botao1.value = "estado1";
     }

}

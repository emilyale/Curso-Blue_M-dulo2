var imagem1 = document.getElementById('download');
const botao1 = document.getElementById('botao');

botao1.onclick = function(){
    if (botao1.value === "estado1"){
        imagem1.src= 'reforma-tributaria.jpg';
       botao1.value = "estado2";
    }
    else  {
         imagem1.src= 'download.png';
         botao1.value = "estado1";
     }

}


function formularioteste(){ 
    alert('Formulario teste');
}

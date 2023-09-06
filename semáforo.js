const verde = document.querySelector('.verde');
const amarelo = document.querySelector('.amarelo');
const vermelho = document.querySelector('.vermelho');

let contador = 1;

setInterval(() => { 
     if(contador <= 1){
        verde.classList.add('verde-ativo');
     }                          
     else if(contador === 5){
        amarelo.classList.add('amarelo-ativo')
         verde.classList.remove('verde-ativo');}       
    else if(contador === 10){
        vermelho.classList.add('vermelho-ativo')
        amarelo.classList.remove('amarelo-ativo'); 
    }
    else if(contador === 15){
        vermelho.classList.remove('vermelho-ativo');
        contador = 0;      
    }

    contador += 1 ;
}, 100000);
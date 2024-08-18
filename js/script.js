const img = document.querySelector('#imagem')
const vermelho = document.querySelector('#vermelho')
const amarelo = document.querySelector('#amarelo')
const verde = document.querySelector('#verde')
const automatico = document.querySelector('#automatico')
const botoes = document.querySelector('.botoes')
//sempre que você quiser pegar vários filhos de uma div
// adicione um evento de click no elem pai e capture o event.target.id e faça uma condicional com o que vc quer que aconteça depois
//3
let automaticoAtivo = false;
let intervalo;
//4
const change = () =>{
    if (img.src.includes('vermelho')){
        img.src = 'img/amarelo.png';
    }else if (img.src.includes('amarelo')){
        img.src = 'img/verde.png';
    }else{
        img.src = 'img/vermelho.png';
    }
}
//5
const pararAutomatico = ()=>{
    if(automaticoAtivo){
        clearInterval(intervalo);
        automaticoAtivo = false;
    }
}
//6
const desligar = ()=>{
    img.src = 'img/desligado.png';
    pararAutomatico();
}

//2
const trafficLigth = ( event ) =>{
    if(event.target.id === 'amarelo'){
        img.src = 'img/amarelo.png';
        pararAutomatico();
    }else if(event.target.id === 'vermelho'){
        img.src = 'img/vermelho.png';
        pararAutomatico();
    }else if(event.target.id === 'verde'){
        img.src = 'img/verde.png';
        pararAutomatico();
    }else if(event.target.id === 'automatico'){
        if(!automaticoAtivo){
            automaticoAtivo = true;
            intervalo = setInterval(change,1000);
        }
    }else if(event.target.id === 'desligar'){
        desligar()
    }
    
}

//1
botoes.addEventListener('click', trafficLigth);




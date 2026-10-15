// Seleciona o elemento com a classe "texto-dinheiro-valor"
// Altera o conteúdo de texto desse elemento para "R$ 1.000,00"
const trocarValor = document.querySelector(".texto-dinheiro-valor");
console.log(trocarValor.textContent);
trocarValor.textContent = "R$ 1.000,00";



const btn_click = document.querySelector("#btn-click");
const color_fundo = document.querySelector(".layout-flex-conteudo-principal");
const color_lateral = document.querySelector(".layout-flex-barra-lateral")
let color = false;

function  ColorBackgroud(){
    if(color === false){
        color = true;
        color_fundo.style.backgroundColor  = "black";
        btn_click.classList.add("black");
        btn_click.textContent = "Black"
        btn_click.style.backgroundColor = "#071126";
        color_lateral.style.backgroundColor  = "black";

    }
    else{
        color = false;
        color_fundo.style.backgroundColor  = "#071126";
        color_fundo.classList.remove("black")
        btn_click.textContent = "blue"
        color_lateral.style.backgroundColor  = "#071126";
         btn_click.style.backgroundColor = "blue";

    }
}

btn_click.addEventListener("click",ColorBackgroud);
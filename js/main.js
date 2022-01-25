const bill = document.querySelector(".billValue");
const tip = document.querySelector('input[name="tipPercentage"]:checked');
const people = document.querySelector(".peopleNumber");
const custom = document.querySelector("#custom");
let discount;


const reset = document.querySelector(".resetButton");//Para o botão RESET de fato resetar tudo.
reset.addEventListener("click", function(){
    bill.value = "";
    people.value = "";
    custom.value = "";

    const inputs = document.querySelectorAll("input"); //Essa função apaga (ou deveria apagar) os inputs selecionados.
    inputs.forEach(function(input){
        if (input.hasAttribute("checked") === true) {
            input.checked = false;
        }
    })
})


const percentageSelect = document.querySelectorAll(".percentageOption"); // retorna uma array com todas as DIVS que contêm as porcentagens.

percentageSelect.forEach(function(option){

    option.addEventListener("click",function(){ //cada vez que uma DIV de porcentagem for clicada muda a cor dela e retorna a cor das outras para a original.
        percentageSelect.forEach(function(option) {
            option.style.backgroundColor = "var(--background3)";
            custom.style.backgroundColor = "var(--background5)";
            custom.value = ""
        })
        option.style.backgroundColor = "var(--background4)";        
    })

})

custom.addEventListener("click", function(){
    custom.style.backgroundColor = "var(--background4";
    
    percentageSelect.forEach(function(option){
        option.style.backgroundColor = "var(--background3)"
    })
})




//Ideia! Coloque as porcentagens direto no JS. Faça com que, se a div dor clicada, ela muda de cor e pronto!
// Daí o JS, com valores já definidos em uma função, faz as contas.
// Lembra de fazer as outras divs retornarem à cor original qnd outra for clicada.
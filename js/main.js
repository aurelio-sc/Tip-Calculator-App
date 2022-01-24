const bill = document.querySelector(".billValue");
const tip = document.querySelector('input[name="tipPercentage"]:checked');
const people = document.querySelector(".peopleNumber");
const custom = document.querySelector("#custom");


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

    option.addEventListener("click",function(){ //cada vez que uma DIV de porcentagem for clicada acontece o seguinte...
        
    })

})
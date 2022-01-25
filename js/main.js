const bill = document.querySelector(".billValue");
const tip = document.querySelector('input[name="tipPercentage"]:checked');
const people = document.querySelector(".peopleNumber");
const custom = document.querySelector("#custom");
let tipAmount = document.querySelector(".tipAmount");
let totalValue = document.querySelector(".totalValue");
let discount;


const reset = document.querySelector(".resetButton");//Para o botão RESET de fato resetar tudo.
reset.addEventListener("click", function(){
    bill.value = "";
    people.value = "";
    custom.value = "";
    tipAmount.textContent = "";
    totalValue.textContent = "";
    discount = "";
    percentageSelect.forEach(function(option){
        
        option.style.backgroundColor = "var(--background3)";
        custom.style.backgroundColor = "var(--background5)";
        custom.value = "";     
    })

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
            custom.value = "";
        })
        option.style.backgroundColor = "var(--background4)";   
        discount = option.firstElementChild.value; //discount é o valor do input da div clicada.
        updateDisplayerValues();  
    })

})

custom.addEventListener("click", function(){
    custom.style.backgroundColor = "var(--background4";
    
    percentageSelect.forEach(function(option){
        option.style.backgroundColor = "var(--background3)"
    })
})

// Aqui se inicia a captura do valor digitado na bill - ATENÇÃO: o padrão servirá para capturar o Custom e o Number of People. É só replicá-lo! //
bill.onkeyup = updateBillValue;
function updateBillValue(){
    bill.value = this.value;
    updateDisplayerValues();
}

people.onkeyup = updatePeopleValue;
function updatePeopleValue(){
    people.value = this.value;
    updateDisplayerValues();
}

//Essa função dá update nos valores de tip e total se tudo estiver preenchido corretamente
function updateDisplayerValues(){
    if (bill.value !=="" && people.value !=="" && discount !== "") {
        tipAmount.textContent = "$ " + ((bill.value * discount)/(100*people.value)).toFixed(2);
        totalValue.textContent = "$ " + ((bill.value)/(people.value)+(bill.value * discount)/(100*people.value)).toFixed(2);
    }
}
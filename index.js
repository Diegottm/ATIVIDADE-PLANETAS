var seuPeso = document.getElementById('peso');
var selectPlaneta = document.getElementById('planeta'); 
var MostraResultado = document.getElementById('resultado');
var buttonCalcular = document.getElementById('calcular');  

buttonCalcular.addEventListener('click', calcula);

function calcula(){
    var peso = parseFloat(seuPeso.value);
    var calculaPeso = parseInt(selectPlaneta.options[selectPlaneta.selectedIndex].value);
    
    if (isNaN(peso)){
        alert(seuPeso.value+' não é um valor válido!');
    }
    else if(peso <=0){
        alert('Peso inválido');
    }
    else{   
    switch(calculaPeso){
        case 1 : resultado = (peso/10)*0.37;
        MostraResultado.innerText = 'Seu peso em Mercúrio é: '+resultado+' kg.';
        break;
        case 2 : resultado = (peso/10)*0.88;
        MostraResultado.innerText = 'Seu peso em Vênus é: '+resultado+' kg.';
        break;
        case 3 : resultado = (peso/10)*0.38;
        MostraResultado.innerText = 'Seu peso em Marte é: '+resultado+' kg.';
        break;
        case 4 : resultado = (peso/10)*2.64;
        MostraResultado.innerText = 'Seu peso em Júpiter é: '+resultado+' kg.';
        break;
        case 5 : resultado = (peso/10)*1.15;
        MostraResultado.innerText = 'Seu peso em Saturno é: '+resultado+' kg.';
        break;
        case 6 : resultado = (peso/10)*1.17;
        MostraResultado.innerText = 'Seu peso em Urano é: '+resultado+' kg.';
        break;
    }
}
}
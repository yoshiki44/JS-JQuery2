let display = document.getElementById("display");
let equalCount = 0;
let decimalCount = 0;

function numberClick(target) {
    let targetValue = target.innerHTML;
    if (equalCount >= 1){
        display.innerHTML = "0";
        equalCount = 0;
    }
    
    if(display.innerHTML == "0" && targetValue =="0"){
        display.innerHTML ="0";
    } else if(display.innerHTML == "0" && targetValue =="00"){
        display.innerHTML ="0";
    } else if(display.innerHTML == "0" && targetValue == "."){
        display.innerHTML = "0.";
    } else if(display.innerHTML == "0"){
        display.innerHTML = targetValue;
    } else{
        display.innerHTML += targetValue;
    }

};

function formulaClick(formula){
    equalCount = 0;
    decimalCount = 0;
    let formulaValue = formula.innerHTML;
    
    if(display.innerHTML.slice(-1) =="+" ||display.innerHTML.slice(-1) =="-" ||display.innerHTML.slice(-1) =="*" ||display.innerHTML.slice(-1) =="/"){
        display.innerHTML = display.innerHTML.slice(0,-1) + formula.innerHTML;
    }else{
        display.innerHTML += formulaValue;
    }
};

function clearClick(){
    equalCount = 0;
    decimalCount = 0;
    display.innerHTML = "0";
};

function equalClick(){
    equalCount += 1;
    display.innerHTML = Math.round(eval(display.innerHTML)*100000)/100000;
    
    decimalCount = 0;
};

function decimalClick(decimal){
    let decimalPoint = decimal.innerHTML;
    
    if(decimalCount == 0){
        if(display.innerHTML.slice(-1) =="+" ||display.innerHTML.slice(-1) =="-" ||display.innerHTML.slice(-1) =="*" ||display.innerHTML.slice(-1) =="/"){
            display.innerHTML += "0.";
        }else{
            display.innerHTML += decimalPoint;
        }
        
    }else{
        display.innerHTML;
    }
    
    decimalCount += 1;
}
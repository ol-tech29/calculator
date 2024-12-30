var num1 = null;
var num2 = null;
var operator = null;
var result =null;


$(".displayBtn").click(function(){
var buttonValue =$(this).text();

//if (!isNaN(buttonValue)) { 
    
    if (operator === null) {
        num1 = num1 || '';
        num1 += buttonValue;
        
      
        $("#result").text(num1);
    } else {
        num2 = num2 || '';
        num2 += buttonValue;
        
        $("#result").text(num2);
    }
//}
});

$(".operator").click(function(){
    if(result !== null){
        num1 = result;
        result =null;
        num2 = null;
    }
    operator= $(this).text();
   $("#result").text(operator);
});

$("#equal").click(function(){
  if (num1 !==null && num2 !== null && operator !==null) {
    if(result === null){
    result = calculator(parseFloat(num1),parseFloat(num2),operator);
        $("#result").text(result);
    }
  }
  else {
    
    result = calculator(num1,parseFloat(num2),operator);
        $("#result").text(result);
  }
   
});

function add(num1,num2){
    return (num1 + num2);
}

function subtract(num1,num2){
    return num1 - num2;
}
function multiply(num1,num2){
    return num1*num2;
}
function divide(num1,num2){
    return num1 / num2;
}
function calculator( num1,num2,operator){
    switch (operator) {
    case "+":
            return add(num1,num2);

            break;
            
            

    case "-":
                return subtract(num1,num2);
                break;

     case "*":
                return multiply(num1,num2);
                break;

    case "/":
                    return divide(num1,num2);
                    break;
                    
        default:
            return "invalid entry";
    }

}
$("#clear").click(function(){
    $("#result").text('');
    num1=null;
    num2 = null;
    operator =null;
    result =null;

})
$("#back").click(function () {
   if (operator === null){
    num1 = num1.slice(0, -1);
    $("#result").text(num1);
   }
   else{
    num2 = num2.slice(0, -1);
    $("#result").text(num2);
   }
})

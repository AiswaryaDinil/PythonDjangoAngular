function displayValue(event){
    console.log(event.target.value);
    result.value+=event.target.value;
}
function clearBox(){
    result.value="";
}

function evaluateExpression(){
    let expr=result.value
    let out=eval(expr)
    result.value=out
}
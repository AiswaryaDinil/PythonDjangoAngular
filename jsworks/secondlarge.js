num1=10
num2=20
num3=15
if((num1>num2)&&(num1>num3))
{
    if(num2>num3){
        console.log(`${num2} is second largest`);
    }
    else{
        console.log(`${num3} is second largest`);
    }
}
else if((num2>num1)&&(num2>num3))
{
    if(num1>num3){
        console.log(`${num1} is second largest`);
    }
    else{
        console.log(`${num3} is second largest`);
    }
}
else if((num3>num1)&&(num3>num2))
{
    if(num1>num2){
        console.log(`${num1} is second largest`);
    }
    else{
        console.log(`${num2} is second largest`);
    }
}  

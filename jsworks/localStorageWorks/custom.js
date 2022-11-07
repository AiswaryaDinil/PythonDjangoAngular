// var age =23;
// if(age<23){
//     throw new Error("invalid age")
// }
// else{
//     console.log("pass");
// }

//try- expection code
//catch - error handling code
//throw - throw custom error

var pro=new Promise((res,rej)=>{
    let num=3;
    if(num<10){
        rej("invalid")
    }
})

pro.then(res=>console.log("valid number")).catch(err=>console.log(err))

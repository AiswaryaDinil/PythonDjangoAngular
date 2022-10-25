var lottery=new Promise((res,rej)=>{
    let priceNum=Math.floor(Math.random()*10)
    let candidateNum=4
    if(priceNum==candidateNum){
        res("won")
    }
})
lottery.then(ms=>console.log("You Will Buy A Bike"))
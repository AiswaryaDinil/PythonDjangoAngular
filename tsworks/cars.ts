interface car{
    id:Number,
    name:string,
    accelerate():void
}

var swift:car={
    id:1,
    name:"swift",
    accelerate() {
        console.log("accelerated");
        
    },
}
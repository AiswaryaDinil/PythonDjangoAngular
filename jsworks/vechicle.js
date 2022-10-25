var baleno={
    name:"baleno",
    brand:"nexa",
    colors:["red","black"],
    price:"8lac",
    getPrice(){
        return this.price
    }

}

var glanza={
    name:"glanza",
    brand:"toyotta",
    price:"10lac"

}
glanza.__proto__=baleno
console.log(glanza.colors);
console.log(glanza.price);
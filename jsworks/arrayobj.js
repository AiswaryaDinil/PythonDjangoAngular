var arr=[10,2,3,8,9,12,6]
//map

// var squares=arr.map(n=>n**2)
// var cubes=arr.map(n=>n**3)
// console.log(squares);
// console.log(cubes);

// var narray=arr.map(num => num>5?num+1:num-1)
// console.log(narray);

// var oddNumbers=arr.filter(n=>n%2!=0)
// var evenNumbers=arr.filter(n=>n%2==0)

// console.log(oddNumbers,evenNumbers);

var maxNum=arr.reduce((n1,n2)=>n1>n2?n1:n2)
console.log(maxNum);
var minNum=arr.reduce((n1,n2)=>n1<n2?n1:n2)
console.log(minNum);
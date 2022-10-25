var scores=[12,48,24,64,56,84,76];
// function compare(o1,o2){
//     return o1>o2?-1:1
// }

//scores.sort((n1,n2) => n1<n2?-1:1)   //ascending
scores.sort((n1,n2) => n1-n2)   //ascending comparison
console.log(scores);

//scores.sort((n1,n2) => n1>n2?-1:1)   //descending
scores.sort((n1,n2) => n2-n1)   //descending comparison
console.log(scores);

//clientside - window.console.log("hello")
//serverside - global.console.log("hello")
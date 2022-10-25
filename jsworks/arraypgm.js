//--ARRAYS--
  //define []
  //can store different types of data
  //size dynamic
  //duplicates allowed

 var scores=[12,48,24,64,56];
// for(let i=0;i<=5;i++){
//     console.log(scores[i]);
// }

for(let score of scores){
    console.log(score);
}

for(let score in scores){  //in -> get index
  console.log(score);
}

var books=[
    {id:100,name:"Game of Thrones",author:"George R. R. Martin",price:500},
    {id:101,name:"Gone Girl",author: "Gillian Flynn",price:550},
    {id:102,name:"Rich Dad Poor Dad",author:"Albert",price:600},
    {id:103,name:"Lord of the rings",author:"J. R. R. Tolkien",price:750},
    {id:104,name:"Wings Of fire",author:"A.P.J Abdul Kalam",price:500},





]


var htmldata=``    
books.forEach(bk=>{
    htmldata+=`
    <tr>
    <td>${bk.id}</td>
    <td> ${bk.name} </td>
    <td> ${bk.author} </td>
    <td>${bk.price}</td>
    <td> ${bk.language} </td>
    </tr>
    `
})

document.querySelector("#result").innerHTML=htmldata
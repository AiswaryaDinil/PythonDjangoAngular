var countries=[
    {id:1,name:"india",population:288000,currency:"Rs",languague:"hindi"},
    {id:2,name:"srelenka",population:526500,currency:"sreelenkan Rs",languague:"simhala"},
    {id:3,name:"Usa",population:503000,currency:"dollar",languague:"english"},
    {id:4,name:"canada",population:34000,currency:"dollar",languague:"english"},
    {id:5,name:"china",population:123600,currency:"yen",languague:"chinese"}
]

var htmlData=``
countries.forEach(cntry=>{
    htmlData+=`
    <tr>
    <td>${cntry.id}</td>
    <td>${cntry.name}</td>
    <td>${cntry.population}</td>
    <td>${cntry.currency}</td>
    <td>${cntry.languague}</td>
    <td><button onClick=displayDetails(${cntry.id})>View</button></td>
    </tr>
    `
})
document.querySelector("#result").innerHTML=htmlData
function displayDetails(id){
    let details=countries.find(cnt=>cnt.id==id)
    populateValue(details)
}

function populateValue(country){
    let displayData=`
    <div class="card" style="width: 18rem;">
    <ul class="list-group list-group-flush">
    <li class="list-group-item">${country.name}</li>
    <li class="list-group-item">${country.population}</li>
    <li class="list-group-item">${country.currency}</li>
    <li class="list-group-item">${country.languague}</li>
    </ul>
    </div>
    `
    document.querySelector("#id_details").innerHTML=displayData
}
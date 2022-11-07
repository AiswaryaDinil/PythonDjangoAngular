fetch("https://restcountries.com/v2/all").
then(res=>res.json()).
then(data=>populateCountryName(data))

function populateCountryName(countries){
    let selectBox=document.querySelector("#id_countryselect")
    countries.forEach(cntry => {
        let cname=cntry.name;
        let option=document.createElement("option")
        option.value=cname
        option.text=cname
        selectBox.append(option)
    })
}
function fetchCountry(){
    let cname=document.querySelector("#id_countryselect").value
    fetch(`https://restcountries.com/v2/name/${cname}?fullText=true`).
    then(res=>res.json()).then(data=>populateCountry(data)).catch(err=>alert(err))
}

function populateCountry(country){
    let data=country[0]
    console.log(data);
    let htmlData=`
    <div class="card" style="width:100%">
  <img src="${data.flag}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${data.name}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Timezones: ${data.timezones}</li>
    <li class="list-group-item">Population: ${data.population}</li>
    <li class="list-group-item">Capital: ${data.capital}</li>
    <li class="list-group-item">Borders: ${data.borders}</li>
  </ul>
  <div class="card-body">
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>

    `
document.querySelector("#result").innerHTML=htmlData
}

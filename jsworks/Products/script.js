
fetch("https://fakestoreapi.com/products").then(res=>res.json()).then(data=>populateValues(data))


function populateValues(product){
    let htmlData=``;
    product.forEach(p => {
        htmlData+=`
        <div class="col-3">
        <div class="card" style="width: 18rem;">
        <img src="${p.image}" class="card-img-top" alt=" " width="100%" height="100%">
        <div class="card-body">
        <h5 class="card-title">${p.title}</h5>
        <p class="card-text">${p.description}</p>
        </div>
        <ul class="list-group list-group-flush">
        <li class="list-group-item">An item</li>
        <li class="list-group-item">A second item</li>
        <li class="list-group-item">A third item</li>
        </ul>
        <div class="card-body">
        <a href="#" class="card-link">Card link</a>
        <button href="#" class="btn btn-info" onClick="fetchProduct(${p.id})">View</button>
        </div>
        </div>
        </div>
`
    });
    document.querySelector("#result").innerHTML=htmlData
}

function fetchProduct(id){
    console.log(id);
    fetch(`https://fakestoreapi.com/products/${id}`).
    then(res=>res.json()).
    then(data=>{
    populateValues([data])
})
}
function fetchByCategory(e){
    let category=e.target.name;
    fetch(`https://fakestoreapi.com/products/category/${category}`).
    then(res=>res.json()).then(data=>populateValues(data))
}
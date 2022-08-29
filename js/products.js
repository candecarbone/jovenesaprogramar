function getHTML(product) {
  return `
    <div class="row shadow p-0 rounded overflow-hidden mb-3" id="imageBody">
            
     <div class="col-3 p-0" id="image">
         <img class="img-fluid" src="${product.image}" alt="">
      </div>


      <div class="col-9 d-flex flex-column   justify-content-between">
         <div class="productBody p-3">
          <h3 id="name">${product.name}</h3>
          <p id="description">${product.description}</p>
         </div>

          <div class="productFooter d-flex justify-content-between p-3">
            <p>Cantidad vendidos: <span class="cuantity" id="soldCount">${product.soldCount}</span></p>
          <div class="price">
            <span class="currency" id="currency">${product.currency}</span>
            <span class="cost" id="cost"> ${product.cost}</span>
          </div>
          </div>
        </div>

    </div>
    `;
}

let prod1 = {
  "id": 50921,
  "name": "Chevrolet Onix Joy",
  "description": "Generación 2019, variedad de colores. Motor 1.0, ideal para ciudad.",
  "cost": 13500,
  "currency": "USD",
  "soldCount": 14,
  "image": "img/prod50921_1.jpg"
};


document.addEventListener('DOMContentLoaded', async function(){
  const listado = document.querySelector('.product-list');

  
  const listaProductos = await getJSONData(PRODUCTS_URL);

  console.log(listaProductos);

  listaProductos.data.products.forEach(product =>{
    listado.innerHTML += getHTML(product);
  });
  
});
let productContainer = document.querySelector("#productContainer")
// productContainer.innerHTML =`  <div class="progress">
// <div class="indeterminate"></div>
// </div>
//   `

let productApi = {
  url: "https://fakestoreapi.com/products"
}

setTimeout(productApiCall, 500);

// product fetching
async function productApiCall() {

  productContainer.innerHTML = `  <div class="progress">
  <div class="indeterminate"></div>
  </div>
    `

  let response = await fetch(productApi.url)
  products = await response.json()
  // console.log(products)


  displayProduct(products)

}

function displayProduct(products) {

  console.log("hello")
  console.log(products)

  products.forEach(product => {
    productContainer.innerHTML = ` <div class="row">
    <div class="col s12 m3">
      <div class="card">
        <div id="productImage" class="card-image">
          <img src="${product.image}">
        
          <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
        </div>
        <div class="card-content">
          <span id="productTitle" class="card-title">${product.title}</span>
          <span id="productPrice" class="card-title">${product.price} $</span>
          <span class="card-title">Product Description</span>
          <p id="productDescription"  >${product.description}</p>
          <span class="card-title">${product.rating.rate} ⭐⭐⭐</span>
        </div>
      </div>
    </div>
  
  </div>`
    console.log(product.title)
    console.log(product.category)
    console.log(product.image)
    console.log(product.price)
    console.log(product.rating)
  });
}
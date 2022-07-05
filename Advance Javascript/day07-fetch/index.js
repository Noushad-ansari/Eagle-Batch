
let productApi = {
    url: "https://fakestoreapi.com/products"
}


setTimeout(productApiCall, 500);

async function productApiCall() {
  let response =  await fetch(productApi.url)
  let products =  await response.json()
  console.log(products[0])

//   1 Image
//   2 price 
//   3 title
//   4 Rating

}


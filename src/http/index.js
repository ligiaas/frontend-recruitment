export function getProductsApi() {
  return fetch('/data/products.json', {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  })
    .then(res => res.json())
    .then(data => data.products)
}
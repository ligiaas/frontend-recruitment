export async function getProductsApi() {
  const res = await fetch('/data/products.json', {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  });
  const data = await res.json();
  return data.products;
}
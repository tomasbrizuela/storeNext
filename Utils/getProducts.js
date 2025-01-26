export default async function getProducts(category) {
    let url = "https://fakestoreapi.com/products"
    let response = await fetch(url)
    let data = await response.json();

    if (category) {
        console.log("Hay category")
        let filteredData = data.filter((item) => item.category.includes(category))
        return filteredData
    } else {
        console.log("NOOOO hayy category")
        return data
    }
}

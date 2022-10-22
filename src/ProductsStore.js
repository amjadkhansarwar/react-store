
const productArray =[
    {
        id: "1",
        title: "Cofffee",
        price: 4.99
    },
    {
        id: "2",
        title: "Sunglasses",
        price: 9.99
    },
    {
        id: "3",
        title: "Camera",
        price: 39.99
    }
]

function getProductData(id){
    
    let productData = productArray.find(product=>product.id === id)

    if (productData == undefined) {
        console.log('Product Does not exist with ID:' + id)
        return undefined
    }

    return productData
}

export{productArray, getProductData}
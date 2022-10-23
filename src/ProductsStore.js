
const productArray =[
    {
        id: "price_1LwB2vIQDRcAaARdTI74yRla",
        title: "Cofffee",
        price: 4.99
    },
    {
        id: "price_1LwB4RIQDRcAaARdtCZraYaU",
        title: "Sunglasses",
        price: 9.99
    },
    {
        id: "price_1LwB5hIQDRcAaARdasmN55Ve",
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
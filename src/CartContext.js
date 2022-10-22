import {createContext, useState } from "react";
import { getProductData, productArray } from "./ProductsStore";

export const CartContext = createContext({
    items:[],
    getProductQuentity:() => {},
    addOneToCart:() => {},
    removeOnefFromCart:() => {},
    deleteFromCart:() => {},
    getTotalCost:() => {}
})

export function CartProvider({children}){
    const [cartProducts, setCartProducts]= useState([])

    function getProductQuentity(id){
        const quantity= cartProducts.find(product =>product.id === id)?.quantity
        if(quantity === undefined){
            return 0
        }
        return quantity
    }

    function addOneToCart(id){
        const quantity= getProductQuentity(id)
        if (quantity === 0){
            setCartProducts(
                [
                    ...cartProducts,
                    {
                        id: id,
                        quantity: 1
                    }
                ]
            )
        }else{
            setCartProducts(
                cartProducts.map(
                    product =>
                    product.id === id
                    ?{... product, quantity: product.quantity + 1}
                    : product
                )
            )
        }
    }

    function deleteFromCart(id){
        setCartProducts(
            cartProducts => cartProducts.filter(currentProduct=>{
                return currentProduct.id != id})
        )
    }

    function removeOnefFromCart(id){
        const quantity = getProductQuentity(id)
        if(quantity == 1){
            deleteFromCart(id)
        }else{
            setCartProducts(
                cartProducts.map(
                    product =>
                    product.id === id
                    ?{... product, quantity: product.quantity - 1}
                    : product
                )
            )
        }
    }
    function getTotalCost(){
        let totalCost= 0
        cartProducts.map((cartItem) =>{
            const productData = getProductData(cartItem.id)
            totalCost += (productData.price * cartItem.quantity)
        })
        return  totalCost;
    }

    const contextValue= {
        items:cartProducts,
        getProductQuentity,
        addOneToCart,
        removeOnefFromCart,
        deleteFromCart,
        getTotalCost
    }

    return(
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    )
}
export default CartProvider
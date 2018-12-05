export function addProductToCart(product){
    return { type: 'ADD_TO_CART', payload: product }
}

export function removeProductFromCart(product){
    return { type: 'REMOVE_FROM_CART', payload: product }
}
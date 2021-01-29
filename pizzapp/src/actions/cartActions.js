const ADD_TO_CART = "ADD_TO_CART";
const REMOVE_FROM_CART = "REMOVE_FROM_CART";
const OPEN_CART = "OPEN_CART";

export const addToCart = (product) => {
    return function (dispatch, getState) {
        const cartItems = getState().cart.cartItems.slice(); 
        let update = cartItems.find((x) => x.id === product.id && x.size === product.size);
        if (update)
            update.count += product.count;
        else
            cartItems.push(product);

        dispatch({
            type: ADD_TO_CART,
            payload: { cartItems, openDrawer: true },
        });
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
}

export const removeFromCart = (id, size) => (dispatch, getState) => {
    let cartItems = getState().cart.cartItems.slice()
    const index = cartItems.findIndex((x) => x.id === id && x.size === size);
    cartItems.splice(index, 1);
    dispatch({ type: REMOVE_FROM_CART, payload: { cartItems, openDrawer: getState().cart.openDrawer } });
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
};

export const toggleDrawer = () => (dispatch, getState) => {
    dispatch({ type: OPEN_CART, payload: { ...getState().cart, openDrawer: !getState().cart.openDrawer } });
};
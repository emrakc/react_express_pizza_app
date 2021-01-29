
const ADD_TO_CART = "ADD_TO_CART";
const REMOVE_FROM_CART = "REMOVE_FROM_CART";
const OPEN_CART = "OPEN_CART";

export const cartReducer = (
    state = { cartItems: JSON.parse(localStorage.getItem("cartItems") || "[]"), openDrawer: false },
    action
) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                cartItems: action.payload.cartItems,
                openDrawer: action.payload.openDrawer
            };
        case REMOVE_FROM_CART:
            return {
                cartItems: action.payload.cartItems,
                openDrawer: action.payload.openDrawer
            };
        case OPEN_CART:
            return {
                cartItems: action.payload.cartItems,
                openDrawer: action.payload.openDrawer
            };
        default:
            return state;
    }
};
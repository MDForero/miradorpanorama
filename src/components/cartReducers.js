import products from "../images/menu"

export const initialState = {
    products,
    cart: [],
}
export const cartReducer = (state, action) => {
    switch (action.type) {
        case "add_to_cart": {
            const { data } = action.payload
            const { id, opcion } = data

            let newArticle = state.products.find(element => element.id === id)
            newArticle = {...newArticle, opciones:[]}
            let cartArticle = state.cart.find(element => element.id === newArticle.id)
            return cartArticle ?
                {...state, cart: state.cart.map(element => element.id === cartArticle.id ? {...element, opciones: element.opciones.find(item => item.id === opcion.id) ? element.opciones.map(x => x.id === opcion.id ? {...x, amount: parseInt(x.amount) + parseInt(opcion.amount)}: x) : [...element.opciones, opcion]} : element)
                }
                : { ...state, cart: [...state.cart, { ...newArticle, opciones: [opcion] }] }
        }
        case "delete_all": {
            return {
                ...state, cart: [],
            }
        }
        case "delete_one": {
            const {id} = action.payload
            return {...state, cart: state.cart.filter(element => element.id !== id )}
        }
    }
}
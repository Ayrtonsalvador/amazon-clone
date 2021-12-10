export const initialState = {
    basket: [],
    quantity: 0,
    user: null,
};

export const getBasketTotal = (basket) =>
basket?.reduce((amount, item) => item.price * item.quantity + amount, 0);


export const getBasketQuantity = (basket) =>
basket?.reduce((quantity, item) => quantity + item.quantity, 0);


const reducer = (state, action) => {
    switch(action.type) {
        
        case 'ADD_TO_BASKET':

                return {
                    ...state,
                    basket: [...state.basket, action.item],
                };

        case 'EMPTY_BASKET':

                return {
                    ...state,
                    basket: []
                };

        case 'UPDATE_BASKET':

                return {
                    ...state, 
                    basket: state.basket.map(el => {
                        if(el.id === action.item.id) {
                        
                            return {
                                ...el,
                                quantity: action.item.quantity
                            }
                        }

                        return el;
                    })
                };
         

        case 'REMOVE_FROM_BASKET':
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            );
            let newBasket = [...state.basket];

            if(index >= 0) {
                newBasket.splice(index, 1);
            } else {
                console.warn(`Can't remove product (id= ${action.id}) as its not in basket !`)
            }
            
            return {
                ...state,
                basket: newBasket
            }

        case 'SET_USER':
            return {
                ...state,
                user: action.user
                }

        default:
            return state;
    }
};

export default reducer;
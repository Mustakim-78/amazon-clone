export const initialState = {
    basket :[],
    user : null,
};

const reducer = (state, action) =>{
    
    switch(action.type){
        case "add_to_basket":
            return{
                ...state,
                basket: [...state.basket, action.item],
            };
        case 'remove_from_basket':
            let index = state.basket.findIndex((item) => item.id === action.item.id);
            let newbasket = [...state.basket];
            newbasket.splice(index,1);
            return{
                ...state,
                basket : newbasket,
            };
        case 'set_user':
            return{
                ...state,
                user : action.user,
            };
        default:
            return state;
    };
};

export default reducer;
import { ADD_FAVORITE, DELETE_FAVORITE } from "../actions/types";

const initialState = {
    type: "",
    myFavorites: [],
};

const rootReducer = (state=initialState, {type ,payload}) =>{
    switch (type) {
        case ADD_FAVORITE:
           return{
            ...state,
            myFavorites: [ ...state.myFavorites, payload]
           } 
            
        case DELETE_FAVORITE:
            const filtro = state.myFavorites.filter(element=> element.id !== payload);    
            return{
                ...state,
                myFavorites: filtro
            }    
    
        default:
            return {...state}
    }
}

export default rootReducer;
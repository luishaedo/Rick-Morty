import { ADD_FAVORITE, DELETE_FAVORITE, FILTER, ORDER } from "../actions/types";

const initialState = {
    type: "",
    allMyFavorites: [],
    myFavorites: [],
};

const rootReducer = (state=initialState, action) =>{
    
    switch (action.type) {
        case ADD_FAVORITE:
            
            const addFavorites = [...state.allMyFavorites, action.payload];
           
           return{
            ...state,
            allMyFavorites: [...addFavorites],
            myFavorites: [ ...addFavorites],

           } 
            
        case DELETE_FAVORITE:
            
            const filtro = state.myFavorites.filter(element=> element.id !== action.payload);    
            return{
        ...state,
        allMyFavorites: [...filtro],
        myFavorites: [...filtro],
      };
      case FILTER:
        return {
          ...state,
          myFavorites: state.allMyFavorites.filter(
            (e) => e.gender === action.payload
          ),
        };
      case ORDER:
        let orderFavorites;
        if (action.payload === "Ascendente") {
          orderFavorites = state.myFavorites.sort((a, b) =>
            a.id > b.id ? 1 : -1
          );
        } else {
          orderFavorites = state.myFavorites.sort((a, b) =>
            a.id < b.id ? 1 : -1
          );
        }
        return {
          ...state,
          myFavorites: [...orderFavorites],
        };
      case "RESET":
        return {
          ...state,
          myFavorites: state.allMyFavorites,
        };
    
        default:
            return {...state}
    }
};

export default rootReducer;
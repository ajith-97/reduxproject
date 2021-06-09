import ACTION_TYPES from '../action/action-Types'
  const initialState = {
  result: [],                                                       
  };
const countryRegionReducer = (state = initialState, {payload, type}) => {      
  switch (type) {                                       
    case ACTION_TYPES.FETCH_SUCCESS:
      return {
        ...state,
          result: payload,  
        };
    case ACTION_TYPES.FETCH_FAIL:
      return {
        ...state,
        error: payload.error,
        }; 
      default:
      return state;
  }
};

export default countryRegionReducer;


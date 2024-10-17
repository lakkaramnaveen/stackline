const initialState = {
    productData: {
        sales: [],
        details: []
      }
    };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_PRODUCT_DATA':
        return { ...state, productData: action.payload };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  
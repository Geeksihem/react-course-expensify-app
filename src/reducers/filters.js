
const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  };
  
export default (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
      case 'SET_TEXT_FILTER':
        return {
          ...state,
          text: action.text
        };
        case 'SORT_BY_AMOUNT': 
        return {
        ...state, 
        sortBy : 'amount'
      }; 
      case 'SET_START_DATE': 
      return {
      ...state, 
      startDate :  action.startDate
      }; 
      default:
        return state;
    }
  };
  
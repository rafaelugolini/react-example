import { REQUEST_STOCKS, REQUEST_STOCKS_SUCCESS, REQUEST_STOCKS_FAIL } from './constants';

const initialState = {
  loading: false,
  data: [],
  error: '',
};

function MainReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_STOCKS:
      return {
        ...state,
        loading: true,
      };
    case REQUEST_STOCKS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.data,
      };
    case REQUEST_STOCKS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}

export default MainReducer;

import { TYPES } from '../../../constants';

const initialState = {
  isLoading: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.LOADING:
      return {
        ...state,
        isLoading: true
      };
    case TYPES.LOADING_DONE:
      return {
        ...state,
        isLoading: false
      };
    default:
      return state;
  }
}

export default reducer;

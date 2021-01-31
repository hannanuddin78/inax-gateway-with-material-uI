import {
  ADD_LOCAL_BANK,
  ADD_WALLET_ADDRESS,
  ALL_Country,
  GET_COUNTRY_SELECTED,
} from "../actions/types";

const initialState = {
  counters: [],
  buyUserDetails: {},
};

const CountryReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ALL_Country:
      return {
        ...state,
        counters: payload,
      };
    case GET_COUNTRY_SELECTED:
      return {
        ...state,
        buyUserDetails: payload,
      };
    case ADD_WALLET_ADDRESS:
      return {
        ...state,
        buyUserDetails: { ...state.buyUserDetails, ...payload },
      };
    case ADD_LOCAL_BANK:
      return {
        ...state,
        buyUserDetails: { ...state.buyUserDetails, ...payload },
      };
    default:
      return state;
  }
};

export default CountryReducer;

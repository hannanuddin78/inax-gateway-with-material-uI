import { combineReducers } from "redux";
import CountryReducer from "./CountryReducer";
import SellReducer from "./SellReducer";

export default combineReducers({
  country: CountryReducer,
  sellUser: SellReducer,
});

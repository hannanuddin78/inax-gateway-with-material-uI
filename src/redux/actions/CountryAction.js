import axios from "axios";
import { ADD_LOCAL_BANK, ADD_WALLET_ADDRESS, ALL_Country, GET_COUNTRY_SELECTED } from "./types";

// get all posts
export const getAllCountries = () => async (dispatch) => {
  const result = await axios.get("https://restcountries.eu/rest/v2/all");
  dispatch({
    type: ALL_Country,
    payload: result.data,
  });
};

//SET SELECT NAME
export const getSelectedCountries = (buyUserDetails) => async (dispatch) => {
  const result = await buyUserDetails;
  dispatch({
    type: GET_COUNTRY_SELECTED,
    payload: result,
  });
};

//SET SELECT WALLET ADDRESS
export const getWalletAddress = (address) => async (dispatch) => {
  const result = await address;
  console.log(result);
  dispatch({
    type: ADD_WALLET_ADDRESS,
    payload: result,
  });
};

//SET SELECT LOCAL BANK
export const getLocalBank = (address) => async (dispatch) => {
  const result = await address;
  console.log(result);
  dispatch({
    type: ADD_LOCAL_BANK,
    payload: result,
  });
};

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSelectedCountries } from '../../../redux/actions/CountryAction';
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    
  from: {
    "& .MuiTextField-root": {
      minWidth: "60%",
    },
  },
}));

const BuyNextOne = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const currencies = useSelector((state) => state.country.counters);
    const [countryName, setCountryName] = useState({});
    const history = useHistory();

    const handleChange = (event) => {
        const nameSelect = { ...countryName };
        nameSelect.name = event.target.value ;
      setCountryName(nameSelect);
    };

    const handleNext = () => {
      const quantityValue = document.getElementById("outlined-basic").value;
      const select = {
          ...countryName,
        quantity: quantityValue,
      };
      console.log(select, countryName.name);
      if (countryName.name === undefined && select.quantity.toString() === "") {
        alert("you not select coin and input quantity..first select");
      }
      else if (
        select.quantity.toString() === quantityValue.toString() &&
        countryName.name === undefined
      ) {
        alert("plz..you not select coin..first select coin");
      }
      else if (
        select.quantity.toString() === "" &&
        select.name.toString() === countryName.name.toString()
      ) {
        alert("plz..you not input quantity..select input quantity");
      } else {
        dispatch(getSelectedCountries(select));
        alert("you select coin successfully store");
        history.push("/buyPageTwo");
      }
    };

    return (
      <div>
        <h1>Stable coin gateway - BUY</h1>
        <div>
          <form className={classes.from} autoComplete="off">
            <TextField
              style={{ paddingBottom: "40px" }}
              id="outlined-select-currency"
              select
              label="Select Your Coin"
              value={countryName.name || ""}
              onChange={handleChange}
              variant="outlined"
            >
              {currencies.map((cr) => (
                <MenuItem key={cr.numericCode} value={cr.name}>
                  {cr.name} - ( {cr.currencies[0].code})
                </MenuItem>
              ))}
            </TextField>
            <TextField
              style={{ width: "50px !important", paddingBottom: "40px" }}
              size="small"
              id="outlined-basic"
              label="Quantity"
              variant="outlined"
            />
          </form>
        </div>
        <div>
          <h3>Total Cost @Price AOA/TAOA</h3>
        </div>
        <div>
          <Button
            style={{ width: "100%" }}
            onClick={handleNext}
            variant="contained"
            color="secondary"
          >
            Next
          </Button>
        </div>
      </div>
    );
}

export default BuyNextOne
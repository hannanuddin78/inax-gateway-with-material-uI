import { Button } from '@material-ui/core';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import WAValidator from "wallet-address-validator";
import { getWalletAddress } from '../../../redux/actions/CountryAction';

const BuyNextTwo = () => {

    const dispatch = useDispatch();
    const [address, setAddress] = useState("");
    let history = useHistory();

    const isValid = () => {
      const valid = WAValidator.validate(address, "BTC");
      if (valid) {
        const walletAddress = {
          addressWallet: address,
        };
        dispatch(getWalletAddress(walletAddress));
        alert("This is a valid address");
        history.push("/buyPageThree");
      } else {
        alert("Address INVALID");
      }
    };

    return (
      <div className="container border my-5">
        <div className="container p-5">
          <p>wallet : 1KFzzGtDdnq5hrwxXGjwVnKzRbvf8WVxck </p>
          <input
            onBlur={(e) => setAddress(e.target.value)}
            className="form-control mb-5"
            type="text"
            placeholder="Enter your BSC wallet address"
          />
          <h4>You will receive your TAOA in this address</h4>

          <h4 className="text-danger mt-5">
            Pay close attention mistakes will make you loose all your assets and there is nothing we
            can do to help
          </h4>
        </div>
        <a href="https://testnet.binance.org/en/create" target="_blank" className="text-center">
          <h4>Don't have a BSC wallet yet?</h4>
        </a>
        <div className="text-center py-5">
          <Button style={{ width: "100%" }} variant="contained" color="secondary" onClick={isValid}>
            Next
          </Button>
        </div>
      </div>
    );
}

export default BuyNextTwo

import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  click_styles: {
    textDecoration: "none",
  },
  text_center: {
    textAlign: "center",
  },
}));

const FirstPage = () => {
  //call material styles
  const classes = useStyles();

  return (
    <div>
      <h1>Welcome To Our Finex Company</h1>
      <div className={classes.text_center}>
        <h4>
          Buy Coins Finex...{" "}
          <a href="/buyPageOne" className={classes.click_styles}>
            Click here
          </a>
        </h4>
        <h4>
          Sell Coins Finex...{" "}
          <a href="/sellNext1" className={classes.click_styles}>
            Click here
          </a>
        </h4>
      </div>
    </div>
  );
};

export default FirstPage;

import "./App.css";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FirstPage from "./components/FirstPage";
import BuyNextOne from "./components/BuyPage/BuyNextPageAll/BuyNextOne";
import BuyNextTwo from "./components/BuyPage/BuyNextPageAll/BuyNextTwo";
import BuyNextThree from "./components/BuyPage/BuyNextPageAll/BuyNextThree";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllCountries } from "./redux/actions/CountryAction";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: "hidden",
    padding: theme.spacing(0, 3),
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    display: "flex",
  },
  paper: {
    maxWidth: "50%",
    padding: "30px",
  },
}));

function App() {
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCountries());
  }, []);
  return (
    <>
      <Router>
        <div className={classes.root}>
          <Paper className={classes.paper}>
            <Grid container wrap="nowrap" spacing={2}>
              <Switch>
                <Route exact path="/" component={FirstPage} />
                <Route exact path="/buyPageOne" component={BuyNextOne} />
                <Route exact path="/buyPageTwo" component={BuyNextTwo} />
                <Route exact path="/buyPageThree" component={BuyNextThree} />
              </Switch>
            </Grid>
          </Paper>
        </div>
      </Router>
    </>
  );
}

export default App;

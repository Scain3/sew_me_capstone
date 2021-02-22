import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import LoginFormPage from "./components/LoginFormPage/index";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import SearchPage from "./components/Search/SearchPage";
import SinglePatternPage from "./components/ProductPage/SinglePattern";
import SingleFabricPage from "./components/ProductPage/SingleFabric";
import HomePage from "./components/HomePage/HomePage";
import Tailor from "./components/TailorPage/tailor";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import Coats from "./components/Categories/Coat";
import Dress from "./components/Categories/Dress";
import Jacket from "./components/Categories/Jacket";
import Pants from "./components/Categories/Pants";
import Jumper from "./components/Categories/Jumper";
import Skirt from "./components/Categories/Skirt";
import Shirt from "./components/Categories/Shirt";
import Suit from "./components/Categories/Suit";
import FAQ from "./components/FAQ/FAQ";
import Measurement from "./components/Measurements/Measurements";
import MeasurementPage from "./components/MeasurementsModal/Measurement";
import Patterns from "./components/ProductPage/Patterns";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path="/login" >
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/patterns/:id">
            <SinglePatternPage />
          </Route>
          <Route path="/fabrics/:id">
            <SingleFabricPage />
          </Route>
          <Route path="/" exact={true}>
            <HomePage />
          </Route>
          <Route path="/tailor">
            <Tailor />
          </Route>
          <Route path="/cart">
            <ShoppingCart />
          </Route>
          <Route path="/coat">
            <Coats />
          </Route>
          <Route path="/dress">
            <Dress />
          </Route>
          <Route path="/jacket">
            <Jacket />
          </Route>
          <Route path="/jumper">
            <Jumper />
          </Route>
          <Route path="/pants">
            <Pants />
          </Route>
          <Route path="/shirt">
            <Shirt />
          </Route>
          <Route path="/skirt">
            <Skirt />
          </Route>
          <Route path="/suit">
            <Suit />
          </Route>
          <Route path="/FAQ">
            <FAQ />
          </Route>
          <Route path="/add-measurements" exact={true}>
            <MeasurementPage />
          </Route>
          <Route path="/measurements">
            <Measurement />
          </Route>
          <Route path="/patterns" exact={true}>
            <Patterns />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;

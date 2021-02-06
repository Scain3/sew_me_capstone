import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
// import LoginFormPage from "./components/LoginFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import SearchPage from "./components/Search/SearchPage";
import SinglePatternPage from "./components/ProductPage/SinglePattern";
import SingleFabricPage from "./components/ProductPage/SingleFabric";

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
          {/* <Route path="/login" >
            <LoginFormPage />
          </Route> */}
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
        </Switch>
      )}
    </>
  );
}

export default App;

import { Switch, Route } from "react-router-dom";
import Landing from "./pages/landing";
import PageSucess from "./pages/pagesuccess";
import Login from "./pages/login";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/"></Route>
      <Route exact path="/members">
        <h1>Em construção</h1>
      </Route>
      <Route exact path="/login">
        <Landing />
      </Route>
      <Route exact path="/register/1"></Route>
      <Route exact path="/register/2"></Route>
      <Route exact path="/profile/:id"></Route>
      <Route exact path="/landing-page">
        <PageSucess />
      </Route>
      <Route exact path="/my-profile/edit">
        <Login />
      </Route>
      <Route exact path="/my-profile"></Route>
    </Switch>
  );
};

export default Routes;

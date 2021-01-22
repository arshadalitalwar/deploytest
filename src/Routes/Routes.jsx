import React from "react";
import { Route, Switch,} from "react-router-dom";
import { PrivateRoute } from "../Components/PrivateRoute";
import { About } from "./About";
import { Home } from "./Home";
import { Login } from "./Login";
import { UserDetail } from "./UserDetail";
import { Users } from "./Users";


const Routes = () => {
 
  return (
    <div>
      <Switch>
      <Route path="/" exact>
        <Home></Home>
      </Route>
      <Route path="/about" exact>
        <About></About>
      </Route>
      <PrivateRoute path="/users" exact >
        <Users></Users>
        </PrivateRoute>
        <PrivateRoute path="/users/:id" exact >
        <UserDetail></UserDetail>
        </PrivateRoute>
        <Route path="/login" exact>
          <Login></Login>
        </Route>
      <Route>
        <h1>error 404  : Page not found</h1>
        </Route>
        </Switch>
    </div>
  );
};
export { Routes };

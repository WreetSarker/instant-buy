import { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import AddProduct from "./components/AddProduct/AddProduct";
import Admin from "./components/Admin/Admin";
import BoughtProducts from "./components/BoughtProducts/BoughtProducts";
import CheckOut from "./components/CheckOut/CheckOut";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import ManageProduct from "./components/ManageProduct/ManageProduct";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";


export const UserContext = createContext();
function App() {

  const [loggedInUser, setLoggedInUser] = useState();
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/addProduct">
            <Admin></Admin>
            <AddProduct></AddProduct>
          </PrivateRoute>
          <PrivateRoute path="/editProduct">
            <Admin></Admin>
            <ManageProduct></ManageProduct>
          </PrivateRoute>
          <PrivateRoute path="/checkout/:id">
            <CheckOut></CheckOut>
          </PrivateRoute>
          <PrivateRoute path="/orders">
            <BoughtProducts></BoughtProducts>
          </PrivateRoute>
          <PrivateRoute path="/admin">
            <Admin></Admin>
          </PrivateRoute>
        </Switch>
      </Router>

    </UserContext.Provider>
  );
}

export default App;

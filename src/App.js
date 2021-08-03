import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Homes";
import Page from "./pages";
import Login from "./components/LoginUser";
import Register from "./components/Registration";
import DetailCountry from "./DetailCountry";
import PageNotPound from "./components/PageNotFound";
import AuthenRouter from "./HOCs/AuthenRouter";
import PrivateRouter from "./HOCs/PrivateRouter";
import GlobalLoading from "./components/GlobalLoading";


function App() {
  return (
    <>
      <GlobalLoading />
      <BrowserRouter>
        <Switch>
          <AuthenRouter path={"/login"} component={Login} />
          <AuthenRouter path={"/register"} component={Register} />
          <PrivateRouter path={"/covid"} component={Page} />
          <PrivateRouter
            path="/country/:countrycode"
            component={DetailCountry}
          />
          <Route exact path={"/"} component={Home} />
          <Route component={PageNotPound} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;

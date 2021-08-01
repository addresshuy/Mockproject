import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Homes";
import page from "./pages";
import Login from "./pages/LoginPage";
import Register from "./pages/Registration";
import DetailCountry from './DetailCountry'
import PageNotPound from "./pages/NotFoundPage";
import AuthenRouter from "./HOCs/AuthenRouter";
import PrivateRouter from "./HOCs/PrivateRouter";
import GlobalLoading from './pages/GlobalLoading'

function App() {
  return (
    <Router>
      
      
      <Switch>
        <AuthenRouter  path={"/login"} component={Login} />
        <AuthenRouter path={"/register"} component={Register} />
        <PrivateRouter path={"/covid"} component={page} />
        <PrivateRouter path="/country/:countrycode" component={DetailCountry}/>
        <Route exact path={"/"} component={Home} />
        <Route component={PageNotPound} />
      </Switch>
    </Router>
  );
}

export default App;

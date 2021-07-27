import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Homes";
import page from "./pages";
import Login from "./pages/LoginPage";
import Register from "./pages/Registration";
import PageNotPound from "./pages/NotFoundPage";
import AuthenRouter from "./HOCs/AuthenRouter";
import PrivateRouter from "./HOCs/PrivateRouter";
import GlobalLoading from './pages/GlobalLoading'
// import Header from './components/Header'

function App() {
  return (
    <Router>
      {/* <Header /> */}
      
      <Switch>
        <AuthenRouter exact path={"/login"} component={Login} />
        <AuthenRouter exact path={"/register"} component={Register} />
        <PrivateRouter exact path={"/covid"} component={page} />
        <Route exact path={"/"} component={Home} />
        <Route component={PageNotPound} />
      </Switch>
    </Router>
  );
}

export default App;

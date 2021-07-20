
import "./App.css";
import Home from "./pages";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  return (
    <Router>
      {/* <Header /> */}
      <Switch>
        {/* <Route exact path={"/login"} component={LoginPage} />
          <Route exact path={"/Registration"} component={Registrasion} /> */}
        <Route exact path={"/covid"} component={Home} />
        {/* <Route component={PageNotFound} /> */}
      </Switch>
    </Router>
  );
}

export default App;

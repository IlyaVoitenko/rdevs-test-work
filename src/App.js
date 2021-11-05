import "./App.scss";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import CalendarPage from "./components/CalendarPage/CalendarPage";
import AboutPage from "./components/AboutPage/AboutPage";
import Form from "./components/Form/Form";
function App() {
  return (
    <div className="App">
      <Router>
        <div className="">
          <nav>
            <ul className="navigateListLinks">
              <li>
                <Link to="/">CalendarPage</Link>
              </li>
              <li>
                <Link to="/AboutUs">About Us</Link>
              </li>
              <li>
                <Link to="/Form">Form</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route exact path="/">
              <CalendarPage />
            </Route>
            <Route exact path="/AboutUs">
              <AboutPage />
            </Route>
            <Route exact path="/Form">
              <Form />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;

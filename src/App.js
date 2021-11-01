import "./App.css";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import CalendarPage from "./components/CalendarPage/CalendarPage";
import AboutPage from "./components/AboutPage/AboutPage";
import Form from "./components/Form/Form";
function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">CalendarPage</Link>
              </li>
              <li>
                <Link to="/aboutPage">About</Link>
              </li>
              <li>
                <Link to="/form">Form</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route exact path="/">
              <CalendarPage />
            </Route>
            <Route exact path="/aboutPage">
              <AboutPage />
            </Route>
            <Route exact path="/form">
              <Form />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;

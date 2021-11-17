import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CalendarPage from "./components/CalendarPage/CalendarPage";
import AboutPage from "./components/AboutPage";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <CalendarPage />
          </Route>
          <Route exact path="/AboutUs">
            <AboutPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

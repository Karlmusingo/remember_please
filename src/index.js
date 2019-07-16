import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App.jsx";
import store from "../src/stores/store";
import CreateBirthday from "./components/createBirthday";
import NewMessage from "./components/newMessage";
import BirthdayList from "./components/birthdayList";

const Routes = (
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/create-birthday" component={CreateBirthday} />
      <Route path="/new-message" component={NewMessage} />
      <Route path="/home" store={store} component={BirthdayList} />
    </Switch>
  </Router>
);

ReactDOM.render(
  <Provider store={store}>{Routes}</Provider>,
  document.getElementById("root")
);

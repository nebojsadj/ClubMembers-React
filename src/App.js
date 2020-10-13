import React, { Fragment } from "react";
import Navbar from "./components/Navbar";
import ClubMembers from "./components/ClubMembers";
import NewMember from "./components/NewMember";
import Actions from "./components/Actions";
import EditMember from "./components/EditMember";
import { Route, Switch } from "react-router-dom";
import MoreInfo from "./components/MoreInfo";

function App() {
  return (
    <Fragment>
      <Navbar />
      <Route path="/" exact>
        <ClubMembers />
      </Route>
      <Route path="/new">
        <NewMember />
      </Route>
      <Switch>
        <Route path="/info">
          <MoreInfo />
        </Route>
        <Route path="/edit">
          <EditMember />
        </Route>
        <Route path="/actions">
          <Actions />
        </Route>
      </Switch>
    </Fragment>
  );
}

export default App;

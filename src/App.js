import React, { useState } from "react";
import Navbar from "./components/Navbar";
import ClubMembers from "./components/ClubMembers";
import NewMember from "./components/NewMember";
import Actions from "./components/Actions";
import EditMember from "./components/EditMember";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MoreInfo from "./components/MoreInfo";

function App() {
  const [members, setMembers] = useState([
    {
      id: "1",
      name: "Ivana",
      lastName: "Ivanovic",
      userName: "Iva345",
      idNumber: "#390921",
      phone: "222-333",
      email: "i@gmail.com",
      address: "Skadarska 4",
      age: "22",
      memberSince: "1.1.2016.",
    },
    {
      id: "2",
      name: "Milos",
      lastName: "Milosevic",
      userName: "Mica123",
      idNumber: "#034221",
      phone: "222-555",
      email: "m@gmail.com",
      address: "Dunavska 44",
      age: "25",
      memberSince: "5.4.2016.",
    },
  ]);

  const addMember = (member) => {
    setMembers([...members, member]);
  };

  const editMember = (member) => {
    console.log(member);
    let current = members.map((el) => el.id).indexOf(member.id);
    members[current] = member;
    setMembers(members);
  };

  const deleteMember = (id) => {
    let updateMembers = members.filter((el) => el.id !== id);
    setMembers(updateMembers);
  };

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Route path="/" exact>
          <ClubMembers members={members} />
        </Route>
        <Route path="/new">
          <NewMember addMember={addMember} />
        </Route>
        <Switch>
          <Route path="/actions/info/:id">
            <MoreInfo members={members} />
          </Route>
          <Route path="/actions/:id">
            <EditMember editMember={editMember} members={members} />
          </Route>
          <Route path="/actions">
            <Actions members={members} deleteMember={deleteMember} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

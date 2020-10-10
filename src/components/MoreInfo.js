import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";

function MoreInfo(props) {
  const [state, setState] = useState({
    id: "",
    name: "",
    lastName: "",
    userName: "",
    idNumber: "",
    phone: "",
    email: "",
    address: "",
    age: "",
    memberSince: "",
  });

  let currentMember = props.members.filter(
    (el) => el.id === props.match.params.id
  )[0];

  useEffect(() => {
    setState(currentMember);
  }, [currentMember]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-10 offset-1">
          <h1 className="text-center text-light h1">More Information</h1>
          <div className="row mt-4">
            <div className="col-8 offset-2">
              <div className="container">
                <ul className="list-group">
                  <li className="list-group-item libg">{`Id : ${state.id}`}</li>
                  <li className="list-group-item libg">{`Name : ${state.name}`}</li>
                  <li className="list-group-item libg">{`Last name : ${state.lastName}`}</li>
                  <li className="list-group-item libg">{`User name : ${state.userName}`}</li>
                  <li className="list-group-item libg">{`ID number : ${state.idNumber}`}</li>
                  <li className="list-group-item libg">{`Phone : ${state.phone}`}</li>
                  <li className="list-group-item libg">{`Email : ${state.email}`}</li>
                  <li className="list-group-item libg">{`Address : ${state.address}`}</li>
                  <li className="list-group-item libg">{`Age : ${state.age}`}</li>
                  <li className="list-group-item libg">{`Member since : ${state.memberSince}`}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(MoreInfo);

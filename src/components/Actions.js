import React from "react";
import Member from "./Member";

function Actions({ members, deleteMember }) {
  let allMembers = members.map((member, index) => (
    <Member
      member={member}
      key={index}
      buttons={true}
      deleteMember={deleteMember}
    />
  ));

  return (
    <div className="container">
      <div className="row">
        <div className="col-10 offset-1">
          <h1 className="text-center text-light h1">Actions</h1>
          <div className="row mt-4">
            <div className="col-8 offset-2">
              <table className="table">
                <thead>
                  <tr className="text-light">
                    <th>#</th>
                    <th>Name</th>
                    <th>UserName</th>
                    <th>Email</th>
                    <th>Info</th>
                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>{allMembers}</tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Actions;

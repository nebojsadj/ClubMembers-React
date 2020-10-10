import React from "react";
import Member from "./Member";

function ClubMembers({ members }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-10 offset-1">
          <h1 className="text-center text-light h1">Club Members</h1>
          <div className="row mt-4">
            <div className="col-8 offset-2">
              <table className="table">
                <thead>
                  <tr className="text-light">
                    <th>#</th>
                    <th>Name</th>
                    <th>UserName</th>
                    <th>Email</th>
                  </tr>
                </thead>
                <tbody>
                  {members.map((member, index) => (
                    <Member member={member} key={index} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClubMembers;

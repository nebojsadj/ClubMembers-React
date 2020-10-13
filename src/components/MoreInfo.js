import React from "react";
import { useSelector } from "react-redux";

function MoreInfo() {
  const info = useSelector((state) => state.info);

  return (
    <div className="container">
      <div className="row">
        <div className="col-10 offset-1">
          <h1 className="text-center text-light h1">More Information</h1>
          <div className="row mt-4">
            <div className="col-8 offset-2">
              <div className="container">
                {info && (
                  <ul className="list-group">
                    <li className="list-group-item libg">{`Id : ${info.id}`}</li>
                    <li className="list-group-item libg">{`Name : ${info.name}`}</li>
                    <li className="list-group-item libg">{`Last name : ${info.lastName}`}</li>
                    <li className="list-group-item libg">{`User name : ${info.userName}`}</li>
                    <li className="list-group-item libg">{`ID number : ${info.idNumber}`}</li>
                    <li className="list-group-item libg">{`Phone : ${info.phone}`}</li>
                    <li className="list-group-item libg">{`Email : ${info.email}`}</li>
                    <li className="list-group-item libg">{`Address : ${info.address}`}</li>
                    <li className="list-group-item libg">{`Age : ${info.age}`}</li>
                    <li className="list-group-item libg">{`Member since : ${info.memberSince}`}</li>
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoreInfo;

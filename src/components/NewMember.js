import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { new_member_action } from "./redux/actions";

function NewMember() {
  const [member, setMember] = useState({});
  const history = useHistory();
  const dispatch = useDispatch();

  const saveMember = () => {
    dispatch(new_member_action(member));
    history.push("/");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-10 offset-1">
          <h1 className="text-center text-light h1">New Member</h1>
          <div className="row mt-4">
            <div className="col-8 offset-2">
              <input
                onChange={(e) => setMember({ ...member, id: e.target.value })}
                type="text"
                placeholder="Id"
                className="form-control"
              />
              <br />
              <input
                onChange={(e) => setMember({ ...member, name: e.target.value })}
                type="text"
                placeholder="Name"
                className="form-control"
              />
              <br />
              <input
                onChange={(e) =>
                  setMember({ ...member, lastName: e.target.value })
                }
                type="text"
                placeholder="Last name"
                className="form-control"
              />
              <br />
              <input
                onChange={(e) =>
                  setMember({ ...member, userName: e.target.value })
                }
                type="text"
                placeholder="User name"
                className="form-control"
              />
              <br />
              <input
                onChange={(e) =>
                  setMember({ ...member, idNumber: e.target.value })
                }
                type="text"
                placeholder="ID number"
                className="form-control"
              />
              <br />
              <input
                onChange={(e) =>
                  setMember({ ...member, phone: e.target.value })
                }
                type="text"
                placeholder="Phone"
                className="form-control"
              />
              <br />
              <input
                onChange={(e) =>
                  setMember({ ...member, email: e.target.value })
                }
                type="text"
                placeholder="Email"
                className="form-control"
              />
              <br />
              <input
                onChange={(e) =>
                  setMember({ ...member, address: e.target.value })
                }
                type="text"
                placeholder="Address"
                className="form-control"
              />
              <br />
              <input
                onChange={(e) => setMember({ ...member, age: e.target.value })}
                type="text"
                placeholder="Age"
                className="form-control"
              />
              <br />
              <input
                onChange={(e) =>
                  setMember({ ...member, memberSince: e.target.value })
                }
                type="text"
                placeholder="Member since"
                className="form-control"
              />
              <br />
              <button
                onClick={saveMember}
                className="btn btn-secondary form-control"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewMember;

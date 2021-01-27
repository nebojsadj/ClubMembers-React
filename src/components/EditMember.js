import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { update_member_action } from "../redux/actions";

function EditMember() {
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
  const edit = useSelector((state) => state.edit);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    if (edit) {
      setState(edit);
    }
  }, [edit]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-10 offset-1">
          <h1 className="text-center text-light h1">Edit Member</h1>
          <div className="row mt-4">
            <div className="col-8 offset-2">
              <form action="#">
                <input
                  onChange={(e) => setState({ ...state, name: e.target.value })}
                  type="text"
                  className="form-control"
                  value={state.name || " * enter Name"}
                />
                <br />
                <input
                  onChange={(e) =>
                    setState({ ...state, lastName: e.target.value })
                  }
                  type="text"
                  className="form-control"
                  value={state.lastName || " * enter Last Name"}
                />
                <br />
                <input
                  onChange={(e) =>
                    setState({ ...state, userName: e.target.value })
                  }
                  type="text"
                  className="form-control"
                  value={state.userName || " * enter User Name"}
                />
                <br />
                <input
                  onChange={(e) =>
                    setState({ ...state, idNumber: e.target.value })
                  }
                  type="text"
                  className="form-control"
                  value={state.idNumber || " * enter id Number"}
                />
                <br />
                <input
                  onChange={(e) =>
                    setState({ ...state, phone: e.target.value })
                  }
                  type="text"
                  className="form-control"
                  value={state.phone || " * enter Phone"}
                />
                <br />
                <input
                  onChange={(e) =>
                    setState({ ...state, email: e.target.value })
                  }
                  type="text"
                  className="form-control"
                  value={state.email || " * enter Email"}
                />
                <br />
                <input
                  onChange={(e) =>
                    setState({ ...state, address: e.target.value })
                  }
                  type="text"
                  className="form-control"
                  value={state.address || " * enter Address"}
                />
                <br />
                <input
                  onChange={(e) => setState({ ...state, age: e.target.value })}
                  type="text"
                  className="form-control"
                  value={state.age || " * enter Age"}
                />
                <br />
                <input
                  onChange={(e) =>
                    setState({ ...state, memberSince: e.target.value })
                  }
                  type="text"
                  className="form-control"
                  value={state.memberSince || " * enter Member Since"}
                />
                <br />
                <button
                  to="/"
                  onClick={(e) => {
                    e.preventDefault();
                    dispatch(update_member_action(edit.id, state));
                    history.push("/");
                  }}
                  className="btn btn-secondary form-control"
                >
                  Update
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditMember;

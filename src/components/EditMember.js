import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { useHistory } from "react-router-dom";

function EditMember(props) {
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
  const history = useHistory();

  let currentMember = props.members.filter(
    (el) => el.id === props.match.params.id
  )[0];

  useEffect(() => {
    setState(currentMember);
  }, [currentMember]);

  const updateMember = (e) => {
    e.preventDefault();
    props.editMember(state);
    history.push("/");
  };

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
                  value={state.name}
                />
                <br />

                <input
                  onChange={(e) =>
                    setState({ ...state, lastName: e.target.value })
                  }
                  type="text"
                  className="form-control"
                  value={state.lastName}
                />
                <br />
                <input
                  onChange={(e) =>
                    setState({ ...state, userName: e.target.value })
                  }
                  type="text"
                  className="form-control"
                  value={state.userName}
                />
                <br />
                <input
                  onChange={(e) =>
                    setState({ ...state, idNumber: e.target.value })
                  }
                  type="text"
                  className="form-control"
                  value={state.idNumber}
                />
                <br />
                <input
                  onChange={(e) =>
                    setState({ ...state, phone: e.target.value })
                  }
                  type="text"
                  className="form-control"
                  value={state.phone}
                />
                <br />
                <input
                  onChange={(e) =>
                    setState({ ...state, email: e.target.value })
                  }
                  type="text"
                  className="form-control"
                  value={state.email}
                />
                <br />
                <input
                  onChange={(e) =>
                    setState({ ...state, address: e.target.value })
                  }
                  type="text"
                  className="form-control"
                  value={state.address}
                />
                <br />
                <input
                  onChange={(e) => setState({ ...state, age: e.target.value })}
                  type="text"
                  className="form-control"
                  value={state.age}
                />
                <br />
                <input
                  onChange={(e) =>
                    setState({ ...state, memberSince: e.target.value })
                  }
                  type="text"
                  className="form-control"
                  value={state.memberSince}
                />
                <br />
                <button
                  onClick={updateMember}
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

export default withRouter(EditMember);

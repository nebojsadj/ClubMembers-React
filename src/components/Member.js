import React from "react";
import { Link } from "react-router-dom";

function Member({ member, buttons, deleteMember }) {
  const { id, name, userName, email } = member;

  return (
    <tr className="text-light">
      <td>{id}</td>
      <td>{name}</td>
      <td>{userName}</td>
      <td>{email}</td>
      {buttons ? (
        <>
          <td>
            <Link
              to={"/actions/info/" + id}
              className="btn btn-sm btn-outline-info"
            >
              More
            </Link>
          </td>
          <td>
            <Link
              to={"/actions/" + id}
              className="btn btn-sm btn-outline-warning"
            >
              Edit
            </Link>
          </td>
          <td>
            <button
              onClick={() => deleteMember(id)}
              className="btn btn-sm btn-outline-danger"
            >
              Delete
            </button>
          </td>
        </>
      ) : null}
    </tr>
  );
}

export default Member;

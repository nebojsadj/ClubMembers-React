import React from "react";
import { Link } from "react-router-dom";

function Member({ member, buttons, deleteMember }) {
  let actions = buttons ? (
    <>
      <td>
        <Link
          to={"/actions/info/" + member.id}
          className="btn btn-sm btn-outline-info"
        >
          More
        </Link>
      </td>
      <td>
        <Link
          to={"/actions/" + member.id}
          className="btn btn-sm btn-outline-warning"
        >
          Edit
        </Link>
      </td>
      <td>
        <button
          onClick={() => deleteMember(member.id)}
          className="btn btn-sm btn-outline-danger"
        >
          Delete
        </button>
      </td>
    </>
  ) : null;

  return (
    <tr className="text-light">
      <td>{member.id}</td>
      <td>{member.name}</td>
      <td>{member.userName}</td>
      <td>{member.email}</td>
      {actions}
    </tr>
  );
}

export default Member;

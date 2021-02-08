import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  delete_member_action,
  edit_member_action,
  info_member_action,
} from "../redux/actions";

function Member({ member, buttons }) {
  const { id, name, userName, email } = member;
  const history = useHistory();
  const dispatch = useDispatch();

  return (
    <tr className="text-light">
      <td className="tab">{id}</td>
      <td className="tab">{name}</td>
      <td className="tab">{userName}</td>
      <td className="tab">{email}</td>

      {buttons && (
        <>
          <td>
            <button
              onClick={() => {
                dispatch(info_member_action(id));
                history.push("/info");
              }}
              className="btn btn-sm btn-outline-info tab"
            >
              More
            </button>
          </td>
          <td>
            <button
              onClick={() => {
                dispatch(edit_member_action(id));
                history.push("/edit");
              }}
              className="btn btn-sm btn-outline-warning tab"
            >
              Edit
            </button>
          </td>
          <td>
            <button
              onClick={() => dispatch(delete_member_action(id))}
              className="btn btn-sm btn-outline-danger tab"
            >
              Delete
            </button>
          </td>
        </>
      )}
    </tr>
  );
}

export default Member;

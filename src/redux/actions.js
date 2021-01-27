import * as types from "./types";

export const new_member_action = (newMember) => {
  return {
    type: types.new_member,
    payload: {
      newMember: newMember,
    },
  };
};

export const info_member_action = (id) => {
  return {
    type: types.info_member,
    payload: id,
  };
};

export const edit_member_action = (id) => {
  return {
    type: types.edit_member,
    payload: id,
  };
};

export const update_member_action = (id, member) => {
  return {
    type: types.update_member,
    payload: {
      id: id,
      member: member,
    },
  };
};

export const delete_member_action = (id) => {
  return {
    type: types.delete_member,
    payload: id,
  };
};

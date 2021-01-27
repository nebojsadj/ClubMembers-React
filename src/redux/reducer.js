import initState from "./initState";
import * as types from "./types";

function reducer(state = initState, action) {
  switch (action.type) {
    case types.new_member:
      return {
        ...state,
        members: [...state.members, action.payload.newMember],
      };
    case types.info_member:
      const current = state.members.filter((el) => el.id === action.payload)[0];
      return { ...state, info: current };
    case types.edit_member:
      const index = state.members.map((el) => el.id).indexOf(action.payload);
      const editMember = state.members[index];
      return { ...state, edit: editMember };
    case types.update_member:
      const position = state.members
        .map((el) => el.id)
        .indexOf(action.payload.id);
      state.members[position] = action.payload.member;
      return { ...state };
    case types.delete_member:
      const updateMembers = state.members.filter(
        (el) => el.id !== action.payload
      );
      return { ...state, members: updateMembers };

    default:
      return state;
  }
}

export default reducer;

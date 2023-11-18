const initialState = {
  selectedMember: "효정",
};

// 리듀서 : 'state에 변화를 일으키는' 함수
// state를 action의 type에 따라 변경하는 함수

const SELECTED_MEMBER = "selectedMember/SELECTED_MEMBER";

export const selectMember = (payload) => {
  return {
    type: SELECTED_MEMBER,
    payload,
  };
};

// input : state, action
const selectedMemberReducer = (state = initialState.selectedMember, action) => {
  switch (action.type) {
    case SELECTED_MEMBER:
      return action.payload;
    default:
      return state;
  }
};

export default selectedMemberReducer;

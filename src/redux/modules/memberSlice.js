// const SET_MEMBER = "member/SET_MEMBER";

import { createSlice } from "@reduxjs/toolkit";

// export const setMember = (payload) => {
//   return { type: SET_MEMBER, payload };
// };

// const initialState = "Irene";

// const member = (state = initialState, action) => {
//   switch (action.type) {
//     case SET_MEMBER:
//       const activeMember = action.payload;
//       return activeMember;
//     default:
//       return state;
//   }
// };
// export default member;

const initialState = "Irene";

const memberSlice = createSlice({
  name: "member", // action type의 prefix와 슬라이스의 이름이 같음 !
  initialState,
  reducers: {
    setMember: (state, action) => {
      const activeMember = action.payload;
      return activeMember;
    },
  },
});

export const { setMember } = memberSlice.actions;
export default memberSlice.reducer;

// import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

// interface User {
//   id: string;
//   name: string;
//   email: string;
//   role: "admin" | "user";
//   token: string;
// }

// interface AuthState {
//   user: User | null;
// }

// const initialState: AuthState = {
//   user: null,
// };

// const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
//     setUser: (state, action: PayloadAction<User>) => {
//       state.user = action.payload;
//     },
//     logout: (state) => {
//       state.user = null;
//     },
//   },
// });

// export const { setUser, logout } = authSlice.actions;
// export default authSlice.reducer;




import { createSlice, } from "@reduxjs/toolkit";

const savedUser = JSON.parse(localStorage.getItem("user") || "null");

const initialState = {
  user: savedUser,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.user = null;
      localStorage.removeItem("user");
    },
  },
});
export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;

import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import {
  getSecureItem,
  setSecureItem,
  removeSecureItem,
} from "../../utils/secureStorage";

export interface AuthUser {
  name: string;
  role: "admin" | "student";
  token: string;
}

const savedUserStr = getSecureItem("user");
let savedUser = null;
if (savedUserStr) {
  try {
    savedUser = typeof savedUserStr === "string" ? JSON.parse(savedUserStr) : savedUserStr;
  } catch {
    savedUser = null;
  }
}

const initialState: { user: AuthUser | null } = {
  user: savedUser as AuthUser | null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action: PayloadAction<AuthUser>) => {
      state.user = action.payload;

      setSecureItem("user", JSON.stringify(action.payload));
      if (action.payload.token) {
        setSecureItem("token", action.payload.token);
      }
    },

    logout: (state) => {
      state.user = null;
      removeSecureItem("user");
      removeSecureItem("token");
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;

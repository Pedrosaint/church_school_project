import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getSecureItem } from "../../../utils/secureStorage";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

interface LoginRequest {
  email: string;
  password: string;
}

interface LoginResponse {
  message: string;
  data: {
    accessToken: string;
    tokenType: string;
    expiresIn: string;
  };
  success: boolean;
}

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers) => {
      const token = getSecureItem("token");
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    adminLogin: builder.mutation<LoginResponse, LoginRequest>({
      query: (credentials) => ({
        url: "/admin/login",
        method: "POST",
        body: credentials,
      }),
    }),
    studentLogin: builder.mutation<LoginResponse, LoginRequest>({
      query: (credentials) => ({
        url: "/student/login",
        method: "POST",
        body: credentials,
      }),
    }),
  }),
});

export const { useAdminLoginMutation, useStudentLoginMutation } = authApi;

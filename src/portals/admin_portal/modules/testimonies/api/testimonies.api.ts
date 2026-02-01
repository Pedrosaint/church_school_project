import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getSecureItem } from "../../../../../utils/secureStorage";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

interface TestimonyData {
  id: string;
  name: string;
  email: string;
  message: string;
  photoUrl: string | null;
  status: "pending" | "approved";
  createdAt: string;
}

interface ListResponse {
  success: boolean;
  data: TestimonyData[];
}

interface SingleResponse {
  success: boolean;
  data: TestimonyData;
}

export const testimoniesApi = createApi({
  reducerPath: "testimoniesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers) => {
      const token = getSecureItem("token");
      if (token) headers.set("authorization", `Bearer ${token}`);
      return headers;
    },
  }),
  tagTypes: ["Testimonies"],
  endpoints: (builder) => ({
    getTestimonies: builder.query<ListResponse, { status?: string } | void>({
      query: (arg) => ({
        url: "/admin/testimonies",
        params: arg?.status ? { status: arg.status } : undefined,
        method: "GET",
      }),
      providesTags: ["Testimonies"],
    }),

    deleteTestimony: builder.mutation<{ success: boolean }, string>({
      query: (id) => ({
        url: `/admin/testimonies/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Testimonies"],
    }),

    approveTestimony: builder.mutation<SingleResponse, string>({
      query: (id) => ({
        url: `/admin/testimonies/${id}/approve`,
        method: "POST",
      }),
      invalidatesTags: ["Testimonies"],
    }),
  }),
});

export const {
  useGetTestimoniesQuery,
  useDeleteTestimonyMutation,
  useApproveTestimonyMutation,
} = testimoniesApi;

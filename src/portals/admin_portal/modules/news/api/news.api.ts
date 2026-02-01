import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getSecureItem } from "../../../../../utils/secureStorage";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

interface CreateNewsRequest {
  title: string;
  body: string;
  summary: string;
  category: string;
}

interface NewsData {
  id: string;
  title: string;
  summary: string;
  category: string;
  body: string;
  createdAt: string;
  updatedAt: string;
}

interface CreateNewsResponse {
  success: boolean;
  data: NewsData;
}

export const newsApi = createApi({
  reducerPath: "newsApi",
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
  tagTypes: ["News"],
  endpoints: (builder) => ({
    createNews: builder.mutation<CreateNewsResponse, CreateNewsRequest>({
      query: (newsData) => ({
        url: "/admin/news",
        method: "POST",
        body: newsData,
      }),
      invalidatesTags: ["News"],
    }),


    getNews: builder.query<{ success: boolean; data: NewsData[] }, void>({
      query: () => ({
        url: "/admin/news",
        method: "GET",
      }),
      providesTags: ["News"],
    }),


    deleteNews: builder.mutation<{ success: boolean }, string>({
      query: (newsId) => ({
        url: `/admin/news/${newsId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["News"],
    }),


    updateNews: builder.mutation<CreateNewsResponse, CreateNewsRequest & { id: string }>({
      query: ({ id, ...newsData }) => ({
        url: `/admin/news/${id}`,
        method: "PUT",
        body: newsData,
      }),
      invalidatesTags: ["News"],
    }),


  }),
});

export const { useCreateNewsMutation, useGetNewsQuery, useDeleteNewsMutation, useUpdateNewsMutation } =
  newsApi;

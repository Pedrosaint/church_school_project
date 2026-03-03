// src/redux/services/newsApi.ts

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getSecureItem } from "../../../../../utils/secureStorage";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export interface NewsItem {
    id: string;
    title: string;
    summary: string;
    category: string;
    body: string;
    createdAt: string;
    updatedAt: string;
}

export interface NewsResponse {
    success: boolean;
    data: NewsItem[];
}

export const studentNewsApi = createApi({
    reducerPath: "studentNewsApi",
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
        getNews: builder.query<NewsResponse, void>({
            query: () => ({
                url: "/students/news",
                method: "GET",
            }),
            providesTags: [{ type: "News", id: "LIST" }],
        }),
    }),
});

export const { useGetNewsQuery } = studentNewsApi;
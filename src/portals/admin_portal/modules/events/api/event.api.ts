import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getSecureItem } from "../../../../../utils/secureStorage";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

interface CreateEventRequest {
  title: string;
  date: string;
  location: string;
  description: string;
}

interface EventData {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}

interface CreateEventResponse {
  success: boolean;
  data: EventData;
}

export const eventApi = createApi({
  reducerPath: "eventApi",
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
  tagTypes: ["Events"],
  endpoints: (builder) => ({
    createEvent: builder.mutation<CreateEventResponse, CreateEventRequest>({
      query: (eventData) => ({
        url: "/admin/events",
        method: "POST",
        body: eventData,
      }),
      invalidatesTags: ["Events"],
    }),
    getEvents: builder.query<{ success: boolean; data: EventData[] }, void>({
      query: () => ({
        url: "/admin/events",
        method: "GET",
      }),
      providesTags: ["Events"],
    }),
    deleteEvent: builder.mutation<{ success: boolean }, string>({
      query: (eventId) => ({
        url: `/admin/events/${eventId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Events"],
    }),
    updateEvent: builder.mutation<
      CreateEventResponse,
      CreateEventRequest & { id: string }
    >({
      query: ({ id, ...eventData }) => ({
        url: `/admin/events/${id}`,
        method: "PUT",
        body: eventData,
      }),
      invalidatesTags: ["Events"],
    }),
  }),
});

export const {
  useCreateEventMutation,
  useGetEventsQuery,
  useDeleteEventMutation,
  useUpdateEventMutation,
} = eventApi;

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getSecureItem } from "../../../../../utils/secureStorage";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export interface Education {
  id: string;
  admissionId: string;
  institution: string;
  from: string;
  to: string;
  qualification: string;
}

export interface FileRef {
  id: string;
  admissionId: string;
  fileUrl: string;
}

export interface Application {
  id: string;
  programmeLevel: string;
  programmeChoice: string;
  surname: string;
  firstname: string;
  title?: string;
  otherNames?: string;
  dateOfBirth?: string;
  placeOfBirth?: string;
  gender?: string;
  presentAddress?: string;
  email?: string;
  phone?: string;
  permanentAddress?: string;
  postalAddress?: string;
  nationality?: string;
  nativeLanguage?: string;
  placeDiffNationality?: boolean;
  maritalStatus?: string;
  religion?: string;
  denomination?: string;
  parentGuardian?: string;
  emergencyContact?: string;
  emergencyPhone?: string;
  nextOfKin?: string;
  nextOfKinPhone?: string;
  financeInfo?: string;
  healthInfo?: string;
  description?: string;
  academicReferee?: string;
  academicProfession?: string;
  academicInstitution?: string;
  academicAddress?: string;
  academicPhone?: string;
  academicEmail?: string;
  clergyReferee?: string;
  clergyPosition?: string;
  clergyChurch?: string;
  clergyAddress?: string;
  clergyPhone?: string;
  clergyEmail?: string;
  applicantSignature?: string;
  applicantDate?: string;
  status?: string;
  createdAt?: string;
  education?: Education[];
  certificates?: FileRef[];
  passportPhotos?: FileRef[];
}

export interface ApplicationsResponse {
  success: boolean;
  data: Application[];
}

export const applicationApi = createApi({
  reducerPath: "applicationApi",
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
  tagTypes: ["Application"],
  endpoints: (builder) => ({
    getApplications: builder.query<
      ApplicationsResponse,
      { status?: string } | void
    >({
      query: (args) => ({
        url: `/admin/admissions`,
        params: args?.status ? { status: args.status } : undefined,
        method: "GET",
      }),
      providesTags: (result) =>
        result
          ? ([
              { type: "Application" as const, id: "LIST" },
              ...result.data.map((app) => ({
                type: "Application" as const,
                id: app.id,
              })),
            ] as const)
          : [{ type: "Application" as const, id: "LIST" }],
    }),
    getApplication: builder.query<
      { success: boolean; data: Application },
      string
    >({
      query: (id) => ({ url: `/admin/admissions/${id}`, method: "GET" }),
      providesTags: (_result, _error, id) => [
        { type: "Application" as const, id },
      ],
    }),

    approveApplication: builder.mutation<
      { success: boolean; data: Application },
      string
    >({
      query: (id) => ({
        url: `/admin/admissions/${id}/approve`,
        method: "POST",
      }),
      invalidatesTags: (_result, _error, id) => [
        { type: "Application" as const, id: "LIST" },
        { type: "Application" as const, id },
      ],
    }),

    rejectApplication: builder.mutation<
      { success: boolean; data: Application },
      string
    >({
      query: (id) => ({
        url: `/admin/admissions/${id}/reject`,
        method: "POST",
      }),
      invalidatesTags: (_result, _error, id) => [
        { type: "Application" as const, id: "LIST" },
        { type: "Application" as const, id },
      ],
    }),
  }),
});

export const {
  useGetApplicationsQuery,
  useGetApplicationQuery,
  useApproveApplicationMutation,
  useRejectApplicationMutation,
} = applicationApi;

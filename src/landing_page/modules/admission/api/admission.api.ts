/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface AdmissionFormData {
  programmeLevel: string;
  programmeChoice: string;
  surname: string;
  firstname: string;
  title: string;
  otherNames?: string;
  dateOfBirth: string;
  placeOfBirth: string;
  gender: string;
  presentAddress: string;
  email: string;
  phone: string;
  permanentAddress: string;
  postalAddress: string;
  nationality: string;
  nativeLanguage: string;
  placeDiffNationality: boolean;
  maritalStatus: string;
  religion: string;
  denomination: string;
  parentGuardian: string;
  emergencyContact: string;
  emergencyPhone: string;
  nextOfKin: string;
  nextOfKinPhone: string;
  financeInfo: string;
  healthInfo: string;
  description?: string;
  academicReferee: string;
  academicProfession: string;
  academicInstitution: string;
  academicAddress: string;
  academicPhone: string;
  academicEmail: string;
  clergyReferee: string;
  clergyPosition: string;
  clergyChurch: string;
  clergyAddress: string;
  clergyPhone: string;
  clergyEmail: string;
  applicantSignature: string;
  applicantDate: string;
  education: EducationRecord[];
  certificates?: File[];
  passportPhotos?: File[];
}

export interface EducationRecord {
  institution: string;
  from: string;
  to: string;
  qualification: string;
}

export interface AdmissionData {
  id: string;
  programmeLevel: string;
  programmeChoice: string;
  surname: string;
  firstname: string;
  title: string;
  otherNames: string;
  dateOfBirth: string;
  placeOfBirth: string;
  gender: string;
  presentAddress: string;
  email: string;
  phone: string;
  permanentAddress: string;
  postalAddress: string;
  nationality: string;
  nativeLanguage: string;
  placeDiffNationality: boolean;
  maritalStatus: string;
  religion: string;
  denomination: string;
  parentGuardian: string;
  emergencyContact: string;
  emergencyPhone: string;
  nextOfKin: string;
  nextOfKinPhone: string;
  financeInfo: string;
  healthInfo: string;
  description: string;
  academicReferee: string;
  academicProfession: string;
  academicInstitution: string;
  academicAddress: string;
  academicPhone: string;
  academicEmail: string;
  clergyReferee: string;
  clergyPosition: string;
  clergyChurch: string;
  clergyAddress: string;
  clergyPhone: string;
  clergyEmail: string;
  applicantSignature: string;
  applicantDate: string;
  status: "pending" | "approved" | "rejected";
  createdAt: string;
  education: EducationRecord[];
  certificates: Array<{
    id: string;
    admissionId: string;
    fileUrl: string;
  }>;
  passportPhotos: Array<{
    id: string;
    admissionId: string;
    fileUrl: string;
  }>;
}

export interface AdmissionResponse {
  success: boolean;
  data: AdmissionData;
}

const baseURL =
  import.meta.env.VITE_API_BASE_URL;

export const admissionApi = createApi({
  reducerPath: "admissionApi",
  baseQuery: fetchBaseQuery({
    baseUrl: baseURL,
  }),
  endpoints: (builder) => ({
    submitAdmission: builder.mutation<AdmissionResponse, FormData>({
      queryFn: async (payload) => {
        try {
          const response = await fetch(`${baseURL}/admissions`, {
            method: "POST",
            body: payload,
          });

          const result = await response.json();

          if (!response.ok) {
            return {
              error: {
                status: response.status,
                data: result
              }
            };
          }

          return { data: result as AdmissionResponse };
        } catch (err: any) {
          return {
            error: {
              status: "FETCH_ERROR",
              error: err.message || String(err)
            }
          };
        }
      },
    }),
    getAdmissions: builder.query<AdmissionData[], void>({
      query: () => ({
        url: "/admissions",
        method: "GET",
      }),
    }),
    getAdmissionById: builder.query<AdmissionData, string>({
      query: (id) => ({
        url: `/admissions/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useSubmitAdmissionMutation,
  useGetAdmissionsQuery,
  useGetAdmissionByIdQuery,
} = admissionApi;

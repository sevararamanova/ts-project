import { fetchBaseQuery, createApi, retry } from "@reduxjs/toolkit/query/react";
import { logOut } from "../slices/auth-slice";
import { LoginRequest, LoginResponse, RegisterRequest, RegisterResponse } from "../../types/types";

const baseQuery = async (args: any, api: any, extraOptions: any) => {
  const { dispatch } = api;
  const rawBaseQuery = fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
    prepareHeaders: (headers) => {
      const token: string | null = localStorage.getItem("token");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  });

  const response = await rawBaseQuery(args, api, extraOptions);

  if (response.error) {
    const { status } = response.error;
    if (status === 401 || status === 403) {
      dispatch(logOut());
    }
  }

  return response;
};

const fetchBaseQueryWithRetry = retry(baseQuery, { maxRetries: 0 });

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQueryWithRetry,
  tagTypes: ["CARS", "USER", "CATEGORIES"],
  endpoints: (build) => ({
    login: build.mutation<LoginResponse, LoginRequest>({
      query: (credentials) => ({
        url: "/auth/signin",
        method: "POST",
        body: credentials,
      }),
    }),
    register: build.mutation<RegisterResponse, RegisterRequest>({
      query: (user) => ({
        url: "/auth/signup",
        method: "POST",
        body: user,
      }),
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation } = api;

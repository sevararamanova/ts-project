import { api } from "./index";

// Define response and request types
interface LoginResponse {
  token: string;
  user: {
    id: string;
    email: string;
  };
}

interface RegisterResponse {
  message: string;
}

interface LoginRequest {
  email: string;
  password: string;
}

interface RegisterRequest {
  email: string;
  password: string;
  confirmPassword: string;
}

const authApi = api.injectEndpoints({
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
        url: "/auth/sign-up/", // Updated path to match the backend
        method: "POST",
        body: user,
      }),
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation } = authApi;

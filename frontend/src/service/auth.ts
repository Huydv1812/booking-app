import { API_ENDPOINT } from "../shared/constants/endpoint";
import { apiClient } from "./apiService";

export interface RegisterProp {
  name: string;
  password: string;
  email: string;
}

export const registerRequest = (data: RegisterProp) => {
  return apiClient.post(
    `${process.env.NEXT_PUBLIC_API_BASE}${API_ENDPOINT.REGISTER}`,
    data
  );
};

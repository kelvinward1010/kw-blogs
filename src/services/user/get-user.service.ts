import { URL_API_USER } from "@/constant/config";
import { apiClient } from "@/lib/api";

export const getUser = async (id?: string): Promise<any> => {
    const res = await apiClient.get(`${URL_API_USER}/${id}`);
    return res?.data;
};

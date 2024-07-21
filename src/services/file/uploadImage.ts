import { BASE_URL, URL_API_UPLOADFILE } from "@/constant/config";
import { apiClient } from "@/lib/api";
import { AxiosRequestConfig } from "axios";

export const uploadFile = async (data: any): Promise<any> => {
    const config: AxiosRequestConfig = {
        method: "POST",
        url: `${BASE_URL}${URL_API_UPLOADFILE}`,
        data: data,
        headers: {
            accept: "application/json",
            "Content-Type": "multipart/form-data",
        },
    };
    const res = await apiClient(config);
    return res?.data;
};

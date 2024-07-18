import { URL_API_USER } from "@/constant/config";
import { apiClient } from "@/lib/api";

interface GetUserProps {
    id?: string;
}

export const getUser = async (data: GetUserProps): Promise<any> => {
    const res = await apiClient.get(`${URL_API_USER}/${data.id}`);
    return res?.data;
};

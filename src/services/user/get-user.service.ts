import { URL_API_USER } from "@/constant/config";
import { apiClient } from "@/lib/api";
import { ExtractFnReturnType, QueryConfig } from "@/lib/react-query";
import { useQuery } from "react-query";

interface GetUserProps {
    id?: string;
}

export const getUser = async (data: GetUserProps): Promise<any> => {
    const res = await apiClient.get(`${URL_API_USER}/${data.id}`);
    return res?.data;
};

type QueryFnType = typeof getUser;

type GetUserOptions = {
    data: GetUserProps;
    config?: QueryConfig<QueryFnType>;
};

export const useGetUser = ({ data, config }: GetUserOptions) => {
    return useQuery<ExtractFnReturnType<QueryFnType>>({
        onError: () => {},
        onSuccess: () => {},
        ...config,
        queryKey: ["your-info"],
        queryFn: () => getUser(data),
    });
};

import { URL_API_POST } from "@/constant/config";
import { apiClient } from "@/lib/api";
import { ExtractFnReturnType, QueryConfig } from "@/lib/react-query";
import { useQuery } from "react-query";

export const getPost = async (id?: string): Promise<any> => {
    const res = await apiClient.get(`${URL_API_POST}/${id}`);
    return res;
};

type QueryFnType = typeof getPost;

type UseGetPostOptions = {
    id?: string;
    config?: QueryConfig<QueryFnType>;
};

export const useGetPost = ({ id, config }: UseGetPostOptions) => {
    return useQuery<ExtractFnReturnType<QueryFnType>>({
        onError: () => {},
        onSuccess: () => {},
        ...config,
        queryKey: ["post", id],
        queryFn: () => getPost(id),
    });
};

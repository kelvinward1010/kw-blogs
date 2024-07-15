import { URL_API_SEARCHPOST } from "@/constant/config";
import { apiClient } from "@/lib/api";
import { ExtractFnReturnType, QueryConfig } from "@/lib/react-query";
import { convertToQueryString } from "@/utils/string";
import { useQuery } from "react-query";

interface SearchPostsProps {
    topic?: string[];
    title?: string;
    limit?: number | string;
    neworold?: number | string;
}

export const searchPosts = async (data: SearchPostsProps): Promise<any> => {
    let convertedQuery = convertToQueryString(data);
    const res = await apiClient.get(`${URL_API_SEARCHPOST}${convertedQuery}`);
    return res?.data;
};

type QueryFnType = typeof searchPosts;

type UsesearchPostsOptions = {
    data: SearchPostsProps;
    config?: QueryConfig<QueryFnType>;
};

export const useSearchPosts = ({ data, config }: UsesearchPostsOptions) => {
    return useQuery<ExtractFnReturnType<QueryFnType>>({
        onError: () => {},
        onSuccess: () => {},
        ...config,
        queryKey: ["search-posts"],
        queryFn: () => searchPosts(data),
    });
};

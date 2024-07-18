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
    tokencancel?: any;
}

export const searchPosts = async (data: SearchPostsProps): Promise<any> => {
    const convertedData = {
        topic: data.topic,
        title: data.title,
        limit: data.limit,
        neworold: data.neworold,
    };
    let convertedQuery = convertToQueryString(convertedData);
    const res = await apiClient.get(`${URL_API_SEARCHPOST}${convertedQuery}`, {
        cancelToken: data.tokencancel,
    });
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

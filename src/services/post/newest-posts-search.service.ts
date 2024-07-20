import { URL_API_SEARCHPOST } from "@/constant/config";
import { apiClient } from "@/lib/api";
import { ExtractFnReturnType, QueryConfig } from "@/lib/react-query";
import { IPost } from "@/types/post";
import { convertToQueryString } from "@/utils/string";
import { useQuery } from "react-query";

interface SearchNewestPostsProps {
    topic?: string[];
    title?: string;
    limit?: number | string;
}

export const searchNewestPosts = async (
    data: SearchNewestPostsProps,
): Promise<IPost[]> => {
    let convertedQuery = convertToQueryString(data);
    const res = await apiClient.get(`${URL_API_SEARCHPOST}${convertedQuery}`);
    return res?.data?.data;
};

type QueryFnType = typeof searchNewestPosts;

type SearchNewestPostsOptions = {
    data: SearchNewestPostsProps;
    config?: QueryConfig<QueryFnType>;
};

export const useSearchNewestPosts = ({
    data,
    config,
}: SearchNewestPostsOptions) => {
    return useQuery<ExtractFnReturnType<QueryFnType>>({
        onError: () => {},
        onSuccess: () => {},
        ...config,
        queryKey: ["newest-posts-topics"],
        queryFn: () => searchNewestPosts(data),
    });
};

export const usePoliticsNewestPosts = ({
    data,
    config,
}: SearchNewestPostsOptions) => {
    return useQuery<ExtractFnReturnType<QueryFnType>>({
        onError: () => {},
        onSuccess: () => {},
        ...config,
        queryKey: ["newest-posts-politics"],
        queryFn: () => searchNewestPosts(data),
    });
};

export const useDefenseAndSecurityNewestPosts = ({
    data,
    config,
}: SearchNewestPostsOptions) => {
    return useQuery<ExtractFnReturnType<QueryFnType>>({
        onError: () => {},
        onSuccess: () => {},
        ...config,
        queryKey: ["newest-posts-defenseandsecurity"],
        queryFn: () => searchNewestPosts(data),
    });
};

import { URL_API_YOURPOSTS } from "@/constant/config";
import { apiClient } from "@/lib/api";
import { ExtractFnReturnType, QueryConfig } from "@/lib/react-query";
import { IPost } from "@/types/post";
import { convertToQueryString } from "@/utils/string";
import { useQuery } from "react-query";

interface GetYourPostsProps {
    id?: string;
    title?: string;
}

export const getYourPosts = async (
    data: GetYourPostsProps,
): Promise<IPost[]> => {
    const converted = {
        title: data.title,
    };
    let convertedQuery = convertToQueryString(converted);
    const res = await apiClient.get(
        `${URL_API_YOURPOSTS}/${data.id}${convertedQuery}`,
    );
    return res?.data?.data;
};

type QueryFnType = typeof getYourPosts;

type SearchNewestPostsOptions = {
    data: GetYourPostsProps;
    config?: QueryConfig<QueryFnType>;
};

export const useGetYourPosts = ({ data, config }: SearchNewestPostsOptions) => {
    return useQuery<ExtractFnReturnType<QueryFnType>>({
        onError: () => {},
        onSuccess: () => {},
        ...config,
        queryKey: ["your-posts"],
        queryFn: () => getYourPosts(data),
    });
};

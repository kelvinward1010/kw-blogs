import { URL_API_YOURFAVORITESPOSTS } from "@/constant/config";
import { apiClient } from "@/lib/api";
import { ExtractFnReturnType, QueryConfig } from "@/lib/react-query";
import { IPost } from "@/types/post";
import { useQuery } from "react-query";

export const getYourFavoritesPosts = async (): Promise<IPost[]> => {
    const res = await apiClient.get(`${URL_API_YOURFAVORITESPOSTS}`);
    return res?.data?.data;
};

type QueryFnType = typeof getYourFavoritesPosts;

type YourFavoritesOptions = {
    config?: QueryConfig<QueryFnType>;
};

export const useGetYourFavoritesOptions = ({
    config,
}: YourFavoritesOptions) => {
    return useQuery<ExtractFnReturnType<QueryFnType>>({
        onError: () => {},
        onSuccess: () => {},
        ...config,
        queryKey: ["your-favorites-posts"],
        queryFn: () => getYourFavoritesPosts(),
    });
};

import { URL_API_SEARCHPOST } from "@/constant/config";
import { apiClient } from "@/lib/api";
import { MutationConfig } from "@/lib/react-query";
import { useMutation } from "react-query";

interface SearchPostsProps {
    topic?: string[];
    title?: string;
}

export const searchPosts = async (data: SearchPostsProps): Promise<any> => {
    const res = await apiClient.post(`${URL_API_SEARCHPOST}`, data);
    return res;
};

type UseSearchPostsOptions = {
    config?: MutationConfig<typeof searchPosts>;
};

export const useSearchPosts = ({ config }: UseSearchPostsOptions) => {
    return useMutation({
        onMutate: () => {},
        onError: () => {},
        onSuccess: () => {},
        ...config,
        mutationFn: searchPosts,
    });
};

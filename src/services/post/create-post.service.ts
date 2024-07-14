import { URL_API_CREATEPOST } from "@/constant/config";
import { apiClient } from "@/lib/api";
import { MutationConfig } from "@/lib/react-query";
import { useMutation } from "react-query";

interface CreatePostProps {
    topic?: string[];
    title?: string;
    authorID?: string;
    description?: string;
    image?: string;
    content?: string;
}

export const createPost = async (data: CreatePostProps): Promise<any> => {
    const res = await apiClient.post(`${URL_API_CREATEPOST}`, data);
    return res;
};

type UseCreatePostOptions = {
    config?: MutationConfig<typeof createPost>;
};

export const useCreatePost = ({ config }: UseCreatePostOptions) => {
    return useMutation({
        onMutate: () => {},
        onError: () => {},
        onSuccess: () => {},
        ...config,
        mutationFn: createPost,
    });
};

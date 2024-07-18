import { URL_API_LIKEPOST } from "@/constant/config";
import { apiClient } from "@/lib/api";
import { MutationConfig } from "@/lib/react-query";
import { useMutation } from "react-query";

interface LikePostProps {
    id?: string;
    isLike?: number;
}

export const likePost = async (data: LikePostProps): Promise<any> => {
    const carftData = {
        isLike: data.isLike,
    };
    const res = await apiClient.put(
        `${URL_API_LIKEPOST}/${data.id}`,
        carftData,
    );
    return res;
};

type UseLikePostOptions = {
    config?: MutationConfig<typeof likePost>;
};

export const useLikePost = ({ config }: UseLikePostOptions) => {
    return useMutation({
        onMutate: () => {},
        onError: () => {},
        onSuccess: () => {},
        ...config,
        mutationFn: likePost,
    });
};

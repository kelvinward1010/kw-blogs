import { URL_API_DELETEPOST } from "@/constant/config";
import { apiClient } from "@/lib/api";
import { MutationConfig } from "@/lib/react-query";
import { useMutation } from "react-query";

interface DeletePostProps {
    id?: string;
}

export const deletePost = async (data: DeletePostProps): Promise<any> => {
    const res = await apiClient.delete(`${URL_API_DELETEPOST}/${data.id}`);
    return res;
};

type UseDeletePostOptions = {
    config?: MutationConfig<typeof deletePost>;
};

export const useDeletePost = ({ config }: UseDeletePostOptions) => {
    return useMutation({
        onMutate: () => {},
        onError: () => {},
        onSuccess: () => {},
        ...config,
        mutationFn: deletePost,
    });
};

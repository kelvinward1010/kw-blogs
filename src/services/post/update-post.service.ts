import { URL_API_POSTUPDATED } from "@/constant/config";
import { apiClient } from "@/lib/api";
import { MutationConfig } from "@/lib/react-query";
import { useMutation } from "react-query";

interface UpdatePostProps {
    id?: string;
    topic?: string[];
    title?: string;
    authorID?: string;
    description?: string;
    image_thumbnail?: string;
    content?: string;
    likes?: string[];
}

export const updatePost = async (data: UpdatePostProps): Promise<any> => {
    const graftData = {
        topic: data.topic,
        title: data.title,
        authorID: data.authorID,
        description: data.description,
        image_thumbnail: data.image_thumbnail,
        content: data.content,
        likes: data.likes,
    };
    const res = await apiClient.put(
        `${URL_API_POSTUPDATED}/${data.id}`,
        graftData,
    );
    return res;
};

type UseUpdatePostOptions = {
    config?: MutationConfig<typeof updatePost>;
};

export const useUpdatePost = ({ config }: UseUpdatePostOptions) => {
    return useMutation({
        onMutate: () => {},
        onError: () => {},
        onSuccess: () => {},
        ...config,
        mutationFn: updatePost,
    });
};

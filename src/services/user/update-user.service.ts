import { URL_API_UPDATEUSER } from "@/constant/config";
import { apiClient } from "@/lib/api";
import { MutationConfig } from "@/lib/react-query";
import { useMutation } from "react-query";

interface UpdateAccountProps {
    id?: string;
    name?: string;
    email?: string;
    image?: string;
    position?: string;
}

export const updateAccount = async (data: UpdateAccountProps): Promise<any> => {
    const draftData = {
        name: data.name,
        email: data.email,
        image: data.image,
        position: data.position,
    };
    const res = await apiClient.put(
        `${URL_API_UPDATEUSER}/${data.id}`,
        draftData,
    );
    return res;
};

type UseUpdateAccountOptions = {
    config?: MutationConfig<typeof updateAccount>;
};

export const useUpdateAccount = ({ config }: UseUpdateAccountOptions) => {
    return useMutation({
        onMutate: () => {},
        onError: () => {},
        onSuccess: () => {},
        ...config,
        mutationFn: updateAccount,
    });
};

import { URL_API_UPDATEUSER } from "@/constant/config";
import { apiClient } from "@/lib/api";
import { MutationConfig } from "@/lib/react-query";
import { useMutation } from "react-query";

interface UpdateAccountProps {
    name?: string;
    email?: string;
    password?: string;
    image?: string;
    position?: string;
}

export const updateAccount = async (data: UpdateAccountProps): Promise<any> => {
    const res = await apiClient.post(`${URL_API_UPDATEUSER}`, data);
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

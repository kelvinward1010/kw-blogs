import { URL_API_LOGIN } from "@/constant/config";
import { apiClient } from "@/lib/api";
import { MutationConfig } from "@/lib/react-query";
import { useMutation } from "react-query";

export interface LoginAccountProps {
    email?: string;
    password?: string;
}

export const loginAccount = async (data: LoginAccountProps): Promise<any> => {
    const res = await apiClient.post(`${URL_API_LOGIN}`, data);
    return res;
};

type UseLoginAccountOptions = {
    config?: MutationConfig<typeof loginAccount>;
};

export const useLoginAccount = ({ config }: UseLoginAccountOptions) => {
    return useMutation({
        onMutate: () => {},
        onError: () => {},
        onSuccess: () => {},
        ...config,
        mutationFn: loginAccount,
    });
};

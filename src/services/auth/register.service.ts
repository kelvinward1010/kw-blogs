import { URL_AUTH_REGISTER } from "@/constant/config";
import { apiClient } from "@/lib/api";
import { MutationConfig } from "@/lib/react-query";
import { useMutation } from "react-query";

export interface RegisterAccountProps {
    name?: string;
    email?: string;
    password?: string;
    image?: string;
    position?: string;
    favoritesposts?: string[];
}

export const registerAccount = async (
    data: RegisterAccountProps,
): Promise<any> => {
    const res = await apiClient.post(`${URL_AUTH_REGISTER}`, data);
    return res;
};

type UseRegisterAccountOptions = {
    config?: MutationConfig<typeof registerAccount>;
};

export const useRegisterAccount = ({ config }: UseRegisterAccountOptions) => {
    return useMutation({
        onMutate: () => {},
        onError: () => {},
        onSuccess: () => {},
        ...config,
        mutationFn: registerAccount,
    });
};

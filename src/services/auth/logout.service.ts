import { URL_API_LOGOUT } from "@/constant/config";
import { apiClient } from "@/lib/api";
import { MutationConfig } from "@/lib/react-query";
import { useMutation } from "react-query";

export const logoutAccount = async (): Promise<any> => {
    const res = await apiClient.post(`${URL_API_LOGOUT}`);
    return res;
};

type UseLogoutAccountOptions = {
    config?: MutationConfig<typeof logoutAccount>;
};

export const useLogoutAccount = ({ config }: UseLogoutAccountOptions) => {
    return useMutation({
        onMutate: () => {},
        onError: () => {},
        onSuccess: () => {},
        ...config,
        mutationFn: logoutAccount,
    });
};

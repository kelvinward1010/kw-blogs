import { URL_API_CHANGEPASSWORD } from "@/constant/config";
import { apiClient } from "@/lib/api";
import { MutationConfig } from "@/lib/react-query";
import { useMutation } from "react-query";

interface ChangePasswordProps {
    old_password?: string;
    password?: string;
}

export const changePassword = async (
    data: ChangePasswordProps,
): Promise<any> => {
    const res = await apiClient.put(`${URL_API_CHANGEPASSWORD}`, data);
    return res;
};

type UseChangePasswordOptions = {
    config?: MutationConfig<typeof changePassword>;
};

export const useChangePassword = ({ config }: UseChangePasswordOptions) => {
    return useMutation({
        onMutate: () => {},
        onError: () => {},
        onSuccess: () => {},
        ...config,
        mutationFn: changePassword,
    });
};

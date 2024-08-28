import { LoginAccountProps } from "@/services/auth/login.service";
import { RegisterAccountProps } from "@/services/auth/register.service";
import { FormRule } from "antd";

export const RULES_LOGIN: Record<keyof LoginAccountProps, FormRule[]> = {
    email: [{ required: true, message: "Please input your email!" }],
    password: [{ required: true, message: "Please input your password!" }],
};

export const RULES_SIGNUP: Record<
    keyof Omit<RegisterAccountProps, "image" | "position" | "favoritesposts">,
    FormRule[]
> = {
    name: [{ required: true, message: "Please input your email!" }],
    email: [{ required: true, message: "Please input your email!" }],
    password: [{ required: true, message: "Please input your password!" }],
};

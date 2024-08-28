import { CreatePostProps } from "@/services/post/create-post.service";
import { FormRule } from "antd";

export const RULES_UPDATEANDCREATEPOST: Record<
    keyof Pick<CreatePostProps, "topic" | "title" | "description">,
    FormRule[]
> = {
    topic: [{ required: true, message: "Please input your topic!" }],
    title: [{ required: true, message: "Please input your title!" }],
    description: [
        { required: true, message: "Please input your description!" },
    ],
};

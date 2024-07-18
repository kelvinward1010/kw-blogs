import { IUser } from "@/types/user";
import styles from "./YourPostsCreated.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useState } from "react";
import { IBasetListPost, IPost } from "@/types/post";
import { useGetYourPosts } from "@/services/post/get-your-post.service";
import { Form, Input, notification, Row } from "antd";
import { CardPost } from "@/components/card-post/CardPost";
import { customConditionalFeedbackHigh } from "@/components/hoc/custom-feedback.hoc";
import { SearchOutlined } from "@ant-design/icons";

type FieldType = {
    title?: string;
};

export function YourPostsCreated() {
    const [formYourPosts] = Form.useForm<FieldType>();
    const [data, setData] = useState<IPost[]>([]);
    const user: IUser | null = useSelector(
        (state: RootState) => state.auth.user,
    );

    const titleValueSearch = Form.useWatch("title", formYourPosts);

    {
        user?._id &&
            useGetYourPosts({
                data: {
                    id: user._id,
                    title: titleValueSearch,
                },
                config: {
                    onSuccess: (res) => {
                        const data = res?.data;
                        setData(data);
                    },
                    onError: (e: any) => {
                        notification.error({
                            message: e?.response?.data?.detail,
                        });
                    },
                },
            });
    }

    const draftData = {
        isLoading: false,
        data: data,
    };

    const ListPost = customConditionalFeedbackHigh()(BaseListYourPosts);

    return (
        <div className={styles.container}>
            <Form form={formYourPosts} layout="vertical" autoComplete="off">
                <Form.Item name="title">
                    <Input
                        placeholder="Search title post..."
                        prefix={<SearchOutlined />}
                    />
                </Form.Item>
            </Form>
            <Row>
                <ListPost data={draftData} />
            </Row>
        </div>
    );
}

const BaseListYourPosts: React.FC<{ data: IBasetListPost }> = ({ data }) => {
    return (
        <div className={styles.containeryourpost}>
            {data?.data.map((post: IPost) => (
                <CardPost key={post._id} data={post} />
            ))}
        </div>
    );
};

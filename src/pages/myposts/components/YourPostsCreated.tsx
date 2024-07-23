import { IUser } from "@/types/user";
import styles from "./YourPostsCreated.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { IPost } from "@/types/post";
import { useGetYourPosts } from "@/services/post/get-your-post.service";
import { Form, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { CardPostYouCreated } from "./CardPostYouCreated";
import { Pagination } from "@/components/pagination/Pagination";

type FieldType = {
    title?: string;
};

export function YourPostsCreated() {
    const [formYourPosts] = Form.useForm<FieldType>();
    const user: IUser | null = useSelector(
        (state: RootState) => state.auth.user,
    );

    const titleValueSearch = Form.useWatch("title", formYourPosts);

    const queryFn = {
        id: user?._id as string,
        title: titleValueSearch,
    };

    const { data: posts, isLoading } = useGetYourPosts({
        data: queryFn,
        config: {},
    });

    const draftData = {
        data: posts as IPost[],
    };

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
            <Pagination
                data={draftData.data ?? []}
                newsPerPage={6}
                FormCard={CardPostYouCreated}
                isLoading={isLoading}
            />
        </div>
    );
}

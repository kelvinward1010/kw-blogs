import { IUser } from "@/types/user";
import styles from "./YourPostsCreated.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { IBasetListPost, IPost } from "@/types/post";
import { useGetYourPosts } from "@/services/post/get-your-post.service";
import { Form, Input, Row } from "antd";
import { customConditionalFeedbackHigh } from "@/components/hoc/custom-feedback.hoc";
import { SearchOutlined } from "@ant-design/icons";
import { CardPostYouCreated } from "./CardPostYouCreated";

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

    const { data: posts } = useGetYourPosts({
        data: queryFn,
        config: {},
    });

    const draftData = {
        isLoading: false,
        data: posts as IPost[],
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
                <CardPostYouCreated key={post._id} data={post} />
            ))}
        </div>
    );
};

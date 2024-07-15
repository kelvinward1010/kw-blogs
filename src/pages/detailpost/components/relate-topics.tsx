import { Typography } from "antd";
import styles from "./relate-topics.module.scss";
import { IBasetListPost, IPost } from "@/types/post";
import { posts } from "../../topics/data";
import { customConditionalFeedbackHigh } from "@/components/hoc/custom-feedback.hoc";
import { CardPost } from "@/components/card-post/CardPost";

const { Title } = Typography;

export function RelateTopics() {
    const data = posts.slice(0, 4);

    const draftData = {
        isLoading: false,
        data: data,
    };

    const ListPost = customConditionalFeedbackHigh(
        "Loading Todos...",
        "No Todos loaded yet.",
        "Todos are empty.",
    )(BaseListNews);

    return (
        <div className={styles.container}>
            <div className={styles.center}>
                <Title level={4} className={styles.title_main}>
                    Articles with related topics
                </Title>
                <ListPost data={draftData} />
            </div>
        </div>
    );
}

const BaseListNews: React.FC<{ data: IBasetListPost }> = ({ data }) => {
    return (
        <div className={styles.container_listnews}>
            {data?.data.map((post: IPost) => (
                <CardPost key={post.id} data={post} />
            ))}
        </div>
    );
};

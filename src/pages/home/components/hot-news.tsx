import { IBasetListPost, IPost } from "@/types/post";
import styles from "./hot-news.module.scss";
import { notification, Typography } from "antd";
import { customConditionalFeedbackHigh } from "@/components/hoc/custom-feedback.hoc";
import { CardPost } from "@/components/card-post/CardPost";
import { useState } from "react";
import { useSearchNewestPosts } from "@/services/post/newest-posts-search.service";

const { Title } = Typography;

export function HotNews() {
    const [data, setData] = useState<IPost[]>([]);

    useSearchNewestPosts({
        data: {
            limit: 4,
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

    const draftData = {
        isLoading: false,
        data: data,
    };

    const ListPost = customConditionalFeedbackHigh()(BaseListNews);

    return (
        <div className={styles.container}>
            <Title level={3} className={`${styles.title} ${styles.title_1}`}>
                latest news
            </Title>
            <ListPost data={draftData} />
        </div>
    );
}

const BaseListNews: React.FC<{ data: IBasetListPost }> = ({ data }) => {
    return (
        <div className={styles.container_listnews}>
            {data?.data.map((post: IPost) => (
                <CardPost key={post._id} data={post} />
            ))}
        </div>
    );
};

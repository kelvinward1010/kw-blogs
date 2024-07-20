import { IBasetListPost, IPost } from "@/types/post";
import styles from "./style.module.scss";
import { Skeleton, Typography } from "antd";
import { customConditionalFeedbackHigh } from "@/components/hoc/custom-feedback.hoc";
import { CardPost } from "@/components/card-post/CardPost";
import { useDefenseAndSecurityNewestPosts } from "@/services/post/newest-posts-search.service";
import { useTranslation } from "react-i18next";

const { Title } = Typography;

export function DefenseAndSecurity() {
    const { t } = useTranslation();
    const queryFn = {
        topic: ["Defense and security"],
        limit: 4,
    };

    const { data: posts } = useDefenseAndSecurityNewestPosts({
        data: queryFn,
        config: {},
    });

    const draftData = {
        isLoading: false,
        data: posts as IPost[],
    };

    const ListPost = customConditionalFeedbackHigh()(BaseListNews);

    return (
        <div className={styles.container}>
            <Title level={3} className={`${styles.title} ${styles.title_1}`}>
                {t("home.defenseandsecurity")}
            </Title>
            {posts ? (
                <ListPost data={draftData} />
            ) : (
                <Skeleton className={"skeleton-form"} active />
            )}
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

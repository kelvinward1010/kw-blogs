import { Typography } from "antd";
import styles from "./relate-topics.module.scss";
import { IBasetListPost, IPost } from "@/types/post";
import { customConditionalFeedbackHigh } from "@/components/hoc/custom-feedback.hoc";
import { CardPost } from "@/components/card-post/CardPost";
import { useTranslation } from "react-i18next";

const { Title } = Typography;

interface RelateTopicsProps {
    data: IPost[];
    isLoading: boolean;
}

export function RelateTopics({ data, isLoading }: RelateTopicsProps) {
    const { t } = useTranslation();
    const draftData = {
        isLoading: isLoading,
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
                    {t("detailpost.postrelated")}
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
                <CardPost key={post._id} data={post} />
            ))}
        </div>
    );
};

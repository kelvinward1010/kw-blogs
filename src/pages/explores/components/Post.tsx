import { IPost } from "@/types/post";
import styles from "./Post.module.scss";
import { Col, Row, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import { postUrl } from "@/routes/urls";
import { LinkPreview } from "@/components/previewlink/PreviewLink";
import { PostPreview } from "@/components/post-preview/PostPreview";
import { formatDate } from "@/utils/date";

const { Title, Text } = Typography;

interface PostProps {
    data: IPost;
}

export const Post: React.FC<PostProps> = ({ data }) => {
    const navigate = useNavigate();
    const handleGoPost = () => navigate(`${postUrl}/${data?._id}`);

    const PopupPreviewForm = (
        onMouseEnter: () => void,
        onMouseLeave: () => void,
    ) => {
        return (
            <Title
                className={styles.title}
                onClick={handleGoPost}
                level={4}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                {data?.title}
            </Title>
        );
    };

    return (
        <div className={styles.container}>
            <Row justify={"space-between"} gutter={8}>
                <Col span={8}>
                    <img
                        width={"100%"}
                        className={styles.image_thumbnail}
                        src={data?.image_thumbnail}
                    />
                </Col>
                <Col span={16}>
                    {LinkPreview({
                        Component: <PostPreview dataPost={data} />,
                        TitleLink: PopupPreviewForm,
                    })}
                    <Text>
                        Time: {data.createdAt && formatDate(data.createdAt)}
                    </Text>
                    <Text className={styles.content}>{data?.description}</Text>
                </Col>
            </Row>
        </div>
    );
};

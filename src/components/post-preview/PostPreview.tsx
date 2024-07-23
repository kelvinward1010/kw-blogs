import { IPost } from "@/types/post";
import { Row, Typography } from "antd";
import styles from "./PostPreview.module.scss";
import { useNavigate } from "react-router-dom";
import { postUrl } from "@/routes/urls";
import { BouncingDotsLoader } from "../bouncing-dots-loader/bouncingDotsLoader";
import { formatDate } from "@/utils/date";

const { Text, Title } = Typography;

interface PostPreviewProps {
    dataPost?: IPost;
}

export function PostPreview(data: PostPreviewProps) {
    const { dataPost } = data;
    const navigate = useNavigate();

    const goPost = () => navigate(`${postUrl}/${dataPost?._id}`);

    return (
        <div className={styles.container}>
            {dataPost ? (
                <div className={styles.post} onClick={goPost}>
                    <Title level={4}>{dataPost?.title}</Title>
                    <Text>
                        Time:{" "}
                        {dataPost.createdAt && formatDate(dataPost.createdAt)}
                    </Text>
                    <Row className={styles.content}>
                        {dataPost?.content && (
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: dataPost?.content,
                                }}
                            />
                        )}
                    </Row>
                </div>
            ) : (
                <BouncingDotsLoader />
            )}
        </div>
    );
}

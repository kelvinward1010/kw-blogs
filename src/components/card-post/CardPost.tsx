import { postUrl } from "@/routes/urls";
import { IPost } from "@/types/post";
import { Row, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import styles from "./CardPost.module.scss";

const { Title, Text } = Typography;

export const CardPost: React.FC<{ data: IPost }> = ({ data }) => {
    const navigate = useNavigate();
    const handleGoPost = () => navigate(`${postUrl}/${data.id}`);

    return (
        <div className={styles.container_news} onClick={handleGoPost}>
            <Title className={`${styles.text} ${styles.title}`} level={4}>
                {data.title}
            </Title>
            <Row wrap justify={"space-between"}>
                <img
                    width={"100%"}
                    className={styles.img_center}
                    src={data.image_thumbnail}
                    alt={data.title}
                />
            </Row>
            <Text className={`${styles.text} ${styles.content}`}>
                &nbsp;&nbsp;&nbsp;&nbsp;{data?.content}
            </Text>
        </div>
    );
};

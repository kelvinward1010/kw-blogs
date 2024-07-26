import { postUrl } from "@/routes/urls";
import { IPost } from "@/types/post";
import { Row, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import styles from "./CardPost.module.scss";

const { Title, Text } = Typography;

export const CardPost: React.FC<{ data: IPost }> = ({ data }) => {
    const navigate = useNavigate();
    const handleGoPost = () => navigate(`${postUrl}/${data._id}`);

    return (
        <div className={styles.container_news} onClick={handleGoPost}>
            <Row justify={"center"} className={styles.image_thumbnail}>
                <img
                    width={"100%"}
                    className={styles.img_center}
                    src={data.image_thumbnail}
                    alt={data.title}
                />
            </Row>
            <Title className={`${styles.text} ${styles.title}`} level={4}>
                {data.title}
            </Title>
            <Text className={`${styles.text} ${styles.content}`}>
                &nbsp;&nbsp;&nbsp;&nbsp;{data?.description}
            </Text>
        </div>
    );
};

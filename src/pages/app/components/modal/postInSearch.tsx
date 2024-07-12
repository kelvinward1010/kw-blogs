import { IPost } from "@/types/post";
import { Typography } from "antd";
import styles from "./postInSearch.module.scss";

interface PostInSearchProps {
    dataPost: IPost;
    setMouseEnterID: any;
}

const { Title, Text } = Typography;

export function PostInSearch(data: PostInSearchProps) {
    const { dataPost, setMouseEnterID } = data;

    const handleMouseEnter = () => {
        setMouseEnterID(dataPost.id);
    };

    return (
        <div className={styles.container} onMouseEnter={handleMouseEnter}>
            <Title level={4}>{dataPost?.title}</Title>
            <Text>{dataPost?.time_created}</Text>
        </div>
    );
}

import { IPost } from "@/types/post";
import { Typography } from "antd";
import styles from "./postInSearch.module.scss";
import { useNavigate } from "react-router-dom";
import { postUrl } from "@/routes/urls";

interface PostInSearchProps {
    dataPost: IPost;
    setMouseEnterID: any;
    setOpenModal: any;
}

const { Title, Text } = Typography;

export function PostInSearch(data: PostInSearchProps) {
    const navigate = useNavigate();
    const { dataPost, setMouseEnterID, setOpenModal } = data;

    const handleMouseEnter = () => {
        setMouseEnterID(dataPost.id);
    };

    const goPost = () => {
        navigate(`${postUrl}/${dataPost.id}`);
        setOpenModal(false);
    };

    return (
        <div
            onClick={goPost}
            className={styles.container}
            onMouseEnter={handleMouseEnter}
        >
            <Title level={4}>{dataPost?.title}</Title>
            <Text>{dataPost?.time_created}</Text>
        </div>
    );
}

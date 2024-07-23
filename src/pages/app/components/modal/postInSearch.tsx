import { IPost } from "@/types/post";
import { Button, Typography } from "antd";
import styles from "./postInSearch.module.scss";
import { useNavigate } from "react-router-dom";
import { postUrl } from "@/routes/urls";
import { ExportOutlined } from "@ant-design/icons";
import { formatDate } from "@/utils/date";

interface PostInSearchProps {
    dataPost: IPost;
    setClickDataPost: any;
    setOpenModal: any;
}

const { Text } = Typography;

export function PostInSearch(data: PostInSearchProps) {
    const navigate = useNavigate();
    const { dataPost, setClickDataPost, setOpenModal } = data;

    const handleClickPost = () => {
        setClickDataPost(dataPost);
    };

    const goPost = (e: any) => {
        e.preventDefault();
        navigate(`${postUrl}/${dataPost._id}`);
        setOpenModal(false);
    };

    return (
        <div className={styles.container} onClick={handleClickPost}>
            <div className={styles.box}>
                <Text strong className={styles.title}>
                    {dataPost?.title}
                </Text>
                <Text className={styles.titme}>
                    Time:{" "}
                    {dataPost?.createdAt && formatDate(dataPost.createdAt)}
                </Text>
            </div>
            <Button onClick={goPost} icon={<ExportOutlined />}>
                Explore
            </Button>
        </div>
    );
}

import { postUrl } from "@/routes/urls";
import { IPost } from "@/types/post";
import { Col, notification, Row, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import styles from "./CardPostYouCreated.module.scss";
import { DeleteFilled } from "@ant-design/icons";
import { useDeletePost } from "@/services/post/delete-post.service";
import { useState } from "react";
import { ModalSmall } from "@/components/modals/modalSmall";
import { queryClient } from "@/lib/react-query";

const { Title, Text } = Typography;

export const CardPostYouCreated: React.FC<{ data: IPost }> = ({ data }) => {
    const navigate = useNavigate();
    const handleGoPost = () => navigate(`${postUrl}/${data._id}`);
    const [openModalDelete, setOpenModalDelete] = useState<boolean>(false);

    const configDeletePost = useDeletePost({
        config: {
            onSuccess: () => {
                notification.error({
                    message: "Delete post",
                });
                queryClient.invalidateQueries(["your-posts"]);
                queryClient.invalidateQueries(["your-favorites-posts"]);
                setOpenModalDelete(false);
            },
            onError: (e) => {
                notification.error({
                    message: e?.response?.data?.detail,
                });
            },
        },
    });

    const handleDeletePost = () => {
        configDeletePost.mutate({ id: data._id });
    };

    return (
        <div className={styles.container_news}>
            {openModalDelete && (
                <ModalSmall
                    message="Do you want to delete this post?"
                    open={openModalDelete}
                    setOpen={setOpenModalDelete}
                    onClick={handleDeletePost}
                    titleButton={"Delete"}
                />
            )}
            <Row
                justify={"space-between"}
                className={styles.headcard}
                align={"middle"}
            >
                <Col span={21}>
                    <Title
                        onClick={handleGoPost}
                        className={`${styles.text} ${styles.title}`}
                        level={4}
                    >
                        {data.title}
                    </Title>
                </Col>
                <Col span={2}>
                    <DeleteFilled
                        onClick={() => setOpenModalDelete(true)}
                        className={styles.actionDelete}
                    />
                </Col>
            </Row>
            <Row justify={"center"} className={styles.image_thumbnail}>
                <img
                    width={"100%"}
                    className={styles.img_center}
                    src={data.image_thumbnail}
                    alt={data.title}
                />
            </Row>
            <Text className={`${styles.text} ${styles.content}`}>
                &nbsp;&nbsp;&nbsp;&nbsp;{data?.description}
            </Text>
        </div>
    );
};

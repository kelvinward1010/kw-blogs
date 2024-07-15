import { IPost2 } from "@/types/post";
import { notification, Row, Typography } from "antd";
import styles from "./PostPreview.module.scss";
import { Error404 } from "../error/404";
import { useNavigate } from "react-router-dom";
import { postUrl } from "@/routes/urls";
import { useGetPost } from "@/services/post/get-post.service";
import { useState } from "react";

const { Text, Title } = Typography;

interface PostPreviewProps {
    id?: string;
}

export function PostPreview(data: PostPreviewProps) {
    const { id } = data;
    const navigate = useNavigate();
    const [dataPost, setDataPost] = useState<IPost2>();

    {
        id &&
            useGetPost({
                id,
                config: {
                    onSuccess: (res) => {
                        const data = res?.data?.data;
                        setDataPost(data);
                    },
                    onError: (e: any) => {
                        notification.error({
                            message: e?.response?.data?.detail,
                        });
                    },
                },
            });
    }

    const goPost = () => navigate(`${postUrl}/${data.id}`);

    return (
        <div className={styles.container}>
            {dataPost ? (
                <div className={styles.post} onClick={goPost}>
                    <Title level={4}>{dataPost?.title}</Title>
                    <Text>{dataPost.createdAt}</Text>
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
                <Error404 />
            )}
        </div>
    );
}

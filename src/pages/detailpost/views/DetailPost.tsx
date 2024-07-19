import { Col, Image, notification, Row, Typography } from "antd";
import styles from "./DetailPost.module.scss";
import { ButtonConfig } from "@/components/buttonconfig";
import { RelateTopics } from "../components/relate-topics";
import { Comments } from "../components/comments/comments";
import { useNavigate, useParams } from "react-router-dom";
import { writecontentUrl } from "@/routes/urls";
import { useGetPost } from "@/services/post/get-post.service";
import { useState } from "react";
import { IUser } from "@/types/user";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { getUser } from "@/services/user/get-user.service";
import { formatDate } from "@/utils/date";
import { IPost } from "@/types/post";
import { searchNewestPosts } from "@/services/post/newest-posts-search.service";
import { filterPostsRelatedById } from "@/utils/array";
import { HeartFilled, HeartOutlined } from "@ant-design/icons";
import { useLikePost } from "@/services/post/like-post.service";

const { Title, Text } = Typography;

export function DetailPost(): JSX.Element {
    const navigate = useNavigate();
    const id = useParams()?.id;
    const [data, setData] = useState<IPost>();
    const [dataUser, setDataUser] = useState<any>();
    const [dataRelated, setDataRelated] = useState<IPost[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const user: IUser | null = useSelector(
        (state: RootState) => state.auth.user,
    );

    const compareUser =
        String(user?._id) === String(data?.authorID) ? true : false;

    const isLiked = data?.likes.includes(user?._id as string);

    const goEditPost = () => navigate(`${writecontentUrl}/${id}`);

    {
        id &&
            useGetPost({
                id,
                config: {
                    onSuccess: (res) => {
                        const data = res?.data?.data;
                        setData(data);
                        if (data?.authorID) {
                            const dataGet = {
                                id: data?.authorID,
                            };
                            getUser(dataGet).then((user) => {
                                setDataUser(user?.data);
                            });
                        }
                        if (data?.topic) {
                            setIsLoading(true);
                            const dataSearch = {
                                topic: data?.topic,
                                limit: 4,
                            };
                            searchNewestPosts(dataSearch).then((search) => {
                                const dataFilltered = filterPostsRelatedById(
                                    search?.data,
                                    id,
                                );
                                setDataRelated(dataFilltered);
                                setIsLoading(false);
                            });
                        }
                    },
                    onError: (e: any) => {
                        notification.error({
                            message: e?.response?.data?.detail,
                        });
                    },
                },
            });
    }

    const configLikePost = useLikePost({
        config: {
            onSuccess: (res) => {
                const data = res?.data?.data;
                setData(data);
                notification.success({
                    message: isLiked ? "Unlike" : "Like",
                });
            },
            onError: (e) => {
                notification.error({
                    message: e.message,
                });
            },
        },
    });

    const handleLikePost = () => {
        configLikePost.mutate({
            id: data?._id as string,
            isLike: isLiked ? 0 : 1,
        });
    };

    return (
        <div className={styles.container}>
            <div className={styles.headesay}>
                <Row justify={"space-between"} align={"top"}>
                    <Col span={21}>
                        {data?.title && <Title level={3}>{data?.title}</Title>}
                        <Text>Author: {dataUser?.name}</Text>
                        <br />
                        <Text>
                            Time:{" "}
                            {data?.createdAt && formatDate(data.createdAt)}
                        </Text>
                        <br />
                    </Col>
                    <Col className={styles.actionsInPost}>
                        {compareUser && (
                            <ButtonConfig onClick={goEditPost} lable={"Edit"} />
                        )}
                        {isLiked ? (
                            <HeartFilled
                                onClick={handleLikePost}
                                className={styles.heartLike}
                            />
                        ) : (
                            <HeartOutlined
                                onClick={handleLikePost}
                                className={styles.heartLike}
                            />
                        )}
                    </Col>
                </Row>
            </div>
            <Row justify={"center"}>
                {data?.image_thumbnail && (
                    <Image
                        width={"90%"}
                        src={data?.image_thumbnail}
                        style={{ margin: "0 10px" }}
                    />
                )}
            </Row>
            <Row justify={"start"} className={styles.containerContent}>
                {data?.content && (
                    <div dangerouslySetInnerHTML={{ __html: data?.content }} />
                )}
            </Row>
            <Comments />
            <RelateTopics data={dataRelated} isLoading={isLoading} />
        </div>
    );
}

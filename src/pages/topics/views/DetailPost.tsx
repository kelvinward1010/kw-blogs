import { Col, Row, Typography } from "antd";
import styles from "./DetailPost.module.scss";
import { ButtonConfig } from "@/components/buttonconfig";
import { RelateTopics } from "../components/comments/relate-topics";
import { Comments } from "../components/comments/comments";
import { useNavigate, useParams } from "react-router-dom";
import { writecontentUrl } from "@/routes/urls";
import { posts } from "../data";
import { IPost } from "@/types/post";

const { Title, Text } = Typography;

export function DetailPost(): JSX.Element {
    const navigate = useNavigate();
    const id = useParams()?.id;

    const goEditPost = () => navigate(`${writecontentUrl}/${id}`);

    const dataPost: IPost | undefined = posts.find(
        (p: IPost) => p.id === Number(id),
    );

    return (
        <div className={styles.container}>
            <Row justify={"space-between"}>
                <Col span={21}>
                    <Title level={2}>
                        {dataPost?.title} - {dataPost?.authorID}
                    </Title>
                </Col>
                <Col>
                    <ButtonConfig onClick={goEditPost} lable={"Edit"} />
                </Col>
            </Row>
            <Row>
                <Text>{dataPost?.content}</Text>
            </Row>
            <Comments />
            <RelateTopics />
        </div>
    );
}

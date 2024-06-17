import { IPost } from '@/types/post';
import styles from './Post.module.scss';
import { Col, Flex, Row, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';
import { topicsUrl } from '@/routes/urls';


const { Title, Text } = Typography;

interface PostProps {
    data: IPost
}

export const Post: React.FC<PostProps> = ({
    data,
}) => {

    const navigate = useNavigate();
    const handleGoPost = () => navigate(`${topicsUrl}/${data.id}`);

    return (
        <div className={styles.container}>
            <Row justify={'space-evenly'} gutter={8}>
                <Col span={10}>
                    <img width={'100%'} className={styles.image_thumbnail} src={data?.image_thumbnail} />
                </Col>
                <Col span={14}>
                    <Flex vertical={true} justify={'center'} align={'start'}>
                        <Title className={styles.title} onClick={handleGoPost}>{data?.title}</Title>
                        <Text className={styles.content}>{data?.content}</Text>
                    </Flex>
                </Col>
            </Row>
        </div>
    )
}
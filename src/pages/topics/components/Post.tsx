import { IPost } from '@/types/post';
import styles from './Post.module.scss';
import { Col, Flex, Row, Typography } from 'antd';


const { Title, Text } = Typography;

interface PostProps {
    data: IPost
}

export const Post: React.FC<PostProps> = ({
    data,
}) => {
    return (
        <div className={styles.container}>
            <Row justify={'space-evenly'} gutter={8}>
                <Col span={9}>
                    <img width={'100%'} className={styles.image_thumbnail} src={data?.image_thumbnail} />
                </Col>
                <Col span={15}>
                    <Flex vertical={true} justify={'center'} align={'start'}>
                        <Title>{data?.title}</Title>
                        <Text className={styles.content}>{data?.content}</Text>
                    </Flex>
                </Col>
            </Row>
        </div>
    )
}
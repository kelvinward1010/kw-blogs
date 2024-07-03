import { Row, Typography } from 'antd';
import styles from './relate-topics.module.scss';
import { IBasetListPost, IPost } from '@/types/post';
import { useNavigate } from 'react-router-dom';
import { topicsUrl } from '@/routes/urls';
import { posts } from '../../data';
import { customConditionalFeedbackHigh } from '@/utils/custom-feedback.hoc';

const { Title, Text } = Typography;

export function RelateTopics() {

    const data = posts.slice(0, 4);

    const draftData = {
        isLoading: false,
        data: data,
    }

    const ListPost = customConditionalFeedbackHigh(
        'Loading Todos...',
        'No Todos loaded yet.',
        'Todos are empty.',
    )(BaseListNews);

    return (
        <div className={styles.container}>
            <div className={styles.center}>
                <Title level={4} className={styles.title_main}>
                    Articles with related topics
                </Title>
                <ListPost data={draftData} />
            </div>
        </div>
    )
}



const News: React.FC<{data: IPost}> = ({
    data,
}) => {

    const navigate = useNavigate();
    const handleGoPost = () => navigate(`${topicsUrl}/${data.id}`);

    return (
        <div className={styles.container_news} onClick={handleGoPost}>
            <Title className={`${styles.text} ${styles.title}`} level={4}>{data.title}</Title>
            <Row wrap justify={'space-between'}>
                    <img width={'100%'} className={styles.img_center} src={data.image_thumbnail} alt={data.title} />
            </Row>
            <Text className={`${styles.text} ${styles.content}`}>&nbsp;&nbsp;&nbsp;&nbsp;{data?.content}</Text>
        </div>
    )
}

const BaseListNews: React.FC<{data: IBasetListPost}> = ({
    data
}) => {
    return (
        <div className={styles.container_listnews}>
            {data?.data.map((post: IPost) => (
                <News key={post.id} data={post}/>
            ))}
        </div>
    );
};
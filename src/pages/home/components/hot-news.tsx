import { IBasetListPost, IPost } from '@/types/post';
import styles from './hot-news.module.scss';
import { posts } from '@/pages/topics/data';
import { Row, Typography } from 'antd';
import { customConditionalFeedbackHigh } from '@/utils/custom-feedback.hoc';
import { useNavigate } from 'react-router-dom';
import { topicsUrl } from '@/routes/urls';

const { Text, Title } = Typography;

export function HotNews() {

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
            <Title level={3} className={`${styles.title} ${styles.title_1}`}>latest news</Title>
            <ListPost data={draftData} />
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
            <Text className={`${styles.text} ${styles.content}`}>&nbsp;&nbsp;&nbsp;&nbsp;{data.content}</Text>
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
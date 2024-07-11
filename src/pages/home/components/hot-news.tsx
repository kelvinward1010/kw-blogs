import { IBasetListPost, IPost } from '@/types/post';
import styles from './hot-news.module.scss';
import { posts } from '@/pages/topics/data';
import { Typography } from 'antd';
import { customConditionalFeedbackHigh } from '@/components/hoc/custom-feedback.hoc';
import { CardPost } from '@/components/card-post/CardPost';

const { Title } = Typography;

export function HotNews() {

    const data = posts.slice(0, 4);

    const draftData = {
        isLoading: false,
        data: data,
    }

    const ListPost = customConditionalFeedbackHigh()(BaseListNews);

    return (
        <div className={styles.container}>
            <Title level={3} className={`${styles.title} ${styles.title_1}`}>latest news</Title>
            <ListPost data={draftData} />
        </div>
    )
}


const BaseListNews: React.FC<{data: IBasetListPost}> = ({
    data
}) => {
    return (
        <div className={styles.container_listnews}>
            {data?.data.map((post: IPost) => (
                <CardPost key={post.id} data={post}/>
            ))}
        </div>
    );
};
import { IBasetListPost, IPost } from '@/types/post';
import { posts } from '../data';
import { Post } from './Post';
import styles from './PostsTopics.module.scss';
import { useSearchParams } from 'react-router-dom';
import { useMemo } from 'react';
import { customConditionalFeedbackHigh } from '@/components/hoc/custom-feedback.hoc';

export function PostsTopics() {
    const [topicsParams,__] = useSearchParams();
    const keysSearchOnParams = topicsParams.getAll('topic');

    const filteredPosts = useMemo(() => {
        if(keysSearchOnParams.length > 0){
            return posts.filter((post: IPost) => post.topic.some(topic => keysSearchOnParams.includes(topic)));
        } else {
            return posts;
        }
    }, [posts, keysSearchOnParams]);

    const draft = {
        isLoading: false,
        data: filteredPosts,
    }

    const ListPost = customConditionalFeedbackHigh(
        'Loading Todos...',
        'No post loaded yet...',
        'Post are empty...',
    )(BaseListPost);

    return (
        <div className={styles.container}>
            <ListPost data={draft} />
        </div>
    )
}

const BaseListPost: React.FC<{data: IBasetListPost}> = ({
    data
}) => {
    return (
        <div className={styles.list_post}>
            {data?.data.map((post: IPost) => (
                <Post key={post.id} data={post}/>
            ))}
        </div>
    );
};
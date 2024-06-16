import { IPost } from '@/types/post';
import { posts } from '../data';
import { Post } from './Post';
import styles from './PostsTopics.module.scss';
import { useSearchParams } from 'react-router-dom';
import { useMemo } from 'react';

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
    
    if(filteredPosts.length <= 0){
        return (
            <div>
                Not found any post!
            </div>
        )
    }

    return (
        <div className={styles.container}>
            {filteredPosts.map((post: IPost) => (
                <Post key={post.id} data={post}/>
            ))}
        </div>
    )
}
import { Post } from './Post';
import styles from './PostsTopics.module.scss';

export function PostsTopics() {
    const posts = [
        {key: 1, title: 'post 1'},
        {key: 2, title: 'post 2'},
        {key: 3, title: 'post 3'},
        {key: 4, title: 'post 4'},
    ]
    return (
        <div className={styles.container}>
            {posts.map((post: any) => (
                <Post title={post.title}/>
            ))}
        </div>
    )
}
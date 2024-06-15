import styles from './Post.module.scss';


interface PostProps {
    title: string;
}

export const Post: React.FC<PostProps> = ({
    title,
}) => {
    return (
        <div className={styles.container}>
            Post: {title}
        </div>
    )
}
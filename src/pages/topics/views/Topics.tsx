import { PostsTopics } from "../components/PostsTopics";
import { TopicsSelect } from "../components/TopicsSelect";
import styles from "./Topics.module.scss";

export function Topics() {
    return (
        <div className={styles.container}>
            <div className={styles.box1}>
                <TopicsSelect />
            </div>
            <div className={styles.box2}>
                <PostsTopics />
            </div>
        </div>
    );
}

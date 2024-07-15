import { Typography } from "antd";
import styles from "./MyPosts.module.scss";

const { Title } = Typography;

export function MyPosts() {
    return (
        <div className={styles.container}>
            <Title level={5}>Your Posts</Title>
        </div>
    );
}

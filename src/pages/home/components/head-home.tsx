import { Typography } from "antd";
import styles from "./head-home.module.scss";

const { Title } = Typography;

export function HeadHome() {
    return (
        <div className={styles.container}>
            <Title className={styles.title}>
                Write your content and share to everyone
            </Title>
        </div>
    );
}

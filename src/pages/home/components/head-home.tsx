import { Carousel, Typography } from "antd";
import styles from "./head-home.module.scss";

const { Title } = Typography;

export function HeadHome() {
    return (
        <div className={styles.container}>
            <Carousel arrows autoplay>
                <div className={`${styles.box} ${styles.img1}`}>
                    <Title className={styles.title}>Welcome to KW Blogs</Title>
                </div>
                <div className={`${styles.box} ${styles.img2}`}>
                    <Title className={styles.title}>
                        This is the place for you to unleash your creativity
                    </Title>
                </div>
                <div className={`${styles.box} ${styles.img3}`}>
                    <Title className={styles.title}>
                        Write your content and share to everyone
                    </Title>
                </div>
                <div className={`${styles.box} ${styles.img4}`}>
                    <Title className={styles.title}>Always stay positive</Title>
                </div>
            </Carousel>
        </div>
    );
}

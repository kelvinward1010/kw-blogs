import { Carousel } from "antd";
import styles from "./head-home.module.scss";

export function HeadHome() {
    return (
        <div className={styles.container}>
            <Carousel autoplay>
                <div className={styles.item}>
                    <img
                        src="https://images.inc.com/uploaded_files/image/1920x1080/getty_649236630_398154.jpg"
                        alt="Images"
                    />
                </div>
                <div className={styles.item}>
                    <img
                        src="https://miro.medium.com/v2/resize:fit:1400/1*_nlTYfyrnBdp_hjvwWmnEQ.jpeg"
                        alt="Images"
                    />
                </div>
                <div className={styles.item}>
                    <img
                        src="https://www.aspistrategist.org.au/wp-content/uploads/2024/03/GettyImages-1628291798-scaled.jpg"
                        alt="Images"
                    />
                </div>
                <div className={styles.item}>
                    <img
                        src="https://www.cia-france.com/media/1492/les-films-incontournables-du-cinema-w_2524x884.jpg"
                        alt="Images"
                    />
                </div>
            </Carousel>
        </div>
    );
}

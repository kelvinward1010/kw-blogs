import { Carousel } from 'antd';
import styles from './head-home.module.scss';

export function HeadHome() {
    return (
        <div className={styles.container}>
            <Carousel autoplay>
                <div className={styles.item}>
                    <img
                        src="https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?b=1&s=612x612&w=0&k=20&c=81f5HaMtoPNUrdfa4hnS8NcwEgD9tH2nnTUBu25Msug="
                        alt="Images"
                    />
                </div>
                <div className={styles.item}>
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/24701-nature-natural-beauty.jpg/1280px-24701-nature-natural-beauty.jpg"
                        alt="Images"
                    />
                </div>
                <div className={styles.item}>
                    <img
                        src="https://media.istockphoto.com/id/157727724/photo/sunset.webp?b=1&s=170667a&w=0&k=20&c=jgfpEZDbZeKpNpP_Ic_b4YpHuo6UWQqdU563g4eItpM="
                        alt="Images"
                    />
                </div>
                <div className={styles.item}>
                    <img
                        src="https://images.unsplash.com/photo-1517222738892-2ff5b4203027?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLWxpa2VkfDV8fHxlbnwwfHx8fHw%3D&w=1000&q=80"
                        alt="Images"
                    />
                </div>
            </Carousel>
        </div>
    )
}
import { Carousel } from 'antd';
import styles from './head-home.module.scss';

export function HeadHome() {
    return (
        <div className={styles.container}>
            <Carousel autoplay>
                <div className={styles.item}>
                    <img
                        src="https://i.imgur.com/JZe3lvz.jpg"
                        alt="Images"
                    />
                </div>
                <div className={styles.item}>
                    <img
                        src="https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABYM9KvP-bpz9dnTQP1O7OhpXl-Vs21ImIUtsfrrwF34WX36c4S7ceysPRTiFe4MamL8AKhiCvsPsS_ON75eGeuJfhSEmUp4l6bM0.jpg?r=0e5"
                        alt="Images"
                    />
                </div>
                <div className={styles.item}>
                    <img
                        src="https://imgsrv.crunchyroll.com/cdn-cgi/image/format=auto,fit=contain,width=1200,height=675,quality=85/catalog/crunchyroll/a249096c7812deb8c3c2c907173f3774.jpe"
                        alt="Images"
                    />
                </div>
                <div className={styles.item}>
                    <img
                        src="https://br.web.img3.acsta.net/pictures/20/09/14/10/31/4875617.jpg"
                        alt="Images"
                    />
                </div>
            </Carousel>
        </div>
    )
}
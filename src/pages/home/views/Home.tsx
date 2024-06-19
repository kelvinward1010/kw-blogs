import { HeadHome } from '../components/head-home';
import styles from './Home.module.scss';

export function Home() {
    return (
        <div className={styles.container}>
            <HeadHome />
        </div>
    )
}

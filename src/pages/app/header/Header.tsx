import { Typography } from 'antd';
import styles from './Header.module.scss';
import { useNavigate } from 'react-router-dom';
import { aboutweUrl, homeUrl, topicsUrl } from '../../../routes/urls';

const { Title } = Typography;

export function Header() {
    const navigate = useNavigate();

    const goHome = () => navigate(homeUrl);
    const goTopics = () => navigate(topicsUrl);
    const goAboutWe = () => navigate(aboutweUrl);

    return (
        <div className={styles.container}>
            <Title level={3} onClick={goHome} className={styles.maintitle}>App Writer</Title>
            <div className={styles.center}>
                <nav>
                    <li onClick={goHome}>Home</li>
                    <li onClick={goTopics}>Topics</li>
                    <li onClick={goAboutWe}>About We</li>
                </nav>
            </div>
            <div>
                Your account
            </div>
        </div>
    )
}

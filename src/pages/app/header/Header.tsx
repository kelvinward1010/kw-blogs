import { Avatar, Button, Flex, Typography } from 'antd';
import styles from './Header.module.scss';
import { useNavigate } from 'react-router-dom';
import { aboutweUrl, homeUrl, signinUrl, signupUrl, topicsUrl } from '../../../routes/urls';
import { cutString } from '@/utils/string';

const { Title, Text } = Typography;

export function Header() {
    const navigate = useNavigate();
    const user = false;

    const goSignup = () => navigate(signupUrl);
    const goSignin = () => navigate(signinUrl);

    const goHome = () => navigate(homeUrl);
    const goTopics = () => navigate(topicsUrl);
    const goAboutWe = () => navigate(aboutweUrl);

    return (
        <div className={styles.container}>
            <Title level={3} onClick={goHome} className={styles.maintitle}>App Writer</Title>
            <div className={styles.center}>
                <nav>
                    <li onClick={goHome}><Text className={styles.title} strong>Home</Text></li>
                    <li onClick={goTopics}><Text className={styles.title} strong>Topics</Text></li>
                    <li onClick={goAboutWe}><Text className={styles.title} strong>About We</Text></li>
                </nav>
            </div>
            <div>
                {user ? (
                    <Avatar className={styles.avatar}>
                        {cutString('KW')}
                    </Avatar>
                ) : (
                    <Flex gap={'small'} justify={'center'} align={'center'}>
                        <Button onClick={goSignin}>Sign In</Button>
                        <Button onClick={goSignup}>Sign Up</Button>
                    </Flex>
                )}
            </div>
        </div>
    )
}

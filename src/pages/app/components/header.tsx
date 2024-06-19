import { Avatar, Button, Dropdown, Flex, Typography } from 'antd';
import styles from './header.module.scss';
import { useNavigate } from 'react-router-dom';
import { aboutweUrl, homeUrl, signinUrl, signupUrl, topicsUrl } from '../../../routes/urls';
import { cutString } from '@/utils/string';
import { ButtonConfig } from '@/components/buttonconfig';
import { UserOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

export function Header(): JSX.Element {
    const navigate = useNavigate();
    const user = true;

    const goSignup = () => navigate(signupUrl);
    const goSignin = () => navigate(signinUrl);

    const goHome = () => navigate(homeUrl);
    const goTopics = () => navigate(topicsUrl);
    const goAboutWe = () => navigate(aboutweUrl);

    const items = [
        {
            label: <>
                <ButtonConfig lable={'Write your content'}/>
            </>,
            key: '0',
        },
        {
            label: <>
                <ButtonConfig className={'button-config'} lable={'Log Out'}/>
            </>,
            key: '1',
        },
    ]

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
                    <Dropdown
                        menu={{
                            items,
                        }}
                        trigger={['click']}
                    >
                        <Avatar className={styles.avatar} icon={<UserOutlined />}>
                            {cutString('KW')}
                        </Avatar>
                    </Dropdown>
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

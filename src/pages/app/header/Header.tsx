import { Avatar, Button, Flex, Popover, Tag, Typography } from 'antd';
import styles from './Header.module.scss';
import { useNavigate } from 'react-router-dom';
import { aboutweUrl, homeUrl, topicsUrl } from '../../../routes/urls';
import { cutString } from '@/utils/string';

const { Title, Text } = Typography;

export function Header() {
    const navigate = useNavigate();
    const user = false;

    const goHome = () => navigate(homeUrl);
    const goTopics = () => navigate(topicsUrl);
    const goAboutWe = () => navigate(aboutweUrl);

    function ContentTopics(){
        return (
            <Flex className={'topics_tag'} gap="4px 0" wrap style={{width: '200px'}}>
                <Tag className={styles.tag} color="magenta">Anime</Tag>
                <Tag className={styles.tag} color="lime">New</Tag>
                <Tag className={styles.tag} color="red">Netflix</Tag>
                <Tag className={styles.tag} color="volcano">Love</Tag>
                <Tag className={styles.tag} color="orange">Science Fiction</Tag>
                <Tag className={styles.tag} color="gold">Fantasy</Tag>
            </Flex>
        )
    }

    return (
        <div className={styles.container}>
            <Title level={3} onClick={goHome} className={styles.maintitle}>App Writer</Title>
            <div className={styles.center}>
                <nav>
                    <li onClick={goHome}><Text className={styles.title} strong>Home</Text></li>
                    <li onClick={goTopics}>
                        <Popover placement="bottomLeft" title={'Topics'} content={ContentTopics}>
                            <Text className={styles.title} strong>Topics</Text>
                        </Popover>
                    </li>
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
                        <Button>Sign In</Button>
                        <Button>Sign Up</Button>
                    </Flex>
                )}
            </div>
        </div>
    )
}

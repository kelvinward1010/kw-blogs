import { Typography } from 'antd';
import styles from './AboutWe.module.scss';
import { IconBrandFacebook } from '@tabler/icons-react';

const { Title, Text } = Typography;

export function AboutWe() {
    return (
        <div className={styles.container}>
            <Title level={5}>1. Development time.</Title>
            <div className={styles.content}>
                <Text>Time: In the afternoon (16/06/2024).</Text><br />
                <Text>Members: Kelvin Ward.</Text>
            </div>
            <br />
            <Title level={5}>2. Contact with we.</Title>
            <div className={styles.content}>
                <a className={styles.link_cnt} href="https://www.facebook.com/duy.kelvinward" target="_blank" rel="noopener noreferrer">
                    <IconBrandFacebook />acebook
                </a>
                <Text>Email: kelvinward1010@gmail.com</Text>
            </div>
        </div>
    )
}

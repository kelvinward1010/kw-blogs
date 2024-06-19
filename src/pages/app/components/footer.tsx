import { Typography } from 'antd';
import styles from './footer.module.scss';

const { Text } = Typography;

export function Footer(): JSX.Element {
    return (
        <div className={styles.container}>
            <Text className={styles.title}>App Writer</Text>
            <Text className={styles.title2}>&#10164; Development by Kelvin Ward &#10166;</Text>
        </div>
    )
}
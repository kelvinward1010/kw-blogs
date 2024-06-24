import { Typography } from 'antd';
import styles from './comments.module.scss';

const { Title } = Typography;

export function Comments() {
    return (
        <div className={styles.container}>
            <Title level={3}>Comments</Title>
        </div>
    )
}
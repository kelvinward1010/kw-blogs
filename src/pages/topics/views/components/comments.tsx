import { Col, Row, Typography } from 'antd';
import styles from './comments.module.scss';
import { FormComment } from './form-comment';
import { ListComments } from './list-comments';

const { Title } = Typography;

export function Comments() {
    return (
        <div className={styles.container}>
            <Title level={3}>Comments</Title>
            <Row justify={'center'}>
                <Col span={18} className={styles.main_comments}>
                    <FormComment />
                    <ListComments />
                </Col>
            </Row>
        </div>
    )
}
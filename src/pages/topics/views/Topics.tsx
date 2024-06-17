import { Col, Row } from 'antd';
import { PostsTopics } from '../components/PostsTopics';
import { TopicsSelect } from '../components/TopicsSelect';
import styles from './Topics.module.scss';

export function Topics() {
    return (
        <div className={styles.container}>
            <Row gutter={[8, 16]} wrap style={{width: 'calc(100vw - 20px)'}}>
                <Col flex="0 1 200px">
                    <TopicsSelect />
                </Col>
                <Col flex="1 1 300px">
                    <PostsTopics />
                </Col>
            </Row>
        </div>
    )
}

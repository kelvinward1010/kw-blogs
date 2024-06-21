import { Col, Row } from 'antd';
import { HeadHome } from '../components/head-home';
import styles from './Home.module.scss';
import { RightHome } from '../components/right-home';

export function Home() {
    return (
        <div className={styles.container}>
            <HeadHome />
            <br />
            <Row justify={'space-between'}>
                <Col span={17} className={styles.top_left}>
                    ok
                </Col>
                <Col span={6} className={styles.right}>
                    <RightHome />
                </Col>
            </Row>
        </div>
    )
}

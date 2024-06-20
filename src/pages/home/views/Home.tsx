import { Col, Row } from 'antd';
import { HeadHome } from '../components/head-home';
import styles from './Home.module.scss';
import { RightHome } from '../components/right-home';

export function Home() {
    return (
        <div className={styles.container}>
            <Row justify={'space-between'}>
                <Col span={17}>
                    <HeadHome />
                </Col>
                <Col span={6}>
                    <RightHome />
                </Col>
            </Row>
        </div>
    )
}

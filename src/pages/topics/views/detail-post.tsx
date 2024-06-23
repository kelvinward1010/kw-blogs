import { Col, Row, Typography } from 'antd';
import styles from './detail-post.module.scss';
import { ButtonConfig } from '@/components/buttonconfig';
import { RelateTopics } from './components/relate-topics';

const { Title, Text } = Typography;

export function DetailPost(): JSX.Element {
    return (
        <div className={styles.container}>
            <Row justify={'space-between'}>
                <Col span={21}>
                    <Title level={2}>Hige Wo SURO - 12345678</Title>
                </Col>
                <Col>
                    <ButtonConfig lable={'Edit'}/>
                </Col>
            </Row>
            <Row>
                <Text>
                    In the process of internal desktop applications development, many different design specs and implementations would be involved, which might cause designers and developers difficulties and duplication and reduce the efficiency of development.
                </Text>
            </Row>
            
            <RelateTopics />
        </div>
    )
}
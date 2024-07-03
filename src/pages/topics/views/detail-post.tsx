import { Col, Row, Typography } from 'antd';
import styles from './detail-post.module.scss';
import { ButtonConfig } from '@/components/buttonconfig';
import { RelateTopics } from '../components/comments/relate-topics';
import { Comments } from '../components/comments/comments';
import { useNavigate, useParams } from 'react-router-dom';
import { writecontentUrl } from '@/routes/urls';

const { Title, Text } = Typography;

export function DetailPost(): JSX.Element {

    const navigate = useNavigate();
    const id = useParams();

    const goEditPost = () => navigate(`${writecontentUrl}/${id?.id}`);

    return (
        <div className={styles.container}>
            <Row justify={'space-between'}>
                <Col span={21}>
                    <Title level={2}>Hige Wo SURO - 12345678</Title>
                </Col>
                <Col>
                    <ButtonConfig onClick={goEditPost} lable={'Edit'}/>
                </Col>
            </Row>
            <Row>
                <Text>
                    In the process of internal desktop applications development, many different design specs and implementations would be involved, which might cause designers and developers difficulties and duplication and reduce the efficiency of development.
                </Text>
            </Row>
            <Comments />
            <RelateTopics />
        </div>
    )
}
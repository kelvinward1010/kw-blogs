import { IComment } from '@/types/comment';
import styles from './list-comments.module.scss';
import { Avatar, Col, Row, Typography } from 'antd';
import { UserAddOutlined } from '@ant-design/icons';
import { comments } from '../../data';
import { customConditionalCommentsFeedbackHigh } from '@/utils/custom-feedback.hoc';
import { ButtonConfig } from '@/components/buttonconfig';

const { Text } = Typography;

export function ListComments() {

    const ListPost = customConditionalCommentsFeedbackHigh(
        'No Todos loaded yet.',
        'Todos are empty.',
    )(ListCommentBase);

    return (
        <div className={styles.container}>
            <ListPost data={comments} />
        </div>
    )
}


const Comment: React.FC<{data: IComment}> = ({
    data
}) => {
    return (
        <div className={styles.container1}>
            <Row justify={'start'} wrap={false} align={'top'}>
                <Col flex={'none'}>
                    <Avatar icon={<UserAddOutlined />} />
                </Col>
                <Col flex={'auto'} className={styles.right}>
                    <Row justify={'start'} align={'top'}>
                        <Text>{data.content}</Text>
                        <ButtonConfig className='button-submit' lable={'Reply'} />
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

const ListCommentBase: React.FC<{data: IComment[]}> = ({
    data
}) => {
    return(
        <>
            {data.map((item: IComment) => (
                <Comment key={item.id} data={item} />
            ))}
        </>
    )
}
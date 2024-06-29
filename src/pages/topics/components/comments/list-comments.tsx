import { IComment } from '@/types/comment';
import styles from './list-comments.module.scss';
import { Avatar, Col, Flex, Row, Typography } from 'antd';
import { UserAddOutlined } from '@ant-design/icons';
import { comments } from '../../data';
import { customConditionalCommentsFeedbackHigh } from '@/utils/custom-feedback.hoc';
import { useState } from 'react';
import { FormComment } from './form-comment';

const { Text } = Typography;

export function ListComments() {

    const [currentComments, setCurrentComments] = useState<number>(2);

    const handleCalcComments = (): number => {
        const increment = 2;
        const maxLengthComments = comments.length;

        if( currentComments + increment > maxLengthComments){
            setCurrentComments(currentComments + (maxLengthComments - currentComments));
        }else {
            setCurrentComments(currentComments + increment);
        }

        return currentComments;
    }

    const ListPost = customConditionalCommentsFeedbackHigh(
        'No Todos loaded yet.',
        'Todos are empty.',
    )(ListCommentBase);

    return (
        <div className={styles.container}>
            <ListPost data={comments.slice(0,currentComments)} />
            {comments.length != currentComments ? <Text className={styles.seemorecomments} strong onClick={handleCalcComments}>See more comments</Text> : ''}
        </div>
    )
}


const Comment: React.FC<{data: IComment}> = ({
    data
}) => {
    const [isHidden,setIsHidden] = useState<boolean>(false);
    const [isReply,setIsReply] = useState<boolean>(false);

    const handleChangeStateHidden = () => setIsHidden(!isHidden);
    const handleChangeStateReply = () => setIsReply(!isReply);

    return (
        <div className={styles.container1} style={{marginLeft: `${35 * Number(data.level)}px`}}>
            <Row justify={'start'} wrap={false} align={'top'}>
                <Col flex={'none'}>
                    <Avatar icon={<UserAddOutlined />} />
                </Col>
                <Col flex={'auto'} className={styles.right}>
                    <Row justify={'start'} align={'top'}>
                        <Text>{data.content}</Text>
                        <Flex gap={'small'} justify={'flex-start'}>
                            <Text className={styles.acincmt} strong onClick={handleChangeStateReply}>Reply</Text>
                            {data?.comments_replies && <Text className={styles.acincmt} strong onClick={handleChangeStateHidden}>{!isHidden ? 'More' : 'Less'}</Text>}
                        </Flex>
                    </Row>
                </Col>
            </Row>
            {data?.comments_replies && isHidden && <ListCommentBase data={data?.comments_replies}/>}
            {isReply && <FormComment isReply={isReply} ofComment={data.id}/>}
        </div>
    )
}

const ListCommentBase: React.FC<{data?: IComment[]}> = ({
    data
}) => {
    return(
        <>
            {data?.map((item: IComment) => (
                <Comment key={item.id} data={item} />
            ))}
        </>
    )
}
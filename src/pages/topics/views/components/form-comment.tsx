import { Avatar, Button, Col, Form, Input, Row, Space } from 'antd';
import styles from './form-comment.module.scss';
import { UserAddOutlined } from '@ant-design/icons';
import { ButtonConfig } from '@/components/buttonconfig';

type FieldType = {
    comment?: string;
};

export function FormComment() {

    const [form] = Form.useForm();

    const onFinish = (values: FieldType) => {

        const data = {
            email: values.comment,
        }
        console.log(data)
    };

    return (
        <div className={styles.container}>
            <Row justify={'start'} align={'top'}>
                <Col flex={'none'}>
                    <Avatar icon={<UserAddOutlined />} />
                </Col>
                <Col flex={'auto'} className={styles.right}>
                    <Form
                        form={form}
                        name="Form Comment"
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        layout={'horizontal'}
                        autoComplete="off"
                        className={styles.form_comment}
                    >
                        <Form.Item<FieldType>
                            name="comment"
                            rules={[{ required: true }]}
                        >
                            <Input.TextArea placeholder='Write your feeling...' />
                        </Form.Item>
                        <Form.Item>
                            <Space>
                                <ButtonConfig htmlType={'submit'} className='button-submit' lable={'Submit'} />
                                <Button htmlType="reset">Reset</Button>
                            </Space>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
        </div>
    )
}
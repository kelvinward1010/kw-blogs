import { Flex, Form, Input, Typography } from 'antd';
import styles from './AboutWe.module.scss';
import { IconBrandFacebook } from '@tabler/icons-react';
import { ButtonConfig } from '@/components/buttonconfig';

const { Title, Text } = Typography;

type FieldType = {
    message?: string;
};

export function AboutWe() {

    const [form] = Form.useForm();

    const onFinish = (values: FieldType) => {

        const data = {
            email: values.message,
        }
        console.log(data)
    };

    return (
        <div className={styles.container}>
            <Title level={5}>1. Development time.</Title>
            <div className={styles.content}>
                <Text>Time: In the afternoon (16/06/2024).</Text><br />
                <Text>Members: Kelvin Ward.</Text>
            </div>
            <br />
            <Title level={5}>2. Contact with we.</Title>
            <div className={styles.content}>
                <a className={styles.link_cnt} href="https://www.facebook.com/duy.kelvinward" target="_blank" rel="noopener noreferrer">
                    <IconBrandFacebook />acebook
                </a>
                <Text>Email: kelvinward1010@gmail.com</Text>
            </div>
            <br />
            <Title level={5}>3. Send we your messages.</Title>
            <div className={styles.content}>
                <Form
                    form={form}
                    name="send-we-messages"
                    scrollToFirstError
                    style={{ paddingBlock: 32 }}
                    labelCol={{ span: 5 }}
                    wrapperCol={{ span: 10 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    autoComplete="off"
                    layout={'vertical'}
                >
                    <Form.Item<FieldType>
                        label="Your Messages"
                        name="message"
                    >
                        <Input.TextArea rows={6}/>
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 0 }}>
                        <Flex gap="small">
                            <ButtonConfig className={styles.submit} type="primary" htmlType={'submit'} lable={'Submit'}/>
                            <ButtonConfig danger onClick={() => form.resetFields()} lable={'Reset'}/>
                        </Flex>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}

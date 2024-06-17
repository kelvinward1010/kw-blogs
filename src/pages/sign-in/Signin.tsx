
import { Button, Form, Input, Typography, notification } from 'antd';
import styles from './Signin.module.scss'
import { useNavigate } from 'react-router-dom';
import { WarningOutlined } from '@ant-design/icons';
import { signupUrl } from '@/routes/urls';


const { Text } = Typography;

type FieldType = {
    email?: string;
    password?: string;
};

export function Signin(): JSX.Element {

    const navigate = useNavigate();

    const onFinish = (values: any) => {

        const data = {
            email: values.email,
            password: values.password
        }
        console.log(data)
    };

    const onFinishFailed = (errorInfo: any) => {
        notification.error({
            message: `Could not sign in. Please try again!`,
            description: ` ${errorInfo}`,
            icon: (
                <WarningOutlined className='warning' />
            )
        })
    };

    return (
        <div className={styles.container}>
            <div className={styles.center}>
                <Form
                    name="signin"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    style={{ maxWidth: 600 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item<FieldType>
                        label="Email"
                        name="email"
                        rules={[{ required: true, message: 'Please input your email!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item<FieldType>
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button className={styles.button} htmlType="submit">
                            Sign In
                        </Button>
                    </Form.Item>
                </Form>

                <div className={styles.have_account}>
                    <Text>Don't have a account!</Text>
                    <Text onClick={() => navigate(signupUrl)} className={styles.fix_text}>Sign Up</Text>
                </div>
            </div>
        </div>
    )
}
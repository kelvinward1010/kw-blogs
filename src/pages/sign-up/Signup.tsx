
import { Button, Form, Input, Typography, notification } from 'antd';
import styles from './Signup.module.scss';
import { useNavigate } from 'react-router-dom';
import { WarningOutlined } from '@ant-design/icons';
import { signinUrl } from '@/routes/urls';


const { Text } = Typography;

type FieldType = {
    name?: string
    email?: string;
    password?: string;
    confirmPassword?: string;
};

const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 10 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 14 },
    },
};


export function Signup() {

    const [form] = Form.useForm();

    const navigate = useNavigate();

    const onFinish = (values: any) => {
        const data = {
            name: values.name,
            email: values.email,
            password: values.password
        }
        console.log(data)
    };

    const onFinishFailed = (errorInfo: any) => {
        notification.error({
            message: `Could not sign up. Please try again!`,
            description: ` ${errorInfo}`,
            icon: (
                <WarningOutlined className='warning'/>
            )
        })
    };

    return (
        <div className={styles.container}>
            <div className={styles.center}>
                <Form
                    {...formItemLayout}
                    form={form}
                    name="register"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item<FieldType>
                        label="Name"
                        name="name"
                        rules={[{ required: true, message: 'Please input your name!' }]}
                    >
                        <Input />
                    </Form.Item>

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

                    <Form.Item<FieldType>
                        name="confirmPassword"
                        label="Confirm Password"
                        dependencies={['password']}
                        hasFeedback
                        rules={[
                            {
                                required: true,
                                message: 'Please confirm your password!',
                            },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue('password') === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(new Error('The new password that you entered do not match!'));
                                },
                            }),
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button className={styles.button} htmlType="submit">
                            Sign Up
                        </Button>
                    </Form.Item>
                </Form>

                <div className={styles.have_account}>
                    <Text>Have a account!</Text>
                    <Text onClick={() => navigate(signinUrl)} className={styles.fix_text}>Sign Up</Text>
                </div>
            </div>
        </div>
    )
}

import { Button, Form, Input, Typography, notification } from "antd";
import styles from "./Signin.module.scss";
import { useNavigate } from "react-router-dom";
import { WarningOutlined } from "@ant-design/icons";
import { signupUrl } from "@/routes/urls";
import { useLoginAccount } from "@/services/auth/login.service";
import storage, { storageRefreshToken } from "@/utils/storage";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { loginAcc } from "@/redux/reducers/authSlice";

const { Text } = Typography;

type FieldType = {
    email?: string;
    password?: string;
};

export function Signin(): JSX.Element {
    const dispatch: AppDispatch = useDispatch();
    const navigate = useNavigate();

    const configLoginAccount = useLoginAccount({
        config: {
            onSuccess: (res) => {
                const data = res?.data;
                notification.success({
                    message: "Login successfully!",
                });
                storage.setToken(data.access_token);
                storageRefreshToken.setToken(data.refresh_token);
                dispatch(
                    loginAcc({
                        user: data?.user,
                    }),
                );
                navigate(-1);
            },
            onError: (e) => {
                notification.error({
                    message: e.response?.data?.detail,
                });
            },
        },
    });

    const onFinish = (values: FieldType) => {
        const data = {
            email: values.email,
            password: values.password,
        };
        configLoginAccount.mutate(data);
    };

    const onFinishFailed = (errorInfo: any) => {
        notification.error({
            message: `Could not sign in. Please try again!`,
            description: ` ${errorInfo}`,
            icon: <WarningOutlined className="warning" />,
        });
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
                        rules={[
                            {
                                required: true,
                                message: "Please input your email!",
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item<FieldType>
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: "Please input your password!",
                            },
                        ]}
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
                    <Text
                        onClick={() => navigate(signupUrl)}
                        className={styles.fix_text}
                    >
                        Sign Up
                    </Text>
                </div>
            </div>
        </div>
    );
}

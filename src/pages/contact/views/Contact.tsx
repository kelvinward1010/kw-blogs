import { Flex, Form, Input, Typography } from "antd";
import styles from "./Contact.module.scss";
import { IconBrandFacebook } from "@tabler/icons-react";
import { ButtonConfig } from "@/components/buttonconfig";

const { Title, Text } = Typography;

type FieldType = {
    message?: string;
};

export function Contact() {
    const [form] = Form.useForm();

    const onFinish = (values: FieldType) => {
        const data = {
            email: values.message,
        };
        console.log(data);
    };

    return (
        <div className={styles.container}>
            <Title level={4} className={styles.text}>
                1. Development.
            </Title>
            <div className={styles.content}>
                <Text className={styles.text}>
                    I'm a fullstack web developer.
                </Text>
                <br />
                <Text className={styles.text}>
                    Time start to buid this application: In the afternoon
                    (16/06/2024).
                </Text>
                <br />
                <Text className={styles.text}>Members: Kelvin Ward.</Text>
            </div>
            <br />
            <Title level={4} className={styles.text}>
                2. Contact with me.
            </Title>
            <div className={styles.content}>
                <a
                    className={styles.link_cnt}
                    href="https://www.facebook.com/duy.kelvinward"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <IconBrandFacebook />
                    acebook
                </a>
                <Text className={styles.text}>
                    Email: kelvinward1010@gmail.com
                </Text>
            </div>
            <div className={styles.contentBox}>
                <Form
                    form={form}
                    name="send-we-messages"
                    scrollToFirstError
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    autoComplete="off"
                    layout={"vertical"}
                    className={styles.box}
                >
                    <Form.Item<FieldType> name="message">
                        <Input.TextArea
                            rows={5}
                            placeholder="Your message"
                            className={styles.inputsend}
                        />
                    </Form.Item>

                    <Form.Item>
                        <Flex gap="small" justify={"flex-start"}>
                            <ButtonConfig
                                className={"button-submit"}
                                type="primary"
                                htmlType={"submit"}
                                lable={"Submit"}
                            />
                        </Flex>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
}

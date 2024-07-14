import { Flex, Form, Image, Input, notification, Typography } from "antd";
import styles from "./Profile.module.scss";
import { ChangeEvent, useCallback, useEffect, useRef, useState } from "react";
import { ButtonConfig } from "@/components/buttonconfig";
import { UploadOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { useUpdateAccount } from "@/services/user/update-user.service";
import { updateUser } from "@/redux/reducers/authSlice";
import { IUser } from "@/types/user";

type FieldType = {
    name?: string;
    email?: string;
    position?: string;
};

const { Text } = Typography;

export function Profile() {
    const dispatch: AppDispatch = useDispatch();
    const [formProfile] = Form.useForm();
    const [image, setImage] = useState<any>();
    const fileInputRef = useRef<HTMLInputElement>(null);

    const user: IUser | null = useSelector(
        (state: RootState) => state.auth.user,
    );

    const formLabel = (value: string) => <Text strong>{value}</Text>;

    const handleChangeInputImage = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const files = e.target.files;
        const reader = new FileReader();
        reader.onload = () => {
            setImage(reader.result as any);
        };
        if (files !== null && files.length) reader.readAsDataURL(files[0]);
    };

    const handleButtonClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handleResetAll = () => {
        formProfile.resetFields();
        setImage("");
    };

    const configUpdateAccount = useUpdateAccount({
        config: {
            onSuccess: (res) => {
                const data = res?.data;
                notification.success({
                    message: "Updated successfully!",
                });
                dispatch(
                    updateUser({
                        user: data?.data,
                    }),
                );
            },
            onError: (e) => {
                notification.error({
                    message: e.response?.data?.detail,
                });
            },
        },
    });

    const onFinish = useCallback(
        (values: FieldType) => {
            // const dataUrl = image;
            // const blob: Blob = dataURLtoBlob(dataUrl);
            // const formData = new FormData();
            // formData.append("file", blob, "image.png");
            const draftData = {
                id: user?._id,
                name: values.name,
                email: values.email,
                image: image,
                position: values.position,
            };
            configUpdateAccount.mutate(draftData);
        },
        [user, image],
    );

    useEffect(() => {
        if (user) {
            const darftData = {
                name: user?.name,
                email: user?.email,
                position: user?.position,
            };
            formProfile.setFieldsValue(darftData);
            setImage(user?.image);
        }
    }, [user]);

    return (
        <div className={styles.container}>
            <Form
                form={formProfile}
                name="profile"
                scrollToFirstError
                style={{ paddingBlock: 32, width: "100%" }}
                labelCol={{ span: 5 }}
                wrapperCol={{ span: 24 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                layout={"vertical"}
            >
                <Form.Item wrapperCol={{ offset: 0 }}>
                    <Flex gap="small">
                        <ButtonConfig
                            className={"button-submit"}
                            type="primary"
                            htmlType={"submit"}
                            lable={"Submit"}
                        />
                        <ButtonConfig
                            danger
                            onClick={handleResetAll}
                            lable={"Reset all"}
                        />
                    </Flex>
                </Form.Item>
                <Form.Item<FieldType>
                    label={formLabel("Name")}
                    name="name"
                    rules={[
                        { required: true, message: "Please input your name!" },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item<FieldType>
                    label={formLabel("Email")}
                    name="email"
                    rules={[
                        { required: true, message: "Please input your email!" },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item<FieldType>
                    label={formLabel("Position")}
                    name="position"
                >
                    <Input />
                </Form.Item>

                <Form.Item label={formLabel("Image")}>
                    <ButtonConfig
                        icon={<UploadOutlined />}
                        iconPosition={"start"}
                        onClick={handleButtonClick}
                        lable={"Click to upload"}
                    >
                        <input
                            style={{ display: "none" }}
                            ref={fileInputRef}
                            accept="image/*"
                            type={"file"}
                            onChange={handleChangeInputImage}
                        />
                    </ButtonConfig>
                    {image && (
                        <Image
                            width={200}
                            src={image}
                            style={{ margin: "0 0 0 10px" }}
                        />
                    )}
                </Form.Item>
            </Form>
        </div>
    );
}

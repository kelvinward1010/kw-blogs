import { ChangeEvent, useEffect, useRef, useState } from "react";
import { EditorConfig } from "../components/editor";
import styles from "./write-content.module.scss";
import { Flex, Form, Input, notification, Select, Typography } from "antd";
import { ButtonConfig } from "@/components/buttonconfig";
import { dataURLtoBlob } from "@/utils/blob";
import { UploadOutlined } from "@ant-design/icons";
import { useNavigate, useParams } from "react-router-dom";
import { IPost } from "@/types/post";
import { TOPICSOPTIONS } from "@/config";
import { useCreatePost } from "@/services/post/create-post.service";
import { ModalSmall } from "@/components/modals/modalSmall";
import { postUrl } from "@/routes/urls";
import { IUser } from "@/types/user";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import { useGetPost } from "@/services/post/get-post.service";

type FieldType = {
    topic?: string[];
    title?: string;
    description?: string;
};

const { Text } = Typography;

export function WriteContent() {
    const navigate = useNavigate();
    const [formWritecontent] = Form.useForm();
    const id: any = useParams()?.id;
    const [content, setContent] = useState<any>();
    const [image, setImage] = useState<any>();
    const [openModal, setOpenModal] = useState<boolean>(false);
    const [idNewPost, setIdNewPost] = useState<string>("");
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [data, setData] = useState<IPost>();

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

    function checkAllFieldsExist(): boolean {
        const valuesDraftChecks: any = {
            content: content,
            image_thumbnail: image,
        };
        const keys = Object.keys(valuesDraftChecks);
        const allFieldsExist = keys.every(
            (key) =>
                valuesDraftChecks[key] !== undefined &&
                valuesDraftChecks[key] !== null,
        );

        return allFieldsExist ? false : true;
    }

    const handleResetAll = () => {
        formWritecontent.resetFields();
        setContent("");
        setImage("");
    };

    const configCreatePost = useCreatePost({
        config: {
            onSuccess: (res) => {
                const data = res?.data?.data;
                notification.success({
                    message: "Created post!",
                });
                setIdNewPost(data?._id);
                setOpenModal(true);
            },
            onError: (e) => {
                notification.error({
                    message: e.response?.data?.detail,
                });
            },
        },
    });

    const onFinish = (values: FieldType) => {
        const dataUrl = image;
        const blob: Blob = dataURLtoBlob(dataUrl);
        const formData = new FormData();
        formData.append("file", blob, "image.png");

        const draftData = {
            topic: values.topic,
            title: values.title,
            authorID: user?._id,
            description: values.description,
            content: content,
            image_thumbnail: image,
        };
        configCreatePost.mutate(draftData);
    };

    const handleGoToSeePost = () => {
        navigate(`${postUrl}/${idNewPost}`);
        setOpenModal(false);
    };

    {
        id &&
            useGetPost({
                id,
                config: {
                    onSuccess: (res) => {
                        const data: IPost = res?.data?.data;
                        setData(data);
                        setContent(data?.content);
                        setImage(data?.image_thumbnail);
                    },
                    onError: (e: any) => {
                        notification.error({
                            message: e?.response?.data?.detail,
                        });
                    },
                },
            });
    }

    useEffect(() => {
        id && data
            ? formWritecontent?.setFieldsValue(data)
            : formWritecontent?.setFieldsValue({
                  title: "",
                  description: "",
              });
    }, [data, id]);

    return (
        <div className={styles.container}>
            {openModal && (
                <ModalSmall
                    message="Do you want to see your post was created, right now?"
                    open={openModal}
                    setOpen={setOpenModal}
                    onClick={handleGoToSeePost}
                />
            )}
            <Form
                form={formWritecontent}
                name="writeContent"
                scrollToFirstError
                style={{ paddingBlock: 32, width: "100%" }}
                labelCol={{ span: 5 }}
                wrapperCol={{ span: 24 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                autoComplete="off"
                layout={"vertical"}
            >
                <Form.Item wrapperCol={{ offset: 0 }}>
                    <Flex gap="small">
                        <ButtonConfig
                            disabled={checkAllFieldsExist()}
                            className={styles.submit}
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
                    label={formLabel("Topic")}
                    name="topic"
                    rules={[
                        { required: true, message: "Please input your topic!" },
                    ]}
                >
                    <Select
                        mode="multiple"
                        allowClear
                        style={{ width: "100%" }}
                        placeholder="Select toppic"
                        options={TOPICSOPTIONS}
                    />
                </Form.Item>
                <Form.Item<FieldType>
                    label={formLabel("Title")}
                    name="title"
                    rules={[
                        { required: true, message: "Please input your title!" },
                    ]}
                >
                    <Input.TextArea rows={2} />
                </Form.Item>

                <Form.Item<FieldType>
                    label={formLabel("Description")}
                    name="description"
                    rules={[
                        {
                            required: true,
                            message: "Please input your description!",
                        },
                    ]}
                >
                    <Input.TextArea rows={4} />
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
                        <img className={styles.image_upload} src={image} />
                    )}
                </Form.Item>

                <Form.Item
                    label={formLabel("Content")}
                    wrapperCol={{ offset: 0 }}
                >
                    <EditorConfig content={content} setContent={setContent} />
                </Form.Item>
            </Form>
        </div>
    );
}

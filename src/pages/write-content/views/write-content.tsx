import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { EditorConfig } from '../components/editor';
import styles from './write-content.module.scss';
import { Flex, Form, Input, Typography } from 'antd';
import { ButtonConfig } from '@/components/buttonconfig';
import { dataURLtoBlob } from '@/utils/blob';
import { UploadOutlined } from '@ant-design/icons';
import { useParams } from 'react-router-dom';
import { IPost } from '@/types/post';
import { posts } from '@/pages/topics/data';

type FieldType = {
    title?: string
    description?: string;
};

const { Text } = Typography;

export function WriteContent() {

    const [formWritecontent] = Form.useForm();
    const id: any = useParams();
    const [content, setContent] = useState<any>();
    const [image, setImage] = useState<any>();
    const fileInputRef = useRef<HTMLInputElement>(null);

    const formLabel = (value: string) => <Text strong>{value}</Text>;

    const data: IPost = posts?.[id?.id];
    
    const handleChangeInputImage = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const files = e.target.files;
        const reader = new FileReader();
        reader.onload = () => {
            setImage(reader.result as any);
        }
        if (files !== null && files.length) reader.readAsDataURL(files[0]);
    }

    const handleButtonClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    function checkAllFieldsExist(): boolean {
        const valuesDraftChecks: any = {
            content: content,
            image_thumbnail: image,
        }
        const keys = Object.keys(valuesDraftChecks);
        const allFieldsExist = keys.every((key) => valuesDraftChecks[key] !== undefined && valuesDraftChecks[key] !== null);

        return allFieldsExist ? false : true;
    }

    const handleResetAll = () => {
        formWritecontent.resetFields();
        setContent('')
        setImage('')
    }

    const onFinish = (values: FieldType) => {

        const dataUrl = image;
        const blob: Blob = dataURLtoBlob(dataUrl);
        const formData = new FormData();
        formData.append('file', blob, "image.png");

        const draftData = {
            title: values.title,
            description: values.description,
            content: content,
            image_thumbnail: image,
        }
        console.log(draftData)
    };

    useEffect(() => {
        id?.id && data ? formWritecontent?.setFieldsValue(data) : formWritecontent?.setFieldsValue({
            title: '',
            description: '',
        })
    },[data, id?.id])

    return (
        <div className={styles.container}>
            <Form
                form={formWritecontent}
                name="writeContent"
                scrollToFirstError
                style={{ paddingBlock: 32, width: '100%' }}
                labelCol={{ span: 5 }}
                wrapperCol={{ span: 24 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                autoComplete="off"
                layout={'vertical'}
            >
                <Form.Item wrapperCol={{ offset: 0 }}>
                    <Flex gap="small">
                        <ButtonConfig disabled={checkAllFieldsExist()} className={styles.submit} type="primary" htmlType={'submit'} lable={'Submit'} />
                        <ButtonConfig danger onClick={handleResetAll} lable={'Reset all'} />
                    </Flex>
                </Form.Item>
                <Form.Item<FieldType>
                    label={formLabel('Title')}
                    name="title"
                    rules={[{ required: true, message: 'Please input your title!' }]}
                >
                    <Input.TextArea rows={2} />
                </Form.Item>

                <Form.Item<FieldType>
                    label={formLabel("Description")}
                    name="description"
                    rules={[{ required: true, message: 'Please input your description!' }]}
                >
                    <Input.TextArea rows={4} />
                </Form.Item>

                <Form.Item
                    label={formLabel("Image")}
                >
                    <ButtonConfig icon={<UploadOutlined />} iconPosition={'start'} onClick={handleButtonClick} lable={'Click to upload'}>
                        <input
                            style={{ display: 'none' }}
                            ref={fileInputRef}
                            accept="image/*"
                            type={'file'}
                            onChange={handleChangeInputImage}
                        />
                    </ButtonConfig>
                    {image && (
                        <img className={styles.image_upload} src={image} />
                    )}
                </Form.Item>

                <Form.Item label={formLabel("Content")} wrapperCol={{ offset: 0 }}>
                    <EditorConfig content={content} setContent={setContent} />
                </Form.Item>
            </Form>
        </div>
    )
}
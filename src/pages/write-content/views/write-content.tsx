import { ChangeEvent, useRef, useState } from 'react';
import { EditorConfig } from '../components/editor';
import styles from './write-content.module.scss';
import { Flex, Form, Input } from 'antd';
import { ButtonConfig } from '@/components/buttonconfig';
import { dataURLtoBlob } from '@/utils/blob';

type FieldType = {
    title?: string
    description?: string;
};

export function WriteContent() {

    const [form] = Form.useForm();
    const [content, setContent] = useState<any>();
    const [image, setImage] = useState<any>();
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleChangeInputImage = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const files = e.target.files;
        const reader = new FileReader();
        reader.onload = () => {
            setImage(reader.result as any);
        }
        if(files !== null && files.length) reader.readAsDataURL(files[0]);
    }

    const handleButtonClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const onFinish = (values: FieldType) => {

        const dataUrl = image;
        const blob: Blob = dataURLtoBlob(dataUrl);
        const formData = new FormData();
        formData.append('file', blob, "avatar.png");

        const draftData = {
            title: values.title,
            description: values.description,
            content: content,
            image: image,
        }
        console.log(draftData)
    };

    return (
        <div className={styles.container}>
            <Form
                form={form}
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
                        <ButtonConfig className={styles.submit} type="primary" htmlType={'submit'} lable={'Submit'} />
                        <ButtonConfig danger onClick={() => form.resetFields()} lable={'Reset'} />
                    </Flex>
                </Form.Item>
                <Form.Item<FieldType>
                    label="Title"
                    name="title"
                >
                    <Input.TextArea rows={2} />
                </Form.Item>

                <Form.Item<FieldType>
                    label="Description"
                    name="description"
                >
                    <Input.TextArea rows={4} />
                </Form.Item>

                <Form.Item
                    label="Image"
                >
                    <ButtonConfig onClick={handleButtonClick} lable={'Upload Image'}>
                        <input 
                            style={{ display: 'none' }} 
                            ref={fileInputRef} 
                            accept="image/*" 
                            type={'file'} 
                            onChange={handleChangeInputImage}
                        />
                    </ButtonConfig>
                </Form.Item>

                <Form.Item label="Content" wrapperCol={{ offset: 0 }}>
                    <EditorConfig content={content} setContent={setContent} />
                </Form.Item>
            </Form>
        </div>
    )
}
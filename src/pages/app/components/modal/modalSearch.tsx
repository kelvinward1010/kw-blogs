import { Button, Flex, Form, Input, Modal, Tag } from "antd";
import styles from "./modalSearch.module.scss";
import { useEffect, useMemo, useState } from "react";
import { topicsData } from "@/config";
import { posts } from "@/pages/topics/data";
import { IBasetListPost, IPost } from "@/types/post";
import { PostInSearch } from "./postInSearch";
import { customConditionalFeedbackHigh } from "@/components/hoc/custom-feedback.hoc";
import { PostPreview } from "@/components/post-preview/PostPreview";
import { BouncingDotsLoader } from "@/components/bouncing-dots-loader/bouncingDotsLoader";

interface ModalSearchProps {
    setOpenModal: any;
    openModal: boolean;
}

type FieldType = {
    title?: string;
};

export function ModalSearch(data: ModalSearchProps) {
    const [formSearchTitle] = Form.useForm<FieldType>();
    const { openModal, setOpenModal } = data;
    const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
    const [mouseID, setMouseID] = useState<string | number>();

    const titleValueSearch = Form.useWatch("title", formSearchTitle);
    const handleOk = () => setOpenModal(true);
    const handleCancel = () => setOpenModal(false);

    const handleChange = (tag: string, checked: boolean) => {
        const nextSelectedTags = checked
            ? [...selectedTopics, tag]
            : selectedTopics.filter((t) => t !== tag);
        setSelectedTopics(nextSelectedTags);
    };

    const filteredPosts = useMemo(() => {
        if (selectedTopics.length > 0) {
            return posts.filter((post: IPost) =>
                post.topic.some((topic) => selectedTopics.includes(topic)),
            );
        } else {
            return posts;
        }
    }, [posts, selectedTopics]);

    const BaseListPostSearch: React.FC<{ data: IBasetListPost }> = ({
        data,
    }) => {
        return (
            <div className={styles.list_post}>
                {data?.data.map((post: IPost) => (
                    <PostInSearch
                        setMouseEnterID={setMouseID}
                        key={post.id}
                        dataPost={post}
                    />
                ))}
            </div>
        );
    };

    const draft = {
        isLoading: false,
        data: filteredPosts,
    };

    const ListPostSearch = customConditionalFeedbackHigh(
        "Loading posts...",
        "No post loaded yet...",
        "Post are empty...",
    )(BaseListPostSearch);

    useEffect(() => {
        if (filteredPosts.length <= 0) {
            setMouseID("");
        }
    }, [mouseID, filteredPosts]);

    return (
        <>
            <Button
                className={styles.buttonModalOpen}
                type="primary"
                onClick={handleOk}
            >
                Search
            </Button>
            <Modal
                title="Search"
                open={openModal}
                style={{ top: 60, maxHeight: "900px" }}
                onCancel={handleCancel}
                width={"90%"}
                height={"auto"}
                footer={false}
                className={styles.containerModal}
            >
                <Form
                    form={formSearchTitle}
                    layout="vertical"
                    autoComplete="off"
                >
                    <Form.Item name="title">
                        <Input placeholder="Search title post..." />
                    </Form.Item>
                </Form>
                <Flex gap={4} wrap align="center" className={styles.boxTags}>
                    {topicsData.map<React.ReactNode>((tag) => (
                        <Tag.CheckableTag
                            key={tag}
                            checked={selectedTopics.includes(tag)}
                            onChange={(checked) => handleChange(tag, checked)}
                            className={styles.tags_input}
                        >
                            #{tag}
                        </Tag.CheckableTag>
                    ))}
                </Flex>
                {(titleValueSearch || selectedTopics.length > 0) && (
                    <div className={styles.boxShow}>
                        <div className={styles.boxLeft}>
                            <ListPostSearch data={draft} />
                        </div>
                        <div className={styles.boxRight}>
                            {mouseID !== "" && mouseID !== undefined ? (
                                <PostPreview id={mouseID} />
                            ) : (
                                <div className={styles.bound}>
                                    <span>Waiting</span>
                                    <BouncingDotsLoader />
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </Modal>
        </>
    );
}

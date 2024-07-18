import { Flex, Form, Input, Modal, Tag } from "antd";
import styles from "./modalSearch.module.scss";
import { useEffect, useState } from "react";
import { topicsData } from "@/config";
import { IBasetListPost, IPost } from "@/types/post";
import { PostInSearch } from "./postInSearch";
import { customConditionalFeedbackHigh } from "@/components/hoc/custom-feedback.hoc";
import { PostPreview } from "@/components/post-preview/PostPreview";
import { SearchOutlined } from "@ant-design/icons";
import { ButtonConfig } from "@/components/buttonconfig";
import { searchPosts } from "@/services/post/search-posts.service";
import axios from "axios";

interface ModalSearchProps {
    setOpenModal: (open: boolean) => void;
    openModal: boolean;
}

type FieldType = {
    title?: string;
};

export function ModalSearch(data: ModalSearchProps) {
    const [formSearchTitle] = Form.useForm<FieldType>();
    const { openModal, setOpenModal } = data;
    const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
    const [clickID, setClickID] = useState<string>();
    const [dataPosts, setDataPosts] = useState<IPost[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const cancelTokenSource = axios.CancelToken.source();

    const titleValueSearch = Form.useWatch("title", formSearchTitle);
    const handleOk = () => setOpenModal(true);
    const handleCancel = () => setOpenModal(false);

    const handleChange = (tag: string, checked: boolean) => {
        const nextSelectedTags = checked
            ? [...selectedTopics, tag]
            : selectedTopics.filter((t) => t !== tag);
        setSelectedTopics(nextSelectedTags);
    };

    useEffect(() => {
        const getDataPosts = async () => {
            setIsLoading(true);
            if (selectedTopics.length > 0 || titleValueSearch !== undefined) {
                const dataSearch = {
                    title: titleValueSearch,
                    topic: selectedTopics,
                    tokencancel: cancelTokenSource.token,
                };
                await searchPosts(dataSearch)
                    .then((res) => {
                        setDataPosts(res?.data);
                        setIsLoading(false);
                    })
                    .catch((error) => {
                        if (axios.isCancel(error)) {
                            cancelTokenSource.cancel();
                        }
                    });
            } else {
                setClickID("");
            }
        };
        getDataPosts();
        return () => {
            cancelTokenSource.cancel();
        };
    }, [titleValueSearch, selectedTopics]);

    const BaseListPostSearch: React.FC<{ data: IBasetListPost }> = ({
        data,
    }) => {
        return (
            <div className={styles.list_post}>
                {data?.data.map((post: IPost) => (
                    <PostInSearch
                        setClickPostID={setClickID}
                        key={post._id}
                        dataPost={post}
                        setOpenModal={setOpenModal}
                    />
                ))}
            </div>
        );
    };

    const draft = {
        isLoading: isLoading,
        data: dataPosts,
    };

    const ListPostSearch = customConditionalFeedbackHigh(
        "Loading posts...",
        "No post loaded yet...",
        "Post are empty...",
    )(BaseListPostSearch);

    useEffect(() => {
        if (dataPosts.length <= 0) {
            setClickID("");
        }
    }, [dataPosts]);

    return (
        <>
            <ButtonConfig
                className={styles.buttonModalOpen}
                type={"default"}
                onClick={handleOk}
                lable={<SearchOutlined />}
            />
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
                        <Input
                            placeholder="Search title post..."
                            prefix={<SearchOutlined />}
                        />
                    </Form.Item>
                    <Flex
                        gap={4}
                        wrap
                        align="center"
                        className={styles.boxTags}
                    >
                        {topicsData.map<React.ReactNode>((tag) => (
                            <Tag.CheckableTag
                                key={tag}
                                checked={selectedTopics.includes(tag)}
                                onChange={(checked) =>
                                    handleChange(tag, checked)
                                }
                                className={styles.tags_input}
                            >
                                #{tag}
                            </Tag.CheckableTag>
                        ))}
                    </Flex>
                </Form>
                {(titleValueSearch || selectedTopics.length > 0) && (
                    <div className={styles.boxShow}>
                        <div className={styles.boxLeft}>
                            <ListPostSearch data={draft} />
                        </div>
                        <div className={styles.boxRight}>
                            {clickID !== "" && clickID !== undefined ? (
                                <PostPreview id={clickID} />
                            ) : (
                                <div className={styles.bound}>
                                    <span>Waiting to preview</span>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </Modal>
        </>
    );
}

import { useSearchParams } from "react-router-dom";
import styles from "./Topics.module.scss";
import { useEffect, useState } from "react";
import { Flex, Form, Select, Tag, Typography } from "antd";
import { OPTIONS_NEWOROLD, topicsData } from "@/config";
import { searchPosts } from "@/services/post/search-posts.service";
import { IBasetListPost, IPost } from "@/types/post";
import { Post } from "../components/Post";
import { customConditionalFeedbackHigh } from "@/components/hoc/custom-feedback.hoc";
import axios from "axios";
import { useTranslation } from "react-i18next";

const { Text } = Typography;

export function Explores() {
    const { t } = useTranslation();
    const [formInTopics] = Form.useForm();
    const [topicsParams, setTopicsParams] = useSearchParams();
    const keysSearchOnParams = topicsParams.getAll("topic");
    const [selectedTopics, setSelectedTopics] =
        useState<string[]>(keysSearchOnParams);
    const [dataPosts, setDataPosts] = useState<IPost[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [limit, setLimit] = useState<number>(10);
    const cancelTokenSource = axios.CancelToken.source();

    const neworoldValue = Form.useWatch("neworold", formInTopics);

    const handleChange = (tag: string, checked: boolean) => {
        const nextSelectedTags = checked
            ? [...selectedTopics, tag]
            : selectedTopics.filter((t) => t !== tag);
        setSelectedTopics(nextSelectedTags);
        setTopicsParams({ topic: nextSelectedTags });
    };

    const handleAddLimit = () => {
        setLimit(limit + 10);
    };

    const draft = {
        isLoading: isLoading,
        data: dataPosts,
    };

    const ListPost = customConditionalFeedbackHigh(
        "Loading posts...",
        "No post loaded yet...",
        "Post are empty...",
    )(BaseListPost);

    function FormLable(lable: string) {
        return (
            <Text strong className={styles.title}>
                {lable}
            </Text>
        );
    }

    useEffect(() => {
        const getDataPosts = async () => {
            setIsLoading(true);
            const dataSearch = {
                topic: selectedTopics,
                limit: limit,
                neworold: neworoldValue,
                tokencancel: cancelTokenSource.token,
            };
            searchPosts(dataSearch)
                .then((res) => {
                    setDataPosts(res?.data);
                    setIsLoading(false);
                })
                .catch((error) => {
                    if (axios.isCancel(error)) {
                        cancelTokenSource.cancel();
                    }
                });
        };
        getDataPosts();
        return () => {
            cancelTokenSource.cancel();
        };
    }, [selectedTopics, limit, neworoldValue]);
    return (
        <div className={styles.container}>
            <div className={styles.box1}>
                <div className={styles.container1}>
                    <Form
                        form={formInTopics}
                        layout="vertical"
                        autoComplete="off"
                        style={{ padding: "0 10px" }}
                    >
                        <Form.Item label={FormLable(t("topics.nametopics"))}>
                            <Flex
                                gap={4}
                                wrap
                                align="center"
                                className={styles.flex_tags}
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
                        </Form.Item>
                        <Form.Item
                            label={FormLable(t("topics.timest"))}
                            name="neworold"
                            initialValue={-1}
                        >
                            <Select
                                allowClear
                                style={{
                                    width: "100%",
                                    border: "1px solid teal",
                                }}
                                options={OPTIONS_NEWOROLD}
                            />
                        </Form.Item>
                    </Form>
                </div>
            </div>
            <div className={styles.box2}>
                <div className={styles.container2}>
                    <ListPost data={draft} />
                </div>
                {dataPosts.length > 0 && (
                    <Flex gap={15} align={"center"} justify={"center"}>
                        <Text
                            onClick={handleAddLimit}
                            className={styles.acts_more}
                        >
                            More
                        </Text>
                    </Flex>
                )}
            </div>
        </div>
    );
}

const BaseListPost: React.FC<{ data: IBasetListPost }> = ({ data }) => {
    return (
        <div className={styles.list_post}>
            {data?.data.map((post: IPost) => (
                <Post key={post._id} data={post} />
            ))}
        </div>
    );
};

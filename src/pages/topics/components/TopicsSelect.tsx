import { useState } from 'react';
import styles from './TopicsSelect.module.scss';
import { Flex, Tag, Typography } from 'antd';
import { useSearchParams } from 'react-router-dom';
import { topicsData } from '@/config';


const { Text } = Typography;

export function TopicsSelect() {
    const [topicsParams, setTopicsParams] = useSearchParams();
    const keysSearchOnParams = topicsParams.getAll('topic');
    const [selectedTopics, setSelectedTopics] = useState<string[]>(keysSearchOnParams);

    const handleChange = (tag: string, checked: boolean) => {
        const nextSelectedTags = checked
            ? [...selectedTopics, tag]
            : selectedTopics.filter((t) => t !== tag);
        setSelectedTopics(nextSelectedTags);
        setTopicsParams({ topic: nextSelectedTags });
    };

    return (
        <div className={styles.container}>
            <Text strong className={styles.title}>Topics:</Text>
            <Flex gap={4} wrap align="center" className={styles.flex_tags}>
                {topicsData.map<React.ReactNode>((tag) => (
                    <Tag.CheckableTag
                        key={tag}
                        checked={selectedTopics.includes(tag)}
                        onChange={(checked) => handleChange(tag, checked)}
                        className={styles.tags_input}
                    >
                        {tag}
                    </Tag.CheckableTag>
                ))}
            </Flex>
        </div>
    )
}
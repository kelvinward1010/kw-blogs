import { Tabs, TabsProps, Typography } from "antd";
import styles from "./MyPosts.module.scss";
import { useFollowWidth } from "@/hooks/useFollowWidth";
import { useTranslation } from "react-i18next";
import { FavoritesPosts } from "../components/FavoritesPosts";
import { FileProtectOutlined, SolutionOutlined } from "@ant-design/icons";
import { YourPostsCreated } from "../components/YourPostsCreated";

const { Text } = Typography;

export function MyPosts() {
    const { windowWidth } = useFollowWidth(768);
    const { t } = useTranslation();

    const items: TabsProps["items"] = [
        {
            key: "1",
            icon: <SolutionOutlined />,
            label: (
                <Text>{t("head.lefthead.mypostsinside.yourpostscreated")}</Text>
            ),
            children: <YourPostsCreated />,
            forceRender: true,
        },
        {
            key: "2",
            icon: <FileProtectOutlined />,
            label: (
                <Text>{t("head.lefthead.mypostsinside.favoritesposts")}</Text>
            ),
            children: <FavoritesPosts />,
            forceRender: true,
        },
    ];

    return (
        <div className={styles.container}>
            <Tabs
                defaultActiveKey="1"
                tabPosition={windowWidth > 768 ? "left" : "top"}
                items={items}
            />
        </div>
    );
}

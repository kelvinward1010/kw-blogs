import { Tabs, TabsProps, Typography } from "antd";
import styles from "./Setting.module.scss";
import { KeyOutlined, UserSwitchOutlined } from "@ant-design/icons";
import { useFollowWidth } from "@/hooks/useFollowWidth";
import { useTranslation } from "react-i18next";
import { Profile } from "../component/Profile";
import { ChangePassword } from "../component/ChangePassword";

const { Text } = Typography;

export function Setting() {
    const { windowWidth } = useFollowWidth(768);
    const { t } = useTranslation();

    const items: TabsProps["items"] = [
        {
            key: "1",
            icon: <UserSwitchOutlined />,
            label: <Text>{t("head.lefthead.settinginside.profile")}</Text>,
            children: <Profile />,
            forceRender: true,
        },
        {
            key: "2",
            icon: <KeyOutlined />,
            label: (
                <Text>{t("head.lefthead.settinginside.changepassword")}</Text>
            ),
            children: <ChangePassword />,
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

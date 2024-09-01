import {
    Avatar,
    Dropdown,
    Flex,
    notification,
    Select,
    SelectProps,
    Typography,
} from "antd";
import styles from "./header.module.scss";
import { useNavigate } from "react-router-dom";
import {
    contactUrl,
    layoutUrl,
    mypostsUrl,
    settingUrl,
    signinUrl,
    signupUrl,
    exploressUrl,
    writecontentUrl,
} from "../../../../routes/urls";
import { ButtonConfig } from "@/components/buttonconfig";
import { UserOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import { OPTIONS_LANGUAGES } from "@/config";
import { ENIcon, VIIcon } from "@/assets/png";
import { useFollowWidth } from "@/hooks/useFollowWidth";
import { useState } from "react";
import { DrawerResponsive } from "./drawerResponsive";
import { ModalSearch } from "../modal/modalSearch";
import storage, { storageRefreshToken } from "@/utils/storage";
import { AppDispatch, RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "@/redux/reducers/authSlice";
import { IUser } from "@/types/user";

const { Title, Text } = Typography;
type labelRender = SelectProps["labelRender"];

export function Header(): JSX.Element {
    const dispatch: AppDispatch = useDispatch();
    const { t, i18n } = useTranslation();
    const navigate = useNavigate();
    const { isVisible, windowWidth } = useFollowWidth(768);
    const [open, setOpen] = useState<boolean>(false);
    const [openModalSearch, setOpenModalSearch] = useState<boolean>(false);
    const [openModalLogout, setOpenModalLogout] = useState<boolean>(false);

    const currentLanguage = localStorage.getItem("i18nextLng-kwnews");
    const user: IUser | null = useSelector(
        (state: RootState) => state.auth.user,
    );

    const goSignup = () => navigate(signupUrl);
    const goSignin = () => navigate(signinUrl);

    const goHome = () => navigate(layoutUrl);
    const goTopics = () => navigate(exploressUrl);
    const goAboutMe = () => navigate(contactUrl);

    const handleChangeLanguages = (value: string) => {
        i18n.changeLanguage(value);
        i18n.reloadResources();
    };

    const isVisiableUser = storage.getToken() ? true : false;

    const handleLogout = () => {
        storage.clearToken();
        storageRefreshToken.clearToken();
        setOpenModalLogout(false);
        dispatch(logout());
        notification.success({
            message: "Logged out",
        });
    };

    const items = [
        {
            label: (
                <>
                    <ButtonConfig
                        className={"button-config"}
                        onClick={() => navigate(writecontentUrl)}
                        lable={t("head.lefthead.writecontent")}
                    />
                </>
            ),
            key: "0",
        },
        {
            label: (
                <>
                    <ButtonConfig
                        className={"button-config"}
                        onClick={() => navigate(mypostsUrl)}
                        lable={t("head.lefthead.myposts")}
                    />
                </>
            ),
            key: "1",
        },
        {
            label: (
                <>
                    <ButtonConfig
                        className={"button-config"}
                        onClick={() => navigate(settingUrl)}
                        lable={t("head.lefthead.setting")}
                    />
                </>
            ),
            key: "2",
        },
        {
            label: (
                <>
                    <ButtonConfig
                        className={"button-config"}
                        lable={t("head.lefthead.logout")}
                        onClick={handleLogout}
                    />
                </>
            ),
            key: "3",
        },
    ];

    const unUser = [
        {
            label: (
                <>
                    <ButtonConfig
                        className={"button-config"}
                        lable={t("head.lefthead.signin")}
                        onClick={goSignin}
                    />
                </>
            ),
            key: "0",
        },
        {
            label: (
                <>
                    <ButtonConfig
                        className={"button-config"}
                        lable={t("head.lefthead.signup")}
                        onClick={goSignup}
                    />
                </>
            ),
            key: "1",
        },
    ];

    const configLableLanguages = (icon: any, lable: any) => {
        return (
            <Flex justify={"start"} align={"center"}>
                <img src={icon} alt="" style={{ width: "15px" }} />
                <Text style={{ margin: "-1px 0 0 3px" }}>{lable}</Text>
            </Flex>
        );
    };

    const lableRender: labelRender = (props) => {
        if (props.label == "VI")
            return configLableLanguages(VIIcon, props.label);
        if (props.label == "EN")
            return configLableLanguages(ENIcon, props.label);
    };

    function FormLanguages() {
        return (
            <Select
                defaultValue={currentLanguage}
                style={{ width: 90, marginRight: "10px" }}
                onChange={handleChangeLanguages}
                options={OPTIONS_LANGUAGES}
                labelRender={lableRender}
                optionRender={(options) => {
                    if (options.label == "EN") {
                        return configLableLanguages(ENIcon, "EN");
                    }
                    if (options.label == "VI") {
                        return configLableLanguages(VIIcon, "VI");
                    }
                }}
            />
        );
    }

    return (
        <div className={styles.container}>
            <Title level={3} onClick={goHome} className={styles.maintitle}>
                {t("name_app")}
            </Title>
            {isVisible ? (
                <>
                    <nav>
                        <li onClick={goHome}>
                            <Text className={`${styles.title}`} strong>
                                {t("head.menu.home")}
                            </Text>
                        </li>
                        <li onClick={goTopics}>
                            <Text className={`${styles.title}`} strong>
                                {t("head.menu.explores")}
                            </Text>
                        </li>
                        <li onClick={goAboutMe}>
                            <Text className={`${styles.title}`} strong>
                                {t("head.menu.contact")}
                            </Text>
                        </li>
                    </nav>
                    <div className={styles.right_head}>
                        <ModalSearch
                            setOpenModal={setOpenModalSearch}
                            openModal={openModalSearch}
                        />
                        <FormLanguages />
                        <Dropdown
                            menu={{
                                items: user ? items : unUser,
                            }}
                            trigger={["click"]}
                        >
                            <Avatar
                                className={styles.avatar}
                                icon={<UserOutlined />}
                                src={user?.image || undefined}
                            />
                        </Dropdown>
                    </div>
                </>
            ) : (
                <div className={styles.responsiveRight}>
                    <ModalSearch
                        setOpenModal={setOpenModalSearch}
                        openModal={openModalSearch}
                    />
                    <FormLanguages />
                    <DrawerResponsive
                        windowWidth={windowWidth}
                        setOpen={setOpen}
                        open={open}
                        isVisiableUser={isVisiableUser}
                        onClickLogout={handleLogout}
                        openModalLogout={openModalLogout}
                        setOpenModalLogout={setOpenModalLogout}
                    />
                </div>
            )}
        </div>
    );
}

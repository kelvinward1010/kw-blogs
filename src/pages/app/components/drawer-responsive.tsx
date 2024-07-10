import stylesss from './drawer-responsive.module.scss';
import { ButtonConfig } from "@/components/buttonconfig";
import { aboutweUrl, layoutUrl, signinUrl, signupUrl, topicsUrl } from '@/routes/urls';
import { MenuFoldOutlined } from "@ant-design/icons";
import { Button, Drawer, Flex, Typography } from "antd";
import { createStyles } from "antd-style";
import { DrawerClassNames } from "antd/es/drawer/DrawerPanel";
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';


const { Text } = Typography;

interface DrawerResponsiveProps {
    setOpen: any;
    open: boolean;
    windowWidth: number;
}

const useStyle = createStyles(({ token }) => ({
    'my-drawer-header': {
        background: token.cyan8,
        color: 'white',
    },
}));


export const DrawerResponsive: React.FC<DrawerResponsiveProps> = ({
    setOpen,
    open,
    windowWidth
}) => {

    const { styles } = useStyle();
    const { t } = useTranslation();
    const navigate = useNavigate();

    type NavigationFunction = () => void;

    const navigationFunctions: Record<string, NavigationFunction> = {
        goSignup: () => {
            navigate(signupUrl);
            setOpen(false);
        },
        goSignin: () => {
            navigate(signinUrl);
            setOpen(false);
        },
        goHome: () => {
            navigate(layoutUrl);
            setOpen(false);
        },
        goTopics: () => {
            navigate(topicsUrl);
            setOpen(false);
        },
        goAboutWe: () => {
            navigate(aboutweUrl);
            setOpen(false);
        },
    };

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    const classNames: DrawerClassNames = {
        header: styles['my-drawer-header'],
    };

    return (
        <div>
            <ButtonConfig icon={<MenuFoldOutlined />} type={'default'} onClick={showDrawer} />
            <Drawer className={stylesss.main} classNames={classNames} placement={'right'} width={windowWidth} title={<Text className={stylesss.titlemain}>Menu</Text>} onClose={onClose} open={open}>
                <nav>
                    <li onClick={navigationFunctions.goHome}><Text className={`${stylesss.title}`} strong>{t("head.menu.home")}</Text></li>
                    <li onClick={navigationFunctions.goTopics}><Text className={`${stylesss.title}`} strong>{t("head.menu.topics")}</Text></li>
                    <li onClick={navigationFunctions.goAboutWe}><Text className={`${stylesss.title}`} strong>{t("head.menu.aboutwe")}</Text></li>
                </nav>
                <Flex gap={'small'} justify={'center'} align={'center'}>
                    <Button onClick={navigationFunctions.goSignin}>{t("head.lefthead.signin")}</Button>
                    <Button onClick={navigationFunctions.goSignup}>{t("head.lefthead.signup")}</Button>
                </Flex>
            </Drawer>
        </div>
    )
}

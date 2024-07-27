import { useEffect, useState } from "react";
import { Footer } from "./components/footer";
import { Header } from "./components/header/header";
import styles from "./Layout.module.scss";
import { Outlet, useNavigate } from "react-router-dom";
import { ButtonConfig } from "@/components/buttonconfig";
import { ArrowUpOutlined } from "@ant-design/icons";
import { ScrollToTop } from "@/hooks/useScrollToTop";
import { storageRefreshToken } from "@/utils/storage";
import { jwtDecode } from "jwt-decode";
import { ModalSmall } from "@/components/modals/modalSmall";
import { signinUrl } from "@/routes/urls";

interface Props {
    children?: React.ReactNode;
}

export function Layout({ children }: Props) {
    const navigate = useNavigate();
    const currentTime = new Date();
    const [showButton, setShowButton] = useState(false);
    const [openModalAsk, setOpenModalAsk] = useState<boolean>(false);
    const refreshtoken = storageRefreshToken.getToken();

    const handleGoSignIn = () => {
        navigate(signinUrl);
    };

    const handleScroll = () => {
        window.scrollY >= 1000 ? setShowButton(true) : setShowButton(false);
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        if (refreshtoken) {
            const decodedRefreshToken: any = jwtDecode(refreshtoken);
            if (
                decodedRefreshToken?.exp < currentTime.getTime() / 1000 &&
                refreshtoken
            ) {
                setOpenModalAsk(true);
            } else {
                setOpenModalAsk(false);
            }
        }
    }, [refreshtoken, currentTime]);

    return (
        <div className={styles.container}>
            {openModalAsk && (
                <ModalSmall
                    message="Do you want to login?"
                    title="Token is expired"
                    open={openModalAsk}
                    setOpen={setOpenModalAsk}
                    onClick={handleGoSignIn}
                    titleButton={"Login"}
                />
            )}
            <div className={styles.header}>
                <Header />
            </div>
            <div className={styles.main}>
                <Outlet />
                {children}
            </div>
            <Footer />
            {showButton && (
                <ButtonConfig
                    icon={<ArrowUpOutlined />}
                    onClick={scrollToTop}
                    className={styles.scrollToTop}
                />
            )}
            <ScrollToTop />
        </div>
    );
}

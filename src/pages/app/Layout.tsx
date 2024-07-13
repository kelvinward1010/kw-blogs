import { useEffect, useState } from "react";
import { Footer } from "./components/footer";
import { Header } from "./components/header/header";
import styles from "./Layout.module.scss";
import { Outlet } from "react-router-dom";
import { ButtonConfig } from "@/components/buttonconfig";
import { ArrowUpOutlined } from "@ant-design/icons";
import { ScrollToTop } from "@/hooks/useScrollToTop";

export function Layout() {
    const [showButton, setShowButton] = useState(false);

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

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <Header />
            </div>
            <div className={styles.main}>
                <Outlet />
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

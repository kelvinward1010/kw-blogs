import { Footer } from './components/footer';
import { Header } from './components/header';
import styles from './Layout.module.scss';
import { Outlet } from "react-router-dom";


export function Layout() {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <Header />
            </div>
            <div className={styles.main}>
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

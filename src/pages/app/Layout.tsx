import styles from './Layout.module.scss';
import { Outlet } from "react-router-dom";
import { Header } from "./header/Header";


export function Layout() {
    return (
        <div className={styles.container}>
            <Header />
            <Outlet />
        </div>
    )
}

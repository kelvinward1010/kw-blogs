import { HeadHome } from "../components/head-home";
import styles from "./Home.module.scss";
import { Topics } from "../components/topic";
import { HotNews } from "../components/hot-news";
import { PoliticsNew } from "../components/PoliticsNew";
import { DefenseAndSecurity } from "../components/DefenseAndSecurity";

export function Home() {
    return (
        <div className={styles.container}>
            <HeadHome />
            <br />
            <Topics />
            <HotNews />
            <PoliticsNew />
            <DefenseAndSecurity />
        </div>
    );
}

import styles from "./FavoritesPosts.module.scss";
import { IPost } from "@/types/post";
import { useGetYourFavoritesOptions } from "@/services/post/get-your-favorites-posts.service";
import { CardPost } from "@/components/card-post/CardPost";
import { Pagination } from "@/components/pagination/Pagination";

export function FavoritesPosts() {
    const { data: posts, isLoading } = useGetYourFavoritesOptions({
        config: {},
    });

    const draftData: IPost[] = posts as IPost[];

    return (
        <div className={styles.container}>
            <Pagination
                data={draftData}
                newsPerPage={6}
                FormCard={CardPost}
                isLoading={isLoading}
            />
        </div>
    );
}

import styles from "./FavoritesPosts.module.scss";
import { IBasetListPost, IPost } from "@/types/post";
import { useGetYourFavoritesOptions } from "@/services/post/get-your-favorites-posts.service";
import { Row } from "antd";
import { CardPost } from "@/components/card-post/CardPost";
import { customConditionalFeedbackHigh } from "@/components/hoc/custom-feedback.hoc";

export function FavoritesPosts() {
    const { data: posts } = useGetYourFavoritesOptions({ config: {} });

    const draftData = {
        isLoading: false,
        data: posts as IPost[],
    };
    const ListPost = customConditionalFeedbackHigh()(
        BaseListYourFavoritesPosts,
    );

    return (
        <div className={styles.container}>
            <Row>
                <ListPost data={draftData} />
            </Row>
        </div>
    );
}

const BaseListYourFavoritesPosts: React.FC<{ data: IBasetListPost }> = ({
    data,
}) => {
    return (
        <div className={styles.containeryourpost}>
            {data?.data.map((post: IPost) => (
                <CardPost key={post._id} data={post} />
            ))}
        </div>
    );
};

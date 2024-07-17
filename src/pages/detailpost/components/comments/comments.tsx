import styles from "./comments.module.scss";
import { FormComment } from "./form-comment";
import { ListComments } from "./list-comments";

export function Comments() {
    return (
        <div className={styles.container}>
            <FormComment />
            <ListComments />
        </div>
    );
}

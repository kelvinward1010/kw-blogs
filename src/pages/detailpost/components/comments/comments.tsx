import { Col, Row } from "antd";
import styles from "./comments.module.scss";
import { FormComment } from "./form-comment";
import { ListComments } from "./list-comments";

export function Comments() {
    return (
        <div className={styles.container}>
            <Row justify={"center"}>
                <Col span={19} className={styles.main_comments}>
                    <FormComment />
                    <ListComments />
                </Col>
            </Row>
        </div>
    );
}

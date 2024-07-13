import { Modal, Typography } from "antd";
import styles from "./modalWarning.module.scss";
import { ButtonConfig } from "../buttonconfig";

interface ModalWarningProps {
    ComponentElement: React.ComponentType;
    title?: string;
    message?: string;
    open: boolean;
    setOpen: (open: boolean) => void;
    onClick?: () => void;
}

const { Title } = Typography;

export function ModalWarning({
    ComponentElement,
    title,
    message,
    open,
    setOpen,
    onClick,
}: ModalWarningProps) {
    const handleCancel = () => setOpen(false);

    return (
        <div>
            <ComponentElement />
            <Modal
                title={title}
                open={open}
                onCancel={handleCancel}
                centered
                footer={false}
                className={styles.containerModalWarning}
            >
                <div className={styles.center}>
                    <Title className={styles.message} level={4}>
                        {message}
                    </Title>
                    <ButtonConfig
                        className={styles.button}
                        lable={"OK"}
                        onClick={onClick}
                        type={"default"}
                    />
                </div>
            </Modal>
        </div>
    );
}

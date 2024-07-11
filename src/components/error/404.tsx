import { layoutUrl } from "@/routes/urls";
import { Button, Typography } from "antd";
import { useNavigate } from "react-router-dom";

const { Title, Text } = Typography;

export function Error404() {
    const navigate = useNavigate();

    const handleGoHome = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        navigate(layoutUrl);
    };

    return (
        <div
            style={{
                textAlign: "center",
                width: "100%",
                height: "100%",
            }}
        >
            <Title level={3}>404 NOT FOUND</Title>
            <Text>This page is private or doesn't exist !</Text>
            <br />
            <br />
            <Button onClick={handleGoHome} type="primary" key="console">
                Go Home
            </Button>
        </div>
    );
}

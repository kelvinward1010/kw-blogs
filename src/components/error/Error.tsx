import { layoutUrl } from '@/routes/urls';
import { Button, Result } from 'antd';
import { useNavigate } from 'react-router-dom';

export function Error() {
    const navigate = useNavigate();
    return (
        <Result
            status="warning"
            title="There are some problems with your operation."
            extra={
                <Button onClick={() => navigate(layoutUrl)} type="primary" key="console">
                    Go Home
                </Button>
            }
        />
    )
}
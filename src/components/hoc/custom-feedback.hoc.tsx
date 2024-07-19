import { IComment } from "@/types/comment";
import { IBasetListPost } from "@/types/post";
import { Row, Typography } from "antd";
import { useTranslation } from "react-i18next";
import "./custom-feedback.hoc.css";
import { BouncingDotsLoader } from "../bouncing-dots-loader/bouncingDotsLoader";
import { DataNoneIcon } from "@/assets/jpg";

const { Title } = Typography;

type TitleProps = {
    children: React.ReactNode;
};

function TitleCustomization({ children }: TitleProps) {
    return (
        <>
            <Title level={5} className="title-feedback">
                {children}
            </Title>
            <BouncingDotsLoader />
        </>
    );
}

function TitleNoneDataCustomization({ children }: TitleProps) {
    return (
        <div className={"container-nonedatafeedback"}>
            <Title level={5} className="title-feedback">
                {children}
            </Title>
            <Row justify={"center"}>
                <img
                    className="data-none-image"
                    src={DataNoneIcon}
                    alt="icondata-none"
                />
            </Row>
        </div>
    );
}

export const customConditionalFeedbackHigh =
    (
        loadingFeedBack?: string,
        noDataFeedBack?: string,
        dataEmptyFeedback?: string,
    ) =>
    (Component: React.ComponentType<{ data: IBasetListPost }>) =>
    (props: { data: IBasetListPost }) => {
        const { t } = useTranslation();
        const { data, isLoading } = props.data;

        if (isLoading)
            return (
                <TitleCustomization>
                    {loadingFeedBack ?? t("feedback.loading")}
                </TitleCustomization>
            );
        if (!data)
            return (
                <TitleCustomization>
                    {noDataFeedBack ?? t("feedback.nodatafeedback")}
                </TitleCustomization>
            );
        if (!data.length)
            return (
                <TitleNoneDataCustomization>
                    {dataEmptyFeedback ?? t("feedback.emptydata")}
                </TitleNoneDataCustomization>
            );
        return <Component {...props} />;
    };

type CommentProps = {
    data?: IComment[];
};

export const customConditionalCommentsFeedbackHigh =
    (noDataFeedback?: string, dataEmptyFeedback?: string) =>
    (Component: React.ComponentType<CommentProps>) =>
    (props: CommentProps) => {
        const { data } = props;
        const { t } = useTranslation();

        if (!data)
            return (
                <TitleCustomization>
                    {noDataFeedback ?? t("feedback.nodatafeedback")}
                </TitleCustomization>
            );
        if (!data?.length)
            return (
                <TitleCustomization>
                    {dataEmptyFeedback ?? t("feedback.emptydata")}
                </TitleCustomization>
            );

        return <Component {...props} />;
    };

import styles from "./Pagination.module.scss";
import { IBasetListPost, IPost } from "@/types/post";
import React, { ChangeEvent, useState } from "react";
import { customConditionalFeedbackHigh } from "../hoc/custom-feedback.hoc";
import { Row } from "antd";
import { useTranslation } from "react-i18next";

interface PaginationProps {
    data: IPost[];
    isLoading?: boolean;
    newsPerPage: number;
    FormCard: React.ComponentType<any>;
}

export const Pagination: React.FC<PaginationProps> = ({
    data = [],
    newsPerPage,
    FormCard,
    isLoading = false,
}) => {
    const { t } = useTranslation();
    const [currentPage, setCurrentPage] = useState(1);
    const [intPage, setIntPage] = useState<number>(1);
    const totalPages = Math.ceil(data?.length / newsPerPage);

    const goToPage = (page: number) => {
        setCurrentPage(Math.max(1, Math.min(page, totalPages)));
    };

    const renderPageNumbers = () => {
        const pageNumbers = [];
        for (let i = 1; i <= totalPages; i++) {
            pageNumbers.push(
                <button
                    key={i}
                    onClick={() => goToPage(i)}
                    style={{
                        border: "1px solid black",
                        margin: "0 1px",
                        fontWeight: currentPage === i ? "bold" : "normal",
                        color: currentPage === i ? "white" : "black",
                        backgroundColor: currentPage === i ? "teal" : "white",
                    }}
                >
                    {i}
                </button>,
            );
        }
        return pageNumbers;
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setIntPage(Number(e.target.value));
    };

    const BaseListYourFavoritesPosts: React.FC<{ data: IBasetListPost }> = ({
        data,
    }) => {
        return (
            <div className={styles.containeryourpost}>
                {data?.data.map((post: IPost) => (
                    <FormCard key={post._id} data={post} />
                ))}
            </div>
        );
    };

    const startIndex = (currentPage - 1) * newsPerPage;
    const endIndex = Math.min(startIndex + newsPerPage, data?.length);
    const visibleData = data?.slice(startIndex, endIndex);

    const draftData = {
        isLoading: isLoading,
        data: visibleData,
    };
    const ListPost = customConditionalFeedbackHigh()(
        BaseListYourFavoritesPosts,
    );

    return (
        <div className={styles.container}>
            <Row>
                <ListPost data={draftData} />
            </Row>
            <div className={styles.actions}>
                <button
                    style={{ marginRight: "5px" }}
                    className={styles.buttonchangepage}
                    onClick={() => goToPage(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    {t("pagination.previous")}
                </button>
                {renderPageNumbers()}
                <button
                    style={{ marginLeft: "5px" }}
                    className={styles.buttonchangepage}
                    onClick={() => goToPage(currentPage + 1)}
                    disabled={currentPage === totalPages}
                >
                    {t("pagination.next")}
                </button>
                <input
                    type="number"
                    min="1"
                    max={totalPages}
                    value={intPage}
                    onChange={handleChange}
                />
                <button
                    className={styles.gopage}
                    onClick={() => goToPage(Number(intPage))}
                >
                    {t("pagination.go")}
                </button>
            </div>
        </div>
    );
};

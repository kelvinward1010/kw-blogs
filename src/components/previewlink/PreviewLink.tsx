import React, { useState } from "react";
import "./PrewviewLink.css";
import { useFollowWidth } from "@/hooks/useFollowWidth";

interface LinkPreviewProps {
    Component: React.ReactNode;
    TitleLink: (
        onMouseEnter: () => void,
        onMouseLeave: () => void,
    ) => React.ReactNode;
}

export function LinkPreview(data: LinkPreviewProps) {
    const { TitleLink, Component } = data;
    const { windowWidth } = useFollowWidth(800);
    const [showPreview, setShowPreview] = useState(false);

    const handleMouseEnter = () => {
        setShowPreview(true);
    };

    const handleMouseLeave = () => {
        setShowPreview(false);
    };

    return (
        <>
            {TitleLink && TitleLink(handleMouseEnter, handleMouseLeave)}
            {windowWidth > 800 && showPreview && (
                <div
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    className={"container-prewviewlink"}
                >
                    {Component ? Component : <>Not found</>}
                </div>
            )}
        </>
    );
}

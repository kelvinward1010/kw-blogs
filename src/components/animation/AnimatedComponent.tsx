import "./AnimatedComponent.css";

import React, { useRef } from "react";
import { useInView } from "framer-motion";

interface Props {
    children?: React.ReactNode;
}

const AnimatedComponent: React.FC<Props> = ({ children }) => {
    const ref = useRef<HTMLDivElement | null>(null);
    const isInView = useInView(ref, { once: false });

    return (
        <div
            className="animated-config"
            style={{
                transform: isInView ? "none" : "translateX(-200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
            ref={ref}
        >
            {children}
        </div>
    );
};

export default AnimatedComponent;

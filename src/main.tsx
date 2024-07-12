import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { routerConfig } from "./routes/index.tsx";
import "./locale/i18n";
import { ConfigProvider } from "antd";
import { theme } from "./theme.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <ConfigProvider theme={theme}>
            <RouterProvider router={routerConfig} />
        </ConfigProvider>
    </React.StrictMode>,
);

// Reload the page when the i18n file changes
if (import.meta.hot) {
    import.meta.hot.accept(["./locale/i18n"], () => {});
}

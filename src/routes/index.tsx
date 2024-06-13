import { createBrowserRouter } from "react-router-dom";
import { aboutweUrl, homeUrl, layoutUrl, topicsUrl } from "./urls";
import { AboutWe, Home, Layout, Topics } from "../pages";


export const routerConfig = createBrowserRouter([
    {
        path: layoutUrl,
        element: (
                <Layout />
        ),
        children: [
            {
                path: homeUrl,
                element: <Home />
            },
            {
                path: topicsUrl,
                element: <Topics />
            },
            {
                path: aboutweUrl,
                element: <AboutWe />
            },
        ]
    },
]);
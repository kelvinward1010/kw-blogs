import { createBrowserRouter } from "react-router-dom";
import { aboutweUrl, homeUrl, layoutUrl, postdetailUrl, signinUrl, signupUrl, topicsUrl } from "./urls";
import { AboutWe, DetailPost, Home, Layout, Signin, Signup, Topics } from "@/pages";
import { Error } from "@/components/error/Error";


export const routerConfig = createBrowserRouter([
    {
        path: layoutUrl,
        element: (
                <Layout />
        ),
        errorElement: <Error />,
        children: [
            {
                path: signupUrl,
                element: <Signup />
            },
            {
                path: signinUrl,
                element: <Signin />
            },
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
            {
                path: postdetailUrl,
                element: <DetailPost />
            },
        ]
    },
]);
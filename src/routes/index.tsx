import { createBrowserRouter } from "react-router-dom";
import { aboutweUrl, layoutUrl, postdetailUrl, signinUrl, signupUrl, topicsUrl, writecontentUrl } from "./urls";
import { AboutWe, DetailPost, Home, Layout, Signin, Signup, Topics, WriteContent } from "@/pages";
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
                path: layoutUrl,
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
            {
                path: writecontentUrl,
                element: <WriteContent />
            },
        ]
    },
]);
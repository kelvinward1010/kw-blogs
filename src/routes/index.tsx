import { createBrowserRouter } from "react-router-dom";
import {
    aboutmeUrl,
    editcontentUrl,
    layoutUrl,
    postdetailUrl,
    signinUrl,
    signupUrl,
    topicsUrl,
    writecontentUrl,
} from "./urls";
import {
    AboutMe,
    DetailPost,
    Home,
    Layout,
    Signin,
    Signup,
    Topics,
    WriteContent,
} from "@/pages";
import { Error } from "@/components/error/Error";

export const routerConfig = createBrowserRouter([
    {
        path: layoutUrl,
        element: <Layout />,
        errorElement: <Error />,
        children: [
            {
                path: signupUrl,
                element: <Signup />,
            },
            {
                path: signinUrl,
                element: <Signin />,
            },
            {
                path: layoutUrl,
                element: <Home />,
            },
            {
                path: topicsUrl,
                element: <Topics />,
            },
            {
                path: aboutmeUrl,
                element: <AboutMe />,
            },
            {
                path: postdetailUrl,
                element: <DetailPost />,
            },
            {
                path: writecontentUrl,
                element: <WriteContent />,
            },
            {
                path: editcontentUrl,
                element: <WriteContent />,
            },
        ],
    },
]);

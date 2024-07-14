import { createBrowserRouter, Navigate } from "react-router-dom";
import {
    aboutmeUrl,
    editcontentUrl,
    layoutUrl,
    postdetailUrl,
    settingUrl,
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
    Setting,
    Signin,
    Signup,
    Topics,
    WriteContent,
} from "@/pages";
import { IUser } from "@/types/user";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { ErrorBoundaryPage } from "@/components/error/boundary-error";

interface RouteProps {
    children: React.ReactNode;
}

const ProtectedRoute: React.FC<RouteProps> = ({ children }) => {
    const user: IUser | null = useSelector(
        (state: RootState) => state.auth.user,
    );
    return user ? <>{children}</> : <Navigate to={layoutUrl} replace />;
};

export const routerConfig = createBrowserRouter([
    {
        path: layoutUrl,
        element: <Layout />,
        errorElement: (
            <Layout>
                <ErrorBoundaryPage />
            </Layout>
        ),
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
                element: (
                    <ProtectedRoute>
                        <WriteContent />
                    </ProtectedRoute>
                ),
            },
            {
                path: editcontentUrl,
                element: (
                    <ProtectedRoute>
                        <WriteContent />
                    </ProtectedRoute>
                ),
            },
            {
                path: settingUrl,
                element: (
                    <ProtectedRoute>
                        <Setting />
                    </ProtectedRoute>
                ),
            },
        ],
    },
]);

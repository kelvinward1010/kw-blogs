import { createBrowserRouter, Navigate } from "react-router-dom";
import {
    contactUrl,
    editcontentUrl,
    layoutUrl,
    mypostsUrl,
    postdetailUrl,
    settingUrl,
    signinUrl,
    signupUrl,
    topicsUrl,
    writecontentUrl,
} from "./urls";
import {
    Contact,
    DetailPost,
    Home,
    Layout,
    MyPosts,
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

const ProtectedAuth: React.FC<RouteProps> = ({ children }) => {
    const user: IUser | null = useSelector(
        (state: RootState) => state.auth.user,
    );
    return user ? <Navigate to={layoutUrl} replace /> : <>{children}</>;
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
                element: (
                    <ProtectedAuth>
                        <Signup />
                    </ProtectedAuth>
                ),
            },
            {
                path: signinUrl,
                element: (
                    <ProtectedAuth>
                        <Signin />
                    </ProtectedAuth>
                ),
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
                path: contactUrl,
                element: <Contact />,
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
            {
                path: mypostsUrl,
                element: (
                    <ProtectedRoute>
                        <MyPosts />
                    </ProtectedRoute>
                ),
            },
        ],
    },
]);

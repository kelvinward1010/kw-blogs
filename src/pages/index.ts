import { lazyLoad } from "@/utils/loadable";

export const Layout = lazyLoad(
    () => import("./app/Layout"),
    (module) => module.Layout,
);

export const Signup = lazyLoad(
    () => import("./sign-up/Signup"),
    (module) => module.Signup,
);

export const Signin = lazyLoad(
    () => import("./sign-in/Signin"),
    (module) => module.Signin,
);

export const Home = lazyLoad(
    () => import("./home/views/Home"),
    (module) => module.Home,
);

export const Topics = lazyLoad(
    () => import("./topics/views/Topics"),
    (module) => module.Topics,
);

export const DetailPost = lazyLoad(
    () => import("./detailpost/views/DetailPost"),
    (module) => module.DetailPost,
);

export const AboutMe = lazyLoad(
    () => import("./aboutme/views/AboutMe"),
    (module) => module.AboutMe,
);

export const WriteContent = lazyLoad(
    () => import("./write-content/views/write-content"),
    (module) => module.WriteContent,
);

export const Setting = lazyLoad(
    () => import("./setting/view/Setting"),
    (module) => module.Setting,
);

export const MyPosts = lazyLoad(
    () => import("./myposts/views/MyPosts"),
    (module) => module.MyPosts,
);

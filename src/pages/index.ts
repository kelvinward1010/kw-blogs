import { lazyLoad } from "@/utils/loadable";

export const Layout = lazyLoad(
    () => import("./app/Layout"),
    (module) => module.Layout,
);

export const Signup = lazyLoad(
    () => import("./auth/Signup"),
    (module) => module.Signup,
);

export const Signin = lazyLoad(
    () => import("./auth/Signin"),
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

export const Contact = lazyLoad(
    () => import("./contact/views/Contact"),
    (module) => module.Contact,
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

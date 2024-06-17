import { lazyLoad } from "@/utils/loadable"

export const Layout = lazyLoad(
    () => import("./app/Layout"), (module) => module.Layout,
)

export const Home = lazyLoad(
    () => import("./home/views/Home"), (module) => module.Home,
)

export const Topics = lazyLoad(
    () => import("./topics/views/Topics"), (module) => module.Topics,
)

export const DetailPost = lazyLoad(
    () => import("./topics/views/DetailPost"), (module) => module.DetailPost,
)

export const AboutWe = lazyLoad(
    () => import("./aboutwe/views/AboutWe"), (module) => module.AboutWe,
)
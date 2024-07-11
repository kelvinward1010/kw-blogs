import { IComment } from "@/types/comment";
import { IPost } from "@/types/post";

export const posts: IPost[] = [
    {
        id: 1,
        topic: ["Anime", "Fantasy"],
        title: "Hige wo suro 1",
        authorID: "2345677654",
        content:
            "In the process of internal desktop applications development, many different design specs and implementations would be involved, which might cause designers and developers difficulties and duplication and reduce the efficiency of development.",
        description:
            "In the process of internal desktop applications development, many different design specs and implementations would be involved, which might cause designers and developers difficulties and duplication and reduce the efficiency of development. In the process of internal desktop applications development, many different design specs and implementations would be involved, which might cause designers and developers difficulties and duplication and reduce the efficiency of development. In the process of internal desktop applications development, many different design specs and implementations would be involved, which might cause designers and developers difficulties and duplication and reduce the efficiency of development. In the process of internal desktop applications development, many different design specs and implementations would be involved, which might cause designers and developers difficulties and duplication and reduce the efficiency of development.",
        image_thumbnail:
            "https://ww2.kqed.org/app/uploads/sites/2/2017/04/Your_Name_wide-de15ee4b957dc7841b74d207c7736d4ce32e55b2.jpg",
        time_created: "2017-09-01",
    },
    {
        id: 2,
        topic: ["New", "Love"],
        title: "Hige wo suro 2",
        authorID: "2345677654",
        description:
            "In the process of internal desktop applications development, many different design specs and implementations would be involved, which might cause designers and developers difficulties and duplication and reduce the efficiency of development.",
        content:
            "In the process of internal desktop applications development, many different design specs and implementations would be involved, which might cause designers and developers difficulties and duplication and reduce the efficiency of development. In the process of internal desktop applications development, many different design specs and implementations would be involved, which might cause designers and developers difficulties and duplication and reduce the efficiency of development. In the process of internal desktop applications development, many different design specs and implementations would be involved, which might cause designers and developers difficulties and duplication and reduce the efficiency of development.",
        image_thumbnail:
            "https://devdiscourse.blob.core.windows.net/devnews/21_10_2022_20_44_52_4444815.jpg",
        time_created: "2017-09-01",
    },
    {
        id: 3,
        topic: ["Love", "Anime"],
        title: "Hige wo suro 3",
        authorID: "2345677654",
        description:
            "In the process of internal desktop applications development, many different design specs and implementations would be involved, which might cause designers and developers difficulties and duplication and reduce the efficiency of development.",
        content:
            "In the process of internal desktop applications development, many different design specs and implementations would be involved, which might cause designers and developers difficulties and duplication and reduce the efficiency of development. In the process of internal desktop applications development, many different design specs and implementations would be involved, which might cause designers and developers difficulties and duplication and reduce the efficiency of development. In the process of internal desktop applications development, many different design specs and implementations would be involved, which might cause designers and developers difficulties and duplication and reduce the efficiency of development.",
        image_thumbnail:
            "https://www.looper.com/img/gallery/hige-wo-soru-season-2-release-date-characters-and-plot-what-we-know-so-far/l-intro-1629120992.jpg",
        time_created: "2017-09-01",
    },
    {
        id: 4,
        topic: ["Fantasy"],
        title: "Hige wo suro 4",
        authorID: "2345677654",
        description:
            "In the process of internal desktop applications development, many different design specs and implementations would be involved, which might cause designers and developers difficulties and duplication and reduce the efficiency of development.",
        content:
            "In the process of internal desktop applications development, many different design specs and implementations would be involved, which might cause designers and developers difficulties and duplication and reduce the efficiency of development. In the process of internal desktop applications development, many different design specs and implementations would be involved, which might cause designers and developers difficulties and duplication and reduce the efficiency of development.",
        image_thumbnail:
            "https://www.funimationfilms.com/wp-content/uploads/2016/11/YourName-heading.jpg",
        time_created: "2017-09-01",
    },
    {
        id: 5,
        topic: ["Fantasy", "Science Fiction"],
        title: "Hige wo suro 5",
        authorID: "2345677654",
        description:
            "In the process of internal desktop applications development, many different design specs and implementations would be involved, which might cause designers and developers difficulties and duplication and reduce the efficiency of development.",
        content:
            "ABCXYZ ABCXYZ ABCXYZABCXYZABCXYZ ABCXYZ ABCXYZ ABCXYZ ABCXYZ ABCXYZABCXYZABCXYZ ABCXYZ ABCXYZ ABCXYZ ABCXYZ ABCXYZABCXYZABCXYZ ABCXYZ ABCXYZ ABCXYZ ABCXYZ ABCXYZABCXYZABCXYZ ABCXYZ ABCXYZ",
        image_thumbnail: "https://i.imgur.com/1jNd3X8.jpeg",
        time_created: "2017-09-01",
    },
];

export const comments: IComment[] = [
    {
        id: 1,
        authorID: "2345677654",
        level: 0,
        content:
            "In the process of internal desktop applications development, many different design specs and implementations would be involved, which might cause designers and developers difficulties and duplication and reduce the efficiency of development.",
        images: [
            "https://ww2.kqed.org/app/uploads/sites/2/2017/04/Your_Name_wide-de15ee4b957dc7841b74d207c7736d4ce32e55b2.jpg",
        ],
        comments_replies: [
            {
                id: "esdrfghj",
                authorID: "2345677654",
                level: 1,
                content:
                    "In the process of internal desktop applications development, many different design specs and implementations would be involved, which might cause designers and developers difficulties and duplication and reduce the efficiency of development.",
                images: [
                    "https://devdiscourse.blob.core.windows.net/devnews/21_10_2022_20_44_52_4444815.jpg",
                ],
                time_created: "2017-09-01",
            },
        ],
        time_created: "2017-09-01",
    },
    {
        id: 2,
        authorID: "2345677654",
        level: 0,
        content:
            "In the process of internal desktop applications development, many different design specs and implementations would be involved, which might cause designers and developers difficulties and duplication and reduce the efficiency of development.",
        images: [
            "https://devdiscourse.blob.core.windows.net/devnews/21_10_2022_20_44_52_4444815.jpg",
        ],
        comments_replies: [
            {
                id: "23456",
                authorID: "2345677654",
                level: 1,
                content:
                    "In the process of internal desktop applications development, many different design specs and implementations would be involved, which might cause designers and developers difficulties and duplication and reduce the efficiency of development.",
                images: [
                    "https://devdiscourse.blob.core.windows.net/devnews/21_10_2022_20_44_52_4444815.jpg",
                ],
                time_created: "2017-09-01",
            },
            {
                id: "8765445",
                authorID: "2345677654",
                level: 1,
                content:
                    "ABCXYZ ABCXYZ ABCXYZABCXYZABCXYZ ABCXYZ ABCXYZ ABCXYZ ABCXYZ ABCXYZABCXYZABCXYZ ABCXYZ ABCXYZ ABCXYZ ABCXYZ ABCXYZABCXYZABCXYZ ABCXYZ ABCXYZ ABCXYZ ABCXYZ ABCXYZABCXYZABCXYZ ABCXYZ ABCXYZ",
                images: ["https://i.imgur.com/1jNd3X8.jpeg"],
                comments_replies: [
                    {
                        id: "8765445",
                        authorID: "2345677654",
                        level: 1,
                        content:
                            "ABCXYZ ABCXYZ ABCXYZABCXYZABCXYZ ABCXYZ ABCXYZ ABCXYZ ABCXYZ ABCXYZABCXYZABCXYZ ABCXYZ ABCXYZ ABCXYZ ABCXYZ ABCXYZABCXYZABCXYZ ABCXYZ ABCXYZ ABCXYZ ABCXYZ ABCXYZABCXYZABCXYZ ABCXYZ ABCXYZ",
                        images: ["https://i.imgur.com/1jNd3X8.jpeg"],
                        time_created: "2017-09-01",
                    },
                ],
                time_created: "2017-09-01",
            },
        ],
        time_created: "2017-09-01",
    },
    {
        id: 3,
        authorID: "2345677654",
        level: 0,
        content:
            "In the process of internal desktop applications development, many different design specs and implementations would be involved, which might cause designers and developers difficulties and duplication and reduce the efficiency of development.",
        images: [
            "https://www.looper.com/img/gallery/hige-wo-soru-season-2-release-date-characters-and-plot-what-we-know-so-far/l-intro-1629120992.jpg",
        ],
        time_created: "2017-09-01",
    },
    {
        id: 4,
        authorID: "2345677654",
        level: 0,
        content:
            "In the process of internal desktop applications development, many different design specs and implementations would be involved, which might cause designers and developers difficulties and duplication and reduce the efficiency of development.",
        images: [
            "https://www.funimationfilms.com/wp-content/uploads/2016/11/YourName-heading.jpg",
        ],
        time_created: "2017-09-01",
    },
    {
        id: 5,
        authorID: "2345677654",
        level: 0,
        content:
            "ABCXYZ ABCXYZ ABCXYZABCXYZABCXYZ ABCXYZ ABCXYZ ABCXYZ ABCXYZ ABCXYZABCXYZABCXYZ ABCXYZ ABCXYZ ABCXYZ ABCXYZ ABCXYZABCXYZABCXYZ ABCXYZ ABCXYZ ABCXYZ ABCXYZ ABCXYZABCXYZABCXYZ ABCXYZ ABCXYZ",
        images: ["https://i.imgur.com/1jNd3X8.jpeg"],
        time_created: "2017-09-01",
    },
];

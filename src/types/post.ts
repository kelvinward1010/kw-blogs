export type IPost = {
    id: string | number;
    topic: string[];
    title: string;
    authorID: string | number;
    description: string;
    content: any;
    image_thumbnail: string;
    time_created: string;
};

export type IPost2 = {
    _id: string | number;
    topic: string[];
    title: string;
    authorID: string;
    description: string;
    content: any;
    image_thumbnail: string;
    createdAt: string;
    updatedAt: string;
};

export interface IBasetListPost {
    isLoading: boolean;
    data: IPost[];
}

export interface IBasetListPost2 {
    isLoading: boolean;
    data: IPost2[];
}

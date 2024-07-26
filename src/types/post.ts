export type IPost = {
    _id: string;
    topic: string[];
    title: string;
    authorID: string;
    description: string;
    content: any;
    image_thumbnail: string;
    likes: string[];
    createdAt: string;
    updatedAt: string;
};

export type IPostCard = Omit<IPost, "content" | "createdAt" | "updatedAt">;

export interface IBasetListPost {
    isLoading: boolean;
    data: IPost[];
}

export type IbaseList<T> = {
    data: T[];
};

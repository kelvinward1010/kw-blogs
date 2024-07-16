export type IPost = {
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

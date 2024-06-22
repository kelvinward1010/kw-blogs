export type IPost = {
    id: string | number;
    topic: string[];
    title: string;
    content: any;
    image_thumbnail: string;
    authorID: string | number;
    time_created: string;
}

export interface IBasetListPost {
    isLoading: boolean;
    data: IPost[];
}
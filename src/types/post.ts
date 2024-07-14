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

export interface IBasetListPost {
    isLoading: boolean;
    data: IPost[];
}

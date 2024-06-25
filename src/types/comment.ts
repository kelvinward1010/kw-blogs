export type IComment = {
    id: string | number;
    content: any;
    images: string[];
    authorID: string | number;
    time_created: string;
}

export interface IBasetListComments {
    isLoading: boolean;
    data: IComment[];
}
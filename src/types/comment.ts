export type IComment = {
    id: string | number;
    content: string;
    images?: string[];
    comments_replies?: IComment[];
    parent?: string;
    level: number;
    authorID: string | number;
    time_created: string;
}

export interface IBasetListComments {
    isLoading: boolean;
    data: IComment[];
}
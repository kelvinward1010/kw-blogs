export type IComment = {
    id: string | number;
    content: any;
    images?: string[];
    comments_replies?: IComment[];
    parent?: any;
    level: number;
    authorID: string | number;
    time_created: string;
}

export interface IBasetListComments {
    isLoading: boolean;
    data: IComment[];
}
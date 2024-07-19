import { IPost } from "@/types/post";

export function filterPostsRelatedById(
    posts: IPost[],
    idToExclude?: string,
): IPost[] {
    return posts.filter((post) => post._id !== idToExclude);
}

export function checkIfIdExists(id: any, ids: string[]): boolean {
    return ids.includes(id);
}

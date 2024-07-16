import { IPost } from "@/types/post";

export function filterPostsRelatedById(
    posts: IPost[],
    idToExclude?: string,
): IPost[] {
    return posts.filter((post) => post._id !== idToExclude);
}

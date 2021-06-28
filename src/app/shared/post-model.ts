export class PostModel {
    id!: number;
    title: string | undefined;
    url: string | undefined;
    content: string | undefined;
    like: boolean | undefined;
    likeCount: number | undefined;
    username: string | undefined;
    mansionForumName: string | undefined;
    commentCount: number | undefined;
    duration: string | undefined;
}

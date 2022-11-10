export interface Post {
    id: number;
    title: string;
    body: string;
    userId: number;
    tags: string[];
    reactions: number;
}
export interface Posts {
    posts: Post[];
    total: number;
    skip: number;
    limit: number;
}
export interface PostUser {
    id: number;
    username: string;
}
export interface Comment {
    id: number;
    body: string;
    postId: number;
    user: PostUser;
}
export interface Comments {
    comments: Comment[];
    total: number;
    skip: number;
    limit: number;
}
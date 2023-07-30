import { AppThunk } from "..";
import { GetPosts, updatePostLike } from "../../Services/PostService";
import { PostType } from "../../Types/Types";
import { PostsActionType } from "./Types";

export const SetPosts = (posts: PostType[]): PostsActionType => {
    return {
        type: 'LOAD_POSTS',
        payload: posts
    }
}

export const loadPosts = (page: number): AppThunk => {
    return (dispatch) => {
        GetPosts(page).then(res => dispatch(SetPosts(res)))
    }
}

export const likePostAction = (id: number): PostsActionType => {
    return {
        type: 'LIKE_POST',
        payload: id
    }
}

export const likePostThunk = (id: number): AppThunk => {
    return (dispatch) => {
        updatePostLike(id).then(post => dispatch(likePostAction(id)))
    }
}
import { PostType } from "../../Types/Types"
import { PostsActionType, PostsStateType } from "./Types"

const initialValue: PostsStateType = {
    posts: []
}

export const PostsReducer = (state: PostsStateType = initialValue, action: PostsActionType): PostsStateType => {
    switch (action.type) {
        case "LOAD_POSTS":
            return {
                posts: action.payload as PostType[]
            }
        case "LIKE_POST":
            return {
                posts: state.posts.map(post => {
                    if (post.id === action.payload) {
                        return {
                            ...post,
                            author: post.isLikeDislike !== 'liked' ? post.author + 1 : post.author - 1,
                            lesson_num: post.isLikeDislike !== 'liked' ? post.lesson_num - 1 : post.lesson_num + 1,
                            isLikeDislike: post.isLikeDislike === 'liked' ? undefined : 'liked'
                        }
                    } else {
                        return post
                    }
                })
            }
        default:
            return state
    }
}
import { PostType } from "../../Types/Types"

export type PostsStateType = {
    posts: PostType[]
}

export type PostsActionType = {
    type: string
    payload: PostType[] | number
}
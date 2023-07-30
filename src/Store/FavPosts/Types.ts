import { PostType } from "../../Types/Types"

export type FavPostsStateType = {
    list: PostType[]
}

export type FavPostActionType = {
    type: string
    payload: PostType
}
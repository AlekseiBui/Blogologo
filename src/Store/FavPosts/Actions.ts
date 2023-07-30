import { PostType } from "../../Types/Types";
import { FavPostActionType } from "./Types";

export const setAsFavoriteAction = (post: PostType): FavPostActionType => {
    return {
        type: 'SET_FAV_POST',
        payload: post
    }
}
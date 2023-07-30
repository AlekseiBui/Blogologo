import { PostResponseType, PostType } from "../Types/Types"

export const GetPosts = (offset: number): Promise<PostType[]> => {
    return fetch(`https://studapi.teachmeskills.by/blog/posts/?limit=12&offset=${offset}`)
        .then(response => response.json())
        .then((result: PostResponseType) => result.results)
}

export const GetPost = (id: string): Promise<PostType> => {
    return fetch('https://studapi.teachmeskills.by/blog/posts/' + id)
        .then(response => response.json())
        .then((result: PostType) => result)
}

export const updatePostLike = (id: number) => {
    return Promise.resolve(true)
}
export type Options = {
    like: string
    dislike: string
    bookmark: string
    dots: string
}

export type PostType = {
    id: number
    image: string
    text: string
    date: string
    title: string
    lesson_num: number
    author: number
    isLikeDislike?: 'liked' | 'disliked'
}

export type PostResponseType = {
    count: number
    results: PostType[]
}
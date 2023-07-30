import React, { useContext, useEffect, useState } from 'react'
import styles from './styles.module.scss'
import './styles.module.scss'
import Like from './../../assets/Like.png'
import Dislike from './../../assets/Dislike.png'
import Bookmark from './../../assets/Bookmark.png'
import Dots from './../../assets/Dots.png'
import { Link } from 'react-router-dom'
import WhiteLike from './../../assets/WhiteLike.png'
import WhiteDislike from './../../assets/WhiteDislike.png'
import WhiteBookmark from './../../assets/WhiteBookmark.png'
import WhiteDots from './../../assets/WhiteDots.png'
import { ThemeContext } from '../../hoc/ThemeProvider'
import { Options, PostType } from '../../Types/Types'
import { useDispatch } from 'react-redux'
import { setAsFavoriteAction } from '../../Store/FavPosts/Actions'
import { AppDispatch } from '../../Store'
import { likePostThunk } from '../../Store/Posts/Actions'

type Props = {
    post: PostType
}

const MidPost = (props: Props) => {

    const { theme } = useContext(ThemeContext)

    const [optionsState, SetOpttionsState] = useState<Options>({
        like: Like,
        dislike: Dislike,
        bookmark: Bookmark,
        dots: Dots
    })

    useEffect(() => {
        if (theme.theme === 'light') {
            SetOpttionsState({
                like: Like,
                dislike: Dislike,
                bookmark: Bookmark,
                dots: Dots
            }
            )
        } else if (theme.theme === 'dark') {
            SetOpttionsState({
                like: WhiteLike,
                dislike: WhiteDislike,
                bookmark: WhiteBookmark,
                dots: WhiteDots
            })
        }
    }, [theme.theme])

    const dispatch = useDispatch<AppDispatch>()
    const onClickLike = (id: number) => {
        dispatch(likePostThunk(id))
    }

    const setAsFavorite = (post: PostType) => {
        dispatch(setAsFavoriteAction(post))
    }

    return (
        <div className={`${styles.MidPost}`}>
            <img src={`${props.post.image}`} />

            <div>{props.post.date}</div>

            <div><Link to={'/SelectedPost/' + props.post.id}>{props.post.title}</Link></div>

            <div className={`${styles.MidPost_BottomPart}`}>
                <div className={`${styles.LikeDislike}`}>
                    <button onClick={() => onClickLike(props.post.id)}><img src={`${optionsState.like}`} /></button>
                    <div>{props.post.author}</div>
                    <button onClick={() => onClickLike(props.post.id)}><img src={`${optionsState.dislike}`} /></button>
                    <div>{props.post.lesson_num}</div>
                </div>
                <div className={`${styles.FavOptions}`}>
                    <button onClick={() => setAsFavorite(props.post)}><img src={`${optionsState.bookmark}`} /></button>
                    <img src={`${optionsState.dots}`} />
                </div>
            </div>

        </div >
    )
}

export default MidPost
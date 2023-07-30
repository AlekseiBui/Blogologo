import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import './styles.module.scss'
import MidPost from '../MidPost'
import { useDispatch, useSelector } from 'react-redux'
import { selectFavPost } from '../../Store/FavPosts/Selector'
import { selectAllPosts } from '../../Store/Posts/Selector'
import { AppDispatch } from '../../Store'
import { loadPosts } from '../../Store/Posts/Actions'

type Props = {
    tab: 'All' | 'My favorites'
    page: number
}

const PostList = (props: Props) => {
    const posts1 = useSelector(selectAllPosts)
    const dispatch = useDispatch<AppDispatch>()

    useEffect(() => {
        dispatch(loadPosts(props.page))
    }, [props.page])

    const favPosts = useSelector(selectFavPost)

    if (props.tab === 'All') {
        return (
            <div className={`${styles.PostList}`}>
                {posts1.posts.map((post, index) => (
                    <MidPost key={index + post.id} post={post} />
                ))}
            </div>
        )
    } else {
        return (
            <div className={`${styles.PostList}`}>
                {favPosts.list.map((post, index) => (
                    <MidPost key={index + post.id} post={post} />
                ))}
            </div>
        )
    }
}

export default PostList
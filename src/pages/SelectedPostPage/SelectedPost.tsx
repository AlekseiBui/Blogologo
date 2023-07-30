import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { GetPost } from '../../Services/PostService'
import SinglePostLike from '../../assets/SinglePostLike.png'
import SinglePostDisike from '../../assets/SinglePostDislike.png'
import AddToFavorites from '../../assets/AddToFavorites.png'
import styles from './styles.module.scss'
import './styles.module.scss'
import { PostType } from '../../Types/Types'

const SelectedPost = () => {
    const { id } = useParams()

    const [post, setPost] = useState<PostType>()

    useEffect(() => {
        id && GetPost(id).then(res => setPost(res))
    }, [id])

    return (
        <div className={`${styles.SinglePost}`}>
            <Link to='/'>Home | Post {post?.id}</Link>
            <div className={`${styles.SinglePost_title}`}>{post?.title}</div>
            <img src={post?.image} alt='Post'></img>
            <div className={`${styles.SinglePost_text}`}>{post?.text}</div>
            <div className={`${styles.SinglePost_functions}`}>
                <img className={`${styles.functions_like}`} src={SinglePostLike} alt='Like'></img>
                <img className={`${styles.functions_dislike}`} src={SinglePostDisike} alt='Dislike'></img>
                <img className={`${styles.functions_favorites}`} src={AddToFavorites} alt='Add to favorites'></img>
            </div>
        </div>
    )
}

export default SelectedPost
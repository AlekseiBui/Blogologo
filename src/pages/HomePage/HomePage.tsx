import { useState } from 'react'
import PostList from '../../components/PostList'
import Tabs from '../../components/Tabs'
import styles from './styles.module.scss'
import './styles.module.scss'

const HomePage = () => {
    const [tabState, setTabState] = useState<'All' | 'My favorites'>('All')
    const tabStatePostList = (e: React.FormEvent<HTMLDivElement>) => {
        const eTargetText = e.currentTarget.innerText
        if (eTargetText === 'All') {
            return setTabState('All')
        } else if (eTargetText === 'My favorites') {
            return setTabState('My favorites')
        }
    }

    const [pageState, setPageState] = useState<number>(1)
    const PostListPage = (e: React.FormEvent<HTMLButtonElement>): void => {
        const eTargetText = +e.currentTarget.innerText * 11
        return setPageState(eTargetText)
    }

    return (
        <>
            <div className={`${styles.BlogName}`}>Blog</div>
            <Tabs onClick={tabStatePostList} />
            <PostList tab={tabState} page={pageState} />
            <div className={`${styles.Paging}`}>
                <button onClick={PostListPage}><div>1</div></button>
                <button onClick={PostListPage}><div>2</div></button>
                <button onClick={PostListPage}><div>3</div></button>
                <button onClick={PostListPage}><div>4</div></button>
                <button onClick={PostListPage}><div>5</div></button>
            </div>
        </>
    )
}

export default HomePage
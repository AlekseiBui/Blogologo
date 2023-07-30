import SearchedPost from '../../components/SearchedPost'
import styles from './styles.module.scss'
import './styles.module.scss'

const SearchPage = () => {
    return (
        <>
            <div className={`${styles.SearchName}`}>Search results 'TEXT'</div>
            <SearchedPost id={1} date='11.05.2000' title='TEXT'
                image='https://avatars.mds.yandex.net/i?id=9262795b58531aeb90e5861a2a437c18e26ef136-5468635-images-thumbs&n=13' />
            <div className={`${styles.Paging}`}>
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
                <div>5</div>
            </div>
        </>
    )
}

export default SearchPage
import styles from './styles.module.scss'
import './styles.module.scss'
import Search from '../../assets/Search.png'

const SearchBtn = () => {
    return (
        <div className={`${styles.SearchBtn}`}>
            <img src={`${Search}`} />
        </div>
    )
}

export default SearchBtn
import styles from './styles.module.scss'
import './styles.module.scss'

type Props = {
    onClick: (e: React.FormEvent<HTMLDivElement>) => void
}

const Tabs = (props: Props) => {
    return (
        <div className={`${styles.tabs}`}>
            <div onClick={props.onClick} className={`${styles.tabs_all}`}>All</div>
            <div onClick={props.onClick} className={`${styles.tabs_favorites}`}>My favorites</div>
        </div>
    )
}

export default Tabs
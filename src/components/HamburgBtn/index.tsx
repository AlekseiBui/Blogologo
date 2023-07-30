import styles from './styles.module.scss'
import './styles.module.scss'

type Props = {
    onClick: () => void
}

const HamburgBtn = (props: Props) => {
    return (
        <>
            <input className={`${styles.menuToggle}`} onClick={props.onClick} id="menu-toggle" type="checkbox" />
            <label className={`${styles.hamburgBtn}`} htmlFor="menu-toggle">
                <span></span>
            </label>
        </>
    )
}

export default HamburgBtn
import styles from './styles.module.scss'
import './styles.module.scss'

type Props = {
    text: string
    btnState?: boolean
}

const SecondaryButton = (props: Props) => {
    const btnClass = `${styles.SecondaryButton} ${props.btnState ? styles.disabled : styles.able}`

    return (
        <>
            <input
                className={btnClass}
                type="button"
                value={props.text}
                disabled={props.btnState}
            />
        </>
    )
}

export default SecondaryButton
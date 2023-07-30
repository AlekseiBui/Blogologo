import styles from './styles.module.scss'
import './styles.module.scss'

type Props = {
    text: string
    btnState?: boolean
    onClick?: () => void
}

const PrimaryButton = (props: Props) => {
    const btnClass = `${styles.PrimaryButton} ${props.btnState ? styles.disabled : styles.able}`

    return (
        <>
            <input
                className={btnClass}
                type="button"
                value={props.text}
                disabled={props.btnState}
                onClick={props.onClick}
            />
        </>
    )
}

export default PrimaryButton
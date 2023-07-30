import styles from './styles.module.scss'
import './styles.module.scss'

type Props = {
    titleName: string
    placeholder: string
    titleState?: boolean
    error?: boolean
}

const Title = (props: Props) => {
    const inputClass = `${props.error ? `${styles.inputTitle} ${styles.errorLabel}` : styles.inputTitle}`
    const disabledInput = `${props.titleState ? styles.disabled : ''}`
    const errorInput = `${props.error ? styles.error : ''}`

    return (
        <label className={inputClass}> {props.titleName}
            <input className={`${disabledInput} ${errorInput}`} type='text' placeholder={props.placeholder} disabled={props.titleState} />
        </label>
    )
}

export default Title
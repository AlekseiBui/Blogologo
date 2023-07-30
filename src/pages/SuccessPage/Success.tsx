import PrimaryButton from '../../components/PrimaryButton'
import styles from './styles.module.scss'
import './styles.module.scss'
import { Link } from 'react-router-dom'

const Success = () => {
    return (
        <div className={`${styles.Success}`}>
            <Link to='/'>Back to home</Link>
            <div className={`${styles.Success_Name}`}>Success</div>
            <div className={`${styles.Success_functions}`}>
                <div>Email confirmed</div>
                <div>Your registration is now completed</div>
                <Link to='/'><PrimaryButton text='Go to home' /></Link>
            </div>
        </div>
    )
}

export default Success
import PrimaryButton from '../../components/PrimaryButton'
import Title from '../../components/Title'
import { useAuthContext } from '../../hoc/AuthProvider'
import styles from './styles.module.scss'
import './styles.module.scss'
import { Link } from 'react-router-dom'

const SignIn = () => {

    const { login } = useAuthContext()

    return (
        <div className={`${styles.SignIn}`}>
            <Link to='/'>Back to home</Link>
            <div className={`${styles.SignIn_Name}`}>Sign In</div>
            <div className={`${styles.SignIn_functions}`}>
                <Title titleName='Email' placeholder='Your email' />
                <Title titleName='Password' placeholder='Your password' />
                <div className={`${styles.SignIn_ForgotPass}`}>Forgot password?</div>
                <Link to='/'><PrimaryButton text='Sign In' onClick={login} /></Link>
                <div className={`${styles.SignIn_NoAcc}`}>Don't have an account?<Link to='/SignUp'><span> Sign Up</span></Link></div>
            </div>
        </div>
    )
}

export default SignIn
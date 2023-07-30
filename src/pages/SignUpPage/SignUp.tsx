import PrimaryButton from '../../components/PrimaryButton'
import Title from '../../components/Title'
import styles from './styles.module.scss'
import './styles.module.scss'
import { Link } from 'react-router-dom'

const SignUp = () => {
    return (
        <div className={`${styles.SignUp}`}>
            <Link to='/'>Back to home</Link>
            <div className={`${styles.SignUp_Name}`}>Sign Up</div>
            <div className={`${styles.SignUp_functions}`}>
                <Title titleName='Name' placeholder='Your name' />
                <Title titleName='Email' placeholder='Your email' />
                <Title titleName='Password' placeholder='Your password' />
                <Title titleName='Confirm password' placeholder='Confirm password' />
                <Link to='/Success'><PrimaryButton text='Sign Up' /></Link>
                <div className={`${styles.SignUp_HaveAcc}`}>Already have an account?<Link to='/SignIn'><span> Sign In</span></Link></div>
            </div>
        </div>
    )
}

export default SignUp
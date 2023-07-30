import styles from './styles.module.scss'
import './styles.module.scss'
import Person from '../../assets/Person.png'
import { Link } from 'react-router-dom'

type Props = {
    username: string
    isAuthorized?: boolean
}

const LoginPlate = (props: Props) => {
    const shortName = props.username.split('').filter(elem => { return elem.toLowerCase() !== elem }).join('')

    if (props.isAuthorized) {
        return (
            <div className={`${styles.LoginPlate}`}>
                <div>{shortName}</div>
                <div>{props.username}</div>
            </div>
        )
    } else {
        return (
            <div className={`${styles.LoginPlateNotAuth}`}>
                <Link to='/SignIn'><img src={`${Person}`} /></Link>
            </div>
        )
    }
}

export default LoginPlate
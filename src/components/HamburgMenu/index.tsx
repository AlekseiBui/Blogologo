import LoginPlate from '../LoginPlate'
import LightTheme from '../../assets/Light.png'
import DarkTheme from '../../assets/Dark.png'
import styles from './styles.module.scss'
import './styles.module.scss'
import { useAuthContext } from '../../hoc/AuthProvider'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../../hoc/ThemeProvider'
import { useContext } from 'react'

type Props = {
    isOpen: boolean
}

const HamburgMenu = (props: Props) => {
    let BurgMenuStyle = ''
    if (props.isOpen) { BurgMenuStyle = styles.BurgerMenuOpen } else {
        BurgMenuStyle = styles.BurgerMenuClose
    }

    const { setTheme } = useContext(ThemeContext)

    const { isAuthorized, logout } = useAuthContext()

    if (isAuthorized) {
        return (
            <div className={BurgMenuStyle}>
                <div className={`${styles.BurgerMenu_Top}`}>
                    <LoginPlate username='Alexey Buinevich' isAuthorized={true} />
                    <Link to='/'><button>Home</button></Link>
                </div>
                <div className={`${styles.BurgerMenu_Bottom}`}>
                    <div>
                        <button onClick={() => setTheme({ theme: 'light' })}><img src={`${LightTheme}`} alt="Sun" /></button>
                        <button onClick={() => setTheme({ theme: 'dark' })}><img src={`${DarkTheme}`} alt="Moon" /></button>
                    </div>
                    <button onClick={logout}>Log out</button>
                </div>
            </div>
        )
    } else {
        return (
            <div className={BurgMenuStyle}>
                <div className={`${styles.BurgerMenu_Top}`}>
                    <Link to='/'><button>Home</button></Link>
                </div>
                <div className={`${styles.BurgerMenu_Bottom}`}>
                    <div>
                        <button onClick={() => setTheme({ theme: 'light' })}><img src={`${LightTheme}`} alt="Sun" /></button>
                        <button onClick={() => setTheme({ theme: 'dark' })}><img src={`${DarkTheme}`} alt="Moon" /></button>
                    </div>
                    <Link to='/SignIn'><button>Sign in</button></Link>
                </div>
            </div>
        )
    }
}

export default HamburgMenu
import { useState } from 'react'
import HamburgBtn from '../HamburgBtn'
import HamburgMenu from '../HamburgMenu'
import LoginPlate from '../LoginPlate'
import SearchBtn from '../SearchBtn'
import styles from './styles.module.scss'
import './styles.module.scss'
import { useAuthContext } from '../../hoc/AuthProvider'
import { Link } from 'react-router-dom'

const Header = () => {
    const [burgMenu, setBurgMenu] = useState(false)

    const BurgMenuState = () => {
        setBurgMenu(!burgMenu)
    }

    const { isAuthorized } = useAuthContext()

    return (
        <>
            <div className={`${styles.header}`}>
                <HamburgBtn onClick={BurgMenuState} />
                <div className={`${styles.header_rightPart}`}>
                    <Link to='SearchedPage'><SearchBtn /></Link>
                    <LoginPlate username='Aleksey Buynevich' isAuthorized={isAuthorized} />
                </div>
            </div>
            <HamburgMenu isOpen={burgMenu} />
        </>
    )
}

export default Header
import Header from '../Header'
import Footer from '../Footer'
import { Outlet } from 'react-router-dom'
import styles from './styles.module.scss'
import './styles.module.scss'
import { ThemeContext } from '../../hoc/ThemeProvider'
import { useContext } from 'react'

const Layout = () => {
    const { theme } = useContext(ThemeContext)

    let themeColor = (styles.light)

    if (theme.theme === 'light') {
        themeColor = styles.light
    } else {
        themeColor = styles.dark
    }

    return (
        <>
            <Header />
            <div className={`${styles.App} ${themeColor}`}>
                <Outlet />
                <Footer />
            </div >
        </>
    )
}

export default Layout
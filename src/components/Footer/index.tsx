import React from 'react'
import './styles.module.scss'
import styles from './styles.module.scss'

const Footer = () => {
    return (
        <div className={`${styles.Footer}`}>
            <div>©2022 Blogologo</div>
            <div>All rights reserved</div>
        </div>
    )
}

export default Footer
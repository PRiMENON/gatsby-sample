import * as React from 'react'
import { Link } from 'gatsby'
import github from '../images/github.svg'
import linkedin from '../images/linkedin.svg'
import twitter from '../images/twitter.svg'
import facebook from '../images/facebook.svg'
import * as style from '../css/common.module.scss'

const Footer = () => {
    return (
        <footer className={style.footerWrapper}>
            <div className={style.insideContainer}>
                <a href="https://github.com/"><img src={github} alt="logo" /></a>
                <a href="https://linkedin.com/"><img src={linkedin} alt="logo" /></a>
                <a href="https://twitter.com/"><img src={twitter} alt="logo" /></a>
                <a href="https://facebook.com/"><img src={facebook} alt="logo" /></a>
                <hr />
                <Link to="/blog">Blog</Link>
                <Link to="/contact">Contact</Link>
                <p>©{new Date().getFullYear()} PRiMENON</p>
            </div>
        </footer>
    )
}

export default Footer

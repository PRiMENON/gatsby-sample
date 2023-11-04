import * as React from 'react'
import * as style from '../css/Index.module.scss'
import { Link } from 'gatsby'

const Index = () => {
    return (
        <main>
            <h1 className={style.h1Text}>こんにちわ</h1>
            <Link to="/blog">blog</Link>
            <a href="https://www.google.com/">link</a>
        </main>
    )
}

export default Index

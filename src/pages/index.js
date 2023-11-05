import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'
import JSLogo from '../images/javascript.svg'
import ReactLogo from '../images/react.svg'
import GatsbyLogo from '../images/gatsby.svg'
import NextLogo from '../images/next.svg'
import * as style from '../css/index.module.scss'

const Index = () => {
    return (
        <Layout>
            <div className={style.hero}>
                <StaticImage src="../images/index-hero.jpg" alt="hero" quality={90} placeholder="blurred" formats={['AUTO', 'WEBP', 'AVIF']} />
                <div className={style.textContainer}>
                    <h1>I'm PRiMENON!</h1>
                    <h3>Frontend Engineer</h3>
                </div>
            </div>
            <div className={style.container}>
                <div className={style.profile}>
                    <div>
                        <h2>JavaScript Nerd!</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                </div>
                <StaticImage src="../images/profile.jpg" alt="profile" quality={90} placeholder="blurred" formats={['AUTO', 'WEBP', 'AVIF']} />
                <div className={style.skills}>
                    <h2>Skills</h2>
                    <div className={style.skillsContainer}>
                        <div>
                            <img src={JSLogo} alt="JavaScript" />
                            <span>JavaScript / 10 years</span>
                        </div>
                        <div>
                            <img src={ReactLogo} alt="React" />
                            <span>React / 5 years</span>
                        </div>
                        <div>
                            <img src={GatsbyLogo} alt="Gatsby.js" />
                            <span>Gatsby.js / 3 years</span>
                        </div>
                        <div>
                            <img src={NextLogo} alt="Next.js" />
                            <span>Next.js / 3 years</span>
                        </div>
                    </div>
                </div>
                <div className={style.ctaButton}>
                    <Link to="/contact">Make it Happen!</Link>
                </div>
            </div>
        </Layout>
    )
}

export default Index

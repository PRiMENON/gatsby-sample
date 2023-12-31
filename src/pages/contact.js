import * as React from 'react'
import Layout from '../components/layout'
import * as style from '../css/contact.module.scss'

const Contact = () => {
    return (
        <Layout>
            <div className={style.wrapper}>
                <div className={style.container}>
                    <h1>Contact</h1>
                    <p>お気軽にご連絡ください。</p>
                    <form method="post" netlify-honeypot="bot-field" data-netlify="true" name="contact" action="/success">
                        <input type="hidden" name="form-name" value="contact" />
                        <label htmlFor="name">お名前</label>
                        <input type="text" name="name" id="name" required />
                        <label htmlFor="email">メールアドレス</label>
                        <input type="email" name="email" id="email" required />
                        <label htmlFor="textarea">ご用件</label>
                        <textarea name="message" rows="10" id="textarea" required></textarea>
                        <button type="submit">送信</button>
                    </form>
                </div>
            </div>
        </Layout>
    )
}

export default Contact

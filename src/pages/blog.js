import * as React from 'react'
import { graphql, Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import Layout from '../compornents/layout'
import * as style from '../css/blog.module.scss'

const Blog = props => {
    return (
        <Layout>
            <div className={style.wrapper}>
                <div className={style.container}>
                    <h1>Blog</h1>
                    <p>エンジニアの日常生活をお届けします。</p>
                    {props.data.allMarkdownRemark.edges.map(
                        (singleBlog, index) => (
                            <div className={style.blogCard} key={index}>
                                <div className={style.textContainer}>
                                    <h3>{singleBlog.node.frontmatter.title}</h3>
                                    <p>{singleBlog.node.frontmatter.excerpt}</p>
                                    <p>{singleBlog.node.frontmatter.date}</p>
                                    <Link to={singleBlog.node.fields.slug}>
                                        Read More
                                    </Link>
                                </div>
                                <GatsbyImage image={singleBlog.node.frontmatter.image.childImageSharp.gatsbyImageData} alt="card-image" className={style.cardImg} />
                            </div>
                        )
                    )}
                </div>
            </div>
        </Layout>
    )
}

export default Blog

export const query = graphql`
    query BlogQuery {
        allMarkdownRemark(sort: { frontmatter: { id: DESC } }) {
            edges {
                node {
                    fields {
                        slug
                    }
                    frontmatter {
                        date
                        excerpt
                        id
                        image {
                            childImageSharp {
                                gatsbyImageData(
                                    formats: [AUTO, WEBP, AVIF]
                                    placeholder: BLURRED
                                    quality: 90
                                )
                            }
                        }
                        title
                    }
                }
            }
        }
    }
`

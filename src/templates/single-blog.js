import * as React from 'react'
import { graphql } from 'gatsby'

const SingleBlog = props => {
    return (
        <div>
            <h1>{props.data.markdownRemark.frontmatter.ttile}</h1>
            <p>{props.data.markdownRemark.frontmatter.date}</p>
            <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }} />
        </div>
    )
}

export default SingleBlog

export const query = graphql`
    query SingleBlogQuery($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug }}) {
            frontmatter {
                date
                except
                id
                image
                title
            }
            html
        }
    }
`

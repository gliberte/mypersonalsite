import React from 'react'

export default ({data})=>{
    return (
        <div>
            <h1>{data.site.siteMetadata.title}</h1>
        </div>
    )
}

export const query = graphql`
    query AboutQuery {
        site{
            siteMetadata{
                title
            }
        }
    }
`
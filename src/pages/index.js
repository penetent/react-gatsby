import * as React from 'react'
import Layout from '../components/layout'
import ContentUI from '../components/content'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'

import Container from '@mui/material/Container';


//use gatsby clean in terminal to clean cache. or delete folder manually.
//https://www.gatsbyjs.com/docs/tutorial/
//mdx files contains data for GraphiQL
//GraphQL  data is from the folders and files.
//hooks: useStaticQuery, page query.

const IndexPage = () => {
  return (
   <Container>
     <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="../images/alex_arzza.png"
      />
    </Layout>
    <ContentUI/>
    </Container>
  )
}
export const Head = () => <Seo title="Home Page" />

export default IndexPage
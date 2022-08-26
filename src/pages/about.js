import * as React from 'react'
import Layout from '../components/layout'
import ButtonUI from '../components/button'



const AboutPage = () => {

  return (
     <Layout pageTitle="About me">
      <p>I'm making this by following the Gatsby Tutorial.</p>   
   <ButtonUI buttonText="sav"/>
    </Layout>
  
  )
}

export const Head = () => (
  <>
    <title>About Me</title>
    <meta name="description" content="Your description" />
  </>
)

export default AboutPage
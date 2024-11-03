import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'

const LookupPage = () => {
  return (
    <Layout pageTitle="Introduction to Pokemon Regions">
      <p>There are several regions throughout the Pokemon franchise, such as Kanto, Johto, Hisui, etc. Explore the rest of this site to learn more!</p>
      <StaticImage
        alt="General Pokemon Regions"
        src="../images/Regions.webp"
        //image credit: https://pokemon.fandom.com/wiki/Regions
      />
      <p>Choose your trainer type to alter the background color!</p>

    </Layout>
  )
}

export const Head = () => <Seo title="Home Page" />

export default LookupPage
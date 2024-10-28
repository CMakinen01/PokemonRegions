import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'


const AboutPage = () => {
  return (
    <Layout pageTitle="General Info">
      <p>What does a Pokemon Region mean?</p>
      <p>A Region is the area the specific Pokemon game takes place in.</p>
      <p>Each Region has a unique set of Pokemon, such as the starters, regional birds, or the 'Pikaclone', which is the Pokemon in each region that most resembles Pikachu</p>
      <StaticImage
        alt="All Starters"
        src="../images/Start.webp"
        //image credit: https://pokemon.fandom.com/wiki/First_partner_Pok%C3%A9mon
      />
    </Layout>
  )
}


export const Head = () => <Seo title="General" />
export default AboutPage
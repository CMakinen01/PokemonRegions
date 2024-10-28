import * as React from 'react'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const BlogPost = ({ data, children }) => {
  const kantoImage = getImage(data.mdx.frontmatter.kanto_image)
  const johtoImage = getImage(data.mdx.frontmatter.johto_image)
  const hoennImage = getImage(data.mdx.frontmatter.hoenn_image)
  const sinnohImage = getImage(data.mdx.frontmatter.sinnoh_image)
  const unovaImage = getImage(data.mdx.frontmatter.unova_image)
  const kalosImage = getImage(data.mdx.frontmatter.kalos_image)
  const alolaImage = getImage(data.mdx.frontmatter.alola_image)
  const galarImage = getImage(data.mdx.frontmatter.galar_image)
  const hisuiImage = getImage(data.mdx.frontmatter.hisui_image)
  const paldeaImage = getImage(data.mdx.frontmatter.paldea_image)

  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <p>Posted: {data.mdx.frontmatter.date}</p>
      {kantoImage && (
        <GatsbyImage
          image={kantoImage}
          alt={data.mdx.frontmatter.kanto_image_alt}
        />
      )}

      {johtoImage && (
        <GatsbyImage
          image={johtoImage}
          alt={data.mdx.frontmatter.johto_image_alt}
        />
      )}

      {hoennImage && (
        <GatsbyImage
          image={hoennImage}
          alt={data.mdx.frontmatter.hoenn_image_alt}
        />
      )}
      {sinnohImage && (
        <GatsbyImage
          image={sinnohImage}
          alt={data.mdx.frontmatter.sinnoh_image_alt}
        />
      )}
      {unovaImage && (
        <GatsbyImage
          image={unovaImage}
          alt={data.mdx.frontmatter.unova_image_alt}
        />
      )}
      {kalosImage && (
        <GatsbyImage
          image={kalosImage}
          alt={data.mdx.frontmatter.kalos_image_alt}
        />
      )}
      {alolaImage && (
        <GatsbyImage
          image={alolaImage}
          alt={data.mdx.frontmatter.alola_image_alt}
        />
      )}
      {galarImage && (
        <GatsbyImage
          image={galarImage}
          alt={data.mdx.frontmatter.galar_image_alt}
        />
      )}
      {hisuiImage && (
        <GatsbyImage
          image={hisuiImage}
          alt={data.mdx.frontmatter.hisui_image_alt}
        />
      )}
      {paldeaImage && (
        <GatsbyImage
          image={paldeaImage}
          alt={data.mdx.frontmatter.paldea_image_alt}
        />
      )}
      {children}
    </Layout>
  )
}

export const query = graphql`
  query($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        kanto_image{
          childImageSharp {
            gatsbyImageData
          }
        } 
        kanto_image_alt

        johto_image{
          childImageSharp {
            gatsbyImageData
          }
        } 
        johto_image_alt

        hoenn_image{
          childImageSharp {
            gatsbyImageData
          }
        } 
        hoenn_image_alt

        sinnoh_image{
          childImageSharp {
            gatsbyImageData
          }
        } 
        sinnoh_image_alt

        unova_image{
          childImageSharp {
            gatsbyImageData
          }
        } 
        unova_image_alt

        kalos_image{
          childImageSharp {
            gatsbyImageData
          }
        } 
        kalos_image_alt

        alola_image{
          childImageSharp {
            gatsbyImageData
          }
        } 
        alola_image_alt

        galar_image{
          childImageSharp {
            gatsbyImageData
          }
        } 
        galar_image_alt

        hisui_image{
          childImageSharp {
            gatsbyImageData
          }
        } 
        hisui_image_alt

        paldea_image{
          childImageSharp {
            gatsbyImageData
          }
        } 
        paldea_image_alt
      }
    }
  }
`

export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.title} />

export default BlogPost
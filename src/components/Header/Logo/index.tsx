import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Img from 'gatsby-image';

import { ImageSharpFluid } from '../../helpers/definitions';

const Logo: React.FC = () => {
  const { site, placeholderImage } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      placeholderImage: file(relativePath: { eq: "profile.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 80) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const logoTitle: string = site.siteMetadata.title;
  const logoImage: ImageSharpFluid = placeholderImage.childImageSharp.fluid;

  return (
    <Link
      className="flex items-center mr-auto text-indigo-900 dark:text-indigo-100 hover:text-indigo-800 dark:hover:text-indigo-200"
      to="/"
    >
      {logoImage && (
        <figure className="w-16 h-16 mr-3 border border-blue-400 dark:border-blue-900 rounded-full">
          <Img className="border-4 border-white dark:border-gray-900 rounded-full" fluid={logoImage} alt={logoTitle} />
        </figure>
      )}
      <h1 className="text-lg">{logoTitle}</h1>
    </Link>
  );
};

export default Logo;

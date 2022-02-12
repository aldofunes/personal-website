import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Link from 'gatsby-link';
import { motion } from 'framer-motion';

import Container from '../ui/Container';
import TitleSection from '../ui/TitleSection';

import { SectionTitle, ImageSharpFluid } from '../../helpers/definitions';

interface Post {
  node: {
    id: string;
    fields: {
      slug: string;
    };
    frontmatter: {
      title: string;
      description: string;
      date: string;
      tags: string[];
      cover: {
        childImageSharp: {
          fluid: ImageSharpFluid;
        };
      };
    };
  };
}

const Posts: React.FC = () => {
  const { markdownRemark, allMarkdownRemark } = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { category: { eq: "blog section" } }) {
        frontmatter {
          title
          subtitle
        }
      }
      allMarkdownRemark(
        filter: { frontmatter: { category: { eq: "blog" }, published: { eq: true } } }
        sort: { fields: frontmatter___date, order: DESC }
      ) {
        edges {
          node {
            id
            html
            fields {
              slug
            }
            frontmatter {
              title
              description
              date(formatString: "MMM DD, YYYY")
              tags
              cover {
                childImageSharp {
                  fluid(maxWidth: 800) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  const sectionTitle: SectionTitle = markdownRemark.frontmatter;
  const posts: Post[] = allMarkdownRemark.edges;

  return (
    <Container section>
      <TitleSection title={sectionTitle.title} subtitle={sectionTitle.subtitle} center />
      <div className="w-full flex flex-wrap">
        {posts.map((item) => {
          const {
            id,
            fields: { slug },
            frontmatter: { title, cover, description, date, tags }
          } = item.node;

          return (
            <div key={id} className="w-full sm:w-1/2 p-3">
              <Link to={slug}>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 1 }}>
                  <div className="w-full h-full rounded-lg flex flex-col overflow-hidden border border-gray-300 dark:border-gray-700">
                    {cover.childImageSharp.fluid && (
                      <figure className="w-full">
                        <Img fluid={cover.childImageSharp.fluid} alt={title} />
                      </figure>
                    )}
                    <div className="p-4 text-indigo-900 dark:text-indigo-100">
                      <h3 className="text-xs text-indigo-500">{date}</h3>
                      <h3 className="font-semibold mb-4">{title}</h3>
                      <p>{description}</p>
                    </div>
                    <div className="p-4 pt-2 mt-auto">
                      {tags.map((item) => (
                        <span
                          key={item}
                          className="text-xs text-indigo-900 dark:text-indigo-100 dark:text-indigo-1 border border-blue-400 dark:border-blue-600 rounded-full px-2 py-1 mr-2"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </Link>
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default Posts;

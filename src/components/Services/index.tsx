import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import InfoBlock from '../ui/InfoBlock';
import Container from '../ui/Container';
import FormatHtml from '../utils/FormatHtml';
import TitleSection from '../ui/TitleSection';
import { IconProps } from '../ui/Icon';

import { SectionTitle } from '../../helpers/definitions';

interface Service {
  node: {
    id: string;
    frontmatter: {
      title: string;
      icon: IconProps;
    };
    html: string;
  };
}

const Services: React.FC = () => {
  const { markdownRemark, allMarkdownRemark } = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { category: { eq: "services section" } }) {
        frontmatter {
          title
          subtitle
        }
      }
      allMarkdownRemark(filter: { frontmatter: { category: { eq: "services" } } }, sort: { fields: fileAbsolutePath }) {
        edges {
          node {
            id
            frontmatter {
              title
              icon
            }
            html
          }
        }
      }
    }
  `);

  const sectionTitle: SectionTitle = markdownRemark.frontmatter;
  const services: Service[] = allMarkdownRemark.edges;

  return (
    <Container section>
      <TitleSection title={sectionTitle.title} subtitle={sectionTitle.subtitle} center />
      <div className="flex flex-wrap -mx-3">
        {services.map((item) => {
          const {
            id,
            html,
            frontmatter: { title, icon }
          } = item.node;

          return (
            <div className="w-full sm:w-1/2" key={id}>
              <InfoBlock icon={icon} title={title} content={<FormatHtml content={html} />} />
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default Services;

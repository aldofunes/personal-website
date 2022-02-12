import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Timeline from '../ui/Timeline';
import Container from '../ui/Container';
import TitleSection from '../ui/TitleSection';
import FormatHtml from '../utils/FormatHtml';

import { SectionTitle } from '../../helpers/definitions';

interface EducationEdge {
  node: {
    id: string;
    html: string;
    frontmatter: {
      university: string;
      degrees: string[];
      startDate: string;
      endDate: string;
    };
  };
}

const Education: React.FC = () => {
  const { markdownRemark, allMarkdownRemark } = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { category: { eq: "education section" } }) {
        frontmatter {
          title
          subtitle
        }
      }
      allMarkdownRemark(
        filter: { frontmatter: { category: { eq: "education" } } }
        sort: { order: DESC, fields: fileAbsolutePath }
      ) {
        edges {
          node {
            id
            html
            frontmatter {
              university
              degrees
              startDate
              endDate
            }
          }
        }
      }
    }
  `);

  const sectionTitle: SectionTitle = markdownRemark.frontmatter;
  const education: EducationEdge[] = allMarkdownRemark.edges;

  return (
    <Container section>
      <TitleSection title={sectionTitle.title} subtitle={sectionTitle.subtitle} />

      {education.map((item) => {
        const {
          id,
          html,
          frontmatter: { university, degrees, startDate, endDate }
        } = item.node;

        return (
          <Timeline
            key={id}
            title={university}
            subtitles={degrees}
            content={<FormatHtml content={html} />}
            startDate={startDate}
            endDate={endDate}
          />
        );
      })}
    </Container>
  );
};

export default Education;

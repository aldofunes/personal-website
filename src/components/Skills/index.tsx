import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Container from 'components/ui/Container';
import TitleSection from 'components/ui/TitleSection';
import ProgressBar from 'components/ui/ProgressBar';

import { SectionTitle } from 'helpers/definitions';

interface Skill {
  node: {
    id: string;
    frontmatter: {
      title: string;
      percentage: number;
    };
  };
}

const Skills: React.FC = () => {
  const { markdownRemark, allMarkdownRemark } = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { category: { eq: "skills section" } }) {
        frontmatter {
          title
          subtitle
        }
      }
      allMarkdownRemark(filter: { frontmatter: { category: { eq: "skills" } } }, sort: { fields: fileAbsolutePath }) {
        edges {
          node {
            id
            frontmatter {
              title
              percentage
            }
          }
        }
      }
    }
  `);

  const sectionTitle: SectionTitle = markdownRemark.frontmatter;
  const skills: Skill[] = allMarkdownRemark.edges;

  return (
    <Container section>
      <TitleSection title={sectionTitle.title} subtitle={sectionTitle.subtitle} center />
      <div className="flex flex-wrap w-full">
        {skills.map((item) => {
          const {
            id,
            frontmatter: { title, percentage }
          } = item.node;

          return (
            <div key={id} className="w-full sm:w-1/2">
              <ProgressBar title={title} percentage={percentage} />
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default Skills;

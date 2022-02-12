import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Container from '../ui/Container';
import TitleSection from '../ui/TitleSection';
import cx from 'classnames';

import { SectionTitle } from '../../helpers/definitions';
import FormatHtml from '../../components/utils/FormatHtml';

interface ProjectEdge {
  node: {
    id: string;
    html: string;
    frontmatter: {
      title: string;
      url?: string;
      startDate: string;
      endDate: string;
    };
  };
}

const Projects: React.FC = () => {
  const { markdownRemark, allMarkdownRemark } = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { category: { eq: "projects section" } }) {
        frontmatter {
          title
          subtitle
        }
      }
      allMarkdownRemark(
        filter: { frontmatter: { category: { eq: "projects" } } }
        sort: { order: DESC, fields: fileAbsolutePath }
      ) {
        edges {
          node {
            id
            html
            frontmatter {
              title
              url
              startDate
              endDate
            }
          }
        }
      }
    }
  `);

  const sectionTitle: SectionTitle = markdownRemark.frontmatter;
  const projects: ProjectEdge[] = allMarkdownRemark.edges;

  return (
    <Container section>
      <TitleSection title={sectionTitle.title} subtitle={sectionTitle.subtitle} center />
      {projects.map((item) => {
        const {
          id,
          html,
          frontmatter: { title, startDate, endDate, url }
        } = item.node;

        return (
          <div key={id} className="my-8 relative">
            <div>
              {url ? (
                <a href={url} target="_blank">
                  <h3 className="font-semibold mt-3">{title}</h3>
                </a>
              ) : (
                <h3 className="font-semibold mt-3">{title}</h3>
              )}

              <div className="mt-1 mb-2 text-xs">
                {startDate} - {endDate}
              </div>
            </div>

            <div className="mt-4 sm:mt-0">
              <FormatHtml content={html} />
            </div>
          </div>
        );
      })}
    </Container>
  );
};

export default Projects;

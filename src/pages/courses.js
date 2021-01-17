import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import CoursesCollection from "../components/CoursesCollection";

const CoursesPage = ({ data, location }) => (
  <Layout location={location}>
    <CoursesCollection courses={data.allContentfulCourses.nodes} />
  </Layout>
);

export default CoursesPage;

export const pageQuery = graphql`
  query CoursesQuery {
    allContentfulCourses(sort: { order: DESC, fields: createdAt }) {
      nodes {
        contentful_id
        url
        title
        description
        image {
          fixed(width: 640, height: 360, quality: 80, resizingBehavior: THUMB) {
            src
          }
        }
      }
    }
  }
`;

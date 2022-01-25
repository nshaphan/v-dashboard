import { gql } from "@apollo/client/core";

const GET_PROJECTS = gql`
  query projects {
    projects(first: 3, orderBy: { direction: DESC, field: NAME }) {
      edges {
        node {
          id
          name
        }
        cursor
      }
    }
  }
`;
export default GET_PROJECTS;

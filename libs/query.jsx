import { gql } from "@apollo/client";

export const getAllPosts = gql`
  query allPosts {
    posts {
      nodes {
        title
        slug
        featuredImage {
          node {
            sourceUrl
            description(format: RENDERED)
            altText
          }
        }
        modified
      }
    }
  }
`;

export const getPost = gql`
  query singlePost($id: ID!) {
    post(idType: SLUG, id: $id) {
      content
      title
      featuredImage {
        node {
          altText
          description(format: RENDERED)
          mediaDetails {
            sizes {
              sourceUrl
            }
          }
          author {
            node {
              avatar {
                url
              }
              name
            }
          }
        }
      }
      modified
    }
  }
`;

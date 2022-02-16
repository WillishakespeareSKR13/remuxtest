import { gql } from '@apollo/client';

export const CREATEARTICLES = gql`
  mutation createArticle($input: CreateArticleInput!) {
    createArticle(input: $input) {
      article {
        title
        slug
        releaseDate
        status
      }
    }
  }
`;
export const UPDATEARTICLES = gql`
  mutation updateArticle($input: UpdateArticleInput!) {
    updateArticle(input: $input) {
      article {
        id
        title
        releaseDate
      }
    }
  }
`;
export const DELETEARTICLE = gql`
  mutation deleteArticle($input: DeleteArticleInput!) {
    deleteArticle(input: $input) {
      article {
        id
      }
    }
  }
`;
export const UPDATESTATUSARTICLES = gql`
  mutation updateStatusArticle($input: UpdateStatusArticleInput!) {
    updateStatusArticle(input: $input) {
      article {
        title
        status
      }
    }
  }
`;

export const CREATETAXONOMY = gql`
  mutation createTaxonomy($input: CreateTaxonomyInput!) {
    createTaxonomy(input: $input) {
      taxonomy {
        id
        name
        slug
        termGroup
      }
    }
  }
`;
export const DELETETAXONOMY = gql`
  mutation deleteTaxonomy($input: DeleteTaxonomyInput!) {
    deleteTaxonomy(input: $input) {
      taxonomy {
        name
      }
    }
  }
`;
export const UPDATETAXONOMY = gql`
  mutation updateTaxonomy($input: UpdateTaxonomyInput!) {
    updateTaxonomy(input: $input) {
      taxonomy {
        id
        name
      }
    }
  }
`;

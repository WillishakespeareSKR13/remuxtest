import { gql } from '@apollo/client';

export const TAXONOMYBYPROJECT = gql`
  query taxonomiesByProject(
    $skip: Int
    $take: Int
    $filter: TaxonomyFilterInput
    $order: [TaxonomySortInput!]
  ) {
    taxonomiesByProject(
      skip: $skip
      take: $take
      filter: $filter
      order: $order
    ) {
      items {
        projectId
        name
        slug
        description
        termGroup
        photo
        parentId
        isPublic
        subCategories {
          projectId
          name
          slug
          description
          termGroup
          photo
          id
          createdAt
          updatedAt
        }

        id
        createdAt
        updatedAt
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
      }
      totalCount
    }
  }
`;
export const GETARTICLEBYID = gql`
  query articleById($id: UUID!, $viewed: Boolean!) {
    articleById(id: $id, viewed: $viewed) {
      id
      title
      projectId
      seoTitle
      content
      releaseDate
      resume
      photo
      slug
      structuredMarking
      imageAlt
      status
      releaseDate
      seoTitle
      seoKeywords
      seoDescription
      structuredMarking
      imageAlt
      author
      categories {
        id
        name
        termGroup
      }
      tags {
        id
        name
        termGroup
      }
    }
  }
`;

export const ARTICLES = gql`
  query listArticles(
    $take: Int
    $skip: Int
    $filter: ArticleFilterInput
    $order: [ArticleSortInput!]
  ) {
    listArticles(take: $take, skip: $skip, filter: $filter, order: $order) {
      totalCount
      items {
        id
        title
        slug
        content
        photo
        projectId
        active
        seoTitle
        author
        seoDescription
        seoKeywords
        structuredMarking
        status
        views
        releaseDate
        imageAlt
        resume
        categories {
          id
          name
          termGroup
        }
        tags {
          id
          name
          termGroup
        }
      }
      pageInfo {
        hasPreviousPage
        hasNextPage
      }
    }
  }
`;

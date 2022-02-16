import { gql } from '@apollo/client';

export const USER = gql`
  query me {
    me {
      id
      email
      createdAt
      updatedAt
      email
      recoverToken
      recoverRegister
      isActive
      firstTime
      loginCount
      taxonomies {
        memberId
        taxonomyId
      }
      groups {
        id
        name
        description
        groupTaxonomies {
          taxonomy {
            id
            name
          }
        }
      }
      memberRoles {
        id
        role {
          id
          name
          codeName
        }
        roleId
      }
      memberProjects {
        id
        projectId
        project {
          name
          description
          logo
          tagLine
          url
        }
        memberProjectRoleProject {
          projectRoleId
          projectRole {
            name
            codeName
            projectId
            id
            createdAt
            updatedAt
          }
          id
          createdAt
          updatedAt
        }
      }
      memberCompanies {
        companyId
        company {
          id
          name
        }
      }
      profile {
        id
        firstName
        lastName
        phone
        photo
        countryId
        country {
          name
          code
        }
      }
    }
  }
`;

export const MEBYID = gql`
  query meById($id: UUID!) {
    meById(id: $id) {
      id
      email
      createdAt
      updatedAt
      email
      recoverToken
      recoverRegister
      isActive
      firstTime
      loginCount
      taxonomies {
        memberId
        taxonomyId
      }
      groups {
        id
        name
        description
        groupTaxonomies {
          taxonomy {
            id
            name
          }
        }
      }
      memberRoles {
        id
        role {
          id
          name
          codeName
        }
        roleId
      }
      memberProjects {
        id
        projectId
        project {
          name
          description
          logo
          tagLine
          url
        }
        memberProjectRoleProject {
          projectRoleId
          projectRole {
            name
            codeName
            projectId
            id
            createdAt
            updatedAt
          }
          id
          createdAt
          updatedAt
        }
      }
      memberCompanies {
        companyId
        company {
          id
          name
        }
      }
      profile {
        id
        firstName
        lastName
        phone
        photo
        countryId
        country {
          name
          code
        }
      }
    }
  }
`;

export const LISTUSER = gql`
  query listUser($skip: Int, $take: Int, $filter: MemberFilterInput) {
    listUsers(skip: $skip, take: $take, filter: $filter) {
      pageInfo {
        hasNextPage
        hasPreviousPage
      }
      totalCount
      items {
        id
        email
        profile {
          firstName
          lastName
          photo
        }
        memberProjects {
          memberProjectRoleProject {
            projectRole {
              name
            }
          }
        }
        memberRoles {
          id
          role {
            id
            name
            codeName
          }
          roleId
        }
      }
    }
  }
`;

export const GETUSERBYID = gql`
  query getUserById($id: ID!) {
    getUserById(id: $id) {
      id
      userinprofile {
        picture
      }
    }
  }
`;

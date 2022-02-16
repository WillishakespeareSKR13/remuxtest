import { gql } from '@apollo/client';

export const PROJECTS = gql`
  query {
    projects {
      id
      name
      logo
      tagLine
      url
      createdAt
      companyId
      projectRoles {
        name
        codeName
      }
      services {
        id
        name
        codeName
        image
        description
        priority
        updatedAt
        createdAt
        projectMicroservices {
          id
          projectId
        }
      }
    }
  }
`;
export const PROJECTSBYID = gql`
  query projectById($id: UUID!) {
    projectById(id: $id) {
      id
      name
      description
      logo
      tagLine
      url
      companyId
      projectRoles {
        name
        codeName
        id
        createdAt
        updatedAt
      }
      memberProjects {
        memberId
      }
      id
      createdAt
      updatedAt
      services {
        id
        name
        codeName
        image
        description
        priority
        updatedAt
        createdAt
        projectMicroservices {
          id
          projectId
        }
      }
    }
  }
`;

export const PROJECTSBYURL = gql`
  query projectByUrl($url: String!) {
    projectByUrl(url: $url) {
      id
      name
      description
      logo
      tagLine
      isReady
      url
      companyId
      site {
        id
        key
        value
      }
      services {
        id
        name
        codeName
        image
        description
        priority
        updatedAt
        createdAt
        projectMicroservices {
          id
          projectId
        }
      }
    }
  }
`;

export const ROLSBYPROJECTS = gql`
  query rolesByProject($id: UUID!) {
    rolesByProject(id: $id) {
      name
      codeName
    }
  }
`;
export const USERBYPROJECTS = gql`
  query listUser($filter: MemberFilterInput) {
    listUsers(filter: $filter) {
      items {
        email
        profile {
          firstName
          lastName
          phone
          memberId
          id
          country {
            name
          }
        }
        memberProjects {
          memberProjectRoleProject {
            projectRole {
              codeName
            }
          }
        }
      }
    }
  }
`;

export const GETPROJECTBYURL = gql`
  query getProjectByUrl($url: String!) {
    geProjectByUrl(url: $url) {
      id
    }
  }
`;
export const GETCONFIGS = gql`
  query configs($id: UUID!) {
    configs(id: $id) {
      key
      value
    }
  }
`;

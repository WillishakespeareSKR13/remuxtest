import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation loginMember($input: LoginMemberInput!) {
    loginMember(input: $input) {
      accessToken
      member {
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
  }
`;

export const RESETPASSWORD = gql`
  mutation sendResetPasswordLink($input: SendResetPasswordLinkInput) {
    sendResetPasswordLink(input: $input) {
      email_status
      success
    }
  }
`;

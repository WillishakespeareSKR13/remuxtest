import { gql } from '@apollo/client';

export const CREATECOMPANY = gql`
  mutation createCompany($input: CreateCompanyInput!) {
    createCompany(input: $input) {
      company {
        id
        name
      }
    }
  }
`;

import { gql } from 'apollo-server-express'

export default gql`
    enum Feature {
        REPORTS,
        SHIFTS
    }
  
    directive @access(features: [Feature!]!) on FIELD_DEFINITION

    type Report {
        id: ID!
        description: String!
    }
    
    type Shift {
        id: ID!
        startDate: String!
        endDate: String!
    }
    
    type User {
        id: ID!
        name: String!
        reports: [Report!]! @access(features: [REPORTS])
        shifts: [Shift!]! @access(features: [SHIFTS])
    }
    
    input CreateReportInput {
        description: String!
    }

    input CreateShiftInput {
        startDate: String!
        endDate: String!
    }

    type Query {
        currentUser: User!
        reports: [Report!]! @access(features: [REPORTS])
        shifts: [Shift!]! @access(features: [SHIFTS])
    }

    type Mutation {
        createReport(input: CreateReportInput!): Report! @access(features: [REPORTS])
        createShift(input: CreateShiftInput!): Shift! @access(features: [SHIFTS])
    }
`
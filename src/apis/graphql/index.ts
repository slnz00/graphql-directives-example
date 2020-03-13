import { ApolloServer } from 'apollo-server-express'
import * as express from 'express'
import { createContext } from '../../context'
import schemaDirectives from './directives'
import resolvers from './resolvers'
import typeDefs from './schema'

export function useGraphql(app: express.Application) {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    schemaDirectives,
    context: createContext
  })

  server.applyMiddleware({ app })
}
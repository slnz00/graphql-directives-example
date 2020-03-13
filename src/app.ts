import * as express from 'express'
import { useGraphql } from './apis/graphql'

export function createApp(): express.Application {
  const app = express()

  useGraphql(app)

  return app
}

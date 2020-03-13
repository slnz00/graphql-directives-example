import { createApp } from './app'

const app = createApp()
const port = process.env.PORT || 3000

app.listen({ port }, () =>
  console.log(`🚀 Server ready at http://localhost:3000/graphql`)
)
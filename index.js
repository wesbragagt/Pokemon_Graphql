const { ApolloServer } = require('apollo-server')
const typeDefs = require('./typeDefs.js')
const resolvers = require('./resolvers.js')

const server = new ApolloServer({
  typeDefs,
  resolvers,
  cors: {
    origin: '*',
    credentials: true
  }
})

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})

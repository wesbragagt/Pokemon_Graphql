const { gql } = require('apollo-server')
const typeDefs = gql`
    type Query {
        allPokemons: [Pokemon!]
    }
    type Pokemon{
            Number: Int
            Pokemon: String
            Type1: String
            Type2: String
            HP: Int
            Defense: Int
            Speed: Int
            Special: Int
            GIF: String
            PNG: String
            Description: String
    }
`
module.exports = typeDefs

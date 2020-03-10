const { gql } = require('apollo-server')
const typeDefs = gql`
    type Query {
        getPokemons(search: String, type: String): [Pokemon!]
        getPokemon(name: String): Pokemon
    }
    type Pokemon{
            Number: ID!
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

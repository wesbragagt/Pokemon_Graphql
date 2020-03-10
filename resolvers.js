const { promisify } = require('util')
const fs = require('fs')
const getAll = promisify(fs.readFile)

function searchPokemons (str, arr) {
  return arr.filter(element => element.Pokemon.toLowerCase().includes(str))
}

module.exports = {
  Query: {
    async getPokemons (_, { search, type }, ___) {
      const data = await getAll('./pokemondb.json', 'utf8')
      if (search) {
        return searchPokemons(search, JSON.parse(data))
      }
      if (type) {
        const typeMatch = e => e.Type1.toLowerCase() === type.toLowerCase() || e.Type2.toLowerCase() === type.toLowerCase()
        return JSON.parse(data).filter(typeMatch)
      }
      return JSON.parse(data)
    },
    async getPokemon (_, { name }, ___) {
      const data = await getAll('./pokemondb.json', 'utf8')
      const matchPokemonName = e => e.Pokemon.toLowerCase() === name.toLowerCase()
      return JSON.parse(data).find(matchPokemonName)
    }
  }
}

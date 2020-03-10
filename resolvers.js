const { promisify } = require('util')
const fs = require('fs')
const getAll = promisify(fs.readFile)

module.exports = {
  Query: {
    async getPokemons (_, __, ___) {
      const data = await getAll('./pokemondb.json', 'utf8')
      return JSON.parse(data)
    }
  }
}

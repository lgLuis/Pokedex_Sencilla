
async function getPokemon(id){
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    const data = await response.json()
    return data
}
async function init(){
    const firstPokemon = await getPokemon(150)
    window.image.setAttribute('src', firstPokemon.sprites.front_default)
    window.pokemon.textContent = firstPokemon.name
}
init()
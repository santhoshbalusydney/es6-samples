
// Objects

const pikachu = { name: 'Pikachu'  };
const stats = { hp: 40, attack: 60, defense: 45 }

//bad code
pikachu['hp'] = stats.hp
pikachu['attack'] = stats.attack
pikachu['defense'] = stats.defense

// OR

const lvl0 = Object.assign(pikachu, stats)
const lvl1 = Object.assign(pikachu, { hp: 45 })

//good code
const lvl0 = { ...pikachu, ...stats }
const lvl1 = { ...pikachu, hp: 45 }


// Arrays

let pokemon = ['Arbok', 'Raichu', 'Sandshrew'];

//bad code
pokemon.push('Bulbasaur')
pokemon.push('Metapod')
pokemon.push('Weedle')

//good code
// Push 
pokemon = [...pokemon, 'Bulbasaur', 'Metapod', 'Weedle']

// Shift

pokemon = ['Bulbasaur', ...pokemon, 'Metapod', 'Weedle', ]






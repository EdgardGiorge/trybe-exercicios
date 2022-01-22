function append(data) {
  const ul = document.querySelector('ul');

  const li = document.createElement('li');
  const divNome = document.createElement('div');
  const divImage = document.createElement('div');
  const img = document.createElement('img');

  divNome.innerHTML = data.name;
  img.src = data.imageUrl;
  divImage.appendChild(img);

  li.appendChild(divNome);
  li.appendChild(divImage);

  ul.appendChild(li);
}

async function getPokemonByName(pokemonName) {
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
  const resposta = await fetch(url);
  const dados = await resposta.json();

  const pokemon = {
    name: dados.name,
    imageUrl: dados.sprites.front_default,
  };

  return pokemon;
}

async function listarPokemon() {
  try {
    // A linha abaixo vai causar uma exceção
    // append(await getPokemonByName('pikachuu'));

    append(await getPokemonByName('squirtle'));
    append(await getPokemonByName('jigglypuff'));
    append(await getPokemonByName('snorlax'));
  } catch (error) {
    console.error(error);
    alert('Ops! Deu algum erro.');
  }
}

window.onload = listarPokemon;

// Arquivo html ...

// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta http-equiv="X-UA-Compatible" content="IE=edge">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <link rel="stylesheet" href="style.css">
//   <title>Pokémons</title>
// </head>
// <body>
//   <h1>Pokémons</h1>
//   <ul></ul>

//   <script src="script.js"></script>
// </body>
// </html>

// Arquivo Css ...

// li {
//   text-decoration: none;
//   display: flex;
//   align-items: center;
// }
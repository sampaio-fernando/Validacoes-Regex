import {useState, useEffect} from 'react';

function ComponentePokemon(){
    const [id, setId] = useState(1);
    const [pokemon, setPokemon] = useState(null);
    
    //função anônima, colchete(dependências)
    useEffect(() => {
        if(id){
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(response => response.json())
            .then(data => setPokemon(data))
        }
    }, [id])

    return(
        <div>
            <h2>Exemplo de useEffect</h2>
            <label>Id do Pokémon
                <input type="number" value={id} onChange={e => setId(e.target.value)} min="1"></input>
            </label>
            {pokemon ? (
                <img src={pokemon.sprites.front_default} style={{maxWidth: "500px"}}></img>
            ) : (
                <p>Carregando pokemon...</p>
            )}
        </div>
    );
}

export default ComponentePokemon;
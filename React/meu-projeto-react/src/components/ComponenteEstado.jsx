import {useState } from "react";    

function ComponenteEstado(){
    const [contador, setContador] = useState(0);

    return(
        <div>
            <h2>Exemplo de useState</h2>
            <p>Você clicou {contador} vezes</p>
            <button onClick={ () => setContador(contador + 1) }>
                Clique aqui
            </button>
        </div>
    );
}


export default ComponenteEstado;
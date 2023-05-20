
import Pergunta from "./Pergunta"



export default function Perguntas(props) {

    const {contador, setContador} = props
    const {resultado, setResultado} = props;

    const array = [
        {num: 1},
        {num: 2},
        {num: 3},
        {num: 4},
        {num: 5},
        {num: 6},
        {num: 7},
        {num: 8}
    ]

    return (
        <> 
            {array.map( (p) =>  
            <Pergunta
                contador={contador}
                setContador={setContador}  
                key={p.num} 
                numero={p.num} 
                resultado={resultado}
                setResultado={setResultado}
                /> 
            )}
        </>
    )
}




import Pergunta from "./Pergunta"


export default function Perguntas() {
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
            {array.map( (p) => <Pergunta  key={p.num} numero={p.num} /> )}
        </>
    )
}



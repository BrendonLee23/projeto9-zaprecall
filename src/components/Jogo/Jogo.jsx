
import Perguntas from "../Perguntas/Perguntas";
import {Jogo} from "./JogoStyle";

export default function JogoArea(props) {
    
    const {contador, setContador} = props


    return (
        <Jogo>
            <Perguntas contador={contador} setContador={setContador} />
        </Jogo>
    )
}

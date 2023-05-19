
import { useState } from 'react';
import imgLogo from  '../../assets/logo.png';
import JogoArea from '../Jogo/Jogo';
import {Rodape, TelaJogo, Topo} from './GameAreaStyle';



export default function GameArea(){

    const [contador, setContador] = useState(0)

    return(
        <TelaJogo>
            <Topo>
                <img src={imgLogo} alt="imagemLogo" />
                <h1>ZapRecall</h1>
            </Topo>
            <JogoArea contador={contador} setContador={setContador}/>
            <Rodape data-test="footer">
                <h1>{contador}/8 CONCLUÍDOS</h1>
            </Rodape>
        </TelaJogo>
    )
}


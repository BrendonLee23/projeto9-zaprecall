
import imgLogo from  '../../assets/logo.png';
import JogoArea from '../Jogo/Jogo';
import {Rodape, TelaJogo, Topo} from './GameAreaStyle';



export default function GameArea(){
    return(
        <TelaJogo>
            <Topo>
                <img src={imgLogo} alt="imagemLogo" />
                <h1>ZapRecall</h1>
            </Topo>
            <JogoArea/>
            <Rodape>
                <h1>0/8 CONCLUÍDOS</h1>
            </Rodape>
        </TelaJogo>
    )
}


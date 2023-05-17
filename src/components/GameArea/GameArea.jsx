
import imgLogo from  '../../assets/logo.png';
import setaPlay from '../../assets/seta_play.png';
import { Rodape, TelaJogo } from './GameAreaStyle';
import { Topo } from './GameAreaStyle';
import { Jogo } from './GameAreaStyle';
import { Pergunta } from './GameAreaStyle';

function iniciarPergunta(){
    alert('pergunta 1')
}

export default function GameArea(){
    return(
        <TelaJogo>
            <Topo>
                <img src={imgLogo} alt="imagemLogo" />
                <h1>ZapRecall</h1>
            </Topo>
            <Jogo>
                <Pergunta>
                    <h1>Pergunta 1</h1>
                    <img onClick={iniciarPergunta} src={setaPlay} alt="SetaPlay" />
                </Pergunta>
                <Pergunta>
                    <h1>Pergunta 2</h1>
                    <img src={setaPlay} alt="SetaPlay" />
                </Pergunta>
                <Pergunta>
                    <h1>Pergunta 3</h1>
                    <img src={setaPlay} alt="SetaPlay" />
                </Pergunta>
                <Pergunta>
                    <h1>Pergunta 4</h1>
                    <img src={setaPlay} alt="SetaPlay" />
                </Pergunta>
            </Jogo>
            <Rodape>
                <h1>0/4 CONCLUÍDOS</h1>
            </Rodape>
        </TelaJogo>
    )
}


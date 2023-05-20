
import { useState } from 'react';
import imgLogo from '../../assets/logo.png';
import JogoArea from '../Jogo/Jogo';
import { Rodape, TelaJogo, Topo } from './GameAreaStyle';
import { styled } from 'styled-components';
import iconGreen from '../../assets/icone_certo.png';
import iconRed from '../../assets/icone_erro.png';
import iconOrange from '../../assets/icone_quase.png';


export default function GameArea(props) {

    const [contador, setContador] = useState(0)
    const { resultado, setResultado } = props


    return (
        <TelaJogo>
            <Topo>
                <img src={imgLogo} alt="imagemLogo" />
                <h1>ZapRecall</h1>
            </Topo>
            <JogoArea
                contador={contador}
                setContador={setContador}
                resultado={resultado}
                setResultado={setResultado}
            />
            {contador === 8 ?
                <RodapeBonus>
                    {resultado.includes("vermelho") ?
                        <>
                            <h1>😥  Putz...</h1>
                            <h2>Ainda faltam alguns... Mas não desanime!</h2>
                            <h3>{contador}/8 CONCLUÍDOS</h3>
                        </>
                        :
                        <>
                            <h1>🥳  Parabéns</h1>
                            <h2>Você não esqueceu de nenhum flashcard!</h2>
                            <h3>{contador}/8 CONCLUÍDOS</h3>
                        </>
                    }
                    <GrupoIcons>
                        {resultado.map((i) => <img data={} key={i.id} src={i === "verde" ? iconGreen : i === "vermelho" ? iconRed : i === "laranja" ? iconOrange : ""} alt="icon" />)}
                    </GrupoIcons>
                </RodapeBonus> :
                <Rodape>
                    <h1>{contador}/8 CONCLUÍDOS</h1>
                    <GrupoIcons>
                        {resultado.map((i) => <img data={} key={i.id} src={i === "verde" ? iconGreen : i === "vermelho" ? iconRed : i === "laranja" ? iconOrange : ""} alt="icone" />)}
                    </GrupoIcons>
                </Rodape>}
        </TelaJogo>
    )
}

const RodapeBonus = styled.div`
    width: 375px;
    height: 150px;
    background: #FFFFFF;
    box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);
    display: flex;
    flex-direction: column;
    justify-content: center;  
    align-items: center;
    padding-top: 10px;
    padding-bottom: 20px;
    bottom: 0;
    position: fixed;

    h1{
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 22px;
        color: #333333;
        margin-top: 10px;
    }
    h2{
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        text-align: center;
        color: #333333;
        margin-left: 60px;
        margin-right: 60px;
        margin-top: 10px;
    }
    h3{
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #333333;
        margin-top: 10px;
        margin-bottom: 10px;
    }
    `
const GrupoIcons = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-top: 10px;
    `
import { styled } from "styled-components";
import setaPlay from "../../assets/seta_play.png";
import setaVirar from "../../assets/seta_virar.png";
import { useState } from "react";

export default function Pergunta(props) {
    const [deck, setDeck] = useState(true);
    // const [pergunta, setPergunta] = useState(false);
    const [resposta, setResposta] = useState(false);
    // const [resultado, setResultado] = useState(false);

    const cards = [
        { question: "O que é JSX?", answer: "Uma extensão da linguagem JavaScript" },
        { question: "O React é __", answer: "Uma biblioteca JavaScript para construção de interfaces" },
        { question: "Componentes devem iniciar com __", answer: "Letra maiúscula" },
        { question: "Podemos colocar __ dentro do JSX", answer: "expressões" },
        { question: "O ReactDOM nos ajuda __", answer: "Interagindo com a DOM para colocar componentes React na mesma" },
        { question: "Usamos o npm para __", answer: "Gerenciar os pacotes necessários e suas dependências" },
        { question: "Usamos props para __", answer: "Passar diferentes informações para componentes" },
        { question: "Usamos estado (state) para __", answer: "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente" }
    ]

    function mostrarPergunta() {
        setDeck(false);
    }
    function mostrarResposta() {
        setResposta(true)
    }

    return (
        <>
            {deck ?
                <Card>
                    <h1>Pergunta {props.numero}</h1>
                    <img onClick={mostrarPergunta} src={setaPlay} alt="seta Play" />
                </Card>
                :
                <OpenCard>
                    <h1>{resposta === false ? cards[props.numero - 1].question : cards[props.numero - 1].answer}</h1>
                    {resposta === false ?
                        <img onClick={mostrarResposta} src={setaVirar} alt="Seta Virar" />
                        :
                        <ButtonGrup>
                            <ButtonRed>Não lembrei</ButtonRed>
                            <ButtonOrange>Quqase não lembrei</ButtonOrange>
                            <ButtonGreen>Zap!</ButtonGreen>
                        </ButtonGrup>

                    }
                </OpenCard>
            }
        </>
    )
}

const Card = styled.div`
    width: 270px;
    min-height: 65px; /* Changed 'height' to 'min-height' */
    background: #FFFFFF;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px 0 20px;
    h1 {
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #333333;
    margin: 0; /* Added to remove top and bottom margin */
    }
    img {
    width: 20px;
    height: 23px;
    color: #333333;
    }
    img:hover {
    cursor: pointer;
    -webkit-transform: scale(1.5);
    transform: scale(1.2);
    }
`
const OpenCard = styled.div`
    width: 299px;
    background: #FFFFD5;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 15px;
    padding-bottom: 15px;
    display: inline;
    h1{
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
    word-wrap: break-word;
    }
    img{
    width: 30px;
    height: 20px;
    padding-right: 10px;
    margin-left: 260px;
    cursor: pointer;
    display: inline;
    }
`

const ButtonGrup = styled.div`
    display: flex;
    gap:15px;
`
const ButtonRed = styled.button`
    width: 85.17px;
    height: 37.17px;
    background: #FF3030;
    border-radius: 5px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #FFFFFF;
    cursor: pointer;
    animation: go-back 1s;
`

const ButtonOrange = styled.button`
    width: 85.17px;
    height: 37.17px;
    background: #fa7900;
    border-radius: 5px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #FFFFFF;
    cursor: pointer;
`

const ButtonGreen = styled.button`
    width: 85.17px;
    height: 37.17px;
    background: #08ec00;
    border-radius: 5px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #FFFFFF;
    cursor: pointer;
`
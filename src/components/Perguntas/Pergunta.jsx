import { styled } from "styled-components";
import setaPlay from "../../assets/seta_play.png";
import setaVirar from "../../assets/seta_virar.png";
import { useState } from "react";
import iconGreen from "../../assets/icone_certo.png";

export default function Pergunta(props) {
    const [deck, setDeck] = useState(0);
    // const [resposta, setResposta] = useState(false);


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



    function ativaDeck2() {
        setDeck(1);
        console.log(deck)
    }
    function ativaDeck3() {
        setDeck(2);
        console.log(deck)
    }
    function ativaDeck4() {
        setDeck(3);
        console.log(deck)
    }

    function verificaDeck() {

        if (deck === 0) {
    return <Card>
                <h1>Pergunta {props.numero}</h1>
                <img onClick={ativaDeck2} src={setaPlay} alt="seta Play" />
            </Card>
        } if (deck === 1) {
    return <OpenCard>
                <h1>{cards[props.numero - 1].question}</h1>
                <img onClick={ativaDeck3} src={setaVirar} alt="Seta Virar" />
            </OpenCard>
        } if (deck === 2) {
    return <OpenCard>
                <h1>{cards[props.numero - 1].answer}</h1>
                <ButtonGrup>
                    <ButtonRed onClick={ativaDeck4} >Não lembrei</ButtonRed>
                    <ButtonOrange onClick={ativaDeck4} >Quase não lembrei</ButtonOrange>
                    <ButtonGreen onClick={ativaDeck4} >Zap!</ButtonGreen>
                </ButtonGrup>
            </OpenCard>
        } if (deck === 3){
    return  <LastCard>
                <h1>Pergunta {props.numero}</h1>
                <img src={iconGreen} alt="certo" />
            </LastCard>
        }
    }
    return (
        <>
            {verificaDeck()}
        </>
    )
}

{/* {deck ?
                :
                <OpenCard>
                    <h1>{resposta === false ? cards[props.numero - 1].question : cards[props.numero - 1].answer}</h1>
                    {resposta === false ?
                        <img onClick={mostrarResposta} src={setaVirar} alt="Seta Virar" />
                        :
                        <ButtonGrup>
                            <ButtonRed>Não lembrei</ButtonRed>
                            <ButtonOrange>Quase não lembrei</ButtonOrange>
                            <ButtonGreen>Zap!</ButtonGreen>
                        </ButtonGrup>
                    }
                </OpenCard>
            }
    ) */}


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
    height: 18px;
    padding-right: 10px;
    margin-left: 256px;
    margin-bottom: -10px;
    cursor: pointer;
    display: inline;
    }
    img:hover {
    cursor: pointer;
    -webkit-transform: scale(1.5);
    transform: scale(1.2);
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
    border-color: red;
    &:hover {
    background-color: #dc2f2f; 
    transition: 0.5s;
    opacity: 0.7;
}
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
    border-color: #f99203;
    &:hover {
    background-color: #fa741b; 
    transition: 0.5s;
    opacity: 0.7;
}
`

const ButtonGreen = styled.button`
    width: 85.17px;
    height: 37.17px;
    background: #2FBE34;
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
    border-color: #31e100;
    &:hover {
    background-color: #78ff3e; 
    transition: 0.5s;
    opacity: 0.7;
}
    `

const LastCard = styled.div`
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
    height: 21px;
    color: #333333;
    }
`



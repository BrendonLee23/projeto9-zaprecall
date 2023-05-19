
import setaPlay from "../../assets/seta_play.png";
import setaVirar from "../../assets/seta_virar.png";
import { useState } from "react";
import iconGreen from "../../assets/icone_certo.png";
import iconOrange from "../../assets/icone_quase.png";
import iconRed from "../../assets/icone_erro.png";
import { Card } from "./PerguntaStyle";
import { OpenCard } from "./PerguntaStyle";
import { LastCard } from "./PerguntaStyle";
import { ButtonGrup } from "./PerguntaStyle";
import { ButtonGreen } from "./PerguntaStyle";
import { ButtonOrange } from "./PerguntaStyle";
import { ButtonRed } from "./PerguntaStyle";


export default function Pergunta(props) {
    const [deck, setDeck] = useState(0);
    const [cor, setCor] = useState()
    const { contador, setContador } = props


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
    }
    function ativaDeck3() {
        setDeck(2);
    }
    function deckAcerto() {
        setDeck(3);
        setCor("green");
        setContador(contador + 1); // Atualiza o contador
    }

    function deckMeioAcerto() {
        setDeck(3);
        setCor("orange");
        setContador(contador + 1); // Atualiza o contador
    }

    function deckErro() {
        setDeck(3);
        setCor("red");
        setContador(contador + 1);
        console.log(contador) // Atualiza o contador
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
                    <ButtonRed onClick={deckErro}  >Não lembrei</ButtonRed>
                    <ButtonOrange onClick={deckMeioAcerto} >Quase não lembrei</ButtonOrange>
                    <ButtonGreen onClick={deckAcerto} >Zap!</ButtonGreen>
                </ButtonGrup>
            </OpenCard>
        } if (deck === 3) {
            return <LastCard>
                {cor === "red" ? <h1>Pergunta {props.numero}</h1> : cor === "orange" ? <h2>Pergunta {props.numero}</h2> : cor === "green" ? <h3>Pergunta {props.numero}</h3> : ""}
                <img src={cor === "green" ? iconGreen : cor === "orange" ? iconOrange : cor === "red" ? iconRed : ""} alt={cor} />
            </LastCard>
        }
    }
    return (
        <>
            {verificaDeck()}
        </>
    )
}


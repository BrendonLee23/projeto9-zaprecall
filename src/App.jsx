import { styled } from 'styled-components';
import imgLogo from './assets/logo.png';
import { useState } from 'react';
import GameArea from './components/GameArea/GameArea';



export default function App() {
  const [telaInicial, setTelaInicial] = useState(true);

  function iniciarJogo() {
    setTelaInicial(false);
  }

  return (
    <div>
      {telaInicial ? (
        <AppArea>
          <img src={imgLogo} alt="Logo-Image" />
          <h1>ZapRecall</h1>
          <BotaoIniciar onClick={iniciarJogo}>Iniciar Recall!</BotaoIniciar>
        </AppArea>
      ) : (
        <GameArea />
      )}
    </div>
  );
}


const AppArea = styled.div`
  background-color: #FB6B6B;
  width: 375px;
  height: 667px;
  display: flex;
  flex-direction: column;
  justify-content: center;  
  align-items: center;
  img {
    width: 136px;
    height: 161px;
    transition: all 0.3s;
    cursor: pointer;
    
}img:hover{
    -webkit-transform: scale(1.5);
    transform: scale(1.3);
  }
  
  h1{
  width: 257px;
  height: 59px;
  font-family: 'Righteous';
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 45px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.012em;
  color: #FFFFFF;
  margin-left: 90px;
  }
`
const BotaoIniciar = styled.button`
  width: 246px;
  height: 54px;
  background: #FFFFFF;
  border: 1px solid #D70900;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  color: #D70900;
  

  &:hover {
    background-color: #fcd3d3; 
    transition: 0.5s;
    opacity: 0.7;
  }
`;


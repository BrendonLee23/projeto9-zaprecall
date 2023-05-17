import { styled } from "styled-components";


export const TelaJogo = styled.div`
    background-color: #FB6B6B;
    width: 375px;
    height: 667px;
    display: flex;
    flex-direction: column;
    justify-content: center;  
    align-items: center;
`

export const Topo = styled.div`
    width: 300px;
    height: 150px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    img{
        width: 52px;
        height: 60px;
        cursor: pointer;
    }
    img:hover{
    -webkit-transform: scale(1.5);
    transform: scale(1.3);
}
    h1{
        width: 203.17px;
        height: 44px;
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
        transform: rotate(0.58deg);
    }
    `

export const Jogo = styled.div`
    width: 310px;
    height: 330px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap:25px;
    margin-bottom: 120px;

`

export const Pergunta = styled.div`
    width: 270px;
    height: 65px;
    background: #FFFFFF;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px 0 20px;    
    
    h1{
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        color: #333333;
    }
    img{
        width: 20px;
        height: 23px;
        color: #333333;
    }
    img:hover{
    cursor: pointer;
    -webkit-transform: scale(1.5);
    transform: scale(1.2);
    }
`

export const Rodape = styled.div`
    width: 375px;
    height: 70px;
    background: #FFFFFF;
    box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);
    display: flex;
    justify-content: center;
    align-items: center;


    h1{
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #333333;
    }
`



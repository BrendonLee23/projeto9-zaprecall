import styled  from "styled-components";


export const TelaJogo = styled.div`
    background-color: #FB6B6B;
    width: 375px;
    display: flex;
    flex-direction: column;
    justify-content: center;  
    align-items: center;
    padding-bottom: 220px;
`

export const Topo = styled.div`
    width: 300px;
    height: 240px;
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

export const Rodape = styled.div`
    width: 375px;
    height: 100px;
    background: #FFFFFF;
    box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    bottom: 0;
    position: fixed;

    h1{
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #333333;
    }
`



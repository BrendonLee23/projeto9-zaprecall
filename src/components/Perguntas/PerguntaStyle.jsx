import { styled } from "styled-components"



export const Card = styled.div`
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
export const OpenCard = styled.div`
    width: 299px;
    background: #FFFFD5;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 15px;
    padding-bottom: 40px;
    padding-top: 15px;
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
    margin-bottom: -30px;
    cursor: pointer;
    display: inline;
    }
    img:hover {
    cursor: pointer;
    -webkit-transform: scale(1.5);
    transform: scale(1.2);
    }
`

export const ButtonGrup = styled.div`
    display: flex;
    gap:15px;
    margin-top: 35px;
    margin-bottom: -20px;
`
export const ButtonRed = styled.button`
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
export const ButtonOrange = styled.button`
    width: 85.17px;
    height: 37.17px;
    background: #faa200;
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
    border-color:#faa200;
    &:hover {
    background-color: #ffaf1b;
    transition: 0.5s;
    opacity: 0.7;
}
`
export const ButtonGreen = styled.button`
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

export const LastCard = styled.div`
    width: 270px;
    min-height: 65px; /* Changed 'height' to 'min-height' */
    background: #FFFFFF;
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
    color: #fa0000;
    margin: 0; /* Added to remove top and bottom margin */
    text-decoration: line-through;
    }
    h2{
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #ff6600;
    margin: 0; /* Added to remove top and bottom margin */
    text-decoration: line-through;
    }
    h3{
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #3dbe0a;
    margin: 0; /* Added to remove top and bottom margin */
    text-decoration: line-through;
    }
    img {
    width: 20px;
    height: 21px;
    color: #333333;
    }
`

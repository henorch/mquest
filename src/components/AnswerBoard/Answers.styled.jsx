import Styled, { styled } from 'styled-components';

export const Container = Styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    margin:0px auto;
    margin-top: 20px;
`
export const Option = Styled.div`
    display:flex;
    align-items:center;
    border:1px solid white;
    border-radius:20px;
    padding:10px;
    width:85%;
    margin:2px;

    &:hover{
        background:white;
    }

`

export const ButtonHolder = styled.div`
    height: 10vh;
    width:98vw;
    margin-top:20px;
    display:flex;

    justify-content:space-evenly;
`
export const OptionButton = styled.button`
    width:30vw;
    height: 5vh;
    border-radius:20px;
    background:transparent;
    border:1px solid white;
`
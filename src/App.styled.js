import Styled, { styled } from 'styled-components';

export const AppContainer = Styled.div`
    height:100vh;
    width:100vw;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;


`
export const TagBar = styled.div`
    background:blue;
    margin-bottom:2px;
    display:flex;
    align-items:center;
    padding-left:10px;
    height:10vh;
    width:100%;
`

export const AppMain = Styled.div`
    background:grey;
    height:80vh;
    font-style: Agbalumo;
    width:94%;
    display:flex;
    flex-direction:column;
    align-items:center;
    border-radius:20px;
    box-shadow: 2px 2px 2px gray;
`
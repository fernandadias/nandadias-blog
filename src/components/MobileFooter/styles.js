import styled from "styled-components"
import { Link } from "gatsby"

export const MobileFooterContainer = styled.section`
  display: flex;
  
  background: var(--solid);
  position: fixed;
  width: 100%;
  margin: -40px 0 0 -40px;
  z-index: 4;
  padding: 20px 40px;
  justify-content: space-between;
  bottom: 0;

  @media(min-width: 900px){
    display: none;
  }

`

export const Categories = styled.div`
  display: flex;

  a{
    font-family: Roboto Mono;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 40px;
    padding: 2px 8px;

    letter-spacing: 0.02em;

    color: var(--texts);

    &:hover{
      cursor: pointer;
      background: var(--theme);
      color: var(--background);
    }

  }
`

export const Icons = styled.div`
  display: flex;

  a{
    color: var(--texts);
    text-decoration: none;
    font-size: 12px;
    padding: 2px 8px;

    svg{
      display: inline-block;
      width: 30px;
      height: 40px;
    }
  }
`
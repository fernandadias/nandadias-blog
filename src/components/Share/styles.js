import styled from "styled-components"

export const ShareContainer = styled.div`
  width: 100px;

  h1 {
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 24px;
    color: var(--texts);
    display: inline-block;
    margin-bottom: 16px;
  } 
    a{
      text-decoration: none;
      font-family: Roboto Mono;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 22px;
      letter-spacing: 0.02em;
      color: var(--titles);
      display: block;
      padding: 1px 8px;
      margin-left: -8px;

      &:hover{
        text-decoration: none;
        background: ${props => props.category ? `var(--${props.category}Color)` : `var(--theme)`};
        color: var(--solid);
      }
  }
`
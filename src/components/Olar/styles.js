import styled from "styled-components"

export const OlarContainer = styled.div`
  width: 100px;

  @media(max-width: 900px){
    width: 100%;
  }

  h1 {
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 24px;
    color: var(--titles);

    @media(max-width: 900px){
      text-align: center;
      margin-top: 20px;
      font-size: 24px;
    }

  }

  p{
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: 0.02em;
    color: var(--texts);
    margin-top: 8px;
    
    a{
      text-decoration: none;
      color: var(--theme);

      &:hover{
        text-decoration: underline;
      }
  }

  @media(max-width: 900px){
    text-align: center;
    width: 100%;
  }

`
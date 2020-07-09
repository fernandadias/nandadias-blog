import styled from "styled-components"

export const OlarContainer = styled.div`
  width: 100px;

  h1 {
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 24px;
    color: var(--titles);
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

      &:hover{
        text-decoration: underline;
      }
  }
`
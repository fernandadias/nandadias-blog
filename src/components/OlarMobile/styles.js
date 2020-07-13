import styled from "styled-components"

export const OlarMobileContainer = styled.div`

  @media(min-width: 900px){
    display: none;
  }

  padding-bottom: 140px;

  p{
    text-align: center;
    color: var(--texts);
    line-height: 19px;
  }

`

export const OlarAvatarContainer = styled.div`

  h1{
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 40px;
    color: var(--titles);
    text-align: center;
  }

  p{

  }

`

export const OlarHeaderContainer = styled.div`
  display: flex;

  a{
    flex: 1;
    color: var(--titles);

    & + a{
      text-align: right;
    }
  }

  svg{
    height: 42px;
    width: auto;
    margin-left: 0
  }
`

export const OlarContentContainer = styled.div`

  a{
    display: block;
    color: var(--titles);
    text-decoration: none;
    text-align: center;
    line-height: 19px;
    padding: 5px;
  }

`

export const WebMobileContainer = styled.div`

  @media(max-width: 900px){
    display: none;
  }

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  div{
    margin-top: 50vh;
    top: -100px;
    position: absolute;
    height: 200px;
  }

  h1{
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 40px;
    color: var(--titles);
    text-align: center;
  }

  p{
    text-align: center;
    color: var(--texts);
    line-height: 19px;

    a{
      color: var(--titles);
      padding: 5px;
      text-decoration: none;
    }
  }

`
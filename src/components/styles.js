import styled from "styled-components"

export const NotFoundContainer = styled.div`

  margin-left: 180px;
  padding: 40px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media(max-width: 900px){
    margin-left: 20px;
  }

  div{
    flex: 1;
    max-width: 900px;
    padding-right: 40px;
    z-index: 2;
    text-align: center;

    @media(max-width: 900px){
      padding: 0 0 80px 0;
    }

    h1{
      color: var(--titles);
      font-size: 20px;
      line-height: 40px;
      letter-spacing: 0.02em;
      font-weight: bold;
      text-decoration: none;
      margin: 16px 0;

    }

    p{
      color: var(--titles);
    }

    a{
      color: var(--theme);
      text-decoration: none;
    }

  }


  img{
    height: 100%;
    width: auto;
    position: fixed; 
    top: 0; 
    left: 0; 
    min-width: 100%;
    min-height: 100%;
    opacity: .3;
  }

`

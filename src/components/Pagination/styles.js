import styled from 'styled-components'

export const PaginationContainer = styled.div`

  margin-left: -20px;
  padding: 40px 0;
  border-top: 1px solid var(--texts);
  display: flex;

  @media(max-width: 900px){
    flex-direction: column;
  }

  a{
    text-decoration: none;
    color: var(--titles);
    padding: 8px 20px;

    &:hover{
      background-color: var(--theme);
      color: var(--background)
    }
    
    & + a {
      margin-left: 40px;

      @media(max-width: 900px){
        margin: 20px 0 0 0;
      }
    }

    svg{
      display: inline-block;
      height: 25px;
    }
  }

`
import styled from 'styled-components'

export const PaginationContainer = styled.div`

  margin-left: -20px;
  padding: 40px 0;
  border-top: 1px solid var(--texts);
  display: flex;

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
    }

    svg{
      display: inline-block;
      height: 25px;
    }
  }

`
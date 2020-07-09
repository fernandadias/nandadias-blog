import styled from 'styled-components'

export const PaginationContainer = styled.div`

  padding-bottom: 40px;
  margin-left: -20px;

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
  }

`
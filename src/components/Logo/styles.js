import styled from "styled-components"
import { Link } from 'gatsby'

export const LogoLink = styled(Link)`

  text-decoration: none;

  h1{
    font-family: Montserrat;
    font-style: normal;
    font-weight: 900;
    font-size: 20px;
    line-height: 40px;
    color: var(--titles);

    span{
      color: var(--theme);
      font-size: 26px;
    }
  }

  &:hover{
    
    h1{
      color: var(--theme);

      span{
        color: var(--titles);
      }
    }
  }

`
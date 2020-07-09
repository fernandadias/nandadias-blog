import styled from 'styled-components'
import { Link } from 'gatsby'

export const RecommendedContainer = styled.div`

  margin-left: -20px;
  padding: 40px 0;
  border-top: 1px solid var(--texts);
  display: flex;
`

export const RecommendedLink = styled(Link)`
  text-decoration: none;
  color: var(--titles);
  padding: 8px 20px;

  &:hover{
    background-color: ${props => props.category ? `var(--${props.category}Color)` : `var(--theme)`};
    color: var(--background)
  }
  
  & + a {
    margin-left: 40px;
  }

  svg{
    display: inline-block;
    height: 25px;
  }
`
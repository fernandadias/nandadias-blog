import styled from "styled-components"
import { Link } from 'gatsby'



export const PostItemWrapper = styled.div`
  position: relative;
`

export const PostItemInfo = styled.article`
  margin-bottom: 40px;
`

export const PostItemTitle = styled.h1`
  color: var(--titles);
  font-size: 30px;
  line-height: 40px;
  letter-spacing: 0.02em;
  font-weight: bold;
  text-decoration: none;
`

export const PostItemDate = styled.p`
  font-size: 12px;
  color: var(--texts);
  line-height: 40px;

  svg{
    width: 16px;
  }
`

export const PostItemLine = styled.div`
background: ${props => props.category ? `var(--${props.category}Color)` : `var(--theme)`};
width: 4px;
height: 19px;
display: block;
position: absolute;
bottom: 50px;
left: -16px;
`

export const PostItemLink = styled(Link)`
  text-decoration: none;

  &: hover{
    ${ PostItemTitle} {
      color: ${props => props.category ? `var(--${props.category}Color)` : `var(--theme)`};
    }

    ${ PostItemLine} {
      height: 21px;
    }
  }
`
import styled from "styled-components"
import { Link } from "gatsby"

export const MobileHeaderContainer = styled.div`
  display: flex;
  
  background: linear-gradient(
    180deg, var(--backgroundRGBA-solid)
    0%, var(--backgroundRGBA-solid)
    80%, var(--backgroundRGBA-transparent) 100%);
  position: fixed;
  width: 100%;
  margin: -40px 0 0 -40px;
  z-index: 4;
  padding: 20px 40px;
  justify-content: space-between;

  @media(min-width: 900px){
    display: none;
  }

`

export const OlarOpen = styled(Link)`
  display: flex;
  text-decoration: none;

  div{
    width: 40px;
    height: 40px;
    display: inline-block;
  }

  h1{
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 40px;
    color: var(--titles);
    display: inline-block;
    margin-left: 8px;
  }

`
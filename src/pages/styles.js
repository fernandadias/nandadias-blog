import styled from "styled-components"
import { Link } from 'gatsby'


export const SidebarContainer = styled.aside`
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 100vh;
  position: fixed;

  @media(max-width: 900px){
    display: none;
  }
`

export const LogoWapper = styled.div`
  width: 122px;
  height: 21px;
`

export const ActionLinks = styled.div`
  transform: rotate(-90deg);
  transform-origin: top left;
  position: absolute;
  transform-origin: top left;
  bottom: 540px;
  width: 230px;

  @media(max-height: 820px){
    bottom: 440px;
  }

  @media(max-height: 730px){
    bottom: 300px;
  }
`
export const SocialLinks = styled.div`
  display: flex;
  transform: rotate(-90deg);
  transform-origin: top left;
  position: absolute;
  transform-origin: top left;
  bottom: 40px;
`

export const MenuLink = styled(Link)`
  display: inline;
  padding: 0 0 16px 0;
  border: 1px solid var(--background);
  text-decoration: none;
  font-size: 12px;
  padding: 2px 8px;

  background: var(--background);
  color: var(--texts);

  &:hover{
    background: var(--theme);
    color: var(--solid);
  }

  .icon{
    display: inline-block;
    width: 20px;
    transform: rotate(90deg);
    display: none;
  }

  .text{
    display: inline-block;
  }


  @media(max-height: 730px){
    &:hover{
      background: none;
      color: var(--theme);
    }
    .text{
      display: none;
    }

    .icon{
      display: inline-block;
    }
  }
`

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

export const NotFoundMain = styled.div`

`
import styled from "styled-components"
import { Link } from "gatsby"

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
  text-decoration: none;
  font-size: 12px;
  padding: 2px 8px;

  &:hover{
    background: var(--theme);

    span.icon path{
      color: var(--theme);
    }

    span{
      color: var(--solid);
    }
  }

  .icon{
    display: inline-block;
    width: 20px;
    transform: rotate(90deg);
    display: none;

    path{
      color: var(--texts);
    }
  }

  .text{
    display: inline-block;
    color: var(--texts);
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

export const MenuSocialLink = styled.a`
  display: inline;
  padding: 0 0 16px 0;
  text-decoration: none;
  font-size: 12px;
  padding: 2px 8px;

  &:hover{
    background: var(--theme);

    span.icon path{
      color: var(--theme);
    }

    span{
      color: var(--solid);
    }
  }

  .icon{
    display: inline-block;
    width: 20px;
    transform: rotate(90deg);
    display: none;

    path{
      color: var(--texts);
    }
  }

  .text{
    display: inline-block;
    color: var(--texts);
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
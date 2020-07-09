import styled from "styled-components"

export const CategoriesContainer = styled.p`
  position: fixed;
  right: 40px;
  bottom: 40px;
  text-align: right;

  a{
    font-family: Montserrat;
    font-style: normal;
    font-weight: 900;
    font-size: 20px;
    line-height: 24px;
    color: var(--titles);
    text-decoration: none;
    padding: 2px 8px;
    margin: 0 2px;

    &.all{
      &.active, &.active:hover{
        color: var(--theme);
        background: none;
      }
      &:hover{
        background: var(--theme);
        color: var(--solid);
      }
    }
    &.design{
      &.active, &.active:hover{
        color: var(--designColor);
        background: none;
      }
      &:hover{
        background: var(--designColor);
        color: var(--solid);
      }
    }
    &.product{
      &.active, &.active:hover{
        color: var(--productColor);
        background: none;
      }
      &:hover{
        background: var(--productColor);
        color: var(--solid);
      }
    }
    &.front{
      &.active, &.active:hover{
        color: var(--frontColor);
        background: none;
      }
      &:hover{
        background: var(--frontColor);
        color: var(--solid);
      }
    }
    &.data{
      &.active, &.active:hover{
        color: var(--dataColor);
        background: none;
      }
      &:hover{
        background: var(--dataColor);
        color: var(--solid);
      }
    }
    &.music{
      &.active, &.active:hover{
        color: var(--musicColor);
        background: none;
      }
      &:hover{
        background: var(--musicColor);
        color: var(--solid);
      }
    }
    &.back{
      &.active, &.active:hover{
        color: var(--backColor);
        background: none;
      }
      &:hover{
        background: var(--backColor);
        color: var(--solid);
      }
    }
  }

  span{
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    color: var(--titles);
  }
`
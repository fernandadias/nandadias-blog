import styled from "styled-components"

export const ContentContainer = styled.main`
  margin-left: 180px;
  padding: 40px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media(max-width: 900px){
    margin-left: 20px;
  }

`

export const PostContainer = styled.section`
  flex: 1;
  max-width: 900px;
  padding-right: 40px;

  @media(max-width: 900px){
    padding-right: 0;
  }

`
export const ExtrasContainer = styled.section`
  flex: 1;
  max-width: 240px;
  padding-left: 40px;
  margin-top: 20vh;

  @media(max-height: 900px){
    margin-top: 10vh;
  }

  @media(max-height: 900px){
    margin-top: 0;
  }

  @media(max-width: 900px){
    display: none;
  }

`

export const BioContainer = styled.section`
  position: fixed;

`

export const PostMarkWrapper = styled.div`
  position: relative;
`

export const PostMarkInfo = styled.article`
  margin-bottom: 40px;
`

export const PostMarkTitle = styled.h1`
  color: var(--titles);
  font-size: 30px;
  line-height: 40px;
  letter-spacing: 0.02em;
  font-weight: bold;
  text-decoration: none;
`

export const PostMarkDate = styled.p`
  font-size: 12px;
  color: var(--texts);
  line-height: 40px;

  span{
    padding: 2px 5px;
    color: var(--background);
    background: ${props => props.category ? `var(--${props.category}Color)` : `var(--theme)`};

    &.design{
      background: var(--designColor);
    }
     &.product{
      background: var(--productColor);
    }
     &.front{
      background: var(--frontColor);
    }
     &.data{
      background: var(--dataColor);
    }
     &.music{
      background: var(--musicColor);
    }
     &.back{
      background: var(--backColor);
    }

  }
`

export const PostMarkLine = styled.div`
  background: ${props => props.category ? `var(--${props.category}Color)` : `${props => props.category ? `var(--${props.category}Color)` : `var(--theme)`}`};
  width: 4px;
  height: 19px;
  display: block;
  position: absolute;
  bottom: 50px;
  left: -16px;
`

export const MarkdownContent = styled.div`

  margin: auto;
  p,
  h1,
  h2,
  h3,
  h4,
  ul,
  ol,
  .tags,
  iframe,
  .button-post {
    color: var(--texts);
    line-height: 30px;
    letter-spacing: 0.03em;

  }
  p {
    margin: 0 auto 1.6rem;
  }
  h1,
  h2,
  h3,
  h4,
  h5 {
    margin: 2.4rem auto 1rem;
    color: var(--titles);
  }
  ul,
  ol {
    list-style: disc;
    padding-left: 2.5rem;
    margin: 0 auto 1.6rem;
  }
  li {
    padding: 0.625rem 0;
    & > ul {
      margin-bottom: 0;
    }
  }
  p,
  li {
    code {
      word-wrap: break-word;
    }
  }
  img {
    display: block;
    max-width: 100%;
    margin: 1.875rem auto;
  }
  iframe {
    padding: 0 1.6rem 1.6rem;
    width: 100%;
  }
  blockquote {
    color: var(--titles);
    border-left: 0.3rem solid ${props => props.category ? `var(--${props.category}Color)` : `var(--theme)`};
    padding: 40px;
    margin: 3.125rem auto;

    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
    line-height: 30px;
    text-transform: lowercase;
    /* or 200% */

    letter-spacing: 0.03em;
    font-variant: small-caps;

    &:hover{
      background: ${props => props.category ? `var(--${props.category}Color)` : `var(--theme)`};
      color: var(--background);

      p{
        color: var(--background);
      }
    }

    p{
      color: var(--titles);
      margin: 0;
    }
  }
  hr {
    border: 1px solid #38444d;
    margin: 3rem auto;
  }
  #twitter-widget-0,
  .instagram-media,
  .twitter-tweet {
    margin: 20px auto !important;
  }
  h1,
  h2,
  h3,
  h4,
  h5 {
    font-weight: 800;
    letter-spacing: 0.069rem;
    line-height: 1.4;
  }
  h1 {
    font-size: 2.8rem;
  }
  h2 {
    font-size: 2.1rem;
  }
  h3 {
    font-size: 1.6rem;
  }
  h4 {
    font-size: 1.4rem;
  }
  h5 {
    font-size: 1.2rem;
  }
  strong {
    font-weight: 700;
  }
  .gatsby-resp-image-background-image {
    z-index: 2;
    opacity: 1 !important;
  }
  .gatsby-resp-image-image {
    box-shadow: none !important;
    transition: opacity 0.2s;
    &.lazyload {
      opacity: 0;
    }
    &.lazyloaded {
      opacity: 1;
      z-index: 3;
    }
  }
  .gatsby-highlight {
    padding: 0 1.6rem 1.6rem;
  }
  .instagram-media {
    margin: 1rem auto !important;
  }
  a {
    text-decoration: none;

    color: ${props => props.category ? `var(--${props.category}Color)` : `var(--theme)`};

    &:hover {
      text-decoration: underline;
    }
  }
  
`
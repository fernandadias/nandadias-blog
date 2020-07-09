import styled from "styled-components"

export const CommentsContainer = styled.section`
  margin: auto;
  padding: 3rem 0;
  iframe[src*="ads-iframe"] {
    display: none;
  }
  #disqus_thread {
    a {
      color: var(--theme) !important;
    }
  }
`

export const CommentsTitle = styled.h2`
  color: var(--titles);
  font-size: 18px;
  font-weight: 700;
  padding-bottom: 2rem;
`
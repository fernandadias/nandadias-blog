import styled from "styled-components"

export const ContentContainer = styled.main`
  margin-left: 180px;
  padding: 40px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

`

export const PostContainer = styled.section`
  flex: 1;
  max-width: 900px;

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

`

export const BioContainer = styled.section`
  position: fixed;

`
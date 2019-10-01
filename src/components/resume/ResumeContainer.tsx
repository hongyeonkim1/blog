import styled from "styled-components"

const ResumeContainer = styled.section`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  margin-left: auto;
  margin-right: auto;
  padding: 15px;
  font-family: "Noto Sans KR", sans-serif !important;
  font-weight: 300;
  word-wrap: break-word;
  word-break: keep-all;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Noto Sans KR", sans-serif !important;
    margin-top: 0.5rem;
  }

  @media (min-width: 1200px) {
    max-width: 1140px;
  }

  /* @media (min-width: 992px) {
    max-width: 960px;
  } */

  /* @media (min-width: 768px) {
    max-width: 720px;
  } */

  /* @media (min-width: 576px) {
    max-width: 540px;
  } */
`

export default ResumeContainer

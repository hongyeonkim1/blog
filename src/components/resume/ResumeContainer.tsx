import styled from "styled-components"

const ResumeContainer = styled.section`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  margin: 10px;
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
`

export default ResumeContainer

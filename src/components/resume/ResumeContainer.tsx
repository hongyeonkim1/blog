import styled from "styled-components"

const ResumeContainer = styled.section`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  padding: 15px;
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 300;
  word-wrap: break-word;
  word-break: keep-all;

  .icon::before {
    display: inline-block;
    font-style: normal;
    font-variant: normal;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
  }

  .mail::before {
    content: "\f007";
  }

  .phone::before {
    content: "\f007";
  }

  .github::before {
    content: "\f007";
  }
`

export default ResumeContainer

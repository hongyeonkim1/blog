import { PageRendererProps, graphql, useStaticQuery } from "gatsby"
import React from "react"
import Image from "gatsby-image"
import { SEO } from "../components/seo"
import ResumeContainer from "../components/resume/ResumeContainer"
import ResumeItem from "../components/resume/ResumeItem"

type Props = PageRendererProps

export const ResumePage = (props: Props) => {
  const data = useStaticQuery(graphql`
    query ProfileQuery {
      profile: file(absolutePath: { regex: "/hykim.jpg/" }) {
        childImageSharp {
          id
          fixed {
            base64
            tracedSVG
            aspectRatio
            width
            height
            src
            srcSet
            srcWebp
            srcSetWebp
            originalName
          }
        }
      }
    }
  `)

  return (
    <div>
      <SEO title="김홍연 경력기술서" />
      <ResumeContainer>
        <ResumeItem>
          <div>
            <Image fixed={data.profile.childImageSharp.fixed} alt={"Profile"} />
          </div>
          <div>
            <div>
              <h1>김 홍 연</h1>
            </div>
            <div>
              <i className="icon mail">icon</i>
              <a href="mailto:hong3872@gmail.com" target="_blank">
                hong3872@gmail.com
              </a>
            </div>
            <div>
              <i>icon</i>
              <span>010-3223-2342</span>
            </div>
            <div>
              <i>icon</i>
              <a href="https://github.com/hykimQ" target="_blank">
                https://github.com/hykimQ
              </a>
            </div>
          </div>
        </ResumeItem>
        <ResumeItem>
          <p>
            웹 프론트엔드 및 백엔드 개발자로서 다양한 경험이 있습니다. React,
            Java, Oracle, Git, Linux 등을 사용해 프로덕션 서비스를 설계, 개발,
            운영한 경험이 있습니다. 확장성과 유지 보수성이 높은 프론트엔드의
            아키텍처와 패턴을 위해 언제나 고민하고 있습니다.
            <br />
            프론트엔드 개발의 정점을 찍고 싶다고 생각해 개인 프로젝트 및 다량의
            개발 관련 독서로 다양하고 새로운 기술을 경험하고 있습니다. 이후
            실무에 직접 적용하는 방식으로 항상 발전하는 개발자가 되기 위해
            노력하고 있습니다.
          </p>
        </ResumeItem>
        <ResumeItem></ResumeItem>
        <ResumeItem></ResumeItem>
        <ResumeItem></ResumeItem>
        <ResumeItem></ResumeItem>
        <ResumeItem></ResumeItem>
        <ResumeItem></ResumeItem>
      </ResumeContainer>
    </div>
  )
}

export default ResumePage

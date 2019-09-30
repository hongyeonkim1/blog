import { PageRendererProps, graphql, useStaticQuery } from "gatsby"
import React from "react"
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { SEO } from "../components/seo"
import ResumeContainer from "../components/resume/ResumeContainer"
import ResumeItem from "../components/resume/ResumeItem"
import A from "../components/resume/A"
import Badge from "../components/resume/Badge"
import ProfileImage from "../components/resume/ProfileImage"

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
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "18% 82%",
              gridGap: "20px",
            }}
          >
            <div>
              <ProfileImage
                style={{ width: "85%" }}
                src={data.profile.childImageSharp.fixed.src}
                alt="Profile"
              />
              {/* <ProfileImage
                fixed={data.profile.childImageSharp.fixed}
                imgStyle={{ borderRadius: "4px" }}
              /> */}
            </div>
            <div>
              <div>
                <h1 style={{ color: "#3c78d8" }}>김 홍 연</h1>
              </div>
              <div>
                <FontAwesomeIcon icon={faEnvelope} />
                <Badge>
                  <A href="mailto:hong3872@gmail.com" target="_blank">
                    hong3872@gmail.com
                  </A>
                </Badge>
              </div>
              <div>
                <FontAwesomeIcon icon={faPhone} />
                <Badge>
                  <span>010-9215-1549</span>
                </Badge>
              </div>
              <div>
                <FontAwesomeIcon icon={faGithub} />
                <Badge>
                  <A href="https://github.com/hykimmm" target="_blank">
                    https://github.com/hykimmm
                  </A>
                </Badge>
              </div>
            </div>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "18% 82%",
              marginTop: "30px",
              gridGap: "20px",
            }}
          >
            <div>
              <h2 style={{ color: "#3c78d8", float: "right" }}>간략한 소개</h2>
            </div>
            <div>
              <p>
                웹 프론트엔드 및 백엔드 개발자로서 다양한 경험이 있습니다.
                React, Java, Oracle, Git, Linux 등을 사용해 프로덕션 서비스를
                설계, 개발, 운영한 경험이 있습니다. 확장성과 유지 보수성이 높은
                프론트엔드의 아키텍처와 패턴을 위해 언제나 고민하고 있습니다.
                <br />
                프론트엔드 개발의 정점을 찍고 싶다고 생각해 개인 프로젝트 및
                다량의 개발 관련 독서로 다양하고 새로운 기술을 경험하고
                있습니다. 이후 실무에 직접 적용하는 방식으로 항상 발전하는
                개발자가 되기 위해 노력하고 있습니다.
              </p>
            </div>
          </div>
        </ResumeItem>
        <ResumeItem>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "18% 82%",
              marginTop: "30px",
              gridGap: "20px",
            }}
          >
            <div>
              <h2 style={{ color: "#3c78d8", float: "right" }}>보유 기술</h2>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <h4 style={{ color: "#3c78d8" }}>
                (1: 기초수준, 2: 취미 개발 수준, 3: Production 개발 가능 수준)
              </h4>
            </div>
            <div>
              <h3 style={{ color: "gray", fontWeight: 500, float: "right" }}>
                Front-end
              </h3>
            </div>
            <div></div>
            <div>
              <h3 style={{ color: "gray", fontWeight: 500, float: "right" }}>
                Back-end
              </h3>
            </div>
            <div></div>
            <div>
              <h3 style={{ color: "gray", fontWeight: 500, float: "right" }}>
                Database
              </h3>
            </div>
            <div></div>
            <div>
              <h3 style={{ color: "gray", fontWeight: 500, float: "right" }}>
                Etc
              </h3>
            </div>
            <div></div>
          </div>
        </ResumeItem>
        <ResumeItem>
          <div>
            <p>
              웹 프론트엔드 및 백엔드 개발자로서 다양한 경험이 있습니다. React,
              Java, Oracle, Git, Linux 등을 사용해 프로덕션 서비스를 설계, 개발,
              운영한 경험이 있습니다. 확장성과 유지 보수성이 높은 프론트엔드의
              아키텍처와 패턴을 위해 언제나 고민하고 있습니다.
              <br />
              프론트엔드 개발의 정점을 찍고 싶다고 생각해 개인 프로젝트 및
              다량의 개발 관련 독서로 다양하고 새로운 기술을 경험하고 있습니다.
              이후 실무에 직접 적용하는 방식으로 항상 발전하는 개발자가 되기
              위해 노력하고 있습니다.
            </p>
          </div>
        </ResumeItem>
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

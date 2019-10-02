import { PageRendererProps, graphql, useStaticQuery } from "gatsby"
import React from "react"
import {
  faPhone,
  faEnvelope,
  faFileExcel,
} from "@fortawesome/free-solid-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { SEO } from "../components/seo"
import ResumeContainer from "../components/resume/ResumeContainer"
import ResumeItem from "../components/resume/ResumeItem"
import A from "../components/resume/A"
import Badge from "../components/resume/Badge"
import BadgePill from "../components/resume/BadgePill"
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
    <>
      <SEO title="김홍연 경력기술서" />
      <ResumeContainer>
        <ResumeItem>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "18% 82%",
              gridGap: "40px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
              }}
            >
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
              gridGap: "40px",
            }}
          >
            <div>
              <h2 style={{ color: "#3c78d8", float: "right" }}>간략한 소개</h2>
            </div>
            <div>
              <p>
                웹 프론트 엔드와 백엔드 개발을 다양하게 경험했습니다. React,
                Java, Oracle, Git 등을 사용하여 서비스를 설계, 개발, 운영하면서
                확장성과 유지 보수성을 높일 수 있는 아키텍처와 패턴을 항상
                고민하며 일했습니다.
                <br />
                Jquery로 시작해 React 등 새로운 기술을 배우며 공부하고 있습니다.
                이러한 경험들을 바탕으로 실제 업무에도 새로운 기술에 배타적이지
                않고 항상 공부하며 효율적인 기술들을 반영할 수 있는 개발자가
                되려고 합니다.
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
              gridGap: "40px",
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
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
              }}
            >
              <ul style={{ marginBottom: "1.75rem" }}>
                <li>
                  <BadgePill>3</BadgePill>Reactjs
                </li>
              </ul>
              <ul style={{ marginBottom: "1.75rem" }}>
                <li>
                  <BadgePill>3</BadgePill>Redux
                </li>
              </ul>
              <ul style={{ marginBottom: "1.75rem" }}>
                <li>
                  <BadgePill>3</BadgePill>Redux-Saga
                </li>
              </ul>
              <ul style={{ marginBottom: "1.75rem" }}>
                <li>
                  <BadgePill>3</BadgePill>JavaScript
                </li>
              </ul>
              <ul style={{ marginBottom: "1.75rem" }}>
                <li>
                  <BadgePill>3</BadgePill>HTML/CSS
                </li>
              </ul>
              <ul style={{ marginBottom: "1.75rem" }}>
                <li>
                  <BadgePill color="#868e96">2</BadgePill>jQuery
                </li>
              </ul>
            </div>
            <div>
              <h3 style={{ color: "gray", fontWeight: 500, float: "right" }}>
                Back-end
              </h3>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
              }}
            >
              <ul style={{ marginBottom: "1.75rem" }}>
                <li>
                  <BadgePill>3</BadgePill>Java
                </li>
              </ul>
              <ul style={{ marginBottom: "1.75rem" }}>
                <li>
                  <BadgePill>3</BadgePill>Spring
                </li>
              </ul>
              <ul style={{ marginBottom: "1.75rem" }}>
                <li>
                  <BadgePill color="#868e96">2</BadgePill>nginx
                </li>
              </ul>
            </div>
            <div>
              <h3 style={{ color: "gray", fontWeight: 500, float: "right" }}>
                Database
              </h3>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
              }}
            >
              <ul style={{ marginBottom: "1.75rem" }}>
                <li>
                  <BadgePill>3</BadgePill>Oracle Database
                </li>
              </ul>
              <ul style={{ marginBottom: "1.75rem" }}>
                <li>
                  <BadgePill color="#868e96">2</BadgePill>Redis
                </li>
              </ul>
            </div>
            <div>
              <h3 style={{ color: "gray", fontWeight: 500, float: "right" }}>
                Etc
              </h3>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
              }}
            >
              <ul style={{ marginBottom: "1.75rem" }}>
                <li>
                  <BadgePill color="#868e96">2</BadgePill>Git
                </li>
              </ul>
            </div>
          </div>
        </ResumeItem>
        <ResumeItem>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "18% 82%",
              marginTop: "30px",
              gridGap: "40px",
            }}
          >
            <div>
              <h2 style={{ color: "#3c78d8", float: "right" }}>경력</h2>
            </div>
            <div>
              <div>
                <h4 style={{ fontSize: "1.5rem" }}>케이비시스</h4>
                <h5 style={{ float: "right" }}>2018.07~재직 중</h5>
                <i style={{ color: "gray" }}>Web Developer</i>
                <ul>
                  <li>SI 개발 (38명, 개발팀 25명)</li>
                  <li>Micro Service Architecture</li>
                  <li>프로젝트 개발 및 유지보수</li>
                  <li>Skill Keywords</li>
                  <BadgePill color="#868e96">React</BadgePill>
                  <BadgePill color="#868e96">Redux</BadgePill>
                  <BadgePill color="#868e96">Javascript</BadgePill>
                  <BadgePill color="#868e96">Java</BadgePill>
                  <BadgePill color="#868e96">Spring</BadgePill>
                  <BadgePill color="#868e96">Oracle</BadgePill>
                  <BadgePill color="#868e96">Redis</BadgePill>
                  <BadgePill color="#868e96">nginx</BadgePill>
                  <BadgePill color="#868e96">Docker</BadgePill>
                </ul>
              </div>
              <div>
                <h4 style={{ fontSize: "1.5rem" }}>부린</h4>
                <i style={{ color: "gray" }}>Web Developer</i>
                <ul>
                  <li>SI 개발 (20명, 개발팀 10명)</li>
                  <li>프로젝트 개발 및 유지보수</li>
                  <li>Skill Keywords</li>
                  <BadgePill color="#868e96">Javascript</BadgePill>
                  <BadgePill color="#868e96">Java</BadgePill>
                  <BadgePill color="#868e96">C#</BadgePill>
                  <BadgePill color="#868e96">Spring</BadgePill>
                  <BadgePill color="#868e96">Postgresql</BadgePill>
                  <BadgePill color="#868e96">PostGIS</BadgePill>
                </ul>
              </div>
            </div>
          </div>
        </ResumeItem>
        <ResumeItem>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "18% 82%",
              marginTop: "30px",
              gridGap: "40px",
            }}
          >
            <div>
              <h2 style={{ color: "#3c78d8", float: "right" }}>프로젝트</h2>
            </div>
            <div>
              <div>
                <h4 style={{ fontSize: "1.5rem" }}>SK Hynix 업무시스템 개발</h4>
                <i style={{ color: "gray" }}>SK Hynix</i>
                <ul>
                  <h5>유튜브와 유사한 하이닉스 내 동영상 공유 사이트</h5>
                  <li>SI 개발 (38명, 개발팀 25명)</li>
                  <li>Micro Service Architecture</li>
                  <li>프로젝트 개발 및 유지보수</li>
                  <li>Skill Keywords</li>
                </ul>
              </div>
              <div>
                <h4 style={{ fontSize: "1.5rem" }}>
                  SK Hynix 지식 블로그 1차 고도화
                </h4>
                <i style={{ color: "gray" }}>SK Hynix</i>
                <ul>
                  <h5>발행/구독, 타임라인을 기반으로 문서 작성 플랫폼 개발</h5>
                  <li>SI 개발 (20명, 개발팀 10명)</li>
                  <li>프로젝트 개발 및 유지보수</li>
                  <li>Skill Keywords</li>
                </ul>
              </div>
            </div>
          </div>
        </ResumeItem>
        <ResumeItem></ResumeItem>
        <ResumeItem></ResumeItem>
        <ResumeItem></ResumeItem>
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
      </ResumeContainer>
    </>
  )
}

export default ResumePage

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
              <h2 style={{ color: "#3c78d8", float: "right" }}>
                개선/문제해결 사례
              </h2>
            </div>
            <div>
              <div>
                <h4 style={{ fontSize: "1.5rem" }}>React 렌더링 최적화 사례</h4>
                <ul>
                  <li>
                    문제: 많은 item을 렌더한 상태에서 그다음 페이지를 가져오거나
                    해당 아이템에서 상태 변경으로 인해 render를 다시 해야 할 때
                    렌더링 속도가 너무 느려지는 이슈가 있을{" "}
                  </li>
                  <li>측정:</li>
                  <li>원인:</li>
                  <li>연구: </li>
                  <li>해결:</li>
                  <li>결과:</li>
                  <li>평가: </li>
                  <li>배운점:</li>
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
              <h2 style={{ color: "#3c78d8", float: "right" }}>자기 소개</h2>
            </div>
            <div>
              <div>
                <h4 style={{ fontSize: "1.5rem" }}>[망설이지 말고 도전!]</h4>
                <p>
                  회사에서 서울시 프로젝트에 참여하던 당시에 하이브리드앱을
                  담당하던 개발자가 퇴사하여 관련 업무를 담당하던 개발자가
                  부족하였습니다. 이 당시에 저는 서울시 하천사업에 관련해 웹
                  개발을 하고 있었고 회사에서는 제가 웹 개발을 하면서
                  하이브리드앱도 개발하기를 원했습니다. 하이브리드앱을
                  개발하기에 앞서 안드로이드에 대한 지식이 사전에 없었고 이를
                  개발하는 데 어려움이 있을 것으로 생각했지만 하이브리드앱이라
                  진입 장벽이 일반 모바일개발보다 웹 개발자에 있어 낮았고 이를
                  수행하게 되었습니다.
                </p>
                <br />
                <p>
                  회사에서 서울시 프로젝트에 참여하던 당시에 하이브리드앱을
                  담당하던 개발자가 퇴사하여 관련 업무를 담당하던 개발자가
                  부족하였습니다. 이 당시에 저는 서울시 하천사업에 관련해 웹
                  개발을 하고 있었고 회사에서는 제가 웹 개발을 하면서
                  하이브리드앱도 개발하기를 원했습니다. 하이브리드앱을
                  개발하기에 앞서 안드로이드에 대한 지식이 사전에 없었고 이를
                  개발하는 데 어려움이 있을 것으로 생각했지만 하이브리드앱이라
                  진입 장벽이 일반 모바일개발보다 웹 개발자에 있어 낮았고 이를
                  수행하게 되었습니다.
                </p>
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
              <h2 style={{ color: "#3c78d8", float: "right" }}>교육</h2>
            </div>
            <div>
              <div>
                <h4 style={{ fontSize: "1.5rem" }}>상명대학교 졸업</h4>
                <i style={{ color: "gray" }}>컴퓨터과학전공</i>
              </div>
              <div>
                <h4 style={{ fontSize: "1.5rem" }}>둔촌고등학교 졸업</h4>
                <i style={{ color: "gray" }}>서울특별시</i>
              </div>
            </div>
          </div>
        </ResumeItem>
      </ResumeContainer>
    </>
  )
}

export default ResumePage

import { PageRendererProps } from "gatsby"
import React from "react"
import { SEO } from "../components/seo"
import ResumeLayout from "../components/resume/ResumeLayout"

type Props = PageRendererProps

export const ResumePage = (props: Props) => {
  return (
    <div>
      <SEO title="김홍연 경력기술서" />
      <ResumeLayout>
        {/* Profile */}
        <div className="row mt-3" id="profile">
          <div className="col-md-3 col-sm-3 col-3 pb-3 text-right text-center">
            <img
              className="img-fluid rounded profile-img profile"
              src="/edit.png"
              alt="Profile"
            />
          </div>
          <div className="col-md-9 col-sm-9 col-9">
            <div className="row">
              <div className="col">
                <h1 className="blue">김 홍 연</h1>
              </div>
            </div>
            <div className="row">
              <div className="col px-4 pt-2">
                <div className="row pb-2">
                  <div className="profile info icon">
                    <i className="fa fa-envelope" aria-hidden="true"></i>
                  </div>
                  <div className="col-auto">
                    <a href="mailto:msmasd@naver.com" target="_blank">
                      hong3872@gmail.com
                    </a>
                  </div>
                </div>
                <div className="row pb-2">
                  <div className="profile info icon">
                    <i className="fa fa-phone" aria-hidden="true"></i>
                  </div>
                  <div className="col-auto">
                    <span className="badge badge-light">010-9215-1549</span>
                  </div>
                </div>
                <div className="row pb-2">
                  <div className="profile info icon">
                    <i className="fa fa-github" aria-hidden="true"></i>
                  </div>
                  <div className="col-auto">
                    <a href="https://github.com/hykimQ" target="_blank">
                      https://github.com/hykimQ
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Profile End */}
        {/* Introduce */}
        <div className="row pt-2" id="littleIntroduce">
          <div className="col-3 col-md-3 text-right">
            <span className="blue sub-title">간략한 소개</span>
          </div>
          <div className="col-9 col-md-9">
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
        </div>
        {/* Introduce */}
      </ResumeLayout>
    </div>
  )
}

export default ResumePage

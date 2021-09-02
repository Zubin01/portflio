import React, { Component } from "react";
import {ProgressBar} from "react-bootstrap";

class About extends Component {
  render() {
    if (this.props.sharedBasicInfo) {
    }
    if (this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.about;
      var hello = this.props.resumeBasicInfo.description_header;
      var about1 = this.props.resumeBasicInfo.description;
      var about2 = this.props.resumeBasicInfo.philosophy;
      var about3 = this.props.resumeBasicInfo.preference;
    }

    return (
      <section id="about">
        <div className="col-md-12">
          <h1 style={{ color: "black" }}>
            <span>{sectionName}</span>
          </h1>
          <div className="row center mx-auto mb-5">
            <div className="col-md-4 mb-5 center">
              <div className="polaroid">
                <div className="row">
                  <div className="col-12">
                    <label className="d-inline-flex float-left progress-title">Javascript</label>
                  </div>
                  <div className="col progress-section">
                    <ProgressBar striped text="js" variant="success" now={90} className="progress-bar"/>
                  </div>
                  <div className="col-12">
                    <label className="d-inline-flex float-left progress-title">HTML|CSS</label>
                  </div>
                  <div className="col progress-section ">
                    <ProgressBar striped text="html-css" variant="success" now={90} className="progress-bar"/>
                  </div>
                  <div className="col-12">
                    <label className="d-inline-flex float-left progress-title">SQL</label>
                  </div>
                  <div className="col progress-section">
                    <ProgressBar striped text="SQL" variant="success" now={70} className="progress-bar" animated/>
                  </div>
                  <div className="col-12">
                    <label className="d-inline-flex float-left progress-title">Golang</label>
                  </div>
                  <div className="col progress-section">
                    <ProgressBar striped text="go" variant="success" now={90} className="progress-bar" animated/>
                  </div>
                  <div className="col-12">
                    <label className="d-inline-flex float-left progress-title">React</label>
                  </div>
                  <div className="col progress-section">
                    <ProgressBar striped text="go" variant="success" now={80} className="progress-bar" animated/>
                  </div>
                  <div className="col-12">
                    <label className="d-inline-flex float-left progress-title">Bootstrap</label>
                  </div>
                  <div className="col progress-section">
                    <ProgressBar striped text="go" variant="success" now={80} className="progress-bar" animated/>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-8 center">
              <div className="col-md-10">
                <div className="card">
                  <div className="card-header">
                    <span
                      className="iconify"
                      data-icon="emojione:red-circle"
                      data-inline="false"
                    ></span>{" "}
                    &nbsp;{" "}
                    <span
                      className="iconify"
                      data-icon="twemoji:yellow-circle"
                      data-inline="false"
                    ></span>{" "}
                    &nbsp;{" "}
                    <span
                      className="iconify"
                      data-icon="twemoji:green-circle"
                      data-inline="false"
                    ></span>
                  </div>
                  <div
                    className="card-body font-trebuchet text-justify ml-3 mr-3"
                    style={{
                      height: "auto",
                      fontSize: "132%",
                      lineHeight: "200%",
                    }}
                  >
                    <br />
                    <span className="wave">{hello}</span>
                    <br />
                    <br />
                    {about1}
                    <br />
                    <br />
                    {about2}
                    <br />
                    <br />
                    {about3}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;

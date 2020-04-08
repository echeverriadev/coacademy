import React from "react";
import { Link } from "react-router-dom";

declare var $: any;

class About extends React.Component {
  UNSAFE_componentWillMount() {
    var body = $("body");
    body.removeClass("sidebar-gone active");
    body.addClass("sidebar-gone");

    this.props.changeMenu("ABOUT");
  }

  registerClick() {
    window.setTimeout(function () {
      var register = $("#profile-tab");

      register.click();
    }, 0);
  }

  render() {
    const { changeMenu } = this.props;

    return (
      <div>
        <section className="sptb">
          <div className="container">
            <div className="text-justify">
              <h2 className="mb-4 font-weight-semibold">Why Eudica?</h2>
              <h5 className="leading-normal">
                Majority have suffered alteration in some form, by injected
                humor
              </h5>
              <p className="leading-normal text-muted">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered by injected humour, or randomised
                words which don't look even slightly believable. If you are
                going to use a passage of Lorem Ipsum, you need to as necessary
                All the Lorem Ipsum generators on the Internet tend to repeat
              </p>
              <p className="leading-normal text-muted">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English.
              </p>
              <p className="leading-normal mb-0 text-muted">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </section>
        <section className="sptb bg-white">
          <div className="container">
            <div className="section-title center-block text-center">
              <h2>How It Works?</h2>
              <span className="sectiontitle-design">
                <span className="icons"></span>
              </span>
              <p>
                Sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua
              </p>
            </div>
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="">
                  <div className="mb-lg-0 mb-4">
                    <div className="service-card text-center">
                      <div className="icon-bg box-shadow icon-service text-purple about">
                        <img
                          src="../assets/images/png/about/employees.png"
                          alt="img"
                        />
                      </div>
                      <div className="servic-data mt-3">
                        <h4 className="font-weight-semibold mb-2">Register</h4>
                        <p className="text-muted mb-0">
                          Nam libero tempore, cum soluta nobis est eligendi
                          cumque facere possimus
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="">
                  <div className="mb-lg-0 mb-4">
                    <div className="service-card text-center">
                      <div className=" icon-bg box-shadow icon-service text-purple about">
                        <img
                          src="../assets/images/png/about/megaphone.png"
                          alt="img"
                        />
                      </div>
                      <div className="servic-data mt-3">
                        <h4 className="font-weight-semibold mb-2">
                          Create Account
                        </h4>
                        <p className="text-muted mb-0">
                          Nam libero tempore, cum soluta nobis est eligendi
                          cumque facere possimus
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="">
                  <div className="mb-sm-0 mb-4">
                    <div className="service-card text-center">
                      <div className="icon-bg box-shadow icon-service text-purple about">
                        <img
                          src="../assets/images/png/about/pencil.png"
                          alt="img"
                        />
                      </div>
                      <div className="servic-data mt-3">
                        <h4 className="font-weight-semibold mb-2">
                          Coursed Posts
                        </h4>
                        <p className="text-muted mb-0">
                          Nam libero tempore, cum soluta nobis est eligendi
                          cumque facere possimus
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="">
                  <div className="">
                    <div className="service-card text-center">
                      <div className="icon-bg box-shadow icon-service text-purple about">
                        <img
                          src="../assets/images/png/about/coins.png"
                          alt="img"
                        />
                      </div>
                      <div className="servic-data mt-3">
                        <h4 className="font-weight-semibold mb-2">
                          Get Earnings
                        </h4>
                        <p className="text-muted mb-0">
                          Nam libero tempore, cum soluta nobis est eligendi
                          cumque facere possimus
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div
            className="cover-image about-widget sptb bg-background-color"
            data-image-src="../assets/images/banners/banner4.jpg"
          >
            <div className="content-text mb-0">
              <div className="container">
                <div className="text-center text-white ">
                  <h2 className="mb-2 font-weight-400">
                    Let's Update Your Skills with Our Training Professionals...
                  </h2>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout.
                  </p>
                  <div className="mt-5">
                    <Link
                      to="/login"
                      onClick={() => {
                        this.registerClick();
                        changeMenu("REGISTER");
                      }}
                      className="btn btn-lg btn-primary"
                    >
                      Registrate ahora!
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default About;

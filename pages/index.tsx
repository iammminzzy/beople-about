import React from 'react';
import styled from 'styled-components';
import { AppRoutes } from '../common/Constants';
import { TfiWindow } from 'react-icons/tfi';
import { SlPeople } from 'react-icons/sl';
import { TbUnlink } from 'react-icons/tb';
import { VscNewFolder } from 'react-icons/vsc';
import Link from 'next/link';

const AboutStyled = styled.div`
  section {
    padding: 130px 0;
    overflow: hidden;
  }
  section.big-section {
    padding: 160px 0;
  }
  section.extra-big-section {
    padding: 200px 0;
  }
  section.half-section {
    padding: 80px 0;
  }
`;

const Header = styled.header`
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  width: 100%;
  z-index: 1031;
  -webkit-transition-duration: 0.3s;
  -moz-transition-duration: 0.3s;
  -ms-transition-duration: 0.3s;
  -o-transition-duration: 0.3s;
  transition-duration: 0.3s;
`;

const Nav = styled.nav`
  height: 80px;
  @media (max-width: 767px) {
    height: 72px;
  }
`;

const FirstSection = styled.div`
  padding-top: 80px;
  @media (max-width: 767px) {
    padding-top: 72px;
  }
`;

const MainImg = styled.div`
  background-image: url('https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3870');
  height: 600px;

  @media (max-width: 767px) {
    height: 500px;
  }
`;

const H3 = styled.h3`
  @media (max-width: 400px) {
    font-size: 2.9rem;
    line-height: 3.4rem;
  }
  @media (max-width: 300px) {
    font-size: 2.4rem;
    line-height: 3rem;
  }
`;

const H5 = styled.h5`
  @media (max-width: 400px) {
    font-size: 2rem;
  }
  @media (max-width: 300px) {
    font-size: 1.5rem;
    line-height: 2rem;
  }
`;

const Pstyled = styled.p`
  @media (max-width: 300px) {
    font-size: 15px;
  }
`;

const ThirdSection = styled.section`
  background-color: #f8f8f8;
`;

const FooterLogo = styled.a`
  margin: 0 auto;
  display: inline-block;
`;

const About = () => {
  return (
    <AboutStyled>
      {/* <!-- 0. header --> */}
      <Header>
        <Nav className='navbar navbar-expand-lg top-space navbar-light bg-white header-light fixed-top navbar-boxed header-reverse-scroll'>
          <div className='container-fluid nav-header-container'>
            <div className='col-6 col-lg-2 me-auto ps-lg-0'>
              <Link className='navbar-brand' href='/'>
                <img
                  src='https://beople.link/thema/beople/amt/ple/ple-custom/img/bpl_new_logo.png'
                  alt=''
                />
              </Link>
            </div>
          </div>
        </Nav>
      </Header>

      {/* <!-- 1. section --> */}
      <FirstSection>
        <MainImg className='cover-background'>
          <div className='overlay-bg bg-gradient-dark-slate-blue'></div>
          <div className='container h-100'>
            <div className='row h-100'>
              <div className='col-12 col-xl-6 col-lg-7 col-sm-8 h-100 d-flex justify-content-center flex-column position-relative'>
                <p className='alt-font text-large text-white opacity-7 font-weight-300 margin-40px-bottom xs-margin-20px-bottom'>
                  ????????? ????????? ?????? ?????? ????????????
                  <br />
                  ????????? SNS, ???????????? ???????????? ????????? ???????????????.
                </p>
                <H3 className='sec-font text-shadow-double-large font-weight-600 text-white margin-55px-bottom w-90 md-w-100 md-no-text-shadow xs-margin-35px-bottom'>
                  ????????? ????????????
                  <br />
                  ????????? ?????? ??????!
                  <br />
                  ????????? ?????????, ??????
                </H3>
                <div className='d-inline-block'>
                  <a
                    href={AppRoutes.login}
                    className='btn btn-fancy btn-large btn-gradient-sky-blue-pink margin-30px-right xs-margin-15px-bottom'
                  >
                    ?????? ????????????
                  </a>
                </div>
              </div>
            </div>
          </div>
        </MainImg>
      </FirstSection>

      {/* <!-- 2. section --> */}
      <section id='down-section' className='p-0'>
        <div className='container-fluid'>
          <div className='row justify-content-center'>
            <div className='col-12 col-lg-2 col-md-4 d-flex flex-column justify-content-center border-right border-color-light-gray p-0 sm-h-400px sm-no-border-all wow animate__fadeIn'>
              <div
                className='content-box-image cover-background overflow-visible position-relative'
                style={{
                  backgroundImage:
                    'url(' +
                    'https://images.unsplash.com/photo-1513530534585-c7b1394c6d51?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2342&q=80' +
                    ')',
                }}
              >
                <div
                  className='d-sm-flex align-items-center justify-content-center rounded-circle w-130px h-130px md-h-100px md-w-100px bg-white box-shadow-extra-large position-absolute top-minus-70px right-minus-70px md-right-minus-50px md-top-minus-50px sm-top-0px sm-right-0px d-none wow animate__zoomIn'
                  data-wow-delay='0.2s'
                >
                  <h1 className='alt-font font-weight-600 text-extra-dark-gray mb-0 text-uppercase text-gradient-red-violet-purple'>
                    B
                  </h1>
                </div>
              </div>
            </div>
            <div
              className='col-12 col-xl-6 col-lg-6 col-md-8 d-flex flex-column justify-content-center border-bottom border-width-8px border-gradient-red-violet-purple padding-eight-lr padding-twelve-tb xl-padding-six-lr xl-padding-eight-tb lg-padding-six-lr md-padding-ten-all xs-no-border-bottom wow animate__fadeIn'
              data-wow-delay='0.9s'
            >
              <H5 className='sec-font font-weight-600 text-extra-dark-gray letter-spacing-minus-2px margin-3-rem-bottom'>
                ????????? ????????? ????????? ????????????, <br />
                ????????? ????????? ???????????? ??????
              </H5>
              <Pstyled className='w-90 xl-w-100 text-large'>
                ????????? ?????? ????????? ????????? ?????? ???
                <br />
                1:1????????? ????????? ???????????? ???????????? ????????? ??????????????????.
              </Pstyled>
            </div>
            <div
              className='col-12 col-lg-2 col-md-6 d-flex flex-column justify-content-end justify-content-lg-center border-all border-top-0 border-bottom-0 border-color-light-gray p-0 md-h-600px sm-h-400px sm-no-border-all wow animate__fadeIn'
              data-wow-delay='0.4s'
            >
              <div
                className='content-box-image cover-background'
                style={{
                  backgroundImage:
                    'url(' +
                    'https://images.unsplash.com/photo-1554415707-c1426270e0da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80' +
                    ')',
                }}
              ></div>
            </div>
            <div
              className='col-12 col-lg-2 col-md-6 d-flex flex-column justify-content-start border-right border-color-light-gray p-0 md-h-600px sm-h-400px sm-no-border-all wow animate__fadeIn'
              data-wow-delay='0.5s'
            >
              <div
                className='content-box-image cover-background'
                style={{
                  backgroundImage:
                    'url(' +
                    'https://images.unsplash.com/photo-1554672408-17407e0322ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80' +
                    ')',
                }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- 3. section --> */}
      <ThirdSection>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-12 col-md-6 text-center margin-8-rem-bottom lg-margin-6-rem-bottom sm-margin-5-rem-bottom wow animate__fadeIn'>
              <h5 className='sec-font font-weight-600 text-extra-dark-gray letter-spacing-minus-2px mb-0'>
                ?????? ?????? ??????
              </h5>
            </div>
          </div>
          <div className='row justify-content-center'>
            {/* <!-- start process item --> */}
            <div
              className='col-10 col-lg-3 col-sm-6 d-flex justify-content-center text-center process-step-style-03 md-margin-5-rem-bottom wow animate__fadeIn'
              data-wow-delay='0.2s'
            >
              <div className='process-step-item'>
                <div className='process-step-item-box'>
                  <span className='process-step-item-box-bfr bg-medium-gray'></span>
                  <div className='process-step-icon'>
                    <span className='process-step-number text-extra-dark-gray font-weight-500'>
                      <span className='process-step-number-bfr bg-gradient-red-violet-purple'></span>
                      1
                      <span className='process-step-number-afr bg-white box-shadow-small'></span>
                    </span>
                  </div>
                  <div className='process-content last-paragraph-no-margin'>
                    <span className='text-large alt-font d-inline-block font-weight-600 text-gradient-red-violet-purple letter-spacing-1px text-uppercase margin-10px-bottom'>
                      ?????? ??????
                    </span>
                    <p className='text-large'>
                      ???????????? ?????? ????????? ???????????? ???????????????.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- end process item --> */}
            {/* <!-- start process item --> */}
            <div
              className='col-10 col-lg-3 col-sm-6 d-flex justify-content-center text-center process-step-style-03 md-margin-5-rem-bottom wow animate__fadeIn'
              data-wow-delay='0.4s'
            >
              <div className='process-step-item'>
                <div className='process-step-item-box'>
                  <span className='process-step-item-box-bfr bg-medium-gray'></span>
                  <div className='process-step-icon'>
                    <span className='process-step-number text-extra-dark-gray font-weight-500'>
                      <span className='process-step-number-bfr bg-gradient-red-violet-purple'></span>
                      2
                      <span className='process-step-number-afr bg-white box-shadow-small'></span>
                    </span>
                  </div>
                  <div className='process-content last-paragraph-no-margin'>
                    <span className='text-large alt-font d-inline-block font-weight-600 text-gradient-red-violet-purple letter-spacing-1px text-uppercase margin-10px-bottom'>
                      Q&A ??????
                    </span>
                    <p className='text-large'>
                      ???????????? ?????? ???????????? ????????? ?????? ?????? ????????? ???????????????.
                      <br />
                      <br />
                      BP(???????????????)??? ????????? ???????????? 1:1??? ????????? ??? ?????????.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- end process item --> */}
            {/* <!-- start process item --> */}
            <div
              className='col-10 col-lg-3 col-sm-6 d-flex justify-content-center text-center process-step-style-03 xs-margin-5-rem-bottom wow animate__fadeIn'
              data-wow-delay='0.6s'
            >
              <div className='process-step-item'>
                <div className='process-step-item-box'>
                  <span className='process-step-item-box-bfr bg-medium-gray'></span>
                  <div className='process-step-icon'>
                    <span className='process-step-number text-extra-dark-gray font-weight-500'>
                      <span className='process-step-number-bfr bg-gradient-red-violet-purple'></span>
                      3
                      <span className='process-step-number-afr bg-white box-shadow-small'></span>
                    </span>
                  </div>
                  <div className='process-content last-paragraph-no-margin'>
                    <span className='text-large alt-font d-inline-block font-weight-600 text-gradient-red-violet-purple letter-spacing-1px text-uppercase margin-10px-bottom'>
                      Q&A ??????
                    </span>
                    <p className='text-large'>
                      ????????? ????????? ???????????? ????????? ???????????? ????????? ????????????.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- end process item --> */}
            {/* <!-- start process item --> */}
            <div
              className='col-10 col-lg-3 col-sm-6 d-flex justify-content-center text-center process-step-style-03 xs-margin-5-rem-bottom wow animate__fadeIn'
              data-wow-delay='0.8s'
            >
              <div className='process-step-item'>
                <div className='process-step-item-box'>
                  <span className='process-step-item-box-bfr bg-medium-gray'></span>
                  <div className='process-step-icon'>
                    <span className='process-step-number text-extra-dark-gray font-weight-500'>
                      <span className='process-step-number-bfr bg-gradient-red-violet-purple'></span>
                      4
                      <span className='process-step-number-afr bg-white box-shadow-small'></span>
                    </span>
                  </div>
                  <div className='process-content last-paragraph-no-margin'>
                    <span className='text-large alt-font d-inline-block font-weight-600 text-gradient-red-violet-purple letter-spacing-1px text-uppercase margin-10px-bottom'>
                      BP(???????????????) ??????
                    </span>
                    <p className='text-large'>
                      ????????? ????????? ???????????? BP??? ???????????????.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- end process item --> */}
          </div>
        </div>
      </ThirdSection>

      {/* <!-- 4. section --> */}
      <section className='big-section'>
        <div className='container'>
          <div className='row justify-content-center wow animate__fadeIn'>
            <div className='col-12 col-xl-6 col-lg-7 col-sm-8 text-center margin-5-rem-bottom md-margin-5-rem-bottom'>
              <span className='d-inline-block alt-font text-medium text-medium-gray text-uppercase font-weight-500 margin-20px-bottom sm-margin-15px-bottom'>
                ????????? ?????? ????????? ??????????????
              </span>
              <H5 className='sec-font text-extra-dark-gray font-weight-600 letter-spacing-minus-1px'>
                ???????????? ?????????????? ?????????
                <br />
                ???????????? ????????? ????????? ???????????????.
              </H5>
            </div>
          </div>
          <div className='row justify-content-center'>
            {/* <!-- start feature box item --> */}
            <div className='col-12 col-lg-6 col-md-9 margin-30px-bottom xs-margin-15px-bottom wow animate__fadeIn'>
              <div className='feature-box h-100 feature-box-left-icon border-radius-5px bg-white box-shadow-small box-shadow-extra-large-hover overflow-hidden padding-4-rem-all'>
                <div className='feature-box-icon'>
                  <TfiWindow className='icon-medium' fill='#a92a96' />
                </div>
                <div className='feature-box-content last-paragraph-no-margin'>
                  <span className='text-large alt-font font-weight-600 margin-10px-bottom d-block text-extra-dark-gray'>
                    ?????? Q&A
                  </span>
                  <p className='text-large'>
                    ???????????? ????????? ???????????? ????????????????? ?????? ??? ????????? ????????????
                    ???????????????.
                  </p>
                </div>
              </div>
            </div>
            {/* <!-- end feature box item --> */}
            {/* <!-- start feature box item --> */}
            <div
              className='col-12 col-lg-6 col-md-9 margin-30px-bottom xs-margin-15px-bottom wow animate__fadeIn'
              data-wow-delay='0.2s'
            >
              <div className='feature-box h-100 feature-box-left-icon border-radius-5px bg-white box-shadow-small box-shadow-extra-large-hover overflow-hidden padding-4-rem-all'>
                <div className='feature-box-icon'>
                  <SlPeople className='icon-medium' fill='#a92a96' />
                </div>
                <div className='feature-box-content last-paragraph-no-margin'>
                  <span className='text-large alt-font font-weight-600 margin-10px-bottom d-block text-extra-dark-gray'>
                    ????????????
                  </span>
                  <p className='text-large'>
                    ?????? ????????? ?????? ???????????? ????????? ????????? ?????? ?????? ????????????
                    ????????? ???????????????.
                  </p>
                </div>
              </div>
            </div>
            {/* <!-- end feature box item --> */}
            {/* <!-- start feature box item --> */}
            <div
              className='col-12 col-lg-6 col-md-9 md-margin-30px-bottom xs-margin-15px-bottom wow animate__fadeIn'
              data-wow-delay='0.4s'
            >
              <div className='feature-box h-100 feature-box-left-icon border-radius-5px bg-white box-shadow-small box-shadow-extra-large-hover overflow-hidden padding-4-rem-all'>
                <div className='feature-box-icon'>
                  <TbUnlink
                    className='icon-medium'
                    style={{ color: '#a92a96' }}
                  />
                </div>
                <div className='feature-box-content last-paragraph-no-margin'>
                  <span className='text-large alt-font font-weight-600 margin-10px-bottom d-block text-extra-dark-gray'>
                    ????????????
                  </span>
                  <p className='text-large'>
                    SNS, ???????????? ?????? ???????????? ????????? ???????????? ????????? ????????????.
                  </p>
                </div>
              </div>
            </div>
            {/* <!-- end feature box item --> */}
            {/* <!-- start feature box item --> */}
            <div
              className='col-12 col-lg-6 col-md-9 wow animate__fadeIn'
              data-wow-delay='0.6s'
            >
              <div className='feature-box h-100 feature-box-left-icon border-radius-5px bg-white box-shadow-small box-shadow-extra-large-hover overflow-hidden padding-4-rem-all'>
                <div className='feature-box-icon'>
                  <VscNewFolder className='icon-medium' fill='#a92a96' />
                </div>
                <div className='feature-box-content last-paragraph-no-margin'>
                  <span className='text-large alt-font font-weight-600 margin-10px-bottom d-block text-extra-dark-gray'>
                    ?????????
                  </span>
                  <p className='text-large'>
                    ???????????? ???????????? ??????, ?????? ??? ????????? ??????.
                    <br />
                    ?????? ?????? ????????? ???????????? ?????????.
                  </p>
                </div>
              </div>
            </div>
            {/* <!-- end feature box item --> */}
          </div>
        </div>
      </section>

      {/* <!-- 5. footer --> */}
      <footer className='bg-extra-dark-gray padding-two-tb xs-padding-thirteen-tb'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-12 col-lg-3 order-3 order-lg-1 text-center text-lg-start last-paragraph-no-margin md-margin-25px-top'>
              <FooterLogo href='/'>
                <img
                  className='margin-15px-bottom footer_img'
                  src='https://beople.link/thema/beople/amt/ple/ple-custom/img/bpl_new_emblem.png'
                  data-at2x='https://beople.link/thema/beople/amt/ple/ple-custom/img/bpl_new_emblem.png'
                  alt=''
                />
              </FooterLogo>
              <p>
                &copy; Copyright 2022{' '}
                <Link
                  href='/'
                  className='text-decoration-line-bottom text-white-hover text-extra-medium-gray font-weight-500'
                >
                  ??????
                </Link>
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* <!-- 6. scroll to top --> */}
      <a className='scroll-top-arrow' href='javascript:void(0)'>
        <i className='feather icon-feather-arrow-up'></i>
      </a>
    </AboutStyled>
  );
};

export default About;

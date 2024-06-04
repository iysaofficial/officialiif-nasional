import React from 'react';
import styled from 'styled-components';

import '../css/Mekanisme.css';

const MekanismeComps = () => {
  return (
    <Wrapper id="projects">
      <div className="whiteBg">
        <div className="container"></div>
      </div>
      <div className="lightBg">
        <div className="container">
          <Advertising className="flexSpaceCenter">
            <AddLeft>
              <AddLeftInner>
                <ImgWrapper className="flexCenter">
                  <img
                    className="radius8"
                    src="./assets/logo/D.jpeg"
                    alt="add"
                  />
                </ImgWrapper>
              </AddLeftInner>
            </AddLeft>
            <AddRight>
              <h4 className="font15 semiBold"> </h4>
              <h2 className="font40 extraBold">Ketentuan:</h2>
              <p className="font16">
                1. Peserta wajib menyerahkan Full Paper (karya ilmiah
                lengkap) yang terdiri dari bab 1-5, daftar pustaka,
                daftar gambar dan daftar lampiran.
              </p>
              <p className="font16">
                2. Berkas yang masuk akan dinilai oleh dewan juri.
              </p>
              <p className="font16">
                3. Berkas yang masuk akan dinilai oleh dewan juri.
              </p>
              <p className="font16">
                4. Presentasi akan dilaksanakan pada tanggal 28
                Februari 2024.
              </p>
            </AddRight>
          </Advertising>
        </div>
      </div>
    </Wrapper>
  );
};

export default MekanismeComps;

const Wrapper = styled.section`
  width: 100%;
`;

const Advertising = styled.div`
  padding: 100px 0;
  margin: 100px 0;
  position: relative;
  @media (max-width: 1160px) {
    padding: 60px 0 40px 0;
  }
  @media (max-width: 860px) {
    flex-direction: column;
    padding: 0 0 30px 0;
    margin: 80px 0 0px 0;
  }
`;

const AddLeft = styled.div`
  position: relative;
  width: 50%;
  p {
    max-width: 475px;
  }
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
    text-align: center;
    h2 {
      line-height: 3rem;
      margin: 15px 0;
    }
    p {
      margin: 0 auto;
    }
  }
`;
const AddRight = styled.div`
  width: 50%;
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
  }
`;
const AddLeftInner = styled.div`
  width: 100%;
  position: absolute;
  top: -300px;
  left: 0;
  @media (max-width: 1190px) {
    top: -250px;
  }
  @media (max-width: 920px) {
    top: -200px;
  }
  @media (max-width: 860px) {
    order: 1;
    position: relative;
    top: -60px;
    left: 0;
  }
`;
const ImgWrapper = styled.div`
  width: 100%;
  padding: 0 15%;
  img {
    width: 100%;
    height: auto;
  }
  @media (max-width: 400px) {
    padding: 0;
  }
`;

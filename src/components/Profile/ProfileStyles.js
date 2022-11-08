import styled from "styled-components";

export const Background = styled.div`
  background: #0e0e10;
  height: 100vh;
  width: 100%;
`;

export const Logo = styled.img`
  display: flex;
  padding: 20px;
  padding-left: 2.9rem;
  width: 100px;

  @media screen and (max-width: 992px) {
    margin: 0 auto;
    padding: 25px;
  }
`;

export const Title = styled.p`
  color: #fff;
  margin: 0 auto;
  padding-top: 20vh;
  display: flex;
  justify-content: center;
  font-size: 2.8rem;

  @media screen and (max-width: 992px) {
    font-size: 24px;
  }
`;

export const IconContainer = styled.div`
  margin: 2rem auto;
  display: flex;
  justify-content: center;
`;

export const IconWrapper = styled.div`
  &:hover {
    transition-duration: 0.2s;
    transform: scale(1.08);
  }
`;

export const Icon = styled.img`
  cursor: pointer;
  width: 130px;
  border-radius: 5px;
  display: absolute;
  margin: 0 12px 8px 12px;

  @media screen and (max-width: 992px) {
    width: 80px;
  }
`;

export const Text = styled.p`
  color: #eee;
  font-size: 1.1rem;
  margin: 0 auto;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 992px) {
    font-size: 0.8rem;
  }
`;

import styled from "styled-components";

export const NavContainer = styled.div`
  transition-timing-function: ease-in;
  transition: all 0.2s;
`;

export const Logo = styled.img`
  position: fixed;
  top: 20px;
  left: 45px;
  width: 100px;
  cursor: pointer;

  @media screen and (max-width: 992px) {
    left: 20px;
  }
`;

export const Icon = styled.img`
  position: fixed;
  top: 15px;
  right: 20px;
  width: 35px;
  border-radius: 5px;
  cursor: pointer;
`;

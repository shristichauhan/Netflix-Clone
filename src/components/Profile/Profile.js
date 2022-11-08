import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../images/netflix-logo.png";
import {
  Background,
  Logo,
  Title,
  IconContainer,
  Icon,
  Text,
  IconWrapper
} from "./ProfileStyles";
import plus from "../../images/Plus.png";

const Profile = () => {
  let navigate = useNavigate();
  const routeChange1 = () => {
    let path = `/Home`;
    navigate(path);
  };

  const routeChange2 = () => {
    let path = `/Error`;
    navigate(path);
  };

  return (
    <Background>
      <Logo src={logo} alt="Netflix Logo" />
      <Title>Who's Watching?</Title>
      <IconContainer>
        <IconWrapper onClick={routeChange1}>
          <Icon
            src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
            alt="Smile!"
          />
          <Text>Ankit</Text>
        </IconWrapper>
        <IconWrapper onClick={routeChange2}>
          <Icon
            src="https://i.pinimg.com/474x/aa/64/a1/aa64a1ee094b8f798053b51800c622fb.jpg"
            alt="Smile!"
          />
          <Text>Ankit Kumar</Text>
        </IconWrapper>
        <IconWrapper onClick={routeChange2}>
          <Icon src={plus} alt="Plus" />
          <Text>Add Profile</Text>
        </IconWrapper>
      </IconContainer>
    </Background>
  );
};

export default Profile;

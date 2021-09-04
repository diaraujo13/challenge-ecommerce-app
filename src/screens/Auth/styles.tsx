import React from 'react';
import styled from 'styled-components/native';
import { Button, Icon, Link as NativeBaseLink } from 'native-base';
import { AntDesign } from '@expo/vector-icons';

export const Header = styled.View`
  flex: 2;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.Image`
  margin-top: 50px;
`;

export const Main = styled.View`
  flex: 2;
  width: 100%;
`;

export const ForgotPasswordLink = styled(NativeBaseLink)`
  text-decoration: underline;
  align-self: flex-end;
`;

export const Section = styled.View`
  flex: 1;
  align-items: center;
`;

export const RegisterButton = styled(Button).attrs({
  variant: 'outline',
  colorScheme: 'light',
})`
  border: 0px;
  border-radius: 0px;
`;

export const Footer = styled.View`
  justify-content: center;
  align-items: center;
`;

export const BackButton = styled(AntDesign).attrs({
  name: 'arrowleft',
  size: 34,
})`
  width: 10%;
`;

export const BaseIcon = styled(AntDesign).attrs(props => ({
  name: props.name,
}))`
  margin-left: 20px;
  font-size: 20px;
`;

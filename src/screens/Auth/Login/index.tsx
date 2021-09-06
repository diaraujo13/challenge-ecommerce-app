import React, { Component } from 'react';
import {
  ArrowUpIcon,
  Center,
  Button,
  Heading,
  Input,
  Icon,
  Text,
  MoonIcon,
} from 'native-base';
import { View, StyleSheet, Platform } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Container } from 'components';

import {
  BaseIcon,
  Footer,
  ForgotPasswordLink,
  Header,
  Logo,
  Main,
  RegisterButton,
  Section,
} from '~/screens/Auth/styles';

const Login = () => {
  const navigation = useNavigation();

  return (
    <Container style={styles.centered_container}>
      <Header>
        <Logo source={require('assets/images/favicon.png')} />
        <Heading>My Ecommerce</Heading>
        <Text>Entre para continuar</Text>
      </Header>
      <Main>
        <Input
          placeholder="E-mail"
          InputLeftElement={<BaseIcon name="user" />}
        />
        <Input placeholder="Senha" InputLeftElement={<BaseIcon name="key" />} />
        <ForgotPasswordLink> Esqueceu a senha? </ForgotPasswordLink>
      </Main>
      <Section>
        <Button>ENTRAR</Button>
      </Section>
      <Section>
        <RegisterButton onPress={() => navigation.navigate('Register')}>
          <Text>Não possui conta? Cadastre-se</Text>
        </RegisterButton>
      </Section>

      <Footer>
        <Text fontSize="xs">2021 - All rights reserved</Text>
      </Footer>
    </Container>
  );
};

const styles = StyleSheet.create({
  ml8: { marginLeft: 8 },
  centered_container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
});

// make this component available to the app
export default Login;

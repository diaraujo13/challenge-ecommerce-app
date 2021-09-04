// import liraries
import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import {
  ArrowUpIcon,
  Center,
  Button,
  Heading,
  Input,
  Icon,
  Text,
  MoonIcon,
  IconButton,
} from 'native-base';
import {
  BackButton,
  Footer,
  ForgotPasswordLink,
  Header,
  Logo,
  Main,
  RegisterButton,
  Section,
} from 'screens/Auth/styles';
import { AntDesign } from '@expo/vector-icons';

import { Container } from 'components';
import { useNavigation } from '@react-navigation/native';

const Register = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <BackButton onPress={() => navigation.goBack()} />
      <Header>
        <Heading> Registre-se</Heading>
        <Text>Seja bem vindo</Text>
      </Header>
      <Main>
        <Input
          placeholder="E-mail"
          InputLeftElement={
            <Icon style={styles.ml8} size="sm" as={<AntDesign name="user" />} />
          }
        />
        <Input
          placeholder="Senha"
          InputLeftElement={
            <Icon style={styles.ml8} size="sm" as={<AntDesign name="key" />} />
          }
        />
        <Input
          placeholder="Repita a senha"
          InputLeftElement={
            <Icon style={styles.ml8} size="sm" as={<AntDesign name="key" />} />
          }
        />
        <Button style={{ marginTop: 40 }}>CRIAR CONTA</Button>
      </Main>
      <Footer>
        <RegisterButton style={{ marginTop: 40 }}>
          Já possui conta? Entre aqui
        </RegisterButton>
      </Footer>
    </Container>
  );
};

const styles = StyleSheet.create({
  ml8: { marginLeft: 8 },

  container: {
    flex: 1,
    flexDirection: 'column',
  },
});

// make this component available to the app
export default Register;
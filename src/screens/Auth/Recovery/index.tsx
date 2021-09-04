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
  UserIcon,
} from 'screens/Auth/styles';
import { AntDesign } from '@expo/vector-icons';
import { Container } from 'components';
import { useNavigation } from '@react-navigation/native';

const Recovery = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <BackButton onPress={() => navigation.goBack()} />
      <Header>
        <Heading>Recuperar senha</Heading>
        <Text>
          Informe seu e-mail para que seja enviado um link de recuperação
        </Text>
      </Header>
      <Main>
        <Input placeholder="E-mail" InputLeftElement={UserIcon} />
        <Button style={{ marginTop: 40 }}>RECUPERAR CONTA</Button>
      </Main>
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
export default Recovery;

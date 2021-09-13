import React, { Component, useCallback } from 'react';
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
import { useForm } from 'react-hook-form';

import { Container, FormInput } from '~/components';
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

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: 'eve.holt@reqres.in',
      password: 'cityslicka',
    },
  });

  const onSubmit = useCallback(values => {
    console.log(values);
  }, []);

  return (
    <Container style={styles.centered_container}>
      <Header>
        <Logo source={require('~/assets/images/favicon.png')} />
        <Heading>My Ecommerce</Heading>
        <Text>Entre para continuar</Text>
      </Header>
      <Main>
        <FormInput
          placeholder="E-mail"
          name="email"
          control={control}
          InputLeftElement={<BaseIcon name="user" />}
          rules={{
            required: true,
          }}
        />

        <FormInput
          name="password"
          placeholder="Senha"
          secureTextEntry
          control={control}
          InputLeftElement={<BaseIcon name="key" />}
          rules={{ required: true }}
        />
        {/* <ForgotPasswordLink> Esqueceu a senha? </ForgotPasswordLink> */}
      </Main>
      <Section>
        <Button onPress={handleSubmit(onSubmit)}>ENTRAR</Button>
      </Section>
      <Section>
        <RegisterButton onPress={() => navigation.navigate('Register')}>
          Não possui conta? Cadastre-se
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

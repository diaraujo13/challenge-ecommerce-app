import React, { useCallback, useState } from 'react';
import { Button, Heading, Text, View } from 'native-base';
import { StyleSheet, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import { Container, FormInput, Loader } from '~/components';
import {
  BaseIcon,
  Footer,
  Header,
  Logo,
  Main,
  RegisterButton,
  Section,
} from '~/screens/Auth/styles';
import axiosInstance from '~/common/api';
import { authActions } from '~/redux/actions';

const Login = () => {
  const navigation = useNavigation();

  const [loading, toggleLoading] = useState(false);

  const dispatch = useDispatch();

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
    async function login() {
      toggleLoading(true);
      try {
        const result = await axiosInstance.post<{ token: string }>(
          '/login',
          values,
        );

        if (result.status === 200)
          await dispatch(authActions.signin({ token: result.data.token }));
      } catch {
        alert('Ocorreu um erro ao processar sua requisição');
        toggleLoading(false);
      }
    }

    return login();
  }, []);

  if (loading) return <Loader />;

  return (
    <Container>
      <Main>
        <Header>
          <Heading> Ecommerce Now</Heading>
        </Header>
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
        <Section>
          <Button onPress={handleSubmit(onSubmit)}>ENTRAR</Button>
        </Section>
        <Section>
          <RegisterButton onPress={() => navigation.navigate('Register')}>
            Não possui conta? Cadastre-se
          </RegisterButton>
        </Section>
      </Main>

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

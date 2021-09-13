import React, { useCallback } from 'react';
import { StyleSheet } from 'react-native';
import { Button, Heading, Input, Icon, Text } from 'native-base';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';

import { Container, FormInput } from '~/components';
import {
  BackButton,
  Footer,
  Header,
  Main,
  RegisterButton,
} from '~/screens/Auth/styles';

const Register = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {},
  });

  const navigation = useNavigation();

  const onSubmit = useCallback(values => {
    console.log(values);
  }, []);

  return (
    <Container>
      <BackButton onPress={() => navigation.goBack()} />
      <Main>
        <Header>
          <Heading>Registre-se</Heading>
          <Text>Seja bem vindo</Text>
        </Header>
        <FormInput
          placeholder="Nome completo"
          control={control}
          name="name"
          rules={{ required: true }}
          InputLeftElement={
            <Icon style={styles.ml8} size="sm" as={<AntDesign name="user" />} />
          }
        />
        <FormInput
          placeholder="E-mail"
          rules={{ required: true }}
          control={control}
          name="email"
          InputLeftElement={
            <Icon style={styles.ml8} size="sm" as={<AntDesign name="mail" />} />
          }
        />
        <FormInput
          placeholder="Senha"
          control={control}
          rules={{ required: true }}
          name="password"
          secureTextEntry
          InputLeftElement={
            <Icon style={styles.ml8} size="sm" as={<AntDesign name="key" />} />
          }
        />
        <FormInput
          placeholder="Repita a senha"
          control={control}
          name="password_confirmation"
          rules={{ required: true }}
          secureTextEntry
          InputLeftElement={
            <Icon style={styles.ml8} size="sm" as={<AntDesign name="key" />} />
          }
        />

        <Button onPress={handleSubmit(onSubmit)}>CRIAR CONTA</Button>
      </Main>
      <Footer>
        <RegisterButton
          style={{ marginTop: 40 }}
          onPress={() => navigation.goBack()}
        >
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

import { Text, Input } from 'native-base';
import React, { Component } from 'react';
import { useController } from 'react-hook-form';
import { View, StyleSheet } from 'react-native';

const FormInput = ({ name, control, rules, ...props }) => {
  const {
    field,
    fieldState: { error },
  } = useController({
    control,
    defaultValue: '',
    name,
    rules: {
      ...rules,
      required: rules.required ? 'Preencha o campo.' : false,
    },
  });
  return (
    <>
      <Input value={field.value} onChangeText={field.onChange} {...props} />
      {error && (
        <Text color="red.500" fontSize="xs" mb="4">
          {error.message}
        </Text>
      )}
    </>
  );
};

export default FormInput;

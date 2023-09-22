import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  background-color: red;
`;

const Title = styled.Text`
  font-size: 16px;
  color: grey;
`;

const Teste = () => {
  return (
    <Container>
      <Title>Seja bem vindo</Title>
    </Container>
  );
};

export default Teste;

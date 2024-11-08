import React, { useState } from 'react';
import { Box, VStack, Text, Input, Button, Select, ScrollView } from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SintomasScreen = () => {
  const [descricao, setDescricao] = useState('');
  const [intensidade, setIntensidade] = useState('1');

  const handleRegistrarSintoma = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      
      const response = await fetch('http://localhost:3000/api/sintomas', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          descricao,
          intensidade: parseInt(intensidade),
        }),
      });

      if (response.ok) {
        setDescricao('');
        setIntensidade('1');
        alert('Sintoma registrado com sucesso!');
      } else {
        alert('Erro ao registrar sintoma');
      }
    } catch (error) {
      console.error(error);
      alert('Erro ao registrar sintoma');
    }
  };

  return (
    <ScrollView bg="white">
      <Box p={5}>
        <VStack space={4}>
          <Text fontSize="xl" fontWeight="bold">
            Registrar Sintomas
          </Text>

          <Text>Descrição do Sintoma:</Text>
          <Input
            value={descricao}
            onChangeText={setDescricao}
            placeholder="Descreva seus sintomas"
            multiline
            numberOfLines={4}
          />

          <Text>Intensidade:</Text>
          <Select
            selectedValue={intensidade}
            onValueChange={value => setIntensidade(value)}
          >
            <Select.Item label="1 - Muito Leve" value="1" />
            <Select.Item label="2 - Leve" value="2" />
            <Select.Item label="3 - Moderado" value="3" />
            <Select.Item label="4 - Forte" value="4" />
            <Select.Item label="5 - Muito Forte" value="5" />
          </Select>

          <Button
            onPress={handleRegistrarSintoma}
            colorScheme="blue"
            isDisabled={!descricao}
          >
            Registrar Sintoma
          </Button>
        </VStack>
      </Box>
    </ScrollView>
  );
};

export default SintomasScreen; 
import React from 'react';
import { Box, VStack, Text, ScrollView, Icon, HStack } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';

const RecomendacoesScreen: React.FC = () => {
  return (
    <Box flex={1} bg="#F5F5F5" safeArea>
      <ScrollView contentContainerStyle={{ flexGrow: 1, padding: 16 }}>
        <VStack space={5} alignItems="center" width="100%">
          <Box bg="white" width="100%" borderRadius="lg" shadow={2} p={4}>
            <HStack alignItems="center" space={3}>
              <Icon as={MaterialIcons} name="medical-services" size="lg" color="blue.500" />
              <Text fontSize="lg" fontWeight="bold" color="blue.700">
                Recomendações Odontológicas
              </Text>
            </HStack>
            <Text mt={4} fontSize="md" color="gray.700">
              1. Escove os dentes pelo menos três vezes ao dia, especialmente após as refeições.
            </Text>
            <Text mt={2} fontSize="md" color="gray.700">
              2. Use fio dental diariamente para remover resíduos entre os dentes.
            </Text>
            <Text mt={2} fontSize="md" color="gray.700">
              3. Evite o consumo excessivo de açúcar e alimentos ácidos para prevenir cáries.
            </Text>
            <Text mt={2} fontSize="md" color="gray.700">
              4. Faça visitas regulares ao dentista para check-ups e limpezas profissionais.
            </Text>
            <Text mt={2} fontSize="md" color="gray.700">
              5. Utilize enxaguante bucal para uma higiene completa e prevenção de mau hálito.
            </Text>
          </Box>
        </VStack>
      </ScrollView>
    </Box>
  );
};

export default RecomendacoesScreen;

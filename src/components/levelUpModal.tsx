import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'

import { Box, Button, Flex, Text, useColorModeValue } from '@chakra-ui/react'

export function LevelUpModal() {
  const { level, closeLevelUpModal } = useContext(ChallengesContext)

  const backgroundOverlayMode = useColorModeValue('rgba(242, 243, 245, 0.9)', 'rgba(0, 2, 4, 0.8)')
  const backgroundColorMode = useColorModeValue('gray.100', 'gray.600')
  const textColorHeaderMode = useColorModeValue('blue.600', 'blue.600')
  const textColorCongratulation = useColorModeValue('blue.900', 'white')
  const textColorMode = useColorModeValue('gray.900', 'white')

  return (
    <Flex
      background={backgroundOverlayMode}
      position="fixed"
      top="0"
      bottom="0"
      left="0"
      right="0"

      justifyContent="center"
      alignItems="center"
    >
      <Box as='div'
        background={backgroundColorMode}
        width="100%"
        maxWidth="400px"
        padding="2rem 3rem"
        borderRadius="5px"
        boxShadow="0 0 60px rgba(0, 0, 0, 0.28)"
        textAlign="center"
        position="relative"
      >
        <Box as='header' 
          fontSize="8.75rem"
          fontWeight="600"
          color={textColorHeaderMode}
          background="url('/icons/levelUp.svg') no-repeat center"
        >
          {level}
        </Box>
        <Text as="strong"
          fontSize="2.25rem"
          color={textColorCongratulation}
        >
          Parabéns
        </Text>
        <Text as="p"
          fontSize="1.25rem"
          color={textColorMode}
          marginTop="0.25rem"
        >
          Você alcançou um novo level.
        </Text>
        <Button onClick={closeLevelUpModal}
          position="absolute"
          right="0.5rem"
          top="0.5rem"
          border="0"
          fontSize="0"
        >
          <img src="/icons/close.svg" alt="Fechar modal" />
        </Button>
      </Box>
    </Flex>
  )
}
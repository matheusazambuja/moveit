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
      position="fixed"
      top="0"
      bottom="0"
      right="0"
      left="0"

      background={backgroundOverlayMode}

      alignItems="center"
      justifyContent="center"
    >
      <Box as='div'
        position="relative"
        width="100%"
        maxWidth="400px"

        background={backgroundColorMode}
        borderRadius="5px"
        boxShadow="0 0 60px rgba(0, 0, 0, 0.28)"
        padding="2rem 3rem"

        textAlign="center"
      >
        <Box as='header' 
          background="url('/icons/levelUp.svg') no-repeat center"
          color={textColorHeaderMode}
          fontSize="8.75rem"
          fontWeight="600"
        >
          {level}
        </Box>
        <Text as="strong"
          color={textColorCongratulation}
          fontSize="2.25rem"
        >
          Parabéns
        </Text>
        <Text as="p"
          color={textColorMode}
          fontSize="1.25rem"
          marginTop="0.25rem"
        >
          Você alcançou um novo level.
        </Text>
        <Button onClick={closeLevelUpModal}
          position="absolute"
          top="0.5rem"
          right="0.5rem"

          border="0"
          fontSize="0"
        >
          <img src="/icons/close.svg" alt="Fechar modal" />
        </Button>
      </Box>
    </Flex>
  )
}
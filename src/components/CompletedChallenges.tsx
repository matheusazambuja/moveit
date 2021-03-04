import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'

import { Box, Flex, useColorModeValue } from '@chakra-ui/react'

export function CompletedChallenges() {
    const { challengesCompleted } = useContext(ChallengesContext)

    const textColorMode = useColorModeValue('blue.800', 'gray.300')
    const borderColorMode = useColorModeValue('blue.800', 'white')

    return (
        <Flex as="div"
            alignItems="center"
            justifyContent="space-between"

            margin="3.5rem 0"
            paddingBottom="1rem"
            borderBottom={`1px solid ${borderColorMode}`}

            fontWeight="500"
        >
            <Box as="span"
                fontSize="1.25rem"
                color={textColorMode}
            >
                Desafios completos
            </Box>
            <Box as="span"
                fontSize="1.25rem"
                color={textColorMode}
            >
                { challengesCompleted }
            </Box>
        </Flex>
    )
}
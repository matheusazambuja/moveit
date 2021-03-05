import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'

import { Box, Flex, useColorModeValue } from '@chakra-ui/react'

export function CompletedChallenges() {
    const { challengesCompleted } = useContext(ChallengesContext)

    const borderColorMode = useColorModeValue('blue.800', 'white')
    const textColorMode = useColorModeValue('blue.800', 'gray.300')

    return (
        <Flex as="div"
            alignItems="center"
            justifyContent="space-between"

            borderBottom={`1px solid ${borderColorMode}`}
            margin="3.5rem 0"
            paddingBottom="1rem"

            fontWeight="500"
        >
            <Box as="span" color={textColorMode} fontSize="1.25rem" >
                Desafios completos
            </Box>
            <Box as="span" color={textColorMode} fontSize="1.25rem" >
                { challengesCompleted }
            </Box>
        </Flex>
    )
}
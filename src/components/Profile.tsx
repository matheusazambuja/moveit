import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { background, Box, Button, Flex, Img, Text, useColorModeValue,  } from '@chakra-ui/react'

import { useColorMode } from '@chakra-ui/react'
import { useSession } from 'next-auth/client'

export function Profile() {
    const { level } = useContext(ChallengesContext)
    const [ session ] = useSession()

    const { toggleColorMode } = useColorMode()

    const iconColorMode = useColorModeValue('moon', 'sun')
    const levelColorMode = useColorModeValue('blue.800', 'gray.300')
    const nameColorMode = useColorModeValue('blue.800', 'white')

    return (
        <Flex 
            alignItems="center"
            transition="background 200ms"
        >
            <Img src={`${session.user.image}`} alt={session.user.name}
                width="5.5rem" 
                height="5.5rem"

                borderRadius="50%" />
            <Box margin="0 1.5rem">
                <Text 
                    width="max-content"

                    color={nameColorMode}
                    fontSize="1.5rem"
                    fontWeight="600"
                >
                    {session.user.name}
                </Text>
                <Flex color={levelColorMode} fontSize="1rem" marginTop="0.5rem">
                    <Img src="icons/level.svg" alt="Level" marginRight="0.5rem" />
                    Level {level}
                </Flex>
            </Box>
            <Button onClick={toggleColorMode}
                marginLeft="0.3rem"
                marginBottom="1.4rem"

                transition="all 200ms"
                _hover={{ 
                    filter: "brightness(0.8)",
                    cursor: "pointer"
                }}
            >
                <FontAwesomeIcon icon={iconColorMode} />
            </Button>
        </Flex>
    )
}
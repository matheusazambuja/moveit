import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { background, Box, Button, Flex, Img, Text, useColorModeValue,  } from '@chakra-ui/react'

import { useColorMode } from '@chakra-ui/react'
import { useSession } from 'next-auth/client'

export function Profile() {
    const { level } = useContext(ChallengesContext)
    const [ session ] = useSession()

    const { colorMode, toggleColorMode } = useColorMode()

    const iconColorMode = useColorModeValue('moon', 'sun')
    const nameColorMode = useColorModeValue('blue.800', 'white')
    const levelColorMode = useColorModeValue('blue.800', 'gray.300')

    return (
        <Flex 
            alignItems="center"
            transition="background 200ms"
        >
            <Img
                src={`${session.user.image}`}
                alt={session.user.name}
                width="5.5rem" height="5.5rem"
                borderRadius="50%" />
            <Box margin="0 1.5rem">
                <Text 
                    fontSize="1.5rem"
                    fontWeight="600"
                    color={nameColorMode}
                    width="max-content"
                >
                    {session.user.name}
                </Text>
                <Flex fontSize="1rem" color={levelColorMode} marginTop="0.5rem">
                    <Img 
                        src="icons/level.svg" alt="Level"
                        marginRight="0.5rem" />
                    Level {level}
                </Flex>
            </Box>
            <Button 
                marginLeft="0.3rem"
                marginBottom="1.4rem"
                transition="all 200ms"
                _hover={{ 
                    filter: "brightness(0.8)",
                    cursor: "pointer"
                }}
                onClick={toggleColorMode}
            >
                <FontAwesomeIcon
                    icon={iconColorMode}
                />
            </Button>
        </Flex>
    )
}
import { useContext } from 'react'
import { Box, Flex, Grid, Img, Text, useColorModeValue } from '@chakra-ui/react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import { CountdownContext } from '../contexts/CountdownContext'

export function ChallengeBox () {
    const textColorNewChallengeMode = useColorModeValue('blue.800', 'white')

    const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengesContext)
    const { resetCountdown } = useContext(CountdownContext)

    function handleChallengeSucceeded() {
        completeChallenge()
        resetCountdown()
    }

    function handleChallengeFailed() {
        resetChallenge()
        resetCountdown()
    }

    const styleButtonActive = {
        height: "3rem",

        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        border: "0",
        borderRadius: "5px",
        color: "white",
        fontSize: "1rem",
        fontWeight: "600",

        transition: "filter 200ms"
    }

    return (
        <Flex as="div"
            height="100%"

            direction="column"
            alignItems="center"
            justifyContent="center"
            
            borderRadius="5px"
            boxShadow="0 0 60px rgba(0, 0, 0, 0.05)"
            padding="1.5rem 2rem"

            textAlign="center"
        >
            { activeChallenge ? (
                <Flex as="div"
                    direction="column"

                    height="100%"
                >
                    <Box as="header"
                        borderBottom="1px solid gray.330"
                        color="blue.600"
                        fontWeight="600"
                        fontSize="1.25rem"
                        padding="0 2rem 1.5rem"
                    >
                        Ganhe { activeChallenge.amount } xp
                    </Box>

                    <Flex as="main"
                        flex="1"
                        direction="column"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <Img src={`icons/${ activeChallenge.type }.svg`} />
                        <Text as="strong"
                            color={textColorNewChallengeMode}
                            fontSize="2rem"
                            fontWeight="600"
                            margin="1.5rem 0 1rem"
                        >
                            Novo desafio
                        </Text>
                        <Text as="p" lineHeight="1.5" >
                            { activeChallenge.description }
                        </Text>
                    </Flex>

                    <Grid as="footer" templateColumns="repeat(2, 1fr)" gap="1rem" >
                        <Box as='button' onClick={handleChallengeFailed}
                            {...styleButtonActive}
                            background="red.600"
                            _hover={{
                                filter: 'brightness(0.8)'
                            }}
                        >
                            Falhei
                        </Box>
                        <Box as='button' onClick={handleChallengeSucceeded}
                            {...styleButtonActive}
                            background="green.400"
                            _hover={{
                                filter: 'brightness(0.8)'
                            }}
                        >
                            Completei
                        </Box>
                    </Grid>
                </Flex>
            ) : (
                <Flex as="div"
                    direction="column"
                    alignItems="center"
                >
                    <Text as="strong"
                        fontSize="1.5rem"
                        fontWeight="500"
                        lineHeight="1.4"
                    >
                        Finalize um ciclo para receber um desafio
                    </Text>
                    <Text as="p"
                        display="flex"

                        flexDirection="column"
                        alignItems="center"

                        lineHeight="1.4"
                        maxWidth="70%"
                        marginTop="3rem"
                    >
                        <Img src="icons/level-up.svg" alt="Level Up" marginBottom="2rem" />
                        Avance de level completando desafios
                    </Text>
                </Flex>
            )}
        </Flex>
    )
}
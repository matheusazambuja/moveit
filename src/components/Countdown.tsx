import { Box, Button, Flex, Text, useColorModeValue } from '@chakra-ui/react'
import { useContext } from 'react'
import { CountdownContext } from '../contexts/CountdownContext'

export function Countdown() {

    const countdownTextColor = useColorModeValue('blue.600', 'blue.600')
    const countdownBorderSize = useColorModeValue('1px', '0px')

    const {
        minutes,
        seconds,
        hasFinished,
        isActive,
        startCountdown,
        resetCountdown
    } = useContext(CountdownContext)

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')

    const styleDivs: React.CSSProperties = {
        flex: "1",

        alignItems: "center",
        justifyContent: "space-evenly",

        backgroundColor: "0 0 60px rgba(0, 0, 0, 0.05)",
        borderRadius: "5px",
        fontSize: "8.5rem",
        textAlign: "center"
    }

    const styleButton = {
        width: "100%",
        height: "5rem",

        marginTop: "2rem",

        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        border: "0",
        borderRadius: "5px",
        background: "blue.600",
        color: "white",
        fontSize: "1.25rem",
        fontWeight: "bold",

        transition: "background 0.2s"
    }

    return (
        <>
            <Flex as="div"
                alignItems="center"
                fontFamily="Rajdhani"
                fontWeight="400"
                color="blue.800"
            >
                <Flex as="div" style={styleDivs} transition="all 200ms" >
                    <Text as="span" 
                        flex="1"

                        borderRight={`${countdownBorderSize} solid gray.100`}
                        fontSize="7rem"
                        color={countdownTextColor}

                        transition="all 200ms"
                    >
                        {minuteLeft}
                    </Text>
                    <Text as="span" 
                        flex="1"

                        borderLeft={`${countdownBorderSize} solid gray.100`}
                        fontSize="7rem"
                        color={countdownTextColor}

                        transition="all 200ms"
                    >
                        {minuteRight}
                    </Text>
                </Flex>
                <Text as="span"
                    fontSize="7rem"
                    color={countdownTextColor}

                    transition="all 200ms"
                >
                    :
                </Text>
                <Flex as="div" style={styleDivs}>
                    <Text as="span" 
                        flex="1"

                        borderRight={`${countdownBorderSize} solid gray.100`}
                        color={countdownTextColor}
                        fontSize="7rem"

                        transition="all 200ms"
                    >
                        {secondLeft}
                    </Text>
                    <Text as="span" 
                        flex="1"

                        borderLeft={`${countdownBorderSize} solid gray.100`}
                        color={countdownTextColor}
                        fontSize="7rem"

                        transition="all 200ms"
                    >
                        {secondRight}
                    </Text>
                </Flex>
            </Flex>
            { hasFinished ? (
                <Box as='button' disabled
                    {...styleButton}
                    _disabled={{
                        background: "gray.900",
                        color: "white",
                        cursor: "not-allowed"
                    }}
                >
                    Ciclo encerrado
                </Box>
            ) : (
                <>
                    { isActive ? (
                        <Box as='button' onClick={resetCountdown}
                            {...styleButton}
                            background="white"
                            color="gray.900"
                            _hover={{
                                background: "red.600",
                                color: "white"
                            }}
                        >
                            Abandonar ciclo
                        </Box>
                        ) : (
                            <Box as='button' onClick={startCountdown}
                                {...styleButton}
                                _hover={{ background: "blue.620" }}
                            >
                                Iniciar um ciclo
                            </Box>
                        )
                    }
                </>
            )}
        </>
    )
}
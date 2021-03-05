import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';

import { Box, ModalHeader, Text, transform, useColorModeValue } from '@chakra-ui/react';

export function ExperienceBar() {
    const { currentExperience, experienceToNextLevel } = useContext(ChallengesContext)

    const percentToNextLevel = Math.round(currentExperience * 100) / experienceToNextLevel

    const zeroNextLevelExpTextColorMode = useColorModeValue("blue.800", "gray.300")

    return (
        <Box as="div"
            display="flex"

            alignItems="center"
            marginBottom="1rem"
        >
            <Text as="span" 
                color={zeroNextLevelExpTextColorMode}
                fontSize="1rem"
            >
                0 px
            </Text>
            <Box as="div"
                flex="1"
                height="4px"

                background='gray.330'
                borderRadius="4px"
                margin="0 1.5rem"

                position="relative"
            >
                <Box as="div"
                    position="absolute"
                    height="4px"
                    width={ `${percentToNextLevel}%` }

                    background='green.400'
                    borderRadius="4px"
                >
                </Box>
                <Text as="span"
                    position="absolute"
                    left={ `${percentToNextLevel}%` }
                    top="12px"

                    color="green.400"
                    fontWeight='bold'
                    transform="translateX(-50%)"
                >
                    {currentExperience} xp
                </Text>
            </Box>
            <Text as="span"
                display="flex"

                alignItems="flex-end"
                color={zeroNextLevelExpTextColorMode}
            >
                { experienceToNextLevel } xp
            </Text>
        </Box>
    );
}
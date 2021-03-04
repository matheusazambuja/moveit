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
                fontSize="1rem"
                color={zeroNextLevelExpTextColorMode}
            >0 px</Text>
            <Box as="div"
                flex="1"
                height="4px"
                borderRadius="4px"
                background='gray.330'
                margin="0 1.5rem"
                position="relative"
            >
                <Box as="div"
                    position="absolute"
                    width={ `${percentToNextLevel}%` }
                    height="4px"
                    borderRadius="4px"
                    background='green.400'
                >
                </Box>
                <Text as="span"
                    position="absolute"
                    top="12px"
                    transform="translateX(-50%)"
                    left={ `${percentToNextLevel}%` }
                    fontWeight='bold'
                    color="green.400"
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
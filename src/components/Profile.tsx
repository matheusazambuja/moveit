import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from '../styles/components/Profile.module.css'

import { useColorMode } from '@chakra-ui/react'

export function Profile() {
    const { level } = useContext(ChallengesContext)

    const { colorMode, toggleColorMode } = useColorMode()

    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/matheusazambuja.png" alt="Matheus Azambuja" />
            <div className={styles.profileContainerInfo}>
                <strong>Matheus Azambuja</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level {level}
                </p>
            </div>
            <FontAwesomeIcon
                icon="sun"
                onClick={toggleColorMode}
            />
        </div>
    )
}
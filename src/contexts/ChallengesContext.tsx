import { createContext, useState, ReactNode, useEffect } from 'react'
import Cookies from 'js-cookie'
import challenges from '../../challenges.json'
import { LevelUpModal } from '../components/levelUpModal'

interface Challenge {
    type: 'body' | 'eye'
    description: string
    amount: number
}

interface ChallengesContextData {
    level: number
    currentExperience: number
    challengesCompleted: number
    activeChallenge: Challenge
    experienceToNextLevel: number
    levelUp: () => void
    startNewChallenge: () => void
    resetChallenge: () => void
    completeChallenge: () => void
    closeLevelUpModal: () => void
}

interface ChallengesProviderProps {
    children: ReactNode
    level: number
    currentExperience: number
    challengesCompleted: number
}

export const ChallengesContext = createContext({} as ChallengesContextData)

export function ChallengesProvider({
    children,
    ...rest
}: ChallengesProviderProps) {
    const [level, setLevel] = useState(rest.level ?? 1)
    const [currentExperience, setCurrentExperience] = useState(rest.currentExperience ?? 0)
    const [challengesCompleted, setChallengesCompleted] = useState(rest.challengesCompleted ?? 0)

    const [activeChallenge, setActiveChallenge] = useState(null)

    const experienceToNextLevel = Math.pow((level + 1) * 4, 2)
    const [isLevelUpModalOpen, setIsLevelUpModalOpen] = useState(false)

    useEffect(() => {
        Notification.requestPermission()
    }, [])

    useEffect(() => {
        Cookies.set('level', level.toString())
        Cookies.set('currentExperience', currentExperience.toString())
        Cookies.set('challengesCompleted', challengesCompleted.toString())
    }, [level, currentExperience, challengesCompleted])

    function levelUp() {
        setLevel(level + 1)
        setIsLevelUpModalOpen(true)
    }

    function closeLevelUpModal() {
        setIsLevelUpModalOpen(false)
    }

    function startNewChallenge() {
        const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
        const challenge = challenges[randomChallengeIndex]

        setActiveChallenge(challenge)

        new Audio('/notification.mp3').play()

        if (Notification.permission === 'granted') {
            const typeChallenges = [
                {type: 'body', text: 'corporal! 💪🏿'},
                {type: 'eye', text: 'visual 👁'}
            ]

            const textChallengeSelected = typeChallenges.find(c => c.type === challenge.type).text
            
            new Notification(`Novo desafio ${textChallengeSelected}`, {
                body: `Faça e ganhe ${challenge.amount}xp!`,
                icon: 'favicon.png'
            })
        }
    }

    function completeChallenge () {
        if (!activeChallenge) {
            return
        }

        const { amount } = activeChallenge

        let finalExperience = currentExperience + amount

        if (finalExperience >= experienceToNextLevel) {
            finalExperience = finalExperience - experienceToNextLevel
            levelUp()
        }

        setCurrentExperience(finalExperience)
        setActiveChallenge(null)
        setChallengesCompleted(challengesCompleted + 1)
    }

    function resetChallenge() {
        setActiveChallenge(null)
    }

    return (
        <ChallengesContext.Provider 
            value={{
                level,
                currentExperience,
                challengesCompleted,
                activeChallenge,
                experienceToNextLevel,
                levelUp,
                startNewChallenge,
                resetChallenge,
                completeChallenge,
                closeLevelUpModal
            }}
        >
                {children}

                { isLevelUpModalOpen && <LevelUpModal /> }
        </ChallengesContext.Provider>
    )
}
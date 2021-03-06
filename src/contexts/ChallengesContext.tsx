import { createContext, ReactNode, useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import challenges from '../../challenges.json'
import { LevelUpModal } from '../component/LevelUpModal'

interface Challenge {
  type: 'body' | 'eye'
  description: string
  amount: number
}

interface ChallengesContextData {
  level: number
  currentExperience: number
  challengesCompleted: number
  experienceToNextLevel: number
  activeChallenge: Challenge
  levelUp: () => void
  startNewChallenge: () => void
  resetChallenge: () => void
  completeChallenge: () => void
  closeModal: () => void
}

interface ChallengesProviderProps {
  children: ReactNode
  level: number
  currentExperience: number
  challengesCompleted: number
}

export const ChallengesContext = createContext({} as ChallengesContextData)

export function ChallengesProvider({ children, level: initialLevel, currentExperience: initialCurrentExperience, challengesCompleted: initialChallengesCompleted }: ChallengesProviderProps) {
  const [level, setLevel] = useState(initialLevel ?? 1)
  const [currentExperience, setCurrentExperience] = useState(initialCurrentExperience ?? 0)
  const [challengesCompleted, setChallengesCompleted] = useState(initialChallengesCompleted ?? 0)
  const [activeChallenge, setActiveChallenge] = useState(null)
  const [isLevelUpModalOpen, setIsLevelUpModalOpen ] = useState(false)

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2)

  // To execute only once after component is mounted
  useEffect(() => {
    Notification.requestPermission()
  }, [])

  useEffect(() => {
    Cookies.set('level', String(level))
    Cookies.set('currentExperience', String(currentExperience))
    Cookies.set('challengesCompleted', String(challengesCompleted))
  }, [level, currentExperience, challengesCompleted])

  function levelUp() {
    setLevel(level + 1)
    setIsLevelUpModalOpen(true)
  }

  function startNewChallenge() {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
    const challenge = challenges[randomChallengeIndex]
    setActiveChallenge(challenge)

    new Audio('/notification.mp3').play()

    if (Notification.permission === 'granted') {
      new Notification('Novo desafio!', {
        body: `Valendo ${challenge.amount}`
      })
    }
  }

  function resetChallenge() {
    setActiveChallenge(null)
  }

  function completeChallenge() {
    if(!activeChallenge) return

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

  function closeModal() {
    setIsLevelUpModalOpen(false)
  }

  return (
    <ChallengesContext.Provider value={{
      level,
      currentExperience,
      challengesCompleted,
      activeChallenge,
      experienceToNextLevel,
      levelUp,
      startNewChallenge,
      resetChallenge,
      completeChallenge,
      closeModal
    }}>
      {children}

      { isLevelUpModalOpen && <LevelUpModal /> }
    </ChallengesContext.Provider>
  )
}
import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/Profile.module.css'

export function Profile() {
  const { level } = useContext(ChallengesContext)
  const userName = 'Alyson Basilio'

  return (
    <div className={styles.profileContainer}>
      <img src="https://avatars.githubusercontent.com/u/2593231?s=88&u=f17a5b19ee7954bc701b3c4d1311a1dfdde0735a&v=4" alt={userName} />
      <div>
        <strong>{userName}</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </div>
  )
}
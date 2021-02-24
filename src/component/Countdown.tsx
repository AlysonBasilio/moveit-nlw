import { useState, useEffect } from 'react'
import styles from '../styles/components/Countdown.module.css'

interface CountdownProps {
  initialTimeInSeconds: number;
}

let countdownTimeout: NodeJS.Timeout

export function Countdown({ initialTimeInSeconds }: CountdownProps) {
  const [timeInSeconds, setTimeInSeconds] = useState(initialTimeInSeconds)
  const [isActive, setIsActive] = useState(false)
  const [hasFinished, setHasFinished] = useState(false)

  const minutes = Math.floor(timeInSeconds / 60)
  const seconds = timeInSeconds % 60

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')

  function startCountdown() {
    setIsActive(true)
    setHasFinished(false)
  }

  function resetCountdown() {
    clearTimeout(countdownTimeout)
    setIsActive(false)
    setTimeInSeconds(initialTimeInSeconds)
  }

  useEffect(() => {
    if (isActive && timeInSeconds > 0) {
      countdownTimeout = setTimeout(() => {
        setTimeInSeconds(timeInSeconds - 1)
      }, 1000)
    } else if (isActive && timeInSeconds === 0) {
      setHasFinished(true)
      setIsActive(false)
    }
  }, [isActive, timeInSeconds])

  return (
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>
      { hasFinished ? (
        <button
          disabled
          className={styles.countdownButton}
        >
          Ciclo encerrado
        </button>
      ) : (
        isActive ? (
          <button
            type="button"
            className={`${styles.countdownButton} ${styles.countdownActiveButton}`}
            onClick={resetCountdown}
          >
            Abandonar ciclo
          </button>
        ) : (
          <button
            type="button"
            className={styles.countdownButton}
            onClick={startCountdown}
          >
            Iniciar um ciclo
          </button>
        )
      )}
    </div>
  )
}
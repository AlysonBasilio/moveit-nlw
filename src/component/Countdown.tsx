import { useState, useEffect } from 'react'
import styles from '../styles/components/Countdown.module.css'

interface CountdownProps {
  initialTimeInSeconds: number;
}

export function Countdown({ initialTimeInSeconds }: CountdownProps) {
  const [timeInSeconds, setTimeInSeconds] = useState(initialTimeInSeconds)
  const [active, setActive] = useState(false)

  const minutes = Math.floor(timeInSeconds / 60)
  const seconds = timeInSeconds % 60

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')

  function startCountdown() {
    setActive(true)
  }

  useEffect(() => {
    if (active && timeInSeconds > 0) {
      setTimeout(() => {
        setTimeInSeconds(timeInSeconds - 1)
      }, 1000)
    }
  }, [active, timeInSeconds])

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
      <button type="button" className={styles.countdownButton} onClick={startCountdown}>
        Iniciar um ciclo
      </button>
    </div>
  )
}
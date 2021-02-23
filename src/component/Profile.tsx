import styles from '../styles/components/Profile.module.css'

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://avatars.githubusercontent.com/u/2593231?s=88&u=f17a5b19ee7954bc701b3c4d1311a1dfdde0735a&v=4" alt="Alyson Basilio" />
      <div>
        <strong>Alyson Basilio</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level 1
        </p>
      </div>
    </div>
  )
}
import { CompletedChallenges } from "../component/CompletedChallenges"
import { ExperienceBar } from "../component/ExperienceBar"
import { Profile } from '../component/Profile'

import styles from '../styles/pages/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <ExperienceBar minXp={0} maxXp={600} currentXp={500} />

      <section>
        <div>
          <Profile />
          <CompletedChallenges />
        </div>
        <div></div>
      </section>
    </div>
  )
}

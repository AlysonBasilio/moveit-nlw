import Head from 'next/head'
import { CompletedChallenges } from "../component/CompletedChallenges"
import { Countdown } from "../component/Countdown"
import { ExperienceBar } from "../component/ExperienceBar"
import { Profile } from '../component/Profile'

import styles from '../styles/pages/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Início | move.it</title>
      </Head>

      <ExperienceBar minXp={0} maxXp={600} currentXp={500} />

      <section>
        <div>
          <Profile />
          <CompletedChallenges />
          <Countdown />
        </div>
        <div></div>
      </section>
    </div>
  )
}

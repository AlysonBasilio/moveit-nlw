import Head from 'next/head'
import { ChallengeBox } from '../component/ChallengeBox'
import { CompletedChallenges } from "../component/CompletedChallenges"
import { Countdown } from "../component/Countdown"
import { ExperienceBar } from "../component/ExperienceBar"
import { Profile } from '../component/Profile'
import { CountdownProvider } from '../contexts/CountdownContext'

import styles from '../styles/pages/Home.module.css'
import { ChallengesProvider } from '../contexts/ChallengesContext'

export default function Home() {
  return (
    <ChallengesProvider>
      <div className={styles.container}>
        <Head>
          <title>Início | move.it</title>
        </Head>

        <ExperienceBar />

        <CountdownProvider>
          <section>
            <div>
              <Profile />
              <CompletedChallenges />
              <Countdown />
            </div>
            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountdownProvider>
      </div>
    </ChallengesProvider>
  )
}
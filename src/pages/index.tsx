import Head from 'next/head'
import { ExperienceBar } from "../component/ExperienceBar"

import styles from '../styles/pages/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <ExperienceBar minXp={0} maxXp={600} currentXp={500} />
    </div>
  )
}

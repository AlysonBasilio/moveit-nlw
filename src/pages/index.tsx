import Head from 'next/head'
import { ExperienceBar } from "../component/ExperienceBar"

export default function Home() {
  return (
    <div className="container">
      <ExperienceBar minXp={0} maxXp={600} currentXp={500} />
    </div>
  )
}

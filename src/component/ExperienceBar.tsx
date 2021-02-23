import styles from '../styles/components/ExperienceBar.module.css'

interface ExperienceBarProps {
  minXp: number;
  maxXp: number;
  currentXp: number;
}

export function ExperienceBar({ minXp, maxXp, currentXp }: ExperienceBarProps) {
  const xpProportionPercentage = ((currentXp - minXp)/(maxXp - minXp)) * 100

  return (
    <header className={styles.experienceBar}>
      <span>{minXp} xp</span>
      <div>
        <div style={{ width: `${xpProportionPercentage}%` }}>
          <span className={styles.currentExperience} style={{ left: `${xpProportionPercentage}%` }}>
            {currentXp} xp
          </span>
        </div>
      </div>
      <span>{maxXp} xp</span>
    </header>
  );
}
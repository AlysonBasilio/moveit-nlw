interface ExperienceBarProps {
  minXp: number;
  maxXp: number;
  currentXp: number;
}

export function ExperienceBar({ minXp, maxXp, currentXp }: ExperienceBarProps) {
  const xpProportionPercentage = ((currentXp - minXp)/(maxXp - minXp)) * 100

  return (
    <header className="experience-bar">
      <span>{minXp} xp</span>
      <div>
        <div style={{ width: `${xpProportionPercentage}%` }}>
          <span className="current-experience" style={{ left: `${xpProportionPercentage}%` }}>
            {currentXp} xp
          </span>
        </div>
      </div>
      <span>{maxXp} xp</span>
    </header>
  );
}
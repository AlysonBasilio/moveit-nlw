import { ExperienceBar } from './component/ExperienceBar';
import './styles/global.css'

function App() {
  return (
    <div className="container">
      <ExperienceBar minXp={0} maxXp={600} currentXp={500} />
    </div>
  );
}

export default App;

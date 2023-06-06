import Card from './components/Card'
import Button from './components/Button'
import darkSoulsRemaster from './assets/JxilRmpXkS3CCXUnr0gZTBOlqso3plaw.jpg'
import eldenRing from './assets/elden-ring.webp'
import darkSouls2 from './assets/dark-souls-2.jpg'
import darkSouls3 from './assets/dark-souls-3.jpg'

function App() {

  return (
    <div>
      <Card title="DARK SOULS™: REMASTERED" cardImg={darkSoulsRemaster} text={"Mas então, fez-se o fogo. Experimente novamente o jogo aclamado pela crítica e definidor de gênero que foi o início de tudo. Belamente remasterizado, volte a Lordran com detalhes em alta definição a 60fps"} />
      <Card title="DARK SOULS™ 2 Scholar Of The First Sin" cardImg={darkSouls2} text={"DARK SOULS™ II: Scholar of the First Sin leva a renomada obscuridade e jogabilidade viciante da franquia a um novo nível. Junte-se à jornada sombria e vivencie encontros com inimigos devastadores, perigos diabólicos e o desafio implacável."} />
      <Card title="DARK SOULS™ 3" cardImg={darkSouls3} text={"DARK SOULS™ continua a ultrapassar seus próprios limites em um ambicioso novo capítulo da série que definiu um gênero e que é aclamada pela crítica. Prepare-se para abraçar a escuridão!"} />
      <Card title="Elden Ring" cardImg={eldenRing} text={"O NOVO RPG DE AÇÃO E FANTASIA. Levante-se, Maculado, e seja guiado pela graça para portar o poder do Anel Prístino e se tornar um Lorde Prístino nas Terras Intermédias."} />
      <Button />
    </div>
  )
}

export default App

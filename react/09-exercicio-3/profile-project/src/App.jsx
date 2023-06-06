import Card from './components/Card'
import avatarImg from '../public/martinez.jpg'
import './index.css'

export default function App() {
  return (
    <div className="app">
      <Card avatar={avatarImg}
        name="Filipe"
        bio="Front End Dev"
        email="flp.campos94@gmail.com"
        phone={"31 99422-1594"}
        githubUrl="https://github.com/wantedxp"
        linkedinUrl={"https://www.linkedin.com/in/filipe-campos-524a82256/"}
        instagramUrl={"https://www.instagram.com/flp.campos/"} />
    </div>
  )
}
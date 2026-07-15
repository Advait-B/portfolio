import { Board } from './components/Board/Board'
import { Chess } from './components/Chess/Chess'
import { Contact } from './components/Contact/Contact'
import { Education } from './components/Education/Education'
import { Hero } from './components/Hero/Hero'
import { Nav } from './components/Nav/Nav'
import { Now } from './components/Now/Now'
import { Skills } from './components/Skills/Skills'
import { Travel } from './components/Travel/Travel'
import s from './App.module.css'

function App() {
  return (
    <div className={s.shell}>
      <Nav />
      <main>
        <Hero />
        <Skills />
        <Board />
        <Education />
        <Now />
        <Travel />
        <Chess />
        <Contact />
      </main>
    </div>
  )
}

export default App

import { Header } from './components/Header'
import { NewTask } from './components/NewTask'
import { Tasks } from './components/Tasks'

import style from './App.module.css'

export function App() {
  return (
    <div>
      <Header/>

      <article className={style.contentTask}>
        <NewTask/>
        <Tasks/>
      </article>

    </div>
  )
}
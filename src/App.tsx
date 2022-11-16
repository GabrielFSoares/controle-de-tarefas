import { Header } from './components/Header'
import { TaskList } from './components/TaskList'

import style from './App.module.css'

export function App() {
  return (
    <div>
      <Header/>

      <article className={style.contentTask}>
        <TaskList/>
      </article>

    </div>
  )
}
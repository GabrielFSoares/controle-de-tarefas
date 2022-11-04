import { PlusCircle } from "phosphor-react"

import style from "./NewTask.module.css"

export function NewTask() {
    return (
        <section className={style.contentNewTask}>
            <input type="text" placeholder="Adicione uma nova tarefa" />
            <button type="submit">
                Criar
                <PlusCircle size={20}/>
            </button>  
        </section>
    )
}
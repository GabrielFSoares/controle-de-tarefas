import { PlusCircle } from "phosphor-react"

import style from "./NewTask.module.scss"

export function NewTask() {
    return (
        <form className={style.contentNewTask}>
            <input type="text" placeholder="Adicione uma nova tarefa" />
            <button type="submit">
                 Criar
                <PlusCircle size={20}/>
            </button>  
        </form>
    )
}
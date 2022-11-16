import { PlusCircle } from "phosphor-react"
import { ChangeEvent, FormEvent, useState } from "react"

import style from "./NewTask.module.scss"


interface propNewTask {
    onNewTask: (task: string) => void
}

export function NewTask({onNewTask}: propNewTask) {

    const [taskText, setTaskText] = useState('')

    function createNewTask(event: FormEvent) {
        event.preventDefault()

        if(taskText !== '') {
            onNewTask(taskText)
        }
    }

    function changeTaskText(event: ChangeEvent<HTMLInputElement>) {
        setTaskText(event.target.value)
    }

    return (
        <form onSubmit={createNewTask} className={style.contentNewTask}>
            <input 
                type="text" 
                placeholder="Adicione uma nova tarefa" 
                value={taskText}
                onChange={changeTaskText}
            />
            <button type="submit">
                 Criar
                <PlusCircle size={20}/>
            </button>  
        </form>
    )
}
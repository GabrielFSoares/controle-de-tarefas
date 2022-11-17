import style from './Task.module.scss'
import { Trash } from 'phosphor-react'

interface TaskProps {
    id: string
    content: string
    numberCompleteTasks: number
    onDeleteTask: (idTask: string, completedOrNot: boolean) => void
    onCompletedTasks: (numberCompleteTasks: number) => void
}

export function Task({id, content, numberCompleteTasks, onDeleteTask, onCompletedTasks}: TaskProps) {

    function handleChangeIconChecked() {
        const divTask = document.getElementById(id)

        const divIcon = divTask?.children.item(0)
        const p = divTask?.children.item(1)

        if(divIcon?.classList.contains(style.iconUnchecked)) {
            divIcon?.classList.remove(style.iconUnchecked)
            divIcon?.classList.add(style.iconCheck)
            p?.classList.remove(style.pUnchecked)
            p?.classList.add(style.pChecked)

            onCompletedTasks(numberCompleteTasks + 1)
        } else {
            divIcon?.classList.remove(style.iconCheck)
            divIcon?.classList.add(style.iconUnchecked)
            p?.classList.remove(style.pChecked)
            p?.classList.add(style.pUnchecked)

            onCompletedTasks(numberCompleteTasks - 1)
        }
    }

    function handleDeleteTask() {
        const divTask = document.getElementById(id)
        const divIcon = divTask?.children.item(0)

        let completedOrNot = true

        if(divIcon?.classList.contains(style.iconUnchecked)) {
            completedOrNot = false
        }

        onDeleteTask(id, completedOrNot)
    }

    return (
        <div id={id} className={style.contentTask}>
            <div className={style.iconUnchecked} onClick={handleChangeIconChecked} />
            <p className={style.pUnchecked}>{content}</p>
            <span className={style.trashIcon} onClick={handleDeleteTask}><Trash size={20} /></span>
        </div>
    )
}
import style from './TaskList.module.scss'
import Clipboard from '../assets/Clipboard.svg'

import { Task } from './Task'
import { useState } from 'react'
import { NewTask } from './NewTask'

interface ContentTask {
    id: string
    content: string
}

export function TaskList() {

    const [taskArray, setTask] = useState ([{
        id: '0', content: ''
    }])

    const [createdTasks, setCreateTask] = useState(0)

    const [completedTasks, setCompletedTasks] = useState(0)

    const textCompletedTasks = completedTasks === 0 ? 0 : `${completedTasks} de ${createdTasks}`

    function deleteTask(taskToDelete: string, completedOrNot: boolean) {
        const taskArrayWithoutDeleteOne = taskArray.filter(task => {
            return task.id !== taskToDelete
        })

        if(completedOrNot) {
            setCompletedTasks(completedTasks - 1)
        }

        setTask(taskArrayWithoutDeleteOne)
        setCreateTask(createdTasks - 1)

        if(taskArray.length === 1) {
            changeContentTask(false)
        }
    }

    function newTask(task: string) {
        let id = taskArray.length

        taskArray.map((i) => {
            if(id <= parseInt(i.id)) {
                id = parseInt(i.id) + 1
            }
        })

        const newTask: ContentTask = {
            id: id.toString(), content: task
        }  

        if(id === 0) {
            setTask([...taskArray, newTask])
            changeContentTask(true)
        } else if (taskArray[0].content === '') {

            taskArray[0].id = id.toString()
            taskArray[0].content = task

            changeContentTask(true)
        } else {
            setTask([...taskArray, newTask])
        }

        setCreateTask(createdTasks + 1)

    }

    function setNumberCompletedTasks(numberCompleteTasks: number) {
        setCompletedTasks(numberCompleteTasks)
    }

    function changeContentTask(content: boolean) {

        const withoutTask = document.getElementById('withoutTask')
        const taskList = document.getElementById('taskList')

        if(content) {
            withoutTask?.classList.remove(style.withoutTask)
            withoutTask?.classList.add(style.withoutTaskHidden)

            taskList?.classList.remove(style.taskList)
            taskList?.classList.add(style.taskListVisible)
        } else {
            withoutTask?.classList.remove(style.withoutTaskHidden)
            withoutTask?.classList.add(style.withoutTask)

            taskList?.classList.remove(style.taskListVisible)
            taskList?.classList.add(style.taskList)
        }
    }

	return (
        <div>
            <NewTask 
                onNewTask= {newTask}
            />

            <div>
                <header className={style.headerTasks}>
                    <div>
                        <p id={style.pCreate}>Tarefas Criadas</p>
                        <span>{createdTasks}</span>
                    </div>
                    <div>
                        <p id={style.pConclude}>Concluídas</p>
                        <span>{textCompletedTasks}</span>
                    </div>
                </header> 

                <div id='withoutTask' className={style.withoutTask}>
                    <img src={Clipboard} alt="Clipboard"/>
                    <p id={style.pText1}>Você ainda não tem tarefas cadastradas</p>
                    <p id={style.pText2}>Crie tarefas e organize seus itens a fazer</p>
                </div>

                <div id="taskList" className={style.taskList}>
                    {taskArray.map(task => {
                        return (
                            <Task 
                                key={task.id}
                                id={task.id}
                                content={task.content} 
                                numberCompleteTasks={completedTasks}
                                onDeleteTask={deleteTask} 
                                onCompletedTasks={setNumberCompletedTasks}
                            />
                        )
                    })}   
                </div>
            </div>
        </div>
	)
}
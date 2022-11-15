import style from './TaskList.module.scss'
import Clipboard from '../assets/Clipboard.svg'
import { Task } from './Task'
import { useState } from 'react'

export function TaskList() {

    const [taskArray, setTask] = useState ([
        {id: '1', content: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.'},
        {id: '2', content: 'Kkkkkkk'}
    ])

    function deleteTask(taskToDelete: string) {
        const taskArrayWithoutDeleteOne = taskArray.filter(task => {
            return task.id !== taskToDelete
        })

        setTask(taskArrayWithoutDeleteOne)
    }

    function changeIcon(taskToChange: HTMLElement) {
        console.log(taskToChange)
    }

	return (
        <div>
    		<header className={style.headerTasks}>
                <div>
                    <p id={style.pCreate}>Tarefas Criadas</p>
                    <span>0</span>
                </div>
                <div>
                    <p id={style.pConclude}>Concluídas</p>
                    <span>0</span>
               	</div>
            </header> 

            <div className={style.withoutTask}>
                <img src={Clipboard} alt="Clipboard"/>
                <p id={style.pText1}>Você ainda não tem tarefas cadastradas</p>
                <p id={style.pText2}>Crie tarefas e organize seus itens a fazer</p>
            </div>

            <div className={style.taskList}>
                {taskArray.map(task => {
                    return (
                        <Task 
                            key={task.id}
                            id={task.id}
                            content={task.content} 
                            onDeleteTask={deleteTask}  
                            onChangeIcon={changeIcon}  
                        />
                    )
                })}   
            </div>
        </div>
	)
}
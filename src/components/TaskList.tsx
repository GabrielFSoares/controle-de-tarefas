import style from './TaskList.module.scss'
import Clipboard from '../assets/Clipboard.svg'
import { Task } from './Task'

export function TaskList() {
    
    function handleChangeIconChecked() {
        
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
                <Task />
            </div>
        </div>
	)
}
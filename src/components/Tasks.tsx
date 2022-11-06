import style from './Tasks.module.scss'
import Clipboard from '../assets/Clipboard.svg'
import Unchecked from '../assets/Unchecked.svg'
import UncheckedHover from '../assets/UncheckedHover.svg'

export function Tasks() {
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

            <div className={style.contentTask}>
                <div className={style.withoutTask}>
                    <img src={Clipboard} alt="Clipboard"/>
                    <p id={style.pText1}>Você ainda não tem tarefas cadastradas</p>
                    <p id={style.pText2}>Crie tarefas e organize seus itens a fazer</p>
                </div>

                <div className={style.taskList}>
                    <div>
                        <div className={style.divCheck}>
                            <img src={Unchecked} className={style.iconCheck} id="unchecked" />
                            <img src={UncheckedHover} className={style.iconCheck} id="uncheckedHover" />
                        </div>
        
                        <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
                    </div>
                </div>
            </div>
        </div>
	)
}
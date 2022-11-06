import style from './TaskList.module.scss'
import Clipboard from '../assets/Clipboard.svg'

import { Trash } from 'phosphor-react'

export function TaskList() {

    function handleChangeIconChecked() {
        const divIcon = document.getElementById(style.iconUnchecked)
        const p = document.getElementById(style.pUnchecked)

        if(divIcon) {
            divIcon?.classList.remove(style.iconUnchecked)
            divIcon?.classList.add(style.iconCheck)
            divIcon?.setAttribute('id', style.iconCheck)
            p?.setAttribute('id', style.pChecked)
        } else {
            const divIcon = document.getElementById(style.iconCheck)
            const p = document.getElementById(style.pChecked)

            divIcon?.classList.remove(style.iconCheck)
            divIcon?.classList.add(style.iconUnchecked)
            divIcon?.setAttribute('id', style.iconUnchecked)
            p?.setAttribute('id', style.pUnchecked)
        }
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
                <div>
                    <div id={style.iconUnchecked} onClick={handleChangeIconChecked} />
                    <p id={style.pUnchecked}>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
                    <span className={style.trashIcon}><Trash size={20} /></span>
                </div>
            </div>
        </div>
	)
}
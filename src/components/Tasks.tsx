import style from './Tasks.module.css'

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
                <div>
                    
                </div>
            </div>
        </div>
	)
}
import style from "./NewTask.module.css"

export function NewTask() {
    return (
        <article className={style.article}>
            <input type="text" placeholder="Adicione uma nova tarefa" />
            <button type="submit">Criar</button>
        </article>
    )
}
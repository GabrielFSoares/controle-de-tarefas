import style from './Task.module.scss'
import { Trash } from 'phosphor-react'

interface Task {
    id: number
    content: string
}

export function Task() {

    const taskArray = {
        id: 1,
        content: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.'
    }

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
            <div id={style.iconUnchecked} onClick={handleChangeIconChecked} />
            <p id={style.pUnchecked}>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
            <span className={style.trashIcon}><Trash size={20} /></span>
        </div>
    )
}
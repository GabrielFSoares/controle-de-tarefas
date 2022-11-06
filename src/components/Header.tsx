import style from './Header.module.scss'

import logo from '../assets/Logo.svg'

export function Header() {
    return (
        <header className={style.header}>
            <img src={logo} alt="Logotipo"></img>
        </header>
    )
}